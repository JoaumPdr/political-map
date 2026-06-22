/**
 * @file staticDataset.ts
 * @description Base de dados históricos estática contendo a cronologia de períodos políticos de
 * dezenas de nações ao redor do globo cobrindo o período pós-Segunda Guerra Mundial (1945-2024).
 * Este arquivo atua como a fonte de dados padrão do Atlas Político.
 * 
 * Depende de:
 * - Types: {@link CountryData}, {@link PoliticalPeriod} de `./types.ts`
 * 
 * Dependente de:
 * - {@link getCountriesData} em `./politicalData.ts`
 */

import { CountryData } from "./types";

/**
 * Exemplo de estrutura de um objeto de período político (PoliticalPeriod):
 * 
 * @example
 * {
 *   year_start: 1945,
 *   year_end: 1953,
 *   leader: "Harry S. Truman",
 *   party: "Democrata",
 *   party_full_name: "Democratic Party",
 *   spectrum: -2,
 *   regime_type: "democracy",
 *   description: "Presidente pós-Guerra e início da Guerra Fria. Lançamento da Doutrina Truman e do Plano Marshall.",
 *   key_events: ["1945 - Fim da Segunda Guerra Mundial", "1947 - Doutrina Truman", "1948 - Plano Marshall"]
 * }
 */

// Mapeamento de códigos ISO de 2 letras para metadados geográficos (ID Numérico ISO e Sigla de 3 letras do TopoJSON)
export const COUNTRY_MAPPING: Record<string, { numericId: string; name: string; alpha3: string }> = {
  US: { numericId: "840", name: "United States of America", alpha3: "USA" },
  RU: { numericId: "643", name: "Russia", alpha3: "RUS" },
  CN: { numericId: "156", name: "China", alpha3: "CHN" },
  BR: { numericId: "076", name: "Brazil", alpha3: "BRA" },
  DE: { numericId: "276", name: "Germany", alpha3: "DEU" },
  FR: { numericId: "250", name: "France", alpha3: "FRA" },
  GB: { numericId: "826", name: "United Kingdom", alpha3: "GBR" },
  AR: { numericId: "032", name: "Argentina", alpha3: "ARG" },
  VE: { numericId: "862", name: "Venezuela", alpha3: "VEN" },
  HU: { numericId: "348", name: "Hungary", alpha3: "HUN" },
  TR: { numericId: "792", name: "Turkey", alpha3: "TUR" },
  IN: { numericId: "356", name: "India", alpha3: "IND" },
  IL: { numericId: "376", name: "Israel", alpha3: "ISR" },
  IR: { numericId: "364", name: "Iran", alpha3: "IRN" },
  ZA: { numericId: "710", name: "South Africa", alpha3: "ZAF" },
  JP: { numericId: "392", name: "Japan", alpha3: "JPN" },
  KR: { numericId: "410", name: "South Korea", alpha3: "KOR" },
  IT: { numericId: "380", name: "Italy", alpha3: "ITA" },
  ES: { numericId: "724", name: "Spain", alpha3: "ESP" },
  SE: { numericId: "430", name: "Sweden", alpha3: "SWE" },
  MX: { numericId: "484", name: "Mexico", alpha3: "MEX" },
  CL: { numericId: "152", name: "Chile", alpha3: "CHL" },
  CU: { numericId: "192", name: "Cuba", alpha3: "CUB" },
  CO: { numericId: "170", name: "Colombia", alpha3: "COL" },
  PE: { numericId: "604", name: "Peru", alpha3: "PER" },
  UY: { numericId: "858", name: "Uruguay", alpha3: "URY" },
  CA: { numericId: "124", name: "Canada", alpha3: "CAN" },
  PT: { numericId: "620", name: "Portugal", alpha3: "PRT" },
  NO: { numericId: "578", name: "Norway", alpha3: "NOR" },
  PL: { numericId: "616", name: "Poland", alpha3: "POL" },
  CZ: { numericId: "203", name: "Czech Republic", alpha3: "CZE" },
  GR: { numericId: "300", name: "Greece", alpha3: "GRC" },
  NL: { numericId: "528", name: "Netherlands", alpha3: "NLD" },
  BE: { numericId: "056", name: "Belgium", alpha3: "BEL" },
  UA: { numericId: "804", name: "Ukraine", alpha3: "UKR" },
  KP: { numericId: "408", name: "North Korea", alpha3: "PRK" },
  PK: { numericId: "586", name: "Pakistan", alpha3: "PAK" },
  ID: { numericId: "360", name: "Indonesia", alpha3: "IDN" },
  VN: { numericId: "704", name: "Vietnam", alpha3: "VNM" },
  EG: { numericId: "818", name: "Egypt", alpha3: "EGY" },
  NG: { numericId: "566", name: "Nigeria", alpha3: "NGA" },
  ET: { numericId: "231", name: "Ethiopia", alpha3: "ETH" },
  AU: { numericId: "036", name: "Australia", alpha3: "AUS" },
  NZ: { numericId: "554", name: "New Zealand", alpha3: "NZL" },
};

// Tradução reversa para vincular elementos geográficos do mapa (ID ou Nome) ao código ISO-2
export const GEOGRAPHY_TO_COUNTRY_CODE: Record<string, string> = {
  "840": "US", "USA": "US", "United States of America": "US", "United States": "US",
  "643": "RU", "RUS": "RU", "Russia": "RU",
  "156": "CN", "CHN": "CN", "China": "CN",
  "076": "BR", "BRA": "BR", "Brazil": "BR",
  "276": "DE", "DEU": "DE", "Germany": "DE",
  "250": "FR", "FRA": "FR", "France": "FR",
  "826": "GB", "GBR": "GB", "United Kingdom": "GB",
  "032": "AR", "ARG": "AR", "Argentina": "AR",
  "862": "VE", "VEN": "VE", "Venezuela": "VE",
  "348": "HU", "HUN": "HU", "Hungary": "HU",
  "792": "TR", "TUR": "TR", "Turkey": "TR",
  "356": "IN", "IND": "IN", "India": "IN",
  "376": "IL", "ISR": "IL", "Israel": "IL",
  "364": "IR", "IRN": "IR", "Iran": "IR",
  "710": "ZA", "ZAF": "ZA", "South Africa": "ZA",
  "392": "JP", "JPN": "JP", "Japan": "JP",
  "410": "KR", "KOR": "KR", "South Korea": "KR",
  "380": "IT", "ITA": "IT", "Italy": "IT",
  "724": "ES", "ESP": "ES", "Spain": "ES",
  "430": "SE", "SWE": "SE", "Sweden": "SE",
  "484": "MX", "MEX": "MX", "Mexico": "MX",
  "152": "CL", "CHL": "CL", "Chile": "CL",
  "192": "CU", "CUB": "CU", "Cuba": "CU",
  "170": "CO", "COL": "CO", "Colombia": "CO",
  "604": "PE", "PER": "PE", "Peru": "PE",
  "858": "UY", "URY": "UY", "Uruguay": "UY",
  "124": "CA", "CAN": "CA", "Canada": "CA",
  "620": "PT", "PRT": "PT", "Portugal": "PT",
  "578": "NO", "NOR": "NO", "Norway": "NO",
  "616": "PL", "POL": "PL", "Poland": "PL",
  "203": "CZ", "CZE": "CZ", "Czech Republic": "CZ", "Czechia": "CZ",
  "300": "GR", "GRC": "GR", "Greece": "GR",
  "528": "NL", "NLD": "NL", "Netherlands": "NL",
  "056": "BE", "BEL": "BE", "Belgium": "BE",
  "804": "UA", "UKR": "UA", "Ukraine": "UA",
  "408": "KP", "PRK": "KP", "North Korea": "KP",
  "586": "PK", "PAK": "PK", "Pakistan": "PK",
  "360": "ID", "IDN": "ID", "Indonesia": "ID",
  "704": "VN", "VNM": "VN", "Vietnam": "VN",
  "818": "EG", "EGY": "EG", "Egypt": "EG",
  "566": "NG", "NGA": "NG", "Nigeria": "NG",
  "231": "ET", "ETH": "ET", "Ethiopia": "ET",
  "036": "AU", "AUS": "AU", "Australia": "AU",
  "554": "NZ", "NZL": "NZ", "New Zealand": "NZ",
};

