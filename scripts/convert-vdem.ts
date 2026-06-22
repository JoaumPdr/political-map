import fs from "fs";
import path from "path";
import https from "https";
import AdmZip from "adm-zip";
import readline from "readline";

// Importa os dados de backup do dataset existente
import { staticCountriesData, COUNTRY_MAPPING } from "../lib/data/staticDataset.bak";

const VDEM_ZIP_URL = "https://v-dem.net/media/datasets/V-Dem-CY-Core-v16_csv.zip";
const TMP_DIR = path.join(process.cwd(), ".tmp");
const ZIP_PATH = path.join(TMP_DIR, "vdem_v16.zip");
const EXTRACT_DIR = path.join(TMP_DIR, "vdem_extracted");
const OUTPUT_PATH = path.join(process.cwd(), "lib/data/staticDataset.ts");
const CACHE_PATH = path.join(TMP_DIR, "translation_cache.json");

// Mapeamento de códigos de 3 letras do V-Dem para ISO-2 de 2 letras
const VDEM_TO_ALPHA2: Record<string, string> = {
  SUN: "RU", // União Soviética -> Rússia
  RUS: "RU", // Rússia
  DEU: "DE", // Alemanha
  DDR: "DE", // Alemanha Oriental -> Alemanha
  DDR_W: "DE",
  VNM: "VN", // Vietnã
  VDR: "VN", // Vietnã do Norte -> Vietnã
  CSK: "CZ", // Tchecoslováquia -> República Tcheca
  CZE: "CZ", // República Tcheca
  SVK: "SK", // Eslováquia
};

// Inverte o COUNTRY_MAPPING padrão para adicionar os códigos modernos
for (const [alpha2, info] of Object.entries(COUNTRY_MAPPING)) {
  if (!VDEM_TO_ALPHA2[info.alpha3]) {
    VDEM_TO_ALPHA2[info.alpha3] = alpha2;
  }
}

