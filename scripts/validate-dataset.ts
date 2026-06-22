import fs from "fs";
import path from "path";

// Mapeamento de códigos válidos para verificação
const VALID_ISO_ALPHA2 = new Set([
  "US", "RU", "CN", "BR", "DE", "FR", "GB", "AR", "VE", "HU",
  "TR", "IN", "IL", "IR", "ZA", "JP", "KR", "IT", "ES", "SE",
  "MX", "CL", "CU", "CO", "PE", "UY", "CA", "PT", "NO", "PL",
  "CZ", "GR", "NL", "BE", "UA", "KP", "PK", "ID", "VN", "EG",
  "NG", "ET", "AU", "NZ", "SK"
]);

async function validate() {
  const datasetPath = path.join(process.cwd(), "lib/data/staticDataset.ts");
  
  if (!fs.existsSync(datasetPath)) {
    console.error(`Erro: Arquivo do dataset não encontrado em ${datasetPath}`);
    process.exit(1);
  }

  console.log("Iniciando validação do dataset...");

  // Importa dinamicamente para evitar conflitos de tipos pré-build
  const { staticCountriesData } = await import("../lib/data/staticDataset");

  let errorCount = 0;

  if (!Array.isArray(staticCountriesData)) {
    console.error("Erro crítico: staticCountriesData não é um Array válido.");
    process.exit(1);
  }

  staticCountriesData.forEach((country: any, countryIdx: number) => {
    const code = country.code;
    const name = country.name;

    // 1. Validação de código ISO
    if (!code || typeof code !== "string") {
      console.error(`Erro [País #${countryIdx}]: Código do país ausente ou inválido.`);
      errorCount++;
      return;
    }

    const upperCode = code.toUpperCase();
    if (!VALID_ISO_ALPHA2.has(upperCode)) {
      console.error(`Erro [${code}]: Código ISO-2 "${code}" não pertence à lista de códigos válidos do mapa.`);
      errorCount++;
    }

    if (!Array.isArray(country.periods) || country.periods.length === 0) {
      console.error(`Erro [${code}]: Lista de períodos políticos vazia ou inválida.`);
      errorCount++;
      return;
    }

    // 2. Validação cronológica e de integridade dos períodos
    country.periods.forEach((period: any, idx: number) => {
      const pId = `${code} - Período #${idx} (${period.leader || "Sem Líder"})`;

      // Validação de campos de string
      if (!period.leader || period.leader.trim() === "") {
        console.error(`Erro [${pId}]: Nome do líder vazio.`);
        errorCount++;
      }

      if (!period.party || period.party.trim() === "") {
        console.error(`Erro [${pId}]: Sigla do partido vazia.`);
        errorCount++;
      }

      // Validação do espectro
      if (typeof period.spectrum !== "number" || isNaN(period.spectrum)) {
        console.error(`Erro [${pId}]: Valor do espectro político inválido.`);
        errorCount++;
      } else if (period.spectrum < -10 || period.spectrum > 10) {
        console.error(`Erro [${pId}]: Valor do espectro ${period.spectrum} fora da faixa [-10, 10].`);
        errorCount++;
      }

      // Validação do tipo de regime
      const validRegimes = ["democracy", "authoritarian", "hybrid", "monarchy", "transitional"];
      if (!validRegimes.includes(period.regime_type)) {
        console.error(`Erro [${pId}]: Tipo de regime político "${period.regime_type}" inválido.`);
        errorCount++;
      }

      // Validação de tradução da descrição
      if (!period.description || typeof period.description !== "object") {
        console.error(`Erro [${pId}]: Descrição ausente ou não estruturada.`);
        errorCount++;
      } else {
        if (!period.description.pt || period.description.pt.trim() === "") {
          console.error(`Erro [${pId}]: Descrição em Português (pt) vazia.`);
          errorCount++;
        }
        if (!period.description.en || period.description.en.trim() === "") {
          console.error(`Erro [${pId}]: Descrição em Inglês (en) vazia.`);
          errorCount++;
        }
      }

      // Validação de tradução dos marcos históricos (key_events)
      if (period.key_events) {
        if (typeof period.key_events !== "object") {
          console.error(`Erro [${pId}]: key_events não estruturado.`);
          errorCount++;
        } else {
          if (!Array.isArray(period.key_events.pt) || period.key_events.pt.length === 0) {
            console.error(`Erro [${pId}]: key_events em Português (pt) vazio ou inválido.`);
            errorCount++;
          }
          if (!Array.isArray(period.key_events.en) || period.key_events.en.length === 0) {
            console.error(`Erro [${pId}]: key_events em Inglês (en) vazio ou inválido.`);
            errorCount++;
          }
          if (period.key_events.pt.length !== period.key_events.en.length) {
            console.error(`Erro [${pId}]: Inconsistência no número de marcos históricos (pt: ${period.key_events.pt.length}, en: ${period.key_events.en.length}).`);
            errorCount++;
          }
        }
      }

      // Validação de gaps cronológicos
      if (idx < country.periods.length - 1) {
        const nextPeriod = country.periods[idx + 1];
        if (period.year_end !== nextPeriod.year_start) {
          console.error(`Erro [${code}]: Brecha temporal entre Período #${idx} (fim: ${period.year_end}) e Período #${idx+1} (início: ${nextPeriod.year_start}).`);
          errorCount++;
        }
      } else {
        // Último período deve ter year_end === null
        if (period.year_end !== null) {
          console.error(`Erro [${code}]: O último período (líder: ${period.leader}) deve possuir year_end: null (encontrado: ${period.year_end}).`);
          errorCount++;
        }
      }
    });
  });

  console.log("---------------------------------------");
  if (errorCount === 0) {
    console.log("Sucesso! O dataset passou em todas as verificações de integridade com 0 erros.");
    process.exit(0);
  } else {
    console.error(`Falha: Foram encontrados ${errorCount} erros de validação no dataset.`);
    process.exit(1);
  }
}

validate();