export const staticCountriesData: CountryData[] = [
  {
    code: "US",
    name: "Estados Unidos",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 1953,
        leader: "Harry S. Truman",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Presidente pós-Guerra e início da Guerra Fria. Lançamento da Doutrina Truman e do Plano Marshall.",
        key_events: ["1945 - Fim da Segunda Guerra Mundial", "1947 - Doutrina Truman", "1948 - Plano Marshall"]
      },
      {
        year_start: 1953,
        year_end: 1961,
        leader: "Dwight D. Eisenhower",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "General da Segunda Guerra de linha moderada. Crescimento da infraestrutura doméstica (rodovias) e doutrina de contenção anticomunista.",
        key_events: ["1953 - Fim da Guerra da Coreia", "1957 - Crise de Little Rock (direitos civis)"]
      },
      {
        year_start: 1961,
        year_end: 1963,
        leader: "John F. Kennedy",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Nova Fronteira. Crise dos mísseis em Cuba e início da intervenção no Vietnã. Assassinado em Dallas.",
        key_events: ["1961 - Invasão da Baía dos Porcos", "1962 - Crise dos Mísseis de Cuba", "1963 - Assassinato de JFK"]
      },
      {
        year_start: 1963,
        year_end: 1969,
        leader: "Lyndon B. Johnson",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: -3,
        regime_type: "democracy",
        description: "Projeto 'Grande Sociedade' focada em direitos civis e combate à pobreza, manchado pelo aprofundamento na Guerra do Vietnã.",
        key_events: ["1964 - Lei dos Direitos Civis", "1965 - Escala na Guerra do Vietnã", "1968 - Assassinato de Martin Luther King Jr."]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Richard Nixon",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Détente com URSS e abertura da China. Fim da participação direta dos EUA no Vietnã. Renunciou devido ao escândalo de Watergate.",
        key_events: ["1969 - Pouso na Lua da Apollo 11", "1972 - Visita à China", "1974 - Renúncia devido ao escândalo Watergate"]
      },
      {
        year_start: 1974,
        year_end: 1977,
        leader: "Gerald Ford",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Assumiu a presidência após a renúncia de Nixon, concedendo perdão presidencial a ele. Período marcado por estagflação.",
        key_events: ["1975 - Queda de Saigon / Fim da Guerra do Vietnã"]
      },
      {
        year_start: 1977,
        year_end: 1981,
        leader: "Jimmy Carter",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Ênfase nos direitos humanos na política externa. Mediação dos Acordos de Camp David. Crise dos reféns no Irã e crise energética prejudicaram o governo.",
        key_events: ["1978 - Acordos de Camp David", "1979 - Início da crise dos reféns no Irã"]
      },
      {
        year_start: 1981,
        year_end: 1989,
        leader: "Ronald Reagan",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Revolução Conservadora ('Reaganomics'). Forte retórica anticomunista, desregulamentação da economia e redução de impostos.",
        key_events: ["1981 - Atentado sofrido por Reagan", "1983 - Invasão de Granada", "1987 - Discurso no Muro de Berlim"]
      },
      {
        year_start: 1989,
        year_end: 1993,
        leader: "George H. W. Bush",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Gestão do fim da Guerra Fria e a dissolução da União Soviética. Liderou a coalizão internacional na Guerra do Golfo.",
        key_events: ["1989 - Queda do Muro de Berlim", "1991 - Guerra do Golfo / Dissolução da URSS"]
      },
      {
        year_start: 1993,
        year_end: 2001,
        leader: "Bill Clinton",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Plataforma de Terceira Via (centrismo democrata). Expansão econômica recorde dos anos 90, assinatura do NAFTA e processos de paz.",
        key_events: ["1993 - Assinatura do NAFTA", "1999 - Intervenção da OTAN em Kosovo", "1999 - Processo de Impeachment (absolvido)"]
      },
      {
        year_start: 2001,
        year_end: 2009,
        leader: "George W. Bush",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Marcado pelos ataques de 11 de setembro e a subsequente 'Guerra ao Terror' com invasões no Afeganistão e Iraque. Crise financeira em 2008.",
        key_events: ["2001 - Ataques terroristas de 11 de Setembro", "2003 - Invasão do Iraque", "2008 - Grande Crise Financeira Global"]
      },
      {
        year_start: 2009,
        year_end: 2017,
        leader: "Barack Obama",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: 1,
        regime_type: "democracy",
        description: "Primeiro presidente negro. Implementação do Obamacare (reforma da saúde). Retomada das relações com Cuba. Estímulo pós-crise.",
        key_events: ["2010 - Obamacare", "2011 - Morte de Osama bin Laden", "2015 - Acordo de Paris"]
      },
      {
        year_start: 2017,
        year_end: 2021,
        leader: "Donald Trump",
        party: "GOP",
        party_full_name: "Republican Party",
        spectrum: 5,
        regime_type: "democracy",
        description: "Plataforma populista nacionalista 'America First'. Guerra comercial com a China, renegociação de tratados e nomeação de juízes conservadores.",
        key_events: ["2018 - Guerra Comercial China", "2020 - COVID-19", "2021 - Invasão do Capitólio"]
      },
      {
        year_start: 2021,
        year_end: 2024,
        leader: "Joe Biden",
        party: "DEM",
        party_full_name: "Democratic Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Governo focado na reconstrução pós-pandêmica, investimentos massivos em infraestrutura e forte apoio à Ucrânia.",
        key_events: ["2021 - Retirada do Afeganistão", "2022 - Apoio militar à Ucrânia"]
      }
    ]
  },
  {
    code: "RU",
    name: "Rússia / URSS",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1953,
        leader: "Joseph Stalin",
        party: "CPSU",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Totalitarismo soviético no pós-Guerra. Consolidação do bloco do Leste e industrialização forçada no início da Guerra Fria.",
        key_events: ["1945 - Vitória na Guerra", "1949 - Bomba Atômica Soviética"]
      },
      {
        year_start: 1953,
        year_end: 1964,
        leader: "Nikita Khrushchev",
        party: "CPSU",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Período do 'Degelo' e início da Desestalinização. Corrida Espacial e a Crise dos Mísseis.",
        key_events: ["1956 - Discurso Secreto", "1957 - Sputnik", "1962 - Crise de Cuba"]
      },
      {
        year_start: 1964,
        year_end: 1982,
        leader: "Leonid Brezhnev",
        party: "CPSU",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Era da Estagnação Soviética. Doutrina Brezhnev de intervenção em governos socialistas e invasão do Afeganistão.",
        key_events: ["1968 - Primavera de Praga", "1979 - Invasão do Afeganistão"]
      },
      {
        year_start: 1982,
        year_end: 1985,
        leader: "Yuri Andropov / Konstantin Chernenko",
        party: "CPSU",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Breves governos liderados por membros seniores do politburo marcados por problemas de saúde e impasse político.",
        key_events: ["1983 - Incidente do voo KAL 007"]
      },
      {
        year_start: 1985,
        year_end: 1991,
        leader: "Mikhail Gorbachev",
        party: "CPSU",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -4,
        regime_type: "transitional",
        description: "Tentativa de salvação da União Soviética através das reformas da Glasnost (abertura política) e Perestroika (reestruturação econômica).",
        key_events: ["1986 - Chernobyl", "1989 - Retirada do Afeganistão", "1991 - Fim da URSS"]
      },
      {
        year_start: 1991,
        year_end: 1999,
        leader: "Boris Yeltsin",
        party: "IND",
        party_full_name: "Independente (Liderança Liberal)",
        spectrum: 2,
        regime_type: "hybrid",
        description: "Primeiro presidente da Federação Russa. Transição caótica para o capitalismo, privatizações massivas e crise constitucional de 1993.",
        key_events: ["1993 - Crise Constitucional e bombardeio do Parlamento", "1994 - Guerra da Chechênia"]
      },
      {
        year_start: 1999,
        year_end: 2008,
        leader: "Vladimir Putin",
        party: "UR",
        party_full_name: "United Russia Party",
        spectrum: 4,
        regime_type: "hybrid",
        description: "Reconstrução do poder central russo, controle dos oligarcas e forte crescimento econômico impulsionado pelo petróleo.",
        key_events: ["1999 - Segunda Guerra da Chechênia", "2004 - Crise dos reféns em Beslan"]
      },
      {
        year_start: 2008,
        year_end: 2012,
        leader: "Dmitry Medvedev",
        party: "UR",
        party_full_name: "United Russia Party",
        spectrum: 3,
        regime_type: "hybrid",
        description: "Período de 'modernização' tecnológica com Putin atuando como Primeiro-Ministro. Conflito armado com a Geórgia.",
        key_events: ["2008 - Guerra Russo-Georgiana", "2011 - Protestos em Moscou"]
      },
      {
        year_start: 2012,
        year_end: 2024,
        leader: "Vladimir Putin",
        party: "UR",
        party_full_name: "United Russia Party",
        spectrum: 7,
        regime_type: "authoritarian",
        description: "Guinada conservadora e nacionalista. Anexação da Crimeia e subsequente invasão em larga escala da Ucrânia, isolando a Rússia do Ocidente.",
        key_events: ["2014 - Anexação da Crimeia", "2022 - Invasão em larga escala da Ucrânia"]
      }
    ]
  },
  {
    code: "CN",
    name: "China",
    region: "Asia",
    periods: [
      {
        year_start: 1945,
        year_end: 1949,
        leader: "Chiang Kai-shek",
        party: "KMT",
        party_full_name: "Kuomintang",
        spectrum: 4,
        regime_type: "transitional",
        description: "Guerra Civil Chinesa entre os nacionalistas do Kuomintang e os comunistas liderados por Mao Zedong.",
        key_events: ["1949 - Proclamação da RPC e recuo nacionalista para Taiwan"]
      },
      {
        year_start: 1949,
        year_end: 1976,
        leader: "Mao Zedong",
        party: "CPC",
        party_full_name: "Chinese Communist Party",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Coletivização da agricultura e planos industriais agressivos. Marcado pela tragédia do Grande Salto Adiante e o caos da Revolução Cultural.",
        key_events: ["1958 - Grande Salto Adiante", "1966 - Revolução Cultural", "1972 - Visita de Nixon"]
      },
      {
        year_start: 1976,
        year_end: 1978,
        leader: "Hua Guofeng",
        party: "CPC",
        party_full_name: "Chinese Communist Party",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Transição após a morte de Mao. Prisão do 'Bando dos Quatro' e início do fim do radicalismo ideológico da Revolução Cultural.",
        key_events: ["1976 - Prisão do Bando dos Quatro"]
      },
      {
        year_start: 1978,
        year_end: 1989,
        leader: "Deng Xiaoping",
        party: "CPC",
        party_full_name: "Chinese Communist Party",
        spectrum: -6,
        regime_type: "authoritarian",
        description: "Início do 'Socialismo com Características Chinesas' e as reformas econômicas. Criação das Zonas Econômicas Especiais.",
        key_events: ["1978 - Adoção da política de Reforma e Abertura", "1989 - Massacre na Praça Tiananmen"]
      },
      {
        year_start: 1989,
        year_end: 2002,
        leader: "Jiang Zemin",
        party: "CPC",
        party_full_name: "Chinese Communist Party",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Forte crescimento econômico focado nas exportações e reintegração diplomática após Tiananmen. Devolução de Hong Kong.",
        key_events: ["1997 - Devolução de Hong Kong", "2001 - Entrada da China na OMC"]
      },
      {
        year_start: 2002,
        year_end: 2012,
        leader: "Hu Jintao",
        party: "CPC",
        party_full_name: "Chinese Communist Party",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Doutrina do 'Desenvolvimento Científico' e a busca por uma 'Sociedade Harmoniosa'. Grande expansão global e Olimpíadas de Pequim.",
        key_events: ["2008 - Olimpíadas de Pequim", "2010 - China torna-se 2ª maior economia mundial"]
      },
      {
        year_start: 2012,
        year_end: 2024,
        leader: "Xi Jinping",
        party: "CPC",
        party_full_name: "Chinese Communist Party",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Centralização drástica do poder, repressão a dissidências, iniciativa do 'Cinturão e Rota' e postura diplomática mais assertiva.",
        key_events: ["2013 - Cinturão e Rota", "2020 - Lei de Segurança de Hong Kong"]
      }
    ]
  },
  {
    code: "BR",
    name: "Brasil",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 1946,
        leader: "José Linhares",
        party: "IND",
        party_full_name: "Supremo Tribunal Federal",
        spectrum: 0,
        regime_type: "transitional",
        description: "Presidente provisório após a deposição de Getúlio Vargas do Estado Novo, organizando as eleições livres de 1945.",
        key_events: ["1945 - Deposição de Getúlio Vargas"]
      },
      {
        year_start: 1946,
        year_end: 1951,
        leader: "Eurico Gaspar Dutra",
        party: "PSD",
        party_full_name: "Partido Social Democrático",
        spectrum: 2,
        regime_type: "democracy",
        description: "Promulgação da Constituição de 1946. Alinhamento internacional claro com os EUA e proibição do Partido Comunista Brasileiro (PCB).",
        key_events: ["1946 - Promulgação da nova Constituição", "1947 - Rompimento com a URSS"]
      },
      {
        year_start: 1951,
        year_end: 1954,
        leader: "Getúlio Vargas",
        party: "PTB",
        party_full_name: "Partido Trabalhista Brasileiro",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retorno de Vargas nos 'braços do povo'. Nacionalismo econômico radical com a fundação da Petrobras. Terminou com seu suicídio devido à forte crise militar.",
        key_events: ["1953 - Criação da Petrobras", "1954 - Atentado da Rua Tonelero", "1954 - Suicídio de Vargas"]
      },
      {
        year_start: 1954,
        year_end: 1956,
        leader: "Café Filho / Nereu Ramos",
        party: "PSP",
        party_full_name: "Partido Social Progressista",
        spectrum: 1,
        regime_type: "democracy",
        description: "Período de grande instabilidade política e militar sob a sombra do suicídio de Vargas, resolvido pela intervenção legalista do General Lott.",
        key_events: ["1955 - Eleição presidencial de JK", "1955 - Golpe Preventivo do General Lott"]
      },
      {
        year_start: 1956,
        year_end: 1961,
        leader: "Juscelino Kubitschek",
        party: "PSD",
        party_full_name: "Partido Social Democrático",
        spectrum: -1,
        regime_type: "democracy",
        description: "Anos Dourados. Plano de Metas de '50 anos em 5'. Construção e inauguração da nova capital, Brasília.",
        key_events: ["1956 - Início de Brasília", "1960 - Inauguração de Brasília"]
      },
      {
        year_start: 1961,
        year_end: 1961,
        leader: "Jânio Quadros",
        party: "PTN",
        party_full_name: "Partido Trabalhista Nacional",
        spectrum: 1,
        regime_type: "democracy",
        description: "Campanha da vassoura contra a corrupção. Política externa independente aproximando-se de países socialistas. Renúncia misteriosa após 7 meses.",
        key_events: ["1961 - Condecoração de Che Guevara", "1961 - Renúncia de Jânio Quadros"]
      },
      {
        year_start: 1961,
        year_end: 1964,
        leader: "João Goulart",
        party: "PTB",
        party_full_name: "Partido Trabalhista Brasileiro",
        spectrum: -3,
        regime_type: "democracy",
        description: "Assumiu sob forte oposição militar no parlamentarismo. Conseguiu retorno ao presidencialismo. Promoveu as Reformas de Base. Deposto por um golpe militar.",
        key_events: ["1961 - Campanha da Legalidade", "1963 - Plebiscito restaura o Presidencialismo", "1964 - Golpe Militar"]
      },
      {
        year_start: 1964,
        year_end: 1985,
        leader: "Ditadura Militar",
        party: "ARENA",
        party_full_name: "Aliança Renovadora Nacional",
        spectrum: 7,
        regime_type: "authoritarian",
        description: "Regime de exceção liderado por generais. Marcado por forte repressão através dos Atos Institucionais (AI-5), o Milagre Econômico e megaprojetos.",
        key_events: ["1968 - Promulgação do AI-5", "1973 - Auge do 'Milagre Econômico'", "1984 - Campanha das Diretas Já"]
      },
      {
        year_start: 1985,
        year_end: 1990,
        leader: "José Sarney",
        party: "PMDB",
        party_full_name: "Partido do Movimento Democrático Brasileiro",
        spectrum: 1,
        regime_type: "transitional",
        description: "Assumiu devido à morte de Tancredo Neves. Período de transição democrática, promulgação da Constituição de 1988 e hiperinflação galopante.",
        key_events: ["1985 - Morte de Tancredo Neves", "1986 - Plano Cruzado", "1988 - Promulgação da Constituição Cidadã"]
      },
      {
        year_start: 1990,
        year_end: 1992,
        leader: "Fernando Collor",
        party: "PRN",
        party_full_name: "Partido da Reconstrução Nacional",
        spectrum: 3,
        regime_type: "democracy",
        description: "Primeira eleição direta desde 1960. Bloqueio das cadernetas de poupança e abertura neoliberal. Sofreu impeachment após escândalos de corrupção.",
        key_events: ["1990 - Confisco da Poupança", "1992 - Protestos dos Caras-Pintadas", "1992 - Renúncia antes da votação de Impeachment"]
      },
      {
        year_start: 1992,
        year_end: 1995,
        leader: "Itamar Franco",
        party: "PMDB",
        party_full_name: "Partido do Movimento Democrático Brasileiro",
        spectrum: 0,
        regime_type: "democracy",
        description: "Assumiu o cargo após a saída de Collor. Implementou o Plano Real em 1994 sob a liderança do ministro FHC, debelando a hiperinflação histórica.",
        key_events: ["1993 - Plebiscito de Governo", "1994 - Lançamento da moeda Real"]
      },
      {
        year_start: 1995,
        year_end: 2003,
        leader: "Fernando Henrique Cardoso",
        party: "PSDB",
        party_full_name: "Partido da Social Democracia Brasileira",
        spectrum: 1,
        regime_type: "democracy",
        description: "Consolidação da estabilidade econômica. Grandes privatizações de estatais, reforma do Estado e criação de agências reguladoras.",
        key_events: ["1997 - Aprovação da Emenda da Reeleição", "2001 - Crise do Apagão energético"]
      },
      {
        year_start: 2003,
        year_end: 2011,
        leader: "Luiz Inácio Lula da Silva",
        party: "PT",
        party_full_name: "Partido dos Trabalhadores",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo focado em inclusão social (Bolsa Família) e alta das commodities. Projeção internacional do Brasil como potência emergente (BRICS).",
        key_events: ["2003 - Lançamento do Bolsa Família", "2005 - Mensalão"]
      },
      {
        year_start: 2011,
        year_end: 2016,
        leader: "Dilma Rousseff",
        party: "PT",
        party_full_name: "Partido dos Trabalhadores",
        spectrum: -2,
        regime_type: "democracy",
        description: "Primeira presidente mulher. Forte recessão econômica nos anos finais, intensos protestos populares (2013) e destituição via impeachment.",
        key_events: ["2013 - Jornadas de Junho", "2014 - Operação Lava Jato", "2016 - Impeachment de Dilma"]
      },
      {
        year_start: 2016,
        year_end: 2019,
        leader: "Michel Temer",
        party: "MDB",
        party_full_name: "Movimento Democrático Brasileiro",
        spectrum: 2,
        regime_type: "democracy",
        description: "Vice que assumiu a presidência. Adotou agenda de reformas liberais, como o Teto de Gastos Públicos e a Reforma Trabalhista.",
        key_events: ["2016 - Teto de Gastos", "2017 - Reforma Trabalhista"]
      },
      {
        year_start: 2019,
        year_end: 2023,
        leader: "Jair Bolsonaro",
        party: "PL",
        party_full_name: "Partido Liberal",
        spectrum: 5,
        regime_type: "democracy",
        description: "Plataforma conservadora e liberal (Paulo Guedes). Marcado por constantes tensões institucionais e a gestão da pandemia de COVID-19.",
        key_events: ["2019 - Reforma da Previdência", "2020 - Pandemia de COVID-19"]
      },
      {
        year_start: 2023,
        year_end: 2024,
        leader: "Luiz Inácio Lula da Silva",
        party: "PT",
        party_full_name: "Partido dos Trabalhadores",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retorno de Lula à presidência após vencer eleição polarizada. Foco na reconstrução ambiental e programas sociais clássicos.",
        key_events: ["2023 - Ataques de 8 de Janeiro", "2023 - Presidência do G20"]
      }
    ]
  },
  {
    code: "DE",
    name: "Alemanha",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1949,
        leader: "Ocupação Aliada",
        party: "ACC",
        party_full_name: "Allied Control Council",
        spectrum: 0,
        regime_type: "transitional",
        description: "Período pós-guerra sob administração conjunta militar. Ocupação dividida entre EUA, Reino Unido, França e URSS.",
        key_events: ["1945 - Julgamentos de Nuremberg", "1948 - Bloqueio de Berlim"]
      },
      {
        year_start: 1949,
        year_end: 1963,
        leader: "Konrad Adenauer",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 3,
        regime_type: "democracy",
        description: "Primeiro chanceler da Alemanha Ocidental (RFA). Reconstrução econômica (Milagre do Reno) e integração à OTAN.",
        key_events: ["1955 - Alemanha Ocidental ingressa na OTAN", "1961 - Construção do Muro de Berlim"]
      },
      {
        year_start: 1963,
        year_end: 1966,
        leader: "Ludwig Erhard",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler considerado o arquiteto da 'Economia Social de Mercado' alemã ocidental.",
        key_events: ["1965 - Início da desaceleração do Milagre Econômico"]
      },
      {
        year_start: 1966,
        year_end: 1969,
        leader: "Kurt Georg Kiesinger",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 2,
        regime_type: "democracy",
        description: "Liderou a primeira 'Grande Coalizão' da Alemanha Ocidental entre CDU e SPD.",
        key_events: ["1968 - Protestos estudantis alemães"]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Willy Brandt",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -3,
        regime_type: "democracy",
        description: "Chanceler social-democrata. Implementou a Ostpolitik (normalização de relações com o bloco soviético).",
        key_events: ["1970 - Genuflexão de Varsóvia", "1974 - Escândalo Guillaume (Espionagem)"]
      },
      {
        year_start: 1974,
        year_end: 1982,
        leader: "Helmut Schmidt",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Lidou com crises de petróleo e o pico do terrorismo doméstico comunista do grupo Fração do Exército Vermelho.",
        key_events: ["1977 - Outono Alemão (Crise do Terrorismo)"]
      },
      {
        year_start: 1982,
        year_end: 1998,
        leader: "Helmut Kohl",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler que liderou a Reunificação da Alemanha Oriental e Ocidental e as negociações do Tratado de Maastricht.",
        key_events: ["1989 - Queda do Muro de Berlim", "1990 - Reunificação Alemã", "1992 - Tratado de Maastricht"]
      },
      {
        year_start: 1998,
        year_end: 2005,
        leader: "Gerhard Schröder",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Aliança SPD-Verdes. Opositor destacado da invasão do Iraque e implementador de reformas trabalhistas ('Agenda 2010').",
        key_events: ["2002 - Introdução física do Euro", "2003 - Agenda 2010"]
      },
      {
        year_start: 2005,
        year_end: 2021,
        leader: "Angela Merkel",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 2,
        regime_type: "democracy",
        description: "Primeira chanceler mulher. Liderou a Alemanha e a UE durante a crise do Euro, migratória (2015) e a pandemia.",
        key_events: ["2011 - Fim de energia nuclear planejado", "2015 - Crise de Refugiados na Europa"]
      },
      {
        year_start: 2021,
        year_end: 2024,
        leader: "Olaf Scholz",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Líder da coalizão 'Semáforo'. Declarou o Zeitenwende (virada histórica de defesa alemã) devido à guerra ucraniana.",
        key_events: ["2022 - Zeitenwende e rearmamento", "2023 - Fim de dependência do gás russo"]
      }
    ]
  },
  {
    code: "FR",
    name: "França",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1947,
        leader: "Charles de Gaulle",
        party: "IND",
        party_full_name: "GPRF (Governo Provisório)",
        spectrum: 2,
        regime_type: "transitional",
        description: "Líder da França Livre no comando do governo provisório pós-libertação alemã.",
        key_events: ["1944 - Sufrágio feminino concedido na França"]
      },
      {
        year_start: 1947,
        year_end: 1954,
        leader: "Vincent Auriol",
        party: "SFIO",
        party_full_name: "Section Française de l'Internationale Ouvrière",
        spectrum: -1,
        regime_type: "democracy",
        description: "Primeiro presidente da Quarta República Francesa, caracterizada por forte instabilidade parlamentar.",
        key_events: ["1950 - Declaração Schuman", "1954 - Derrota francesa na Indochina"]
      },
      {
        year_start: 1954,
        year_end: 1958,
        leader: "René Coty",
        party: "CNIP",
        party_full_name: "Centre National des Indépendants et Paysans",
        spectrum: 1,
        regime_type: "democracy",
        description: "Presidente final da Quarta República, colapsada em razão do conflito colonial da Guerra da Argélia.",
        key_events: ["1954 - Início da Guerra da Argélia", "1957 - Tratados de Roma"]
      },
      {
        year_start: 1958,
        year_end: 1969,
        leader: "Charles de Gaulle",
        party: "UNR",
        party_full_name: "Union pour la Nouvelle République",
        spectrum: 3,
        regime_type: "democracy",
        description: "Instituiu a Quinta República com poderes executivos fortes. Resolveu a independência argelina e buscou autonomia internacional.",
        key_events: ["1962 - Independência da Argélia", "1968 - Revolta de Maio de 1968"]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Georges Pompidou",
        party: "UDR",
        party_full_name: "Union des Démocrates pour la République",
        spectrum: 3,
        regime_type: "democracy",
        description: "Sucessor do Gaullismo, promovendo industrialização acelerada e modernização de transportes e infraestrutura.",
        key_events: ["1973 - Choque do Petróleo"]
      },
      {
        year_start: 1974,
        year_end: 1981,
        leader: "Valéry Giscard d'Estaing",
        party: "UDF",
        party_full_name: "Union pour la Démocratie Française",
        spectrum: 2,
        regime_type: "democracy",
        description: "Chanceler liberal-reformista. Legalizou o aborto sob a liderança de Simone Veil e reduziu maioridade eleitoral.",
        key_events: ["1975 - Despenalização do aborto (Lei Veil)"]
      },
      {
        year_start: 1981,
        year_end: 1995,
        leader: "François Mitterrand",
        party: "PS",
        party_full_name: "Parti Socialiste",
        spectrum: -2,
        regime_type: "democracy",
        description: "Primeiro presidente socialista da Quinta República. Promoveu nacionalizações no início e depois adotou política de rigor econômico.",
        key_events: ["1981 - Abolição da pena de morte", "1986 - Primeira Coabitação com a direita"]
      },
      {
        year_start: 1995,
        year_end: 2007,
        leader: "Jacques Chirac",
        party: "RPR",
        party_full_name: "Rassemblement pour la République",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo de centro-direita. Opositor destacado da Guerra do Iraque de 2003 e implementador do mandato presidencial de 5 anos.",
        key_events: ["2002 - Disputa contra Jean-Marie Le Pen", "2003 - Rejeição à Guerra do Iraque na ONU"]
      },
      {
        year_start: 2007,
        year_end: 2012,
        leader: "Nicolas Sarkozy",
        party: "UMP",
        party_full_name: "Union pour um Mouvement Populaire",
        spectrum: 3,
        regime_type: "democracy",
        description: "Estilo presidencial enérgico. Reinseriu a França no comando militar integrado da OTAN durante crises globais.",
        key_events: ["2008 - Crise Financeira", "2011 - Operação Militar na Líbia"]
      },
      {
        year_start: 2012,
        year_end: 2017,
        leader: "François Hollande",
        party: "PS",
        party_full_name: "Parti Socialiste",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo marcado pela aprovação do casamento igualitário e por graves atentados terroristas do Estado Islâmico.",
        key_events: ["2013 - Casamento igualitário aprovado", "2015 - Atentados terroristas em Paris"]
      },
      {
        year_start: 2017,
        year_end: 2024,
        leader: "Emmanuel Macron",
        party: "RE",
        party_full_name: "Renaissance",
        spectrum: -1,
        regime_type: "democracy",
        description: "Centrismo liberal e pró-União Europeia. Enfrentou protestos duradouros dos Coletes Amarelos e polêmica reforma previdenciária.",
        key_events: ["2018 - Coletes Amarelos", "2023 - Reforma da Previdência"]
      }
    ]
  },
  {
    code: "GB",
    name: "Reino Unido",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1951,
        leader: "Clement Attlee",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Vitória pós-Guerra. Estabeleceu o Estado de Bem-Estar Social britânico e nacionalizou as indústrias chave.",
        key_events: ["1947 - Independência da Índia", "1948 - Fundação do NHS"]
      },
      {
        year_start: 1951,
        year_end: 1955,
        leader: "Winston Churchill",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Retornou focando no papel geopolítico britânico e na contenção nuclear da União Soviética.",
        key_events: ["1952 - Morte de George VI e coroação de Elizabeth II"]
      },
      {
        year_start: 1955,
        year_end: 1957,
        leader: "Anthony Eden",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler conservador. Renunciou devido ao fracasso militar e diplomático na Crise de Suez de 1956.",
        key_events: ["1956 - Crise do Canal de Suez"]
      },
      {
        year_start: 1957,
        year_end: 1963,
        leader: "Harold Macmillan",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Reestruturou as finanças e aceitou a descolonização inevitável no continente africano.",
        key_events: ["1960 - Discurso 'Ventos de Mudança'"]
      },
      {
        year_start: 1963,
        year_end: 1964,
        leader: "Alec Douglas-Home",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Curto governo conservador antes da virada trabalhista dos anos 60."
      },
      {
        year_start: 1964,
        year_end: 1970,
        leader: "Harold Wilson",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo marcado por reformas sociais liberais e desregulamentação civil.",
        key_events: ["1967 - Desvalorização da Libra"]
      },
      {
        year_start: 1970,
        year_end: 1974,
        leader: "Edward Heath",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Garantiu a entrada oficial do país no mercado comum da Comunidade Econômica Europeia.",
        key_events: ["1973 - Ingressa na CEE"]
      },
      {
        year_start: 1974,
        year_end: 1976,
        leader: "Harold Wilson",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retornou em segundo mandato lidando com forte estagflação e tensão com sindicatos de mineiros."
      },
      {
        year_start: 1976,
        year_end: 1979,
        leader: "James Callaghan",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Seu governo caiu no desastroso 'Inverno do Descontentamento', assolado por greves gerais nos serviços públicos.",
        key_events: ["1976 - Empréstimo emergencial do FMI", "1979 - Inverno do Descontentamento"]
      },
      {
        year_start: 1979,
        year_end: 1990,
        leader: "Margaret Thatcher",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "A 'Dama de Ferro'. Implementou privatizações radicais, combateu sindicatos e venceu o conflito militar das Malvinas.",
        key_events: ["1982 - Guerra das Malvinas", "1984 - Greve de Mineiros"]
      },
      {
        year_start: 1990,
        year_end: 1997,
        leader: "John Major",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler conservador. Assinou o Tratado de Maastricht. Enfrentou turbulências monetárias na Quarta-Feira Negra.",
        key_events: ["1992 - Quarta-Feira Negra cambial", "1994 - Abertura do Eurotúnel"]
      },
      {
        year_start: 1997,
        year_end: 2007,
        leader: "Tony Blair",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Plataforma de 'New Labour'. Assinou a paz na Irlanda do Norte, mas desgastou-se pelo apoio à invasão do Iraque.",
        key_events: ["1998 - Acordo de Sexta-Feira Santa", "2003 - Guerra do Iraque"]
      },
      {
        year_start: 2007,
        year_end: 2010,
        leader: "Gordon Brown",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Assumiu com a saída de Blair. Gerenciou a grande crise de 2008 com intervenção estatal bancária.",
        key_events: ["2008 - Nacionalização de bancos na crise"]
      },
      {
        year_start: 2010,
        year_end: 2016,
        leader: "David Cameron",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo marcado por austeridade. Convocou o referendo do Brexit em 2016 e renunciou após a vitória da saída.",
        key_events: ["2014 - Referendo da Escócia", "2016 - Referendo do Brexit decide pela saída da UE"]
      },
      {
        year_start: 2016,
        year_end: 2019,
        leader: "Theresa May",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Teve a difícil missão de negociar os termos de saída do Brexit na UE, sob constante oposição parlamentar.",
        key_events: ["2017 - Acionamento do Artigo 50"]
      },
      {
        year_start: 2019,
        year_end: 2022,
        leader: "Boris Johnson",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Consumou o Brexit após vitória esmagadora. Caiu devido a escândalos de quebras de regras sanitárias de seu gabinete.",
        key_events: ["2020 - Brexit finalizado", "2022 - Partygate força sua saída"]
      },
      {
        year_start: 2022,
        year_end: 2022,
        leader: "Liz Truss",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Chanceler por apenas 49 dias. Seu miniorçamento fiscal colapsou a libra nos mercados financeiros.",
        key_events: ["2022 - Morte de Elizabeth II", "2022 - Crise de mercado força renúncia recorde"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Rishi Sunak",
        party: "CON",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Estabilizou o governo conservador, mas sofreu derrota histórica nas eleições gerais convocadas em 2024.",
        key_events: ["2024 - Derrota eleitoral dos conservadores"]
      },
      {
        year_start: 2024,
        year_end: 2024,
        leader: "Keir Starmer",
        party: "LAB",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retorno do Partido Trabalhista após 14 anos de governos conservadores, focando na reestruturação pública.",
        key_events: ["2024 - Ampla maioria trabalhista conquistada"]
      }
    ]
  },
  {
    code: "AR",
    name: "Argentina",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 1946,
        leader: "Edelmiro Farrell",
        party: "MIL",
        party_full_name: "GOU (Ditadura Militar)",
        spectrum: 4,
        regime_type: "authoritarian",
        description: "Ditadura militar no encerramento da Segunda Guerra Mundial. Ascensão de Juan Perón na pasta do Trabalho.",
        key_events: ["1945 - Manifestações massivas de 17 de Outubro"]
      },
      {
        year_start: 1946,
        year_end: 1955,
        leader: "Juan Domingo Perón",
        party: "PJ",
        party_full_name: "Partido Justicialista (Peronista)",
        spectrum: -3,
        regime_type: "hybrid",
        description: "Nacionalismo econômico e expansão massiva de direitos trabalhistas com forte influência de Evita Perón. Deposto por militares.",
        key_events: ["1947 - Sufrágio feminino aprovado", "1952 - Morte de Evita Perón", "1955 - Golpe militar depõe Perón"]
      },
      {
        year_start: 1955,
        year_end: 1958,
        leader: "Eduardo Lonardi / Pedro Aramburu",
        party: "MIL",
        party_full_name: "Revolución Libertadora",
        spectrum: 4,
        regime_type: "authoritarian",
        description: "Ditadura militar dedicada a banir o peronismo da vida civil e desmantelar a estrutura social peronista.",
        key_events: ["1956 - Decreto baniu menção a Perón ou Evita"]
      },
      {
        year_start: 1958,
        year_end: 1962,
        leader: "Arturo Frondizi",
        party: "UCRI",
        party_full_name: "Unión Cívica Radical Intransigente",
        spectrum: -1,
        regime_type: "democracy",
        description: "Desenvolvimentismo econômico. Sofreu forte tutela e frequentes ultimatos militares durante a sua gestão.",
        key_events: ["1961 - Reunião com Che Guevara", "1962 - Golpe militar depõe Frondizi"]
      },
      {
        year_start: 1962,
        year_end: 1963,
        leader: "José María Guido",
        party: "UCR",
        party_full_name: "Unión Cívica Radical (Presidente de Fato)",
        spectrum: 3,
        regime_type: "transitional",
        description: "Presidente interino nomeado sob forte tutela militar após a deposição de Frondizi."
      },
      {
        year_start: 1963,
        year_end: 1966,
        leader: "Arturo Illia",
        party: "UCRP",
        party_full_name: "Unión Cívica Radical del Pueblo",
        spectrum: -2,
        regime_type: "democracy",
        description: "Foco no nacionalismo econômico e investimentos em saúde e educação. Acabou deposto por nova junta militar.",
        key_events: ["1966 - Golpe militar encerra governo Illia"]
      },
      {
        year_start: 1966,
        year_end: 1973,
        leader: "Juan Carlos Onganía / Alejandro Lanusse",
        party: "MIL",
        party_full_name: "Revolución Argentina (Ditadura)",
        spectrum: 6,
        regime_type: "authoritarian",
        description: "Ditadura corporativista militar altamente repressiva. Enfrentou massivas revoltas sociais urbanas como o Cordobazo.",
        key_events: ["1969 - Revolta do Cordobazo", "1972 - Massacre de Trelew"]
      },
      {
        year_start: 1973,
        year_end: 1976,
        leader: "Juan D. Perón / Isabel Perón",
        party: "PJ",
        party_full_name: "Frente Justicialista de Liberación",
        spectrum: -2,
        regime_type: "hybrid",
        description: "Retorno do peronismo sob forte violência política interna entre facções armadas de direita e esquerda. Depostos por militares.",
        key_events: ["1974 - Morte de Juan Domingo Perón", "1975 - Atividades da Aliança Anticomunista (Triple A)"]
      },
      {
        year_start: 1976,
        year_end: 1983,
        leader: "Jorge Rafael Videla / Leopoldo Galtieri",
        party: "MIL",
        party_full_name: "Proceso de Reorganización Nacional",
        spectrum: 9,
        regime_type: "authoritarian",
        description: "O mais violento regime militar da história argentina. Milhares de desaparecidos políticos e colapso pós-derrota nas Malvinas.",
        key_events: ["1977 - Marchas das Mães da Plaza de Mayo", "1982 - Derrota na Guerra das Malvinas"]
      },
      {
        year_start: 1983,
        year_end: 1989,
        leader: "Raúl Alfonsín",
        party: "UCR",
        party_full_name: "Unión Cívica Radical",
        spectrum: -1,
        regime_type: "democracy",
        description: "Retorno democrático. Conduziu o julgamento das juntas militares da ditadura, mas caiu sob forte hiperinflação.",
        key_events: ["1985 - Julgamento das Juntas Militares", "1989 - Crise de hiperinflação histórica"]
      },
      {
        year_start: 1989,
        year_end: 1999,
        leader: "Carlos Menem",
        party: "PJ",
        party_full_name: "Partido Justicialista",
        spectrum: 4,
        regime_type: "democracy",
        description: "Peronismo convertido à agenda neoliberal. Criou a Convertibilidade cambial peso-dólar e promoveu privatizações massivas.",
        key_events: ["1991 - Plano de Convertibilidade", "1994 - Reforma Constitucional"]
      },
      {
        year_start: 1999,
        year_end: 2001,
        leader: "Fernando de la Rúa",
        party: "UCR",
        party_full_name: "Unión Cívica Radical (Alianza)",
        spectrum: 1,
        regime_type: "democracy",
        description: "Governo incapaz de frear a forte recessão e endividamento, terminando com a eclosão da crise social de 2001.",
        key_events: ["2001 - Corralito bancário e fuga presidencial de helicóptero"]
      },
      {
        year_start: 2001,
        year_end: 2003,
        leader: "Eduardo Duhalde",
        party: "PJ",
        party_full_name: "Partido Justicialista (Transição)",
        spectrum: -1,
        regime_type: "transitional",
        description: "Presidente de transição eleito pelo parlamento. Teve que administrar a desvalorização cambial pós-default.",
        key_events: ["2002 - Desvalorização oficial do Peso"]
      },
      {
        year_start: 2003,
        year_end: 2007,
        leader: "Néstor Kirchner",
        party: "FPV",
        party_full_name: "Frente para la Victoria (Justicialista)",
        spectrum: -4,
        regime_type: "democracy",
        description: "Início do Kirchnerismo. Forte recuperação econômica, renegociação de títulos da dívida e revogação das leis de anistia aos militares.",
        key_events: ["2005 - Reestruturação da dívida soberana", "2005 - Quitação de débito com o FMI"]
      },
      {
        year_start: 2007,
        year_end: 2015,
        leader: "Cristina Fernández de Kirchner",
        party: "FPV",
        party_full_name: "Frente para la Victoria (Justicialista)",
        spectrum: -5,
        regime_type: "democracy",
        description: "Nacionalizou a YPF, estatizou pensões e promoveu forte gasto social, enfrentando grande polarização com setores do agronegócio.",
        key_events: ["2008 - Conflito com produtores agrícolas", "2012 - Nacionalização da petrolífera YPF"]
      },
      {
        year_start: 2015,
        year_end: 2019,
        leader: "Mauricio Macri",
        party: "PRO",
        party_full_name: "Propuesta Republicana (Cambiemos)",
        spectrum: 4,
        regime_type: "democracy",
        description: "Governo de centro-direita. Eliminou controles cambiais, mas enfrentou forte crise de inflação necessitando de resgate emergencial do FMI.",
        key_events: ["2018 - Empréstimo emergencial recorde do FMI"]
      },
      {
        year_start: 2019,
        year_end: 2023,
        leader: "Alberto Fernández",
        party: "FdT",
        party_full_name: "Frente de Todos (Justicialista)",
        spectrum: -3,
        regime_type: "democracy",
        description: "Governo peronista de esquerda tendo Cristina Kirchner como vice-presidente. Enfrentou grave recessão e inflação acentuada.",
        key_events: ["2020 - Legalização do Aborto", "2022 - Atentado frustrado contra Cristina Kirchner"]
      },
      {
        year_start: 2023,
        year_end: 2024,
        leader: "Javier Milei",
        party: "LLA",
        party_full_name: "La Libertad Avanza",
        spectrum: 7,
        regime_type: "democracy",
        description: "Governo libertário-ultraliberal. Agenda drástica de austeridade fiscal, desregulamentação generalizada e forte combate à inflação.",
        key_events: ["2023 - Decreto DNU de desregulamentação", "2024 - Obtenção do primeiro superávit fiscal em uma década"]
      }
    ]
  },
  {
    code: "VE",
    name: "Venezuela",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 1948,
        leader: "Rómulo Betancourt / Rómulo Gallegos",
        party: "AD",
        party_full_name: "Acción Democrática",
        spectrum: -2,
        regime_type: "democracy",
        description: "Triênio democrático inicial. Sufrágio universal direto introduzido, derrubado por levante militar conservador.",
        key_events: ["1947 - Eleição direta de Rómulo Gallegos"]
      },
      {
        year_start: 1948,
        year_end: 1958,
        leader: "Marcos Pérez Jiménez",
        party: "MIL",
        party_full_name: "Forças Armadas da Venezuela (Ditadura)",
        spectrum: 6,
        regime_type: "authoritarian",
        description: "Ditadura militar nacionalista alimentada pela receita petrolífera, caracterizada por grandes obras e supressão da oposição.",
        key_events: ["1958 - Levante civil-militar de 23 de Janeiro derruba ditadura"]
      },
      {
        year_start: 1958,
        year_end: 1999,
        leader: "Pacto de Puntofijo (Betancourt, Leoni, CAP, Caldera)",
        party: "AD / COPEI",
        party_full_name: "Acción Democrática / COPEI",
        spectrum: 1,
        regime_type: "democracy",
        description: "Sistema bipartidário estável. Anos finais marcados por colapso do preço do petróleo, austeridade e revolta social.",
        key_events: ["1960 - Fundação da OPEP", "1989 - Revolta popular do Caracazo", "1992 - Tentativas de Golpe lideradas por Chávez"]
      },
      {
        year_start: 1999,
        year_end: 2013,
        leader: "Hugo Chávez",
        party: "PSUV",
        party_full_name: "Partido Socialista Unido de Venezuela",
        spectrum: -5,
        regime_type: "hybrid",
        description: "Revolução Bolivariana. Nova Constituição nacionalista, forte controle estatal e programas sociais massivos ('misiones') financiados por petróleo.",
        key_events: ["1999 - Nova Constituição Bolivariana", "2002 - Golpe de Estado de 48 horas frustrado", "2007 - Estatização de setores estratégicos"]
      },
      {
        year_start: 2013,
        year_end: 2024,
        leader: "Nicolás Maduro",
        party: "PSUV",
        party_full_name: "Partido Socialista Unido de Venezuela",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Consolidação autoritária sob grave colapso humanitário e hiperinflação. Supressão do parlamento e das forças opositoras.",
        key_events: ["2017 - Criação da Assembleia Constituinte paralela", "2019 - Crise de legitimidade (Juan Guaidó)", "2024 - Contestação internacional de fraude eleitoral"]
      }
    ]
  },
  {
    code: "HU",
    name: "Hungria",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1949,
        leader: "Coalizão pós-Guerra (Tildy, Nagy)",
        party: "FKgP",
        party_full_name: "Független Kisgazdapárt (Pequenos Proprietários)",
        spectrum: -1,
        regime_type: "transitional",
        description: "Governo multipartidário inicial. Pressão soviética eliminou gradualmente os democratas ('tática do salame').",
        key_events: ["1947 - Prisão de líderes da oposição democrata"]
      },
      {
        year_start: 1949,
        year_end: 1956,
        leader: "Mátyás Rákosi",
        party: "MDP",
        party_full_name: "Hungarian Working People's Party",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Era Stalinista violenta. Coletivização forçada e expurgos brutais caracterizaram seu governo pró-Moscou.",
        key_events: ["1953 - Afastamento temporário de Rákosi por pressões do Kremlin"]
      },
      {
        year_start: 1956,
        year_end: 1956,
        leader: "Imre Nagy",
        party: "MDP",
        party_full_name: "Hungarian Working People's Party (Reformista)",
        spectrum: -4,
        regime_type: "transitional",
        description: "Revolução de 1956. Nagy propõe neutralidade e saída do Pacto de Varsóvia, esmagada por intervenção militar do exército soviético.",
        key_events: ["1956 - Invasão Soviética e esmagamento da revolta", "1958 - Execução de Imre Nagy"]
      },
      {
        year_start: 1956,
        year_end: 1989,
        leader: "János Kádár",
        party: "MSZMP",
        party_full_name: "Hungarian Socialist Workers' Party",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Instalação do Comunismo Goulash. Controle político rígido atenuado por pequenas concessões de consumo privado e reformas limitadas.",
        key_events: ["1968 - Novo Mecanismo Econômico"]
      },
      {
        year_start: 1989,
        year_end: 2010,
        leader: "Era Democrática (Antall, Horn, Orbán I, Gyurcsány)",
        party: "MDF / MSZP / Fidesz",
        party_full_name: "Coalizões Democráticas Alternadas",
        spectrum: 1,
        regime_type: "democracy",
        description: "Transição democrática bem-sucedida. Entrada do país na OTAN e integração econômica na União Europeia.",
        key_events: ["1989 - Abertura da fronteira com a Áustria", "1999 - Ingressa na OTAN", "2004 - Ingressa na União Europeia"]
      },
      {
        year_start: 2010,
        year_end: 2024,
        leader: "Viktor Orbán",
        party: "Fidesz",
        party_full_name: "Fidesz - Hungarian Civic Alliance",
        spectrum: 6,
        regime_type: "hybrid",
        description: "Implantação declarada da 'Democracia Iliberal'. Controle ferrenho da mídia, alteração de leis eleitorais e atritos constantes com a União Europeia.",
        key_events: ["2011 - Nova Constituição conservadora", "2015 - Construção de cercas contra imigrantes", "2022 - Parlamento Europeu classifica país como autocracia eleitoral"]
      }
    ]
  },
  {
    code: "TR",
    name: "Turquia",
    region: "Middle East",
    periods: [
      {
        year_start: 1945,
        year_end: 1950,
        leader: "İsmet İnönü",
        party: "CHP",
        party_full_name: "Republican People's Party",
        spectrum: -1,
        regime_type: "transitional",
        description: "Transição pacífica do modelo de partido único autoritário kemalista para eleições democráticas competitivas.",
        key_events: ["1946 - Primeiras eleições abertas multipartidárias"]
      },
      {
        year_start: 1950,
        year_end: 1960,
        leader: "Adnan Menderes",
        party: "DP",
        party_full_name: "Democrat Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo liberal-conservador. Foco no desenvolvimento agrário e alinhamento com EUA. Deposto e executado por golpe militar.",
        key_events: ["1952 - Turquia ingressa na OTAN", "1960 - Primeiro golpe militar turco", "1961 - Execução de Menderes"]
      },
      {
        year_start: 1961,
        year_end: 1980,
        leader: "Coalizões e Instabilidade (Demirel, Ecevit)",
        party: "AP / CHP",
        party_full_name: "Adalet Partisi / Republican People's Party",
        spectrum: 0,
        regime_type: "democracy",
        description: "Instabilidade governamental marcada por violência urbana crônica entre milícias de extrema-direita e grupos de esquerda.",
        key_events: ["1971 - Golpe de Estado militar por Memorando", "1974 - Invasão e partição de Chipre"]
      },
      {
        year_start: 1980,
        year_end: 1983,
        leader: "General Kenan Evren",
        party: "MIL",
        party_full_name: "Conselho Militar de Fato (Junta)",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Golpe de Estado militar repressivo. Suspensão de partidos políticos, detenções em massa e promulgação de nova Constituição restritiva.",
        key_events: ["1982 - Promulgação da Constituição militar centralizadora"]
      },
      {
        year_start: 1983,
        year_end: 2003,
        leader: "Turgut Özal / Tansu Çiller",
        party: "ANAP / DYP",
        party_full_name: "Anavatan Partisi / Doğru Yol Partisi",
        spectrum: 2,
        regime_type: "democracy",
        description: "Abertura econômica e privatizações de mercado. Conflito armado prolongado com o separatismo curdo do PKK.",
        key_events: ["1997 - 'Golpe pós-moderno' força renúncia de primeiro-ministro islâmico"]
      },
      {
        year_start: 2003,
        year_end: 2014,
        leader: "Recep Tayyip Erdoğan (Premiê)",
        party: "AKP",
        party_full_name: "Justice and Development Party",
        spectrum: 1,
        regime_type: "hybrid",
        description: "Reformas iniciais pró-adesão europeia e boom econômico. Afastamento dos militares das decisões políticas.",
        key_events: ["2005 - Início formal de negociações de adesão à UE", "2013 - Protestos do Parque Gezi"]
      },
      {
        year_start: 2014,
        year_end: 2024,
        leader: "Recep Tayyip Erdoğan (Presidente)",
        party: "AKP",
        party_full_name: "Justice and Development Party",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Centralização drástica de poder pós-tentativa de golpe em 2016. Conversão do regime em Presidencialismo Executivo forte.",
        key_events: ["2016 - Tentativa fracassada de golpe militar", "2017 - Plebiscito aprova Presidencialismo", "2023 - Reeleição disputada de Erdoğan"]
      }
    ]
  },
  {
    code: "IN",
    name: "Índia",
    region: "Asia",
    periods: [
      {
        year_start: 1947,
        year_end: 1964,
        leader: "Jawaharlal Nehru",
        party: "INC",
        party_full_name: "Indian National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Fundador do Estado indiano moderno. Defensor do não-alinhamento externo, do planejamento estatal e do secularismo constitucional.",
        key_events: ["1947 - Independência e Partição da Índia", "1948 - Assassinato de Mahatma Gandhi", "1962 - Guerra Sino-Indiana"]
      },
      {
        year_start: 1964,
        year_end: 1966,
        leader: "Lal Bahadur Shastri",
        party: "INC",
        party_full_name: "Indian National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Liderou a Índia na Segunda Guerra com o Paquistão. Lançou as bases para a autonomia agrícola nacional.",
        key_events: ["1965 - Segunda Guerra Indo-Paquistanesa"]
      },
      {
        year_start: 1966,
        year_end: 1977,
        leader: "Indira Gandhi",
        party: "INC",
        party_full_name: "Indian National Congress",
        spectrum: -3,
        regime_type: "democracy",
        description: "Nacionalizou bancos. Decretou o Estado de Emergência autoritário (1975-1977) suspendendo direitos civis para reprimir a oposição.",
        key_events: ["1971 - Guerra de Bangladesh", "1975 - Declaração de Estado de Emergência autoritário"]
      },
      {
        year_start: 1977,
        year_end: 1980,
        leader: "Morarji Desai",
        party: "JP",
        party_full_name: "Janata Party Coalition",
        spectrum: 1,
        regime_type: "democracy",
        description: "Primeiro governo não-INC da Índia. Focado na reversão das medidas autoritárias do Estado de Emergência."
      },
      {
        year_start: 1980,
        year_end: 1984,
        leader: "Indira Gandhi",
        party: "INC",
        party_full_name: "Indian National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retornou focando na contenção da insurgência sikh em Punjab. Assassinada por seus próprios guarda-costas sikhs em 1984.",
        key_events: ["1984 - Operação Estrela Azul (Templo de Ouro)", "1984 - Assassinato de Indira Gandhi"]
      },
      {
        year_start: 1984,
        year_end: 1989,
        leader: "Rajiv Gandhi",
        party: "INC",
        party_full_name: "Indian National Congress",
        spectrum: -1,
        regime_type: "democracy",
        description: "Chanceler modernizador focado em telecomunicações. Interveio militarmente na Guerra Civil do vizinho Sri Lanka.",
        key_events: ["1984 - Desastre químico em Bhopal", "1987 - Intervenção militar no Sri Lanka"]
      },
      {
        year_start: 1989,
        year_end: 1998,
        leader: "P. V. Narasimha Rao / Outros",
        party: "INC",
        party_full_name: "Indian National Congress (Coalizão)",
        spectrum: 0,
        regime_type: "democracy",
        description: "Lançamento de reformas de abertura de mercado lideradas pelo ministro técnico de finanças Manmohan Singh.",
        key_events: ["1991 - Liberalização Econômica da Índia", "1992 - Demolição da mesquita de Babri"]
      },
      {
        year_start: 1998,
        year_end: 2004,
        leader: "Atal Bihari Vajpayee",
        party: "BJP",
        party_full_name: "Bharatiya Janata Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Líder de direita nacionalista moderada. Consolidação militar atômica indiana e conflito de Kargil.",
        key_events: ["1998 - Testes atômicos Pokhran-II", "1999 - Conflito armado em Kargil"]
      },
      {
        year_start: 2004,
        year_end: 2014,
        leader: "Manmohan Singh",
        party: "INC",
        party_full_name: "Indian National Congress (UPA)",
        spectrum: -2,
        regime_type: "democracy",
        description: "Chanceler economista. Rápido crescimento econômico nacional, mas abalado por escândalos e acusações de corrupção interna.",
        key_events: ["2008 - Ataques terroristas em Mumbai"]
      },
      {
        year_start: 2014,
        year_end: 2024,
        leader: "Narendra Modi",
        party: "BJP",
        party_full_name: "Bharatiya Janata Party",
        spectrum: 5,
        regime_type: "hybrid",
        description: "Plataforma populista nacionalista hindu (Hindutva). Crescimento econômico com declínio de pluralismo de imprensa e direitos de minorias.",
        key_events: ["2016 - Desmonetização financeira", "2019 - Revogação da autonomia especial da Caxemira", "2024 - Inauguração do Templo Ram Mandir em Ayodhya"]
      }
    ]
  },
  {
    code: "IL",
    name: "Israel",
    region: "Middle East",
    periods: [
      {
        year_start: 1948,
        year_end: 1963,
        leader: "David Ben-Gurion",
        party: "Mapai",
        party_full_name: "Workers' Party of Eretz Yisrael",
        spectrum: -2,
        regime_type: "democracy",
        description: "Declaração de independência e guerra de fundação. Construção do Estado de bem-estar e acolhimento em massa de refugiados.",
        key_events: ["1948 - Independência de Israel / Primeira Guerra", "1956 - Crise de Suez"]
      },
      {
        year_start: 1963,
        year_end: 1969,
        leader: "Levi Eshkol",
        party: "Mapai",
        party_full_name: "Labor Alignment",
        spectrum: -2,
        regime_type: "democracy",
        description: "Guerra dos Seis Dias em 1967. Início da ocupação israelense de Gaza, Cisjordânia, Península do Sinai e Colinas de Golã.",
        key_events: ["1967 - Guerra dos Seis Dias"]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Golda Meir",
        party: "LAB",
        party_full_name: "Labor Alignment",
        spectrum: -2,
        regime_type: "democracy",
        description: "Guerra do Yom Kippur de 1973. A surpresa militar árabe provocou séria crise governamental e forçou sua saída.",
        key_events: ["1972 - Massacre nas Olimpíadas de Munique", "1973 - Guerra do Yom Kippur"]
      },
      {
        year_start: 1974,
        year_end: 1977,
        leader: "Yitzhak Rabin",
        party: "LAB",
        party_full_name: "Labor Alignment",
        spectrum: -2,
        regime_type: "democracy",
        description: "Primeiro mandato do general focando na reconstrução e defesa militar no pós-1973.",
        key_events: ["1976 - Operação militar de resgate de Entebbe"]
      },
      {
        year_start: 1977,
        year_end: 1983,
        leader: "Menachem Begin",
        party: "Likud",
        party_full_name: "Likud Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Fim da hegemonia trabalhista. Assinou a paz com o Egito em Camp David e invadiu o sul do Líbano em 1982.",
        key_events: ["1978 - Acordos de Camp David com o Egito", "1982 - Invasão de Beirute no Líbano"]
      },
      {
        year_start: 1983,
        year_end: 1992,
        leader: "Yitzhak Shamir / Shimon Peres",
        party: "Likud / LAB",
        party_full_name: "Governo de Unidade Nacional (Rotatividade)",
        spectrum: 1,
        regime_type: "democracy",
        description: "Grandes coalizões combatendo a hiperinflação, eclosão da Primeira Intifada e Conferência de Paz de Madri.",
        key_events: ["1987 - Primeira Intifada Palestiniana", "1991 - Conferência de Madri"]
      },
      {
        year_start: 1992,
        year_end: 1995,
        leader: "Yitzhak Rabin",
        party: "LAB",
        party_full_name: "Labor Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Acordos de paz de Oslo estabelecendo a Autoridade Palestina. Assassinado em Tel Aviv por extremista judeu ultra-nacionalista.",
        key_events: ["1993 - Acordos de Oslo assinados", "1995 - Assassinato de Yitzhak Rabin"]
      },
      {
        year_start: 1995,
        year_end: 2009,
        leader: "Netanyahu / Barak / Sharon / Olmert",
        party: "Likud / Kadima",
        party_full_name: "Governos de Centro e Direita Alternados",
        spectrum: 2,
        regime_type: "democracy",
        description: "Eclosão da violenta Segunda Intifada palestina. Desocupação unilateral israelense de Gaza em 2005 por Ariel Sharon.",
        key_events: ["2000 - Início da Segunda Intifada", "2005 - Retirada militar de Gaza"]
      },
      {
        year_start: 2009,
        year_end: 2021,
        leader: "Benjamin Netanyahu",
        party: "Likud",
        party_full_name: "Likud Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Governo de direita. Forte expansão de assentamentos, contenção e isolamento do Irã, e normalização de laços árabes.",
        key_events: ["2018 - Embaixada dos EUA em Jerusalém", "2020 - Acordos de Abraham"]
      },
      {
        year_start: 2021,
        year_end: 2022,
        leader: "Naftali Bennett / Yair Lapid",
        party: "Yamina / YA",
        party_full_name: "Coalizão de Mudança",
        spectrum: 2,
        regime_type: "democracy",
        description: "Governo de ampla coalizão contendo partidos da direita, esquerda e um bloco político árabe para tirar Netanyahu."
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Benjamin Netanyahu",
        party: "Likud",
        party_full_name: "Likud & Aliados de Extrema-Direita",
        spectrum: 5,
        regime_type: "democracy",
        description: "Governo conservador polarizador. Envolvido em profunda divisão por reforma jurídica e na guerra contra o Hamas em Gaza.",
        key_events: ["2023 - Crise da Reforma Judicial", "2023 - Ataques terroristas de 7 de Outubro e subsequente Guerra em Gaza"]
      }
    ]
  },
  {
    code: "IR",
    name: "Irã",
    region: "Middle East",
    periods: [
      {
        year_start: 1945,
        year_end: 1951,
        leader: "Mohammad Reza Pahlavi",
        party: "MON",
        party_full_name: "Dinastia Pahlavi (Monarquia)",
        spectrum: 4,
        regime_type: "monarchy",
        description: "Jovem Xá governando sob Constituição persa sob forte influência britânica no refino de petróleo.",
        key_events: ["1946 - Crise Soviética do Azerbaijão"]
      },
      {
        year_start: 1951,
        year_end: 1953,
        leader: "Mohammad Mossadegh",
        party: "NF",
        party_full_name: "Frente Nacional",
        spectrum: -2,
        regime_type: "democracy",
        description: "Premiê democraticamente eleito. Nacionalizou a produção de petróleo, gerando retaliação e deposição militar ocidental.",
        key_events: ["1951 - Nacionalização do Petróleo", "1953 - Golpe de Estado orquestrado pela CIA/MI6 (Operação Ajax)"]
      },
      {
        year_start: 1953,
        year_end: 1979,
        leader: "Mohammad Reza Pahlavi (Restaurado)",
        party: "MON",
        party_full_name: "Monarquia Autocrática / Savak",
        spectrum: 5,
        regime_type: "monarchy",
        description: "Retorno do Xá. Estabeleceu governo pró-ocidental autoritário, reprimindo islâmicos e comunistas sob forte repressão policial.",
        key_events: ["1963 - Revolução Branca", "1971 - Festividades de 2500 anos de Persa"]
      },
      {
        year_start: 1979,
        year_end: 1989,
        leader: "Ruhollah Khomeini",
        party: "CLER",
        party_full_name: "Clero Islâmico Teocrático (Líder Supremo)",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Revolução Islâmica depõe monarquia e instala República Teocrática xiita. Longo conflito de fronteira defensivo contra o Iraque.",
        key_events: ["1979 - Revolução Islâmica / Reféns americanos", "1980 - Início da Guerra Irã-Iraque", "1988 - Fim da Guerra com impasse"]
      },
      {
        year_start: 1989,
        year_end: 1997,
        leader: "Akbar Hashemi Rafsanjani",
        party: "CLER",
        party_full_name: "Clero Conservador (Liderança Teocrática)",
        spectrum: -6,
        regime_type: "authoritarian",
        description: "Período de reconstrução econômica nacional sob o comando teocrático do novo Líder Supremo Ali Khamenei."
      },
      {
        year_start: 1997,
        year_end: 2005,
        leader: "Mohammad Khatami",
        party: "REF",
        party_full_name: "Clero Reformista",
        spectrum: -4,
        regime_type: "hybrid",
        description: "Tentativa de abertura democrática interna e de liberdades civis. Bloqueado pelo conselho teocrático conservador.",
        key_events: ["1999 - Repressão a protestos estudantis"]
      },
      {
        year_start: 2005,
        year_end: 2013,
        leader: "Mahmoud Ahmadinejad",
        party: "CON",
        party_full_name: "Aliança de Construtores do Irã",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Populismo anti-ocidental radical. Aceleração do enriquecimento de urânio. Reeleição sob denúncia e repressão violenta em 2009.",
        key_events: ["2009 - Protestos da Onda Verde contra fraude"]
      },
      {
        year_start: 2013,
        year_end: 2021,
        leader: "Hassan Rouhani",
        party: "MOD",
        party_full_name: "Clero Moderado",
        spectrum: -5,
        regime_type: "hybrid",
        description: "Concluiu o acordo de controle atômico em 2015 com potências. Acordo enfraquecido após saída americana em 2018.",
        key_events: ["2015 - Acordo Nuclear JCPOA", "2018 - Retirada unilateral americana do JCPOA por Trump"]
      },
      {
        year_start: 2021,
        year_end: 2024,
        leader: "Ebrahim Raisi",
        party: "CON",
        party_full_name: "Clero Linha-Dura",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Domínio integral conservador. Enfrentou grandes revoltas populares sob a liderança de mulheres e repressão violenta.",
        key_events: ["2022 - Protestos pela morte de Mahsa Amini", "2024 - Morte de Raisi em queda de helicóptero"]
      }
    ]
  },
  {
    code: "ZA",
    name: "África do Sul",
    region: "Africa",
    periods: [
      {
        year_start: 1945,
        year_end: 1948,
        leader: "Jan Smuts",
        party: "UP",
        party_full_name: "United Party",
        spectrum: 3,
        regime_type: "hybrid",
        description: "Democracia restrita apenas à minoria branca. Início do estabelecimento de segregações raciais de fato antes da lei."
      },
      {
        year_start: 1948,
        year_end: 1994,
        leader: "Apartheid (Malan, Verwoerd, Botha, de Klerk)",
        party: "NP",
        party_full_name: "National Party (Apartheid)",
        spectrum: 8,
        regime_type: "authoritarian",
        description: "Legalização e repressão extrema do regime de segregação racial do Apartheid. Maioria negra banida da participação política formal.",
        key_events: ["1960 - Massacre de Sharpeville", "1964 - Prisão perpétua de Mandela", "1976 - Protesto de Soweto", "1990 - Libertação de Nelson Mandela"]
      },
      {
        year_start: 1994,
        year_end: 1999,
        leader: "Nelson Mandela",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Primeiro presidente negro eleito democraticamente. Governo focado em reconciliação social e nova Constituição igualitária.",
        key_events: ["1994 - Primeiras eleições universais livres", "1996 - Nova Constituição assinada"]
      },
      {
        year_start: 1999,
        year_end: 2008,
        leader: "Thabo Mbeki",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Foco no crescimento econômico neoliberal africano, mas criticado por posturas erráticas de controle da crise do HIV.",
        key_events: ["2008 - Destituído pela liderança interna do ANC"]
      },
      {
        year_start: 2008,
        year_end: 2018,
        leader: "Jacob Zuma",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Período marcado por acusações sistêmicas de suborno e de captura do Estado por interesses oligárquicos comerciais.",
        key_events: ["2012 - Tiroteio policial de Marikana", "2018 - Renúncia forçada pelo ANC devido a escândalos"]
      },
      {
        year_start: 2018,
        year_end: 2024,
        leader: "Cyril Ramaphosa",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -1,
        regime_type: "democracy",
        description: "Busca por reforma econômica, enfrentando graves problemas na rede energética estatal e a perda de maioria do ANC em 2024.",
        key_events: ["2024 - Perda de maioria absoluta força governo de unidade"]
      }
    ]
  },
  {
    code: "JP",
    name: "Japão",
    region: "Asia",
    periods: [
      {
        year_start: 1945,
        year_end: 1952,
        leader: "Ocupação Aliada (Douglas MacArthur)",
        party: "MIL",
        party_full_name: "Ocupação Militar (SCAP)",
        spectrum: 0,
        regime_type: "transitional",
        description: "Período pós-Guerra. Ocupação militar americana focada em desmilitarização e na introdução da Constituição Pacifista.",
        key_events: ["1947 - Nova Constituição do Japão", "1951 - Tratado de San Francisco"]
      },
      {
        year_start: 1952,
        year_end: 1955,
        leader: "Yoshida Shigeru",
        party: "LP",
        party_full_name: "Liberal Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Doutrina Yoshida: priorização do crescimento industrial em estreita aliança militar protetiva com EUA.",
        key_events: ["1952 - Recuperação de soberania nipônica"]
      },
      {
        year_start: 1955,
        year_end: 1993,
        leader: "Predomínio do LDP (Ikeda, Sato, Nakasone)",
        party: "LDP",
        party_full_name: "Liberal Democratic Party (Conservador)",
        spectrum: 3,
        regime_type: "democracy",
        description: "O chamado 'Sistema 1955' de hegemonia conservadora. Forte milagre industrial encerrado pelo estouro de bolha imobiliária.",
        key_events: ["1964 - Olimpíadas de Tóquio", "1972 - Devolução de Okinawa", "1990 - Estouro de bolha financeira japonesa"]
      },
      {
        year_start: 1993,
        year_end: 1996,
        leader: "Hosokawa / Murayama",
        party: "COAL",
        party_full_name: "Coalizão Anti-LDP / JSP",
        spectrum: -1,
        regime_type: "democracy",
        description: "Primeiro afastamento do LDP do poder por ampla coalizão reformista e depois socialista.",
        key_events: ["1995 - Sismo de Kobe e atentado químico com sarin no metrô de Tóquio"]
      },
      {
        year_start: 1996,
        year_end: 2009,
        leader: "LDP Restaurado (Hashimoto, Koizumi)",
        party: "LDP",
        party_full_name: "Liberal Democratic Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "LDP reassume. Marcado pelas privatizações e reformas liberais agressivas de Junichiro Koizumi nos correios.",
        key_events: ["2001 - Eleição de Junichiro Koizumi", "2005 - Privatização dos Correios"]
      },
      {
        year_start: 2009,
        year_end: 2012,
        leader: "Governo do DPJ (Hatoyama, Kan, Noda)",
        party: "DPJ",
        party_full_name: "Democratic Party of Japan",
        spectrum: -1,
        regime_type: "democracy",
        description: "Gestão de centro-esquerda. Crise política decorrente da catástrofe de Fukushima (tsunami e fusão atômica).",
        key_events: ["2011 - Sismo e Tsunami de Tohoku e Desastre de Fukushima"]
      },
      {
        year_start: 2012,
        year_end: 2020,
        leader: "Shinzo Abe",
        party: "LDP",
        party_full_name: "Liberal Democratic Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler de mandato longo. Implementou a macroeconomia do 'Abenomics' e buscou reinterpretação da Constituição pacifista.",
        key_events: ["2013 - Abenomics iniciado", "2020 - Renúncia por problemas de saúde"]
      },
      {
        year_start: 2020,
        year_end: 2024,
        leader: "Yoshihide Suga / Fumio Kishida",
        party: "LDP",
        party_full_name: "Liberal Democratic Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Gestão pós-pandemia e realização das Olimpíadas. Fortalecimento da aliança de defesa regional frente à China.",
        key_events: ["2021 - Olimpíadas de Tóquio 2020", "2022 - Assassinato de Shinzo Abe"]
      }
    ]
  },
  {
    code: "KR",
    name: "Coreia do Sul",
    region: "Asia",
    periods: [
      {
        year_start: 1945,
        year_end: 1948,
        leader: "Governo Militar dos EUA",
        party: "MIL",
        party_full_name: "United States Army Military Government",
        spectrum: 0,
        regime_type: "transitional",
        description: "Administração militar pós-guerra no sul da península após a derrota do Império Japonês.",
        key_events: ["1945 - Divisão da Coreia no paralelo 38"]
      },
      {
        year_start: 1948,
        year_end: 1960,
        leader: "Syngman Rhee",
        party: "LP",
        party_full_name: "Liberal Party",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Primeiro presidente coreano. Governo autoritário anticomunista severo, deposto por revolta civil estudantil.",
        key_events: ["1950 - Guerra da Coreia", "1953 - Armistício de Coreia", "1960 - Revolução de Abril força renúncia de Rhee"]
      },
      {
        year_start: 1960,
        year_end: 1961,
        leader: "Segunda República (Yun Posun)",
        party: "DP",
        party_full_name: "Democratic Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Breve interregno democrático marcado por instabilidade interna, destituído por oficiais militares.",
        key_events: ["1961 - Golpe militar de 16 de Maio liderado por Park"]
      },
      {
        year_start: 1961,
        year_end: 1979,
        leader: "Park Chung-hee",
        party: "DRP",
        party_full_name: "Democratic Republican Party (Ditadura)",
        spectrum: 7,
        regime_type: "authoritarian",
        description: "Ditadura militar desenvolvimentista (Milagre no Rio Han com Chaebols). Assassinado pelo próprio chefe da inteligência coreana.",
        key_events: ["1972 - Constituição Yushin autocrática", "1979 - Assassinato de Park Chung-hee"]
      },
      {
        year_start: 1979,
        year_end: 1988,
        leader: "Chun Doo-hwan",
        party: "DJP",
        party_full_name: "Democratic Justice Party (Ditadura)",
        spectrum: 8,
        regime_type: "authoritarian",
        description: "Assumiu o poder por golpe militar. Reprimiu revoltas com violência, forçado a aceitar abertura eleitoral em 1987.",
        key_events: ["1980 - Massacre de Gwangju", "1987 - Declaração de Abertura Eleitoral Direta"]
      },
      {
        year_start: 1988,
        year_end: 1993,
        leader: "Roh Tae-woo",
        party: "DLP",
        party_full_name: "Democratic Liberal Party",
        spectrum: 3,
        regime_type: "transitional",
        description: "General que venceu primeira eleição direta competitiva. Foco na diplomacia olímpica e transição democrática.",
        key_events: ["1988 - Olimpíadas de Seul"]
      },
      {
        year_start: 1993,
        year_end: 1998,
        leader: "Kim Young-sam",
        party: "DLP",
        party_full_name: "Democratic Liberal Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Primeiro presidente totalmente civil. Conduziu o julgamento histórico dos ex-presidentes militares e lidou com crise financeira.",
        key_events: ["1996 - Julgamento e prisão de Chun e Roh", "1997 - Crise Financeira Asiática"]
      },
      {
        year_start: 1998,
        year_end: 2003,
        leader: "Kim Dae-jung",
        party: "MDP",
        party_full_name: "Millennium Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo progressista de esquerda. Estabeleceu a 'Política do Sol' com a Coreia do Norte, recebendo o Nobel da Paz.",
        key_events: ["2000 - Cúpula Intercoreana", "2002 - Copa do Mundo Coreia-Japão"]
      },
      {
        year_start: 2003,
        year_end: 2008,
        leader: "Roh Moo-hyun",
        party: "URI",
        party_full_name: "Uri Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo focado no combate à corrupção e no fortalecimento de reformas civis internas."
      },
      {
        year_start: 2008,
        year_end: 2017,
        leader: "Lee Myung-bak / Park Geun-hye",
        party: "SEN",
        party_full_name: "Saenuri Party (Conservador)",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo conservador. Culminou no impeachment e detenção de Park Geun-hye em 2017 após grandes protestos.",
        key_events: ["2014 - Tragédia do Sewol", "2017 - Impeachment de Park Geun-hye"]
      },
      {
        year_start: 2017,
        year_end: 2022,
        leader: "Moon Jae-in",
        party: "DPK",
        party_full_name: "Democratic Party of Korea",
        spectrum: -2,
        regime_type: "democracy",
        description: "Progressista. Avanços sociais, forte combate à pandemia e nova aproximação pacífica com o Norte.",
        key_events: ["2018 - Encontro na DMZ com Kim Jong-un"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Yoon Suk-yeol",
        party: "PPP",
        party_full_name: "People Power Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Conservador. Alinhamento militar estreito com EUA e Japão contra ameaças norte-coreanas.",
        key_events: ["2023 - Cúpula Trilateral de Camp David"]
      }
    ]
  },
  {
    code: "IT",
    name: "Itália",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1946,
        leader: "Alcide De Gasperi",
        party: "DC",
        party_full_name: "Democrazia Cristiana (Transição)",
        spectrum: 0,
        regime_type: "transitional",
        description: "Governo de coalizão pós-fascista organizando o referendo constitucional de fundação da República.",
        key_events: ["1946 - Referendo decreta fim de Monarquia e cria República"]
      },
      {
        year_start: 1946,
        year_end: 1981,
        leader: "Predomínio Democrata Cristão (De Gasperi, Moro)",
        party: "DC",
        party_full_name: "Democrazia Cristiana",
        spectrum: 2,
        regime_type: "democracy",
        description: "Anos marcados por boom industrial, mas assolados pelo terrorismo doméstico dos Anos de Chumbo.",
        key_events: ["1957 - Tratados de Roma", "1978 - Sequestro e morte de Aldo Moro"]
      },
      {
        year_start: 1981,
        year_end: 1991,
        leader: "Bettino Craxi / Pentapartito",
        party: "PSI",
        party_full_name: "Partito Socialista Italiano / Coalizão",
        spectrum: 1,
        regime_type: "democracy",
        description: "Governos de cinco partidos liberais e socialistas. Forte aumento de endividamento público.",
        key_events: ["1984 - Concordata do Vaticano"]
      },
      {
        year_start: 1991,
        year_end: 1994,
        leader: "Mani Pulite (Transição)",
        party: "IND",
        party_full_name: "Governos Técnicos (Mãos Limpas)",
        spectrum: 0,
        regime_type: "transitional",
        description: "Colapso judicial dos principais partidos da Primeira República devido à investigação Mani Pulite.",
        key_events: ["1992 - Assassinatos de Falcone e Borsellino", "1994 - Fim dos partidos tradicionais (DC, PSI)"]
      },
      {
        year_start: 1994,
        year_end: 2011,
        leader: "Alternância Berlusconi / Prodi",
        party: "FI / UL",
        party_full_name: "Forza Italia / Coalizão L'Ulivo",
        spectrum: 2,
        regime_type: "democracy",
        description: "Heurística política de Silvio Berlusconi e seus aliados de direita, alternada por governos de Romano Prodi.",
        key_events: ["2001 - Euro entra em circulação", "2009 - Terremoto de L'Aquila"]
      },
      {
        year_start: 2011,
        year_end: 2018,
        leader: "Mário Monti / Matteo Renzi",
        party: "PD",
        party_full_name: "Partito Democratico & Técnicos",
        spectrum: 0,
        regime_type: "democracy",
        description: "Governos técnicos de austeridade fiscal decorrente da crise do Euro e posterior gestão liberal de Renzi.",
        key_events: ["2016 - Renúncia de Renzi pós-referendo"]
      },
      {
        year_start: 2018,
        year_end: 2022,
        leader: "Giuseppe Conte / Mario Draghi",
        party: "M5S",
        party_full_name: "Movimento 5 Estrelas / Técnico",
        spectrum: 0,
        regime_type: "democracy",
        description: "Governo populista e posterior gestão do ex-chefe do BCE Mario Draghi durante a pandemia de COVID-19.",
        key_events: ["2020 - Itália torna-se primeiro foco ocidental da COVID-19"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Giorgia Meloni",
        party: "FdI",
        party_full_name: "Fratelli d'Italia",
        spectrum: 5,
        regime_type: "democracy",
        description: "Primeira mulher a assumir o executivo italiano. Lidera coalizão conservadora e nacionalista com foco em segurança.",
        key_events: ["2022 - Posse do governo Meloni", "2023 - Morte de Silvio Berlusconi"]
      }
    ]
  },
  {
    code: "ES",
    name: "Espanha",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1975,
        leader: "Francisco Franco",
        party: "FE",
        party_full_name: "Falange Española / Movimiento Nacional",
        spectrum: 8,
        regime_type: "authoritarian",
        description: "Ditadura fascista/corporativista católica. Isolamento internacional inicial seguido por boom turístico e abertura econômica tardia.",
        key_events: ["1955 - Espanha entra na ONU", "1973 - Assassinato de Carrero Blanco por ETA", "1975 - Morte de Franco e restauração do rei"]
      },
      {
        year_start: 1975,
        year_end: 1982,
        leader: "Adolfo Suárez",
        party: "UCD",
        party_full_name: "Unión de Centro Democrático",
        spectrum: 2,
        regime_type: "transitional",
        description: "Período da Transição Espanhola. Redação da Constituição democrática de 1978 e concessão de anistias gerais.",
        key_events: ["1978 - Aprovação da Constituição democrática", "1981 - Tentativa de golpe militar do 23-F"]
      },
      {
        year_start: 1982,
        year_end: 1996,
        leader: "Felipe González",
        party: "PSOE",
        party_full_name: "Partido Socialista Obrero Español",
        spectrum: -2,
        regime_type: "democracy",
        description: "Modernização nacional de infraestrutura e adesão formal da Espanha à União Europeia e OTAN.",
        key_events: ["1986 - Espanha entra na CEE", "1992 - Olimpíadas de Barcelona"]
      },
      {
        year_start: 1996,
        year_end: 2004,
        leader: "José María Aznar",
        party: "PP",
        party_full_name: "Partido Popular",
        spectrum: 3,
        regime_type: "democracy",
        description: "Boom imobiliário alimentado por juros baixos, adoção do Euro e alinhamento com a intervenção militar no Iraque.",
        key_events: ["2002 - Desastre ecológico do petroleiro Prestige", "2004 - Atentados terroristas islâmicos no metrô de Madri"]
      },
      {
        year_start: 2004,
        year_end: 2011,
        leader: "José Luis Rodríguez Zapatero",
        party: "PSOE",
        party_full_name: "Partido Socialista Obrero Español",
        spectrum: -2,
        regime_type: "democracy",
        description: "Legalização do casamento gay, leis de memória histórica. Governo abalado gravemente pela crise global de 2008.",
        key_events: ["2005 - Casamento homoafetivo legalizado", "2011 - Protestos do Movimento 15-M"]
      },
      {
        year_start: 2011,
        year_end: 2018,
        leader: "Mariano Rajoy",
        party: "PP",
        party_full_name: "Partido Popular",
        spectrum: 3,
        regime_type: "democracy",
        description: "Medidas drásticas de austeridade pós-crise. Suspensão temporária do governo regional catalão após plebiscito inconstitucional de independência.",
        key_events: ["2014 - Abdicação de Juan Carlos I", "2017 - Referendo ilegal na Catalunha"]
      },
      {
        year_start: 2018,
        year_end: 2024,
        leader: "Pedro Sánchez",
        party: "PSOE",
        party_full_name: "Partido Socialista Obrero Español",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo progressista de coalizão. Implementou anistia polêmica a separatistas catalães visando sustentação parlamentar.",
        key_events: ["2019 - Exumação dos restos de Franco", "2023 - Lei de Anistia Catalã controversa"]
      }
    ]
  },
  {
    code: "SE",
    name: "Suécia",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1969,
        leader: "Tage Erlander",
        party: "SAP",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -3,
        regime_type: "democracy",
        description: "Chanceler social-democrata com mandato recorde (24 anos). Estabeleceu as bases do modelo de bem-estar sueco.",
        key_events: ["1953 - Ampliação de férias legais remuneradas"]
      },
      {
        year_start: 1969,
        year_end: 1976,
        leader: "Olof Palme",
        party: "SAP",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -4,
        regime_type: "democracy",
        description: "Forte ativismo em direitos humanos internacionais e crítica aberta aos imperialismos soviético e americano.",
        key_events: ["1972 - Crítica aos bombardeios dos EUA em Hanói"]
      },
      {
        year_start: 1976,
        year_end: 1982,
        leader: "Thorbjörn Fälldin",
        party: "C",
        party_full_name: "Centerpartiet (Coalizão)",
        spectrum: 2,
        regime_type: "democracy",
        description: "Primeiro governo não social-democrata em 40 anos, sob impasse em relação ao uso de energia nuclear."
      },
      {
        year_start: 1982,
        year_end: 1991,
        leader: "Olof Palme / Ingvar Carlsson",
        party: "SAP",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -3,
        regime_type: "democracy",
        description: "Retorno de Palme ao poder. Período encerrado pelo seu assassinato não resolvido em Estocolmo.",
        key_events: ["1986 - Assassinato do primeiro-ministro Olof Palme"]
      },
      {
        year_start: 1991,
        year_end: 1994,
        leader: "Carl Bildt",
        party: "M",
        party_full_name: "Moderaterna (Coalizão)",
        spectrum: 3,
        regime_type: "democracy",
        description: "Liderou reformas liberais de mercado e desregulamentação civil durante forte crise bancária nacional.",
        key_events: ["1992 - Crise de taxas de juros recordes"]
      },
      {
        year_start: 1994,
        year_end: 2006,
        leader: "Ingvar Carlsson / Göran Persson",
        party: "SAP",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -2,
        regime_type: "democracy",
        description: "Ingresso do país na União Europeia e consolidação das finanças pós-crise com corte de gastos.",
        key_events: ["1995 - Suécia entra na União Europeia", "2003 - Assassinato de Anna Lindh"]
      },
      {
        year_start: 2006,
        year_end: 2014,
        leader: "Fredrik Reinfeldt",
        party: "M",
        party_full_name: "Moderaterna (Aliança)",
        spectrum: 2,
        regime_type: "democracy",
        description: "Governo de centro-direita. Redução de impostos sobre renda corporativa e trabalhista sob a coligação Alliansen.",
        key_events: ["2008 - Suécia ratifica o Tratado de Lisboa"]
      },
      {
        year_start: 2014,
        year_end: 2022,
        leader: "Stefan Löfven / M. Andersson",
        party: "SAP",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo progressista minoritário. Lidou com crise migratória de 2015 e iniciou o pedido de entrada à OTAN.",
        key_events: ["2015 - Acolhimento massivo de refugiados", "2022 - Pedido de adesão à OTAN pós-invasão da Ucrânia"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Ulf Kristersson",
        party: "M",
        party_full_name: "Moderaterna & Aliados",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler moderado governando com suporte da extrema-direita (SD) focando no combate à criminalidade urbana.",
        key_events: ["2024 - Suécia entra oficialmente na OTAN como 32º membro"]
      }
    ]
  },
  {
    code: "MX",
    name: "México",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 2000,
        leader: "Hegemonia do PRI (Alemán, Portillo, Salinas)",
        party: "PRI",
        party_full_name: "Partido Revolucionario Institucional",
        spectrum: 3,
        regime_type: "hybrid",
        description: "Período do 'desenvolvimento estabilizador' sob controle quase absoluto do PRI. Eleições sob acusações de controle estatal.",
        key_events: ["1968 - Massacre de Tlatelolco", "1994 - Rebelião Zapatista (EZLN) e assinatura do NAFTA"]
      },
      {
        year_start: 2000,
        year_end: 2012,
        leader: "Fox / Calderón (Alternância)",
        party: "PAN",
        party_full_name: "Partido Acción Nacional",
        spectrum: 3,
        regime_type: "democracy",
        description: "Primeira alternância de poder do México moderno. Calderón militarizou o combate ao crime organizado (guerra às drogas).",
        key_events: ["2006 - Início da ofensiva militar contra carteis de drogas"]
      },
      {
        year_start: 2012,
        year_end: 2018,
        leader: "Enrique Peña Nieto",
        party: "PRI",
        party_full_name: "Partido Revolucionario Institucional",
        spectrum: 2,
        regime_type: "democracy",
        description: "Retorno do PRI. Implementação de reformas estruturais (energia), sob fortes escândalos e crise de segurança.",
        key_events: ["2014 - Desaparecimento forçado de estudantes de Ayotzinapa"]
      },
      {
        year_start: 2018,
        year_end: 2024,
        leader: "Andrés Manuel López Obrador",
        party: "MORENA",
        party_full_name: "Movimiento Regeneración Nacional",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo progressista de esquerda ('Quarta Transformação'). Programas sociais de infraestrutura e postura retórica soberanista.",
        key_events: ["2020 - Criação da Guarda Nacional", "2024 - Eleição histórica de Claudia Sheinbaum"]
      }
    ]
  },
  {
    code: "CL",
    name: "Chile",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 1970,
        leader: "Presidências Democráticas (González, Alessandri, Frei)",
        party: "PR / PDC",
        party_full_name: "Partido Radical / Democracia Cristã",
        spectrum: -1,
        regime_type: "democracy",
        description: "Período democrático estável. Reformas agrárias graduais sob a Doutrina de Revolução em Liberdade de Frei Montalva."
      },
      {
        year_start: 1970,
        year_end: 1973,
        leader: "Salvador Allende",
        party: "UP",
        party_full_name: "Unidad Popular (Socialista)",
        spectrum: -4,
        regime_type: "democracy",
        description: "Via chilena ao socialismo: nacionalização do cobre e intervenções agrárias rápidas. Derrubado por violento golpe militar em 1973.",
        key_events: ["1971 - Nacionalização do Cobre", "1973 - Golpe Militar e bombardeio de La Moneda"]
      },
      {
        year_start: 1973,
        year_end: 1990,
        leader: "Augusto Pinochet",
        party: "MIL",
        party_full_name: "Junta Militar de Gobierno (Ditadura)",
        spectrum: 8,
        regime_type: "authoritarian",
        description: "Ditadura militar altamente repressiva. Implementação de reformas neoliberais (Chicago Boys) e nova Constituição de 1980.",
        key_events: ["1980 - Promulgação de nova Constituição", "1988 - Plebiscito do 'Não' determina fim do regime"]
      },
      {
        year_start: 1990,
        year_end: 2010,
        leader: "Concertación (Aylwin, Frei, Lagos, Bachelet I)",
        party: "PDC / PS",
        party_full_name: "Coalición de Partidos por la Democracia",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retorno democrático sob coalizão progressista. Crescimento econômico acelerado aliado a programas de redução de pobreza extrema.",
        key_events: ["1998 - Detenção de Pinochet em Londres", "2006 - Posse da primeira presidente mulher, Michelle Bachelet"]
      },
      {
        year_start: 2010,
        year_end: 2022,
        leader: "Alternância Piñera / Bachelet II",
        party: "RN / PS",
        party_full_name: "Renovación Nacional / Partido Socialista",
        spectrum: 1,
        regime_type: "democracy",
        description: "Alternâncias regulares. Período marcado pelo severo Estallido Social de 2019 exigindo novas reformas constitucionais.",
        key_events: ["2019 - Eclosão do Estallido Social", "2020 - Plebiscito aprova processo constituinte"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Gabriel Boric",
        party: "AD",
        party_full_name: "Apruebo Dignidad (Frente Amplia)",
        spectrum: -3,
        regime_type: "democracy",
        description: "Governo progressista jovem focado em reformas ambientais e sociais, marcado pela rejeição de novas propostas de texto constitucional.",
        key_events: ["2022 - Rejeição do primeiro rascunho da Constituição em plebiscito"]
      }
    ]
  },
  {
    code: "CU",
    name: "Cuba",
    region: "Americas",
    periods: [
      {
        year_start: 1945,
        year_end: 1952,
        leader: "Grau San Martín / Carlos Prío",
        party: "PRC-A",
        party_full_name: "Partido Revolucionario Cubano - Auténtico",
        spectrum: 2,
        regime_type: "democracy",
        description: "Período democrático caracterizado por crescimento econômico, mas assolado por alta corrupção estatal."
      },
      {
        year_start: 1952,
        year_end: 1959,
        leader: "Fulgencio Batista",
        party: "PAP",
        party_full_name: "Partido de Acción Unida (Ditadura)",
        spectrum: 6,
        regime_type: "authoritarian",
        description: "Assumiu via golpe militar. Governo autoritário repressivo pró-EUA, derrubado pelo Movimento 26 de Julho.",
        key_events: ["1953 - Assalto ao Quartel Moncada", "1959 - Fuga de Batista / Vitória da Revolução Cubana"]
      },
      {
        year_start: 1959,
        year_end: 2008,
        leader: "Fidel Castro",
        party: "PCC",
        party_full_name: "Partido Comunista de Cuba",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Instalação do regime socialista soviético de partido único. Avanços em educação e medicina sob forte controle estatal.",
        key_events: ["1961 - Declaração do caráter socialista da Revolução", "1962 - Embargo econômico dos EUA", "1991 - Início do Período Especial pós-queda soviética"]
      },
      {
        year_start: 2008,
        year_end: 2018,
        leader: "Raúl Castro",
        party: "PCC",
        party_full_name: "Partido Comunista de Cuba",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Assumiu após afastamento de Fidel. Implementou reformas econômicas tímidas para a iniciativa privada e reatou laços com EUA.",
        key_events: ["2015 - Restabelecimento de relações diplomáticas com os EUA"]
      },
      {
        year_start: 2018,
        year_end: 2024,
        leader: "Miguel Díaz-Canel",
        party: "PCC",
        party_full_name: "Partido Comunista de Cuba",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Primeiro presidente civil cubano pós-revolução. Enfrentou grave recessão energética e inéditos protestos populares.",
        key_events: ["2021 - Protestos em massa de 11 de Julho (11J)"]
      }
    ]
  },
  {
    code: "KP",
    name: "Coreia do Norte",
    region: "Asia",
    periods: [
      {
        year_start: 1945,
        year_end: 1948,
        leader: "Ocupação Soviética",
        party: "MIL",
        party_full_name: "Comando Militar da URSS na Península",
        spectrum: -7,
        regime_type: "transitional",
        description: "Divisão da Coreia e administração militar soviética no norte do paralelo 38."
      },
      {
        year_start: 1948,
        year_end: 1994,
        leader: "Kim Il-sung",
        party: "WPK",
        party_full_name: "Workers' Party of Korea",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Fundador do Estado sob a doutrina nacionalista Juche (autossuficiência). Culto absoluto à personalidade e isolamento total.",
        key_events: ["1950 - Invasão do Sul / Guerra da Coreia", "1972 - Adoção da ideologia Juche na Constituição"]
      },
      {
        year_start: 1994,
        year_end: 2011,
        leader: "Kim Jong-il",
        party: "WPK",
        party_full_name: "Workers' Party of Korea",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Doutrina Songun (prioridade absoluta militar). Enfrentou severa fome generalizada nos anos 90 e iniciou o programa atômico.",
        key_events: ["1996 - Auge da Grande Fome Coreana", "2006 - Primeiro teste nuclear declarado da Coreia do Norte"]
      },
      {
        year_start: 2011,
        year_end: 2024,
        leader: "Kim Jong-un",
        party: "WPK",
        party_full_name: "Workers' Party of Korea",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Desenvolvimento rápido de mísseis balísticos intercontinentais e arsenal atômico sob isolamento contínuo.",
        key_events: ["2018 - Cúpula histórica com Donald Trump em Singapura", "2024 - Abandono formal da meta de reunificação pacífica com o Sul"]
      }
    ]
  },
  {
    code: "VN",
    name: "Vietnã",
    region: "Asia",
    periods: [
      {
        year_start: 1945,
        year_end: 1954,
        leader: "Guerra da Indochina (Ho Chi Minh / Ocupação)",
        party: "VM",
        party_full_name: "Viet Minh (Liga da Independência)",
        spectrum: -4,
        regime_type: "transitional",
        description: "Guerra de libertação anticolonial contra o domínio francês na Indochina.",
        key_events: ["1945 - Proclamação da independência", "1954 - Derrota francesa em Dien Bien Phu / Divisão do Vietnã"]
      },
      {
        year_start: 1954,
        year_end: 1975,
        leader: "Vietnã do Sul (Ngo Dinh Diem / Nguyen Van Thieu)",
        party: "IND",
        party_full_name: "República do Vietnã (Fronteiras Modernas no Mapa)",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Vietnã do Sul aliado aos EUA contra o Norte comunista de Ho Chi Minh, encerrado com a queda de Saigon em 1975.",
        key_events: ["1963 - Deposição e morte de Ngo Dinh Diem", "1965 - Entrada massiva de tropas dos EUA", "1975 - Queda de Saigon / Reunificação"]
      },
      {
        year_start: 1975,
        year_end: 1986,
        leader: "Le Duan",
        party: "CPV",
        party_full_name: "Communist Party of Vietnam",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Reunificação sob regime comunista. Coletivização agrária sob forte isolamento econômico pós-Guerra do Vietnã.",
        key_events: ["1978 - Intervenção vietnamita no Camboja derruba Khmer Vermelho", "1979 - Guerra Sino-Vietnamita de fronteira"]
      },
      {
        year_start: 1986,
        year_end: 2024,
        leader: "Doi Moi (Reformas de Mercado)",
        party: "CPV",
        party_full_name: "Communist Party of Vietnam",
        spectrum: -6,
        regime_type: "authoritarian",
        description: "Reformas de liberalização econômica Doi Moi (Economia de Mercado Orientada ao Socialismo), atraindo fortes investimentos globais.",
        key_events: ["1995 - Normalização de relações com os EUA", "2007 - Entrada do Vietnã na OMC"]
      }
    ]
  },
  {
    code: "CZ",
    name: "República Tcheca",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1948,
        leader: "Edvard Beneš (Tchecoslováquia)",
        party: "ČSNS",
        party_full_name: "Czechoslovak National Social Party",
        spectrum: -1,
        regime_type: "transitional",
        description: "Período democrático provisório na Tchecoslováquia pós-guerra, finalizado com o golpe comunista de 1948.",
        key_events: ["1948 - Golpe de Praga instala regime comunista"]
      },
      {
        year_start: 1948,
        year_end: 1968,
        leader: "Klement Gottwald / Antonín Novotný",
        party: "KSČ",
        party_full_name: "Communist Party of Czechoslovakia",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Instalação do modelo soviético stalinista na Tchecoslováquia, com expurgos internos e nacionalização completa.",
        key_events: ["1968 - Primavera de Praga sob o reformismo de Alexander Dubček"]
      },
      {
        year_start: 1968,
        year_end: 1989,
        leader: "Gustáv Husák (Normalização)",
        party: "KSČ",
        party_full_name: "Communist Party of Czechoslovakia",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Período da Normalização pós-invasão de tanques soviéticos, revertendo reformas da Primavera de Praga.",
        key_events: ["1977 - Publicação do manifesto dissidente Carta 77", "1989 - Revolução de Veludo depõe comunistas"]
      },
      {
        year_start: 1989,
        year_end: 1993,
        leader: "Václav Havel (Tchecoslováquia)",
        party: "OF",
        party_full_name: "Civic Forum (Fórum Cívico)",
        spectrum: 1,
        regime_type: "democracy",
        description: "Primeira presidência democrática de Václav Havel à frente do desmembramento pacífico com a Eslováquia.",
        key_events: ["1993 - Dissolução da Tchecoslováquia (Divórcio de Veludo)"]
      },
      {
        year_start: 1993,
        year_end: 2013,
        leader: "Václav Klaus (República Tcheca)",
        party: "ODS",
        party_full_name: "Civic Democratic Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Consolidação econômica liberal da República Tcheca e integração na União Europeia e OTAN.",
        key_events: ["1999 - Entrada na OTAN", "2004 - Entrada na União Europeia"]
      },
      {
        year_start: 2013,
        year_end: 2024,
        leader: "Miloš Zeman / Petr Fiala",
        party: "SPO / ODS",
        party_full_name: "Strana Práv Občanů / Civic Democratic Party",
        spectrum: 1,
        regime_type: "democracy",
        description: "Governo caracterizado por alianças de centro-direita e forte engajamento de defesa com a União Europeia.",
        key_events: ["2023 - Eleição do ex-general da OTAN Petr Pavel como presidente"]
      }
    ]
  },
  {
    code: "EG",
    name: "Egito",
    region: "Africa",
    periods: [
      {
        year_start: 1945,
        year_end: 1952,
        leader: "Rei Farouk I",
        party: "MON",
        party_full_name: "Dinastia Muhammad Ali (Monarquia)",
        spectrum: 3,
        regime_type: "monarchy",
        description: "Monarquia constitucional pró-britânica, marcada por desigualdade severa e descontentamento militar pós-guerra contra Israel.",
        key_events: ["1948 - Primeira Guerra Árabe-Israelense", "1952 - Revolução dos Oficiais Livres depõe monarca"]
      },
      {
        year_start: 1952,
        year_end: 1970,
        leader: "Gamal Abdel Nasser",
        party: "ASU",
        party_full_name: "Arab Socialist Union",
        spectrum: -4,
        regime_type: "authoritarian",
        description: "Nacionalismo árabe laico e socialismo nasserista. Nacionalizou o Canal de Suez e buscou liderança regional no Oriente Médio.",
        key_events: ["1956 - Nacionalização de Suez / Guerra", "1967 - Guerra dos Seis Dias"]
      },
      {
        year_start: 1970,
        year_end: 1981,
        leader: "Anwar Sadat",
        party: "NDP",
        party_full_name: "National Democratic Party",
        spectrum: 2,
        regime_type: "authoritarian",
        description: "Iniciou abertura econômica (Infitah) e assinou a paz histórica com Israel, gerando retaliação e seu assassinato em 1981.",
        key_events: ["1973 - Guerra do Yom Kippur", "1978 - Acordos de Camp David", "1981 - Assassinato de Sadat"]
      },
      {
        year_start: 1981,
        year_end: 2011,
        leader: "Hosni Mubarak",
        party: "NDP",
        party_full_name: "National Democratic Party",
        spectrum: 4,
        regime_type: "authoritarian",
        description: "Ditadura militar sob estado de emergência perpétuo. Alinhado aos EUA, derrubado nos protestos da Primavera Árabe em 2011.",
        key_events: ["2011 - Protestos da Praça Tahrir forçam renúncia de Mubarak"]
      },
      {
        year_start: 2011,
        year_end: 2013,
        leader: "Mohamed Morsi (Irmandade Islâmica)",
        party: "FJP",
        party_full_name: "Freedom and Justice Party",
        spectrum: -3,
        regime_type: "hybrid",
        description: "Primeiro presidente civil democraticamente eleito, destituído por golpe militar após intensos protestos populares.",
        key_events: ["2013 - Golpe de Estado militar liderado por al-Sisi"]
      },
      {
        year_start: 2013,
        year_end: 2024,
        leader: "Abdel Fattah al-Sisi",
        party: "IND",
        party_full_name: "Independente (Militar/Fato)",
        spectrum: 6,
        regime_type: "authoritarian",
        description: "Consolidação autoritária militar. Repressão drástica a grupos islâmicos e opositores civis sob forte crise econômica nacional.",
        key_events: ["2019 - Reformas constitucionais estendem mandatos presidenciais"]
      }
    ]
  },
  {
    code: "AU",
    name: "Austrália",
    region: "Oceania",
    periods: [
      {
        year_start: 1945,
        year_end: 1949,
        leader: "Ben Chifley",
        party: "ALP",
        party_full_name: "Australian Labor Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo trabalhista pós-guerra focado em imigração europeia em massa e industrialização."
      },
      {
        year_start: 1949,
        year_end: 1966,
        leader: "Robert Menzies",
        party: "LP",
        party_full_name: "Liberal Party of Australia",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler conservador de mandato recorde. Boom de commodities pós-guerra e forte alinhamento anticomunista com EUA.",
        key_events: ["1951 - Assinatura do Tratado de Aliança ANZUS"]
      },
      {
        year_start: 1966,
        year_end: 1972,
        leader: "Holt / Gorton / McMahon",
        party: "LP",
        party_full_name: "Liberal Party of Australia",
        spectrum: 3,
        regime_type: "democracy",
        description: "Envio de contingente militar na Guerra do Vietnã e início do abandono da restritiva política migratória branca."
      },
      {
        year_start: 1972,
        year_end: 1975,
        leader: "Gough Whitlam",
        party: "ALP",
        party_full_name: "Australian Labor Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Fim do envio de tropas ao Vietnã, sufrágio universal de aborígenes. Demitido formalmente pelo Governador-Geral em crise constitucional.",
        key_events: ["1975 - Crise Constitucional e demissão de Whitlam pelo representante da coroa"]
      },
      {
        year_start: 1975,
        year_end: 1983,
        leader: "Malcolm Fraser",
        party: "LP",
        party_full_name: "Liberal Party of Australia",
        spectrum: 2,
        regime_type: "democracy",
        description: "Conservador. Saneamento fiscal pós-crise constitucional e aceitação de imigração asiática em massa."
      },
      {
        year_start: 1983,
        year_end: 1996,
        leader: "Bob Hawke / Paul Keating",
        party: "ALP",
        party_full_name: "Australian Labor Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Trabalhismo reformista de mercado: desregulamentação financeira e flutuação cambial do dólar australiano."
      },
      {
        year_start: 1996,
        year_end: 2007,
        leader: "John Howard",
        party: "LP",
        party_full_name: "Liberal Party of Australia",
        spectrum: 3,
        regime_type: "democracy",
        description: "Conservador. Apoio à Guerra ao Terror americana, introdução de imposto sobre consumo geral e reformas trabalhistas.",
        key_events: ["1996 - Restrição nacional à posse de armas de fogo", "2003 - Envio de tropas no Iraque"]
      },
      {
        year_start: 2007,
        year_end: 2013,
        leader: "Kevin Rudd / Julia Gillard",
        party: "ALP",
        party_full_name: "Australian Labor Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Assinatura do Protocolo de Quioto e desculpas formais nacionais às gerações roubadas aborígenes.",
        key_events: ["2008 - Desculpas oficiais governamentais aos Aborígenes"]
      },
      {
        year_start: 2013,
        year_end: 2022,
        leader: "Abbott / Turnbull / Morrison",
        party: "LP",
        party_full_name: "Liberal Party of Australia (Coalizão)",
        spectrum: 3,
        regime_type: "democracy",
        description: "Políticas duras de interceptação marítima contra barcos de imigrantes e gestão de grandes incêndios florestais.",
        key_events: ["2021 - Parceria militar internacional AUKUS"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Anthony Albanese",
        party: "ALP",
        party_full_name: "Australian Labor Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Foco em transição energética e na realização do plebiscito constitucional pelo reconhecimento parlamentar da voz aborígene.",
        key_events: ["2023 - Rejeição em plebiscito da emenda de representação Aborígene"]
      }
    ]
  }
];