// Inicializa a cache de tradução
let translationCache: Record<string, string> = {};
if (fs.existsSync(CACHE_PATH)) {
  try {
    translationCache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch (e) {
    console.warn("Falha ao ler cache de tradução:", e);
  }
}

// Salva a cache de tradução
function saveTranslationCache() {
  if (!fs.existsSync(TMP_DIR)) {
    fs.mkdirSync(TMP_DIR, { recursive: true });
  }
  fs.writeFileSync(CACHE_PATH, JSON.stringify(translationCache, null, 2), "utf8");
}

// Traduz o texto de PT para EN via Google Translate API pública
async function translateText(text: string): Promise<string> {
  if (!text || text.trim() === "") return "";
  
  const trimmed = text.trim();
  if (translationCache[trimmed]) {
    return translationCache[trimmed];
  }

  // Traduções manuais rápidas de termos comuns para evitar requests desnecessários ou rate-limiting
  const manualTranslations: Record<string, string> = {
    "Fim da Segunda Guerra Mundial": "End of World War II",
    "Guerra Fria": "Cold War",
    "Ditadura Militar": "Military Dictatorship",
    "Constituição Cidadã": "Citizen Constitution",
    "Golpe Militar": "Military Coup",
    "Pandemia de COVID-19": "COVID-19 Pandemic",
    "Queda do Muro de Berlim": "Fall of the Berlin Wall",
    "Reunificação Alemã": "German Reunification",
  };

  for (const [pt, en] of Object.entries(manualTranslations)) {
    if (trimmed === pt) {
      translationCache[trimmed] = en;
      saveTranslationCache();
      return en;
    }
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=en&dt=t&q=${encodeURIComponent(trimmed)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const translation = data[0].map((item: any) => item[0]).join("");
    translationCache[trimmed] = translation;
    saveTranslationCache();
    // Pequeno delay para evitar rate limiting do Google Translate
    await new Promise((resolve) => setTimeout(resolve, 50));
    return translation;
  } catch (error) {
    console.warn(`Erro ao traduzir: "${trimmed}". Usando fallback.`, error);
    return trimmed; // Fallback para o texto original se der erro
  }
}

// Faz o download do dataset do V-Dem se não estiver em cache
async function downloadFile(url: string, dest: string): Promise<void> {
  if (fs.existsSync(dest)) {
    console.log(`Arquivo já existe em ${dest}. Pulando download.`);
    return;
  }

  console.log(`Iniciando download de ${url}...`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const file = fs.createWriteStream(dest);

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Falha no download. Código de status: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log("Download concluído com sucesso.");
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// Coleta e pré-traduz todas as strings de forma paralela em lotes para evitar lentidão e rate limiting
async function preTranslateAllTexts() {
  const stringsToTranslate = new Set<string>();

  // Coleta todas as strings do dataset de backup
  for (const country of staticCountriesData as any[]) {
    for (const period of country.periods) {
      const desc = period.description;
      if (desc && typeof desc === "string") {
        stringsToTranslate.add(desc.trim());
      }
      const events = period.key_events;
      if (events && Array.isArray(events)) {
        for (const event of events) {
          if (typeof event === "string") {
            stringsToTranslate.add(event.trim());
          }
        }
      }
    }
  }

  // Filtra as strings que já estão no cache ou possuem traduções manuais
  const manualKeys = [
    "Fim da Segunda Guerra Mundial", "Guerra Fria", "Ditadura Militar",
    "Constituição Cidadã", "Golpe Militar", "Pandemia de COVID-19",
    "Queda do Muro de Berlim", "Reunificação Alemã"
  ];
  
  const pendingStrings = Array.from(stringsToTranslate).filter(
    (str) => !translationCache[str] && !manualKeys.includes(str)
  );

  if (pendingStrings.length === 0) {
    console.log("Todas as strings já estão traduzidas no cache. Pulando pré-tradução.");
    return;
  }

  console.log(`Iniciando pré-tradução de ${pendingStrings.length} strings em lotes paralelos...`);

  const BATCH_SIZE = 35;
  for (let i = 0; i < pendingStrings.length; i += BATCH_SIZE) {
    const batch = pendingStrings.slice(i, i + BATCH_SIZE);
    console.log(`Processando lote de tradução ${i / BATCH_SIZE + 1} de ${Math.ceil(pendingStrings.length / BATCH_SIZE)}...`);
    
    await Promise.all(
      batch.map(async (str) => {
        try {
          const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=en&dt=t&q=${encodeURIComponent(str)}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          const translation = data[0].map((item: any) => item[0]).join("");
          translationCache[str] = translation;
        } catch (e) {
          // Fallback silencioso em caso de rate limit
          translationCache[str] = str;
        }
      })
    );
    
    // Salva a cache após cada lote
    saveTranslationCache();
    // Pequeno delay entre os lotes para respeitar a API
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log("Pré-tradução concluída e cache salvo.");
}

// Executa o pipeline completo
async function run() {
  try {
    // Inicializa a pré-tradução paralela de todas as descrições/marcos
    await preTranslateAllTexts();

    // 1. Download
    await downloadFile(VDEM_ZIP_URL, ZIP_PATH);

    // 2. Extração
    console.log("Extraindo arquivo ZIP...");
    const zip = new AdmZip(ZIP_PATH);
    zip.extractAllTo(EXTRACT_DIR, true);
    console.log(`Extraído para ${EXTRACT_DIR}`);

    // Encontra o CSV descompactado
    const files = fs.readdirSync(EXTRACT_DIR);
    let csvFileName = files.find((f) => f.endsWith(".csv"));
    if (!csvFileName) {
      // Procura recursivamente
      const subdirs = files.filter((f) => fs.statSync(path.join(EXTRACT_DIR, f)).isDirectory());
      for (const subdir of subdirs) {
        const subFiles = fs.readdirSync(path.join(EXTRACT_DIR, subdir));
        const subCsv = subFiles.find((f) => f.endsWith(".csv"));
        if (subCsv) {
          csvFileName = path.join(subdir, subCsv);
          break;
        }
      }
    }

    if (!csvFileName) {
      throw new Error("Não foi possível encontrar nenhum arquivo CSV no ZIP extraído.");
    }

    const csvPath = path.join(EXTRACT_DIR, csvFileName);
    console.log(`Arquivo CSV encontrado em: ${csvPath}`);

    // 3. Leitura e Parseamento do CSV
    console.log("Lendo e parseando dados do V-Dem...");
    const vdemDatabase = new Map<string, Map<number, { polyarchy: number; libdem: number; regime: number }>>();

    const fileStream = fs.createReadStream(csvPath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let headers: string[] = [];
    let countryTextIdIdx = -1;
    let yearIdx = -1;
    let polyarchyIdx = -1;
    let libdemIdx = -1;
    let regimeIdx = -1;
    let lineCount = 0;

    for await (const line of rl) {
      // Remove a primeira coluna ("country_name") que pode conter aspas e vírgulas de forma complexa
      let rest = line;
      if (line.startsWith('"')) {
        const nextQuote = line.indexOf('"', 1);
        if (nextQuote !== -1) {
          rest = line.substring(nextQuote + 2); // Pula a aspa e a vírgula subsequente
        }
      }

      if (lineCount === 0) {
        // Parseia o cabeçalho
        headers = rest.split(",").map(h => h.replace(/"/g, "").trim());
        countryTextIdIdx = headers.indexOf("country_text_id");
        yearIdx = headers.indexOf("year");
        polyarchyIdx = headers.indexOf("v2x_polyarchy");
        libdemIdx = headers.indexOf("v2x_libdem");
        regimeIdx = headers.indexOf("v2x_regime");

        if (countryTextIdIdx === -1 || yearIdx === -1 || polyarchyIdx === -1 || regimeIdx === -1) {
          throw new Error("Colunas obrigatórias do V-Dem não encontradas no CSV.");
        }
        lineCount++;
        continue;
      }

      // Agora o split por vírgula é extremamente rápido e seguro
      const cols = rest.split(",");
      if (cols.length < headers.length) {
        continue; // Linha incompleta
      }

      const country3 = cols[countryTextIdIdx]?.replace(/"/g, "").trim();
      const year = parseInt(cols[yearIdx]?.replace(/"/g, ""), 10);
      const polyarchy = parseFloat(cols[polyarchyIdx]?.replace(/"/g, ""));
      const libdem = parseFloat(cols[libdemIdx]?.replace(/"/g, "")) || polyarchy; // fallback se nulo
      const regime = parseInt(cols[regimeIdx]?.replace(/"/g, ""), 10);

      if (!country3 || isNaN(year) || isNaN(polyarchy) || isNaN(regime)) {
        continue;
      }

      // Verifica se mapeia para algum de nossos países
      const alpha2 = VDEM_TO_ALPHA2[country3];
      if (alpha2) {
        if (!vdemDatabase.has(alpha2)) {
          vdemDatabase.set(alpha2, new Map());
        }
        vdemDatabase.get(alpha2)!.set(year, { polyarchy, libdem, regime });
      }

      lineCount++;
      if (lineCount % 10000 === 0) {
        console.log(`Processadas ${lineCount} linhas de dados...`);
      }
    }

    console.log(`Dados do V-Dem importados em memória. Total de linhas lidas: ${lineCount}`);

    // 4. Mapeamento e Calibração dos Períodos Políticos
    console.log("Normalizando espectro, determinando regimes e gerando descrições bilíngues...");
    const enrichedCountriesData = [];

    for (const country of staticCountriesData) {
      const alpha2 = country.code.toUpperCase();
      const countryVdemData = vdemDatabase.get(alpha2);

      console.log(`Processando país: ${country.name} (${alpha2})...`);

      const newPeriods = [];

      for (let idx = 0; idx < country.periods.length; idx++) {
        const period = country.periods[idx];
        const isLastPeriod = idx === country.periods.length - 1;

        let yearStart = period.year_start;
        if (idx > 0) {
          yearStart = newPeriods[idx - 1].year_end;
        }

        const yearEnd = period.year_end || 2024; // Mapeia null para o ano final de 2024 para cálculo

        // Coleta todos os registros do V-Dem para os anos do período
        let totalPolyarchy = 0;
        let totalLibdem = 0;
        let totalRegime = 0;
        let dataCount = 0;

        for (let y = yearStart; y <= yearEnd; y++) {
          const yearData = countryVdemData?.get(y);
          if (yearData) {
            totalPolyarchy += yearData.polyarchy;
            totalLibdem += yearData.libdem;
            totalRegime += yearData.regime;
            dataCount++;
          }
        }

        // Se tiver dados no V-Dem para o período, calcula a média e calibra
        let spectrum = period.spectrum;
        let regimeType = period.regime_type;

        if (dataCount > 0) {
          const avgPolyarchy = totalPolyarchy / dataCount;
          const avgLibdem = totalLibdem / dataCount;
          const avgRegime = Math.round(totalRegime / dataCount);

          // Calibração do espectro com v2x_libdem e v2x_polyarchy
          const score = avgPolyarchy * 0.7 + avgLibdem * 0.3;

          // Se score > 0.6: regime eleitoralmente democrático -> pende para negativo (democracy)
          // Se score < 0.4: regime autoritário -> pende para positivo (authoritarian)
          // O espectro original do dataset também ajuda a manter o lado ideológico (esquerda/direita)
          // do líder. Nós usamos o sinal ideológico do período original para decidir se inclinamos para a esquerda (negativo)
          // ou direita (positivo), enquanto a magnitude é calibrada pela pontuação real do V-Dem!
          const isOriginallyLeft = period.spectrum < 0;

          if (score > 0.6) {
            // Democrático: valor negativo
            // Mapeia linearmente de 0.6 a 1.0 para -1.0 a -10.0 (se esquerda original) ou -1.0 a -4.0 (se centro/direita original)
            const magnitude = 1 + ((score - 0.6) / 0.4) * 9;
            spectrum = isOriginallyLeft ? -magnitude : -magnitude * 0.4;
          } else if (score < 0.4) {
            // Autoritário: valor positivo
            // Mapeia linearmente de 0.0 a 0.4 para 10.0 a 1.0 (se direita original) ou 1.0 a 6.0 (se esquerda original)
            const magnitude = 1 + ((0.4 - score) / 0.4) * 9;
            spectrum = isOriginallyLeft ? magnitude * 0.4 : magnitude;
          } else {
            // Transicional / Híbrido: próximo de zero
            const magnitude = ((score - 0.4) / 0.2) * 2 - 1; // faixa -1 a +1
            spectrum = isOriginallyLeft ? magnitude : -magnitude;
          }

          // Arredonda para 1 casa decimal e clampa
          spectrum = Math.max(-10, Math.min(10, Math.round(spectrum * 10) / 10));

          // Mapeamento do regime_type baseado em v2x_regime
          if (avgRegime === 0) {
            regimeType = "authoritarian";
          } else if (avgRegime === 1) {
            regimeType = "hybrid";
          } else if (avgRegime === 2 || avgRegime === 3) {
            // 2 = electoral democracy, 3 = liberal democracy
            regimeType = "democracy";
          }
        }

        // Traduz as descrições e os marcos históricos de forma dinâmica e automatizada
        const descPt = (period.description as any) as string;
        const descEn = await translateText(descPt);

        const eventsPt = ((period.key_events as any) || []) as string[];
        const eventsEn = [];
        for (const ev of eventsPt) {
          eventsEn.push(await translateText(ev));
        }

        newPeriods.push({
          year_start: yearStart,
          year_end: isLastPeriod ? null : period.year_end,
          leader: period.leader,
          party: period.party,
          party_full_name: period.party_full_name,
          spectrum,
          regime_type: regimeType,
          description: {
            pt: descPt,
            en: descEn,
          },
          key_events: eventsPt.length > 0 ? {
            pt: eventsPt,
            en: eventsEn,
          } : undefined,
        });
      }

      enrichedCountriesData.push({
        code: country.code,
        name: country.name,
        region: country.region,
        periods: newPeriods,
      });
    }

    // 5. Geração do Arquivo de Saída final TypeScript
    console.log(`Escrevendo arquivo de saída em ${OUTPUT_PATH}...`);
    
    // Converte o COUNTRY_MAPPING e GEOGRAPHY_TO_COUNTRY_CODE para string formatada
    const countryMappingStr = JSON.stringify(COUNTRY_MAPPING, null, 2);
    const geographyToCountryCodeStr = JSON.stringify(
      staticCountriesData.reduce((acc: any, cur) => {
        // Preserva o mapeamento geográfico atual
        return acc;
      }, {}), // preenchido abaixo do backup
      null, 2
    );

    // Carrega o conteúdo geográfico puro e os mapeamentos direto do arquivo de backup
    const backupContent = fs.readFileSync(path.join(process.cwd(), "lib/data/staticDataset.bak.ts"), "utf8");
    
    // Extrai a seção do COUNTRY_MAPPING do backup
    const mappingStartIdx = backupContent.indexOf("export const COUNTRY_MAPPING");
    const mappingEndIdx = backupContent.indexOf("export const staticCountriesData");
    const mappingAndGeoSection = backupContent.substring(mappingStartIdx, mappingEndIdx);

    const fileContent = `/**
 * @file staticDataset.ts
 * @description Base de dados históricos estática contendo a cronologia de períodos políticos de
 * dezenas de nações ao redor do globo cobrindo o período pós-Segunda Guerra Mundial (1945-2024).
 * Este arquivo foi gerado automaticamente pelo script convert-vdem.ts integrando os dados reais do V-Dem.
 * 
 * Depende de:
 * - Types: {@link CountryData}, {@link PoliticalPeriod} de "./types.ts"
 */

import { CountryData } from "./types";

${mappingAndGeoSection}
export const staticCountriesData: CountryData[] = ${JSON.stringify(enrichedCountriesData, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, fileContent, "utf8");
    console.log("Processo concluído com sucesso absoluto!");

  } catch (error) {
    console.error("Erro na execução do pipeline V-Dem:", error);
    process.exit(1);
  }
}

run();
