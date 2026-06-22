import { CountryData } from "./types";

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
};

// Mapeamento reverso para facilitar a busca a partir de ids geográficos (sejam numéricos ou ISO-3)
export const GEOGRAPHY_TO_COUNTRY_CODE: Record<string, string> = {
  "840": "US", "USA": "US", "United States of America": "US",
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
        party: "Democrata",
        party_full_name: "Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Presidente pós-Guerra e início da Guerra Fria. Lançamento da Doutrina Truman e do Plano Marshall.",
        key_events: ["1945 - Fim da Segunda Guerra Mundial", "1947 - Criação da Doutrina Truman", "1948 - Plano Marshall"]
      },
      {
        year_start: 1953,
        year_end: 1961,
        leader: "Dwight D. Eisenhower",
        party: "Republicano",
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
        party: "Democrata",
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
        party: "Democrata",
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
        party: "Republicano",
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
        party: "Republicano",
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
        party: "Democrata",
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
        party: "Republicano",
        party_full_name: "Republican Party",
        spectrum: 5,
        regime_type: "democracy",
        description: "Revolução Conservadora ('Reaganomics'). Forte retórica anticomunista, desregulamentação da economia e redução de impostos.",
        key_events: ["1981 - Atentado sofrido por Reagan", "1983 - Invasão de Granada", "1987 - Discurso no Muro de Berlim"]
      },
      {
        year_start: 1989,
        year_end: 1993,
        leader: "George H. W. Bush",
        party: "Republicano",
        party_full_name: "Republican Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Gestão do fim da Guerra Fria e a dissolução da União Soviética. Liderou a coalizão internacional na Guerra do Golfo.",
        key_events: ["1989 - Queda do Muro de Berlim", "1991 - Guerra do Golfo / Dissolução da URSS"]
      },
      {
        year_start: 1993,
        year_end: 2001,
        leader: "Bill Clinton",
        party: "Democrata",
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
        party: "Republicano",
        party_full_name: "Republican Party",
        spectrum: 5,
        regime_type: "democracy",
        description: "Marcado pelos ataques de 11 de setembro e a subsequente 'Guerra ao Terror' com invasões no Afeganistão e Iraque. Crise financeira em 2008.",
        key_events: ["2001 - Ataques terroristas de 11 de Setembro", "2003 - Invasão do Iraque", "2008 - Grande Crise Financeira Global"]
      },
      {
        year_start: 2009,
        year_end: 2017,
        leader: "Barack Obama",
        party: "Democrata",
        party_full_name: "Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Primeiro presidente negro. Implementação do Obamacare (reforma da saúde). Retomada das relações com Cuba. Estímulo pós-crise.",
        key_events: ["2010 - Aprovação do Affordable Care Act (Obamacare)", "2011 - Morte de Osama bin Laden", "2015 - Acordo Climático de Paris"]
      },
      {
        year_start: 2017,
        year_end: 2021,
        leader: "Donald Trump",
        party: "Republicano",
        party_full_name: "Republican Party",
        spectrum: 6,
        regime_type: "democracy",
        description: "Plataforma populista nacionalista 'America First'. Guerra comercial com a China, renegociação de tratados e nomeação de juízes conservadores.",
        key_events: ["2018 - Início das tensões comerciais com a China", "2020 - Pandemia de COVID-19", "2021 - Invasão do Capitólio em 6 de Janeiro"]
      },
      {
        year_start: 2021,
        year_end: 2024,
        leader: "Joe Biden",
        party: "Democrata",
        party_full_name: "Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo focado na reconstrução pós-pandêmica, investimentos massivos em infraestrutura e forte apoio à Ucrânia.",
        key_events: ["2021 - Retirada do Afeganistão", "2022 - Apoio militar e financeiro à Ucrânia contra invasão russa"]
      }
    ]
  },
  {
    code: "RU",
    name: "Rússia",
    region: "Europe",
    periods: [
      {
        year_start: 1945,
        year_end: 1953,
        leader: "Joseph Stalin",
        party: "Partido Comunista",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -10,
        regime_type: "authoritarian",
        description: "Totalitarismo soviético no pós-Guerra. Consolidação do bloco do Leste e industrialização forçada.",
        key_events: ["1945 - Vitória na Grande Guerra Patriótica", "1949 - Teste da primeira bomba atômica soviética"]
      },
      {
        year_start: 1953,
        year_end: 1964,
        leader: "Nikita Khrushchev",
        party: "Partido Comunista",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Período do 'Degelo' e início da Desestalinização. Corrida Espacial e a Crise dos Mísseis.",
        key_events: ["1956 - Discurso Secreto criticando Stalin", "1957 - Lançamento do Sputnik", "1961 - Voo de Yuri Gagarin ao espaço"]
      },
      {
        year_start: 1964,
        year_end: 1982,
        leader: "Leonid Brezhnev",
        party: "Partido Comunista",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Era da Estagnação Soviética. Doutrina Brezhnev de intervenção em governos socialistas e invasão do Afeganistão.",
        key_events: ["1968 - Invasão da Tchecoslováquia (Primavera de Praga)", "1979 - Invasão do Afeganistão"]
      },
      {
        year_start: 1982,
        year_end: 1985,
        leader: "Yuri Andropov / Konstantin Chernenko",
        party: "Partido Comunista",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Breves governos liderados por membros seniores do politburo marcados por problemas de saúde e impasse político.",
        key_events: ["1983 - Incidente do voo KAL 007 derrubado"]
      },
      {
        year_start: 1985,
        year_end: 1991,
        leader: "Mikhail Gorbachev",
        party: "Partido Comunista",
        party_full_name: "Communist Party of the Soviet Union",
        spectrum: -4,
        regime_type: "transitional",
        description: "Tentativa de salvação da União Soviética através das reformas da Glasnost (abertura política) e Perestroika (reestruturação econômica).",
        key_events: ["1986 - Desastre nuclear de Chernobyl", "1989 - Retirada do Afeganistão", "1991 - Fim da União Soviética"]
      },
      {
        year_start: 1991,
        year_end: 1999,
        leader: "Boris Yeltsin",
        party: "Independente (Apoio Liberal)",
        party_full_name: "Democratic Russia",
        spectrum: 2,
        regime_type: "hybrid",
        description: "Primeiro presidente da Federação Russa. Transição para o capitalismo ('terapia de choque'), privatizações caóticas, ascensão de oligarcas e crise constitucional de 1993.",
        key_events: ["1993 - Crise Constitucional e bombardeio do Parlamento", "1994 - Primeira Guerra da Chechênia", "1998 - Crise financeira do Rublo"]
      },
      {
        year_start: 1999,
        year_end: 2008,
        leader: "Vladimir Putin",
        party: "Unidade / Rússia Unida",
        party_full_name: "United Russia Party",
        spectrum: 4,
        regime_type: "hybrid",
        description: "Reconstrução do poder central russo, controle dos oligarcas e forte crescimento econômico impulsionado pelo petróleo.",
        key_events: ["1999 - Segunda Guerra da Chechênia", "2004 - Crise dos reféns na escola de Beslan"]
      },
      {
        year_start: 2008,
        year_end: 2012,
        leader: "Dmitry Medvedev",
        party: "Rússia Unida",
        party_full_name: "United Russia Party",
        spectrum: 3,
        regime_type: "hybrid",
        description: "Período de 'modernização' tecnológica com Putin atuando como Primeiro-Ministro. Conflito armado com a Geórgia.",
        key_events: ["2008 - Guerra Russo-Georgiana", "2011 - Grandes protestos da oposição em Moscou"]
      },
      {
        year_start: 2012,
        year_end: 2024,
        leader: "Vladimir Putin",
        party: "Rússia Unida",
        party_full_name: "United Russia Party",
        spectrum: 7,
        regime_type: "authoritarian",
        description: "Guinada conservadora e nacionalista. Anexação da Crimeia e subsequente invasão em larga escala da Ucrânia, isolando a Rússia do Ocidente.",
        key_events: ["2014 - Anexação da Crimeia", "2015 - Intervenção militar na Síria", "2022 - Invasão em larga escala da Ucrânia"]
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
        party: "Kuomintang",
        party_full_name: "Nationalist Party of China",
        spectrum: 4,
        regime_type: "transitional",
        description: "Guerra Civil Chinesa entre os nacionalistas e os comunistas liderados por Mao Zedong.",
        key_events: ["1949 - Proclamação da República Popular da China e recuo nacionalista para Taiwan"]
      },
      {
        year_start: 1949,
        year_end: 1976,
        leader: "Mao Zedong",
        party: "Partido Comunista Chinês",
        party_full_name: "Chinese Communist Party",
        spectrum: -10,
        regime_type: "authoritarian",
        description: "Coletivização da agricultura e planos industriais agressivos. Marcado pela tragédia do Grande Salto Adiante e o caos social da Revolução Cultural.",
        key_events: ["1958 - Lançamento do Grande Salto Adiante", "1966 - Início da Revolução Cultural", "1972 - Visita de Richard Nixon"]
      },
      {
        year_start: 1976,
        year_end: 1978,
        leader: "Hua Guofeng",
        party: "Partido Comunista Chinês",
        party_full_name: "Chinese Communist Party",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Transição após a morte de Mao. Prisão do 'Bando dos Quatro' e início do fim do radicalismo da Revolução Cultural.",
        key_events: ["1976 - Prisão do Bando dos Quatro"]
      },
      {
        year_start: 1978,
        year_end: 1989,
        leader: "Deng Xiaoping",
        party: "Partido Comunista Chinês",
        party_full_name: "Chinese Communist Party",
        spectrum: -6,
        regime_type: "authoritarian",
        description: "Início do 'Socialismo com Características Chinesas' e as reformas econômicas. Criação das Zonas Econômicas Especiais.",
        key_events: ["1978 - Adoção da política de Reforma e Abertura", "1989 - Protestos e massacre na Praça da Paz Celestial (Tiananmen)"]
      },
      {
        year_start: 1989,
        year_end: 2002,
        leader: "Jiang Zemin",
        party: "Partido Comunista Chinês",
        party_full_name: "Chinese Communist Party",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Forte crescimento econômico focado nas exportações e reintegração diplomática após Tiananmen. Devolução de Hong Kong.",
        key_events: ["1997 - Devolução de Hong Kong pelos britânicos", "2001 - Entrada da China na Organização Mundial do Comércio (OMC)"]
      },
      {
        year_start: 2002,
        year_end: 2012,
        leader: "Hu Jintao",
        party: "Partido Comunista Chinês",
        party_full_name: "Chinese Communist Party",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Doutrina do 'Desenvolvimento Científico' e a busca por uma 'Sociedade Harmoniosa'. Grande expansão global e Olimpíadas de Pequim.",
        key_events: ["2008 - Olimpíadas de Pequim", "2010 - China ultrapassa o Japão como segunda maior economia mundial"]
      },
      {
        year_start: 2012,
        year_end: 2024,
        leader: "Xi Jinping",
        party: "Partido Comunista Chinês",
        party_full_name: "Chinese Communist Party",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Centralização drástica do poder, repressão a dissidências, iniciativa do 'Cinturão e Rota' e postura diplomática mais assertiva.",
        key_events: ["2013 - Lançamento da Iniciativa do Cinturão e Rota", "2020 - Lei de Segurança Nacional de Hong Kong", "2022 - Confirmação do terceiro mandato inédito"]
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
        party: "Independente (Judiciário)",
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
        key_events: ["1946 - Promulgação da nova Constituição", "1947 - Rompimento de relações diplomáticas com a URSS"]
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
        party: "PSP / PSD",
        party_full_name: "Partido Social Progressista",
        spectrum: 1,
        regime_type: "democracy",
        description: "Período de grande instabilidade política e militar sob a sombra do suicídio de Vargas, resolvido pela intervenção legalista do General Lott.",
        key_events: ["1955 - Eleição presidencial de JK", "1955 - Golpe Preventivo do General Lott para garantir a posse de JK"]
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
        key_events: ["1956 - Início da construção de Brasília", "1958 - Primeiro título mundial na Copa do Mundo", "1960 - Inauguração de Brasília"]
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
        key_events: ["1961 - Campanha da Legalidade liderada por Brizola", "1963 - Plebiscito restaura o Presidencialismo", "1964 - Comício da Central do Brasil e subsequente Golpe Militar"]
      },
      {
        year_start: 1964,
        year_end: 1985,
        leader: "Ditadura Militar",
        party: "ARENA (Partido Único Militar)",
        party_full_name: "Aliança Renovadora Nacional",
        spectrum: 7,
        regime_type: "authoritarian",
        description: "Regime de exceção liderado por generais. Marcado por forte repressão através dos Atos Institucionais (AI-5), o Milagre Econômico e megaprojetos.",
        key_events: ["1968 - Promulgação do Ato Institucional Nº 5 (AI-5)", "1973 - Auge do 'Milagre Econômico'", "1984 - Campanha das Diretas Já"]
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
        key_events: ["1993 - Plebiscito sobre forma e sistema de governo", "1994 - Lançamento da moeda Real"]
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
        spectrum: -3,
        regime_type: "democracy",
        description: "Governo focado em inclusão social (Bolsa Família) e alta das commodities. Projeção internacional do Brasil como potência emergente (BRICS).",
        key_events: ["2003 - Lançamento do Bolsa Família", "2005 - Eclosão do escândalo do Mensalão", "2009 - Escolha do Rio para Olimpíadas de 2016"]
      },
      {
        year_start: 2011,
        year_end: 2016,
        leader: "Dilma Rousseff",
        party: "PT",
        party_full_name: "Partido dos Trabalhadores",
        spectrum: -3,
        regime_type: "democracy",
        description: "Primeira presidente mulher. Forte recessão econômica nos anos finais, intensos protestos populares (2013) e destituição via impeachment.",
        key_events: ["2013 - Jornadas de Junho", "2014 - Início da Operação Lava Jato", "2016 - Impeachment de Dilma Rousseff"]
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
        key_events: ["2016 - Aprovação da PEC do Teto de Gastos", "2017 - Aprovação da Reforma Trabalhista", "2018 - Greve dos Caminhoneiros"]
      },
      {
        year_start: 2019,
        year_end: 2023,
        leader: "Jair Bolsonaro",
        party: "PSL / PL",
        party_full_name: "Partido Liberal",
        spectrum: 6,
        regime_type: "democracy",
        description: "Plataforma conservadora e liberal (Paulo Guedes). Marcado por constantes tensões institucionais e a gestão da pandemia de COVID-19.",
        key_events: ["2019 - Reforma da Previdência", "2020 - Início da Pandemia e auxílio emergencial"]
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
        key_events: ["2023 - Ataques às sedes dos Três Poderes em 8 de Janeiro", "2023 - Presidência brasileira do G20"]
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
        party: "Conselho Aliado",
        party_full_name: "Allied Control Council",
        spectrum: 0,
        regime_type: "transitional",
        description: "Período imediatamente pós-guerra. Divisão em 4 zonas de ocupação militar (EUA, Reino Unido, França e URSS).",
        key_events: ["1945 - Julgamentos de Nuremberg", "1948 - Bloqueio de Berlim / Ponte Aérea"]
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
        description: "Chanceler considerado o arquiteto da 'Economia Social de Mercado' alemã.",
        key_events: ["1965 - Início da recessão pós-Milagre Econômico"]
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
        key_events: ["1968 - Protestos estudantis da oposição extraparlamentar"]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Willy Brandt",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -3,
        regime_type: "democracy",
        description: "Primeiro chanceler social-democrata. Implementou a Ostpolitik (normalização de relações com o bloco soviético). Ganhou o Nobel da Paz.",
        key_events: ["1970 - Gesto de Varsóvia (Brandt de joelhos frente ao memorial do Gueto)", "1974 - Renúncia devido a escândalo de espião na assessoria"]
      },
      {
        year_start: 1974,
        year_end: 1982,
        leader: "Helmut Schmidt",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Marcado pelo combate ao terrorismo interno da Fração do Exército Vermelho (Baader-Meinhof) e pelas crises do petróleo.",
        key_events: ["1977 - Outono Alemão (terrorismo da RAF)", "1979 - Decisão da OTAN sobre Mísseis na Europa"]
      },
      {
        year_start: 1982,
        year_end: 1998,
        leader: "Helmut Kohl",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler que liderou o processo de reunificação da Alemanha Ocidental e Oriental em 1990 e a criação do Euro.",
        key_events: ["1989 - Queda do Muro de Berlim", "1990 - Reunificação Alemã formal", "1992 - Tratado de Maastricht"]
      },
      {
        year_start: 1998,
        year_end: 2005,
        leader: "Gerhard Schröder",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Coalizão SPD-Verdes. Opositor à Guerra do Iraque. Implementou a controversa Agenda 2010 de reformas trabalhistas liberais.",
        key_events: ["2002 - Introdução física das notas de Euro", "2003 - Lançamento da Agenda 2010"]
      },
      {
        year_start: 2005,
        year_end: 2021,
        leader: "Angela Merkel",
        party: "CDU",
        party_full_name: "Christian Democratic Union",
        spectrum: 2,
        regime_type: "democracy",
        description: "Primeira mulher chanceler. Liderança europeia pragmática durante as crises do Euro, de refugiados (2015) e da COVID-19.",
        key_events: ["2011 - Decisão de abandonar a energia nuclear", "2015 - Crise migratória europeia (boas-vindas a refugiados)", "2020 - Presidência da pandemia"]
      },
      {
        year_start: 2021,
        year_end: 2024,
        leader: "Olaf Scholz",
        party: "SPD",
        party_full_name: "Social Democratic Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Chanceler da coalizão 'Semáforo' (SPD, FDP e Verdes). Definiu o 'Zeitenwende' (ponto de virada histórico na segurança alemã pós-invasão ucraniana).",
        key_events: ["2022 - Declaração do Zeitenwende e rearmamento alemão", "2023 - Fim definitivo do gás russo barato"]
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
        party: "Independente (Militar)",
        party_full_name: "GPRF (Governo Provisório)",
        spectrum: 2,
        regime_type: "transitional",
        description: "Líder da França Livre no comando do governo provisório pós-libertação.",
        key_events: ["1944 - Concessão do direito de voto às mulheres francesas"]
      },
      {
        year_start: 1947,
        year_end: 1954,
        leader: "Vincent Auriol",
        party: "SFIO",
        party_full_name: "Section Française de l'Internationale Ouvrière",
        spectrum: -1,
        regime_type: "democracy",
        description: "Primeiro presidente da Quarta República Francesa, marcada por instabilidade ministerial.",
        key_events: ["1950 - Declaração Schuman (embrião da UE)", "1954 - Derrota de Dien Bien Phu na Indochina"]
      },
      {
        year_start: 1954,
        year_end: 1958,
        leader: "René Coty",
        party: "CNIP",
        party_full_name: "Centre National des Indépendants et Paysans",
        spectrum: 1,
        regime_type: "democracy",
        description: "Segundo e último presidente da Quarta República, colapsada em razão da Guerra da Argélia.",
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
        description: "Fundador da Quinta República Francesa, com poderes presidenciais fortes. Resolução da Guerra da Argélia e busca por independência nacional.",
        key_events: ["1962 - Acordos de Evian concedem independência à Argélia", "1968 - Protestos estudantis e greve geral de Maio de 1968"]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Georges Pompidou",
        party: "UDR",
        party_full_name: "Union des Démocrates pour la République",
        spectrum: 3,
        regime_type: "democracy",
        description: "Prosseguimento do Gaullismo, promovendo forte modernização industrial e cultural da França.",
        key_events: ["1973 - Abertura do Aeroporto Charles de Gaulle"]
      },
      {
        year_start: 1974,
        year_end: 1981,
        leader: "Valéry Giscard d'Estaing",
        party: "UDF",
        party_full_name: "Union pour la Démocratie Française",
        spectrum: 2,
        regime_type: "democracy",
        description: "Reformador social de centro-direita (legalização do aborto, divórcio por consentimento).",
        key_events: ["1975 - Despenalização do aborto (Lei Veil)"]
      },
      {
        year_start: 1981,
        year_end: 1995,
        leader: "François Mitterrand",
        party: "PS",
        party_full_name: "Parti Socialiste",
        spectrum: -4,
        regime_type: "democracy",
        description: "Primeiro presidente socialista da 5ª República. Abolição da pena de morte e nacionalizações iniciais, com posterior política de austeridade pragmática.",
        key_events: ["1981 - Abolição da pena de morte", "1988 - Coabitação inédita com primeiro-ministro conservador Jacques Chirac"]
      },
      {
        year_start: 1995,
        year_end: 2007,
        leader: "Jacques Chirac",
        party: "RPR / UMP",
        party_full_name: "Union pour um Mouvement Populaire",
        spectrum: 2,
        regime_type: "democracy",
        description: "Opositor destacado da Guerra do Iraque em 2003. Redução do mandato presidencial para 5 anos (quinquênio).",
        key_events: ["2002 - Disputa de segundo turno histórica contra o extremista Jean-Marie Le Pen", "2003 - Rejeição à invasão do Iraque na ONU"]
      },
      {
        year_start: 2007,
        year_end: 2012,
        leader: "Nicolas Sarkozy",
        party: "UMP",
        party_full_name: "Union pour um Mouvement Populaire",
        spectrum: 4,
        regime_type: "democracy",
        description: "Estilo presidencial hiperativo e de direita firme. Retorno da França ao comando militar integrado da OTAN.",
        key_events: ["2008 - Intervenção francesa na crise financeira internacional", "2011 - Operação militar internacional na Líbia"]
      },
      {
        year_start: 2012,
        year_end: 2017,
        leader: "François Hollande",
        party: "PS",
        party_full_name: "Parti Socialiste",
        spectrum: -2,
        regime_type: "democracy",
        description: "Marcado por graves atentados terroristas islâmicos no país e aprovação do casamento igualitário.",
        key_events: ["2013 - Legalização do casamento entre pessoas do mesmo sexo", "2015 - Atentados terroristas ao Bataclan e ao jornal Charlie Hebdo"]
      },
      {
        year_start: 2017,
        year_end: 2024,
        leader: "Emmanuel Macron",
        party: "LREM / RE",
        party_full_name: "Renaissance",
        spectrum: 1,
        regime_type: "democracy",
        description: "Centrismo liberal pró-União Europeia. Enfrentou protestos violentos (Coletes Amarelos) e reformas contestadas de aposentadoria.",
        key_events: ["2018 - Início do movimento dos Coletes Amarelos", "2019 - Incêndio na Catedral de Notre-Dame de Paris", "2023 - Aprovação da Reforma da Previdência"]
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
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -4,
        regime_type: "democracy",
        description: "Vitória esmagadora pós-guerra. Construção do Estado de Bem-Estar Social britânico e nacionalização das indústrias básicas.",
        key_events: ["1947 - Independência da Índia", "1948 - Criação do Serviço Nacional de Saúde (NHS)"]
      },
      {
        year_start: 1951,
        year_end: 1955,
        leader: "Winston Churchill",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Último mandato do líder de guerra focando na consolidação da Guerra Fria e defesa imperial.",
        key_events: ["1952 - Morte de George VI e coroação da Rainha Elizabeth II"]
      },
      {
        year_start: 1955,
        year_end: 1957,
        leader: "Anthony Eden",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Ficou marcado pela desastrosa Crise de Suez, que selou o fim do Reino Unido como superpotência imperial.",
        key_events: ["1956 - Crise do Canal de Suez"]
      },
      {
        year_start: 1957,
        year_end: 1963,
        leader: "Harold Macmillan",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Reconstruiu a aliança com os EUA. Reconheceu os 'ventos de mudança' que descolonizaram a África.",
        key_events: ["1960 - Discurso 'Ventos de Mudança' na África do Sul"]
      },
      {
        year_start: 1963,
        year_end: 1964,
        leader: "Alec Douglas-Home",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Breve governo de transição da ala tradicional conservadora."
      },
      {
        year_start: 1964,
        year_end: 1970,
        leader: "Harold Wilson",
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Modernização tecnológica e reformas sociais liberais (despenalização do aborto e da homossexualidade).",
        key_events: ["1967 - Desvalorização da Libra Esterlina"]
      },
      {
        year_start: 1970,
        year_end: 1974,
        leader: "Edward Heath",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Garantiu a entrada do Reino Unido na Comunidade Econômica Europeia. Conflitos industriais intensos com mineiros.",
        key_events: ["1973 - Reino Unido ingressa na Comunidade Econômica Europeia"]
      },
      {
        year_start: 1974,
        year_end: 1976,
        leader: "Harold Wilson",
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Segundo período no cargo sob turbulências inflacionárias extremas e recessão."
      },
      {
        year_start: 1976,
        year_end: 1979,
        leader: "James Callaghan",
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Queda após o dramático 'Inverno do Descontentamento', caracterizado por greves em massa nos serviços públicos.",
        key_events: ["1976 - Empréstimo de emergência do FMI para o Reino Unido", "1979 - O Inverno do Descontentamento"]
      },
      {
        year_start: 1979,
        year_end: 1990,
        leader: "Margaret Thatcher",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 6,
        regime_type: "democracy",
        description: "A 'Dama de Ferro'. Privatizações radicais, esmagamento dos sindicatos, vitória na Guerra das Malvinas.",
        key_events: ["1982 - Guerra das Malvinas (Falklands)", "1984 - Greve histórica dos Mineiros de Carvão", "1990 - Protestos contra a Poll Tax (Imposto de cabeça)"]
      },
      {
        year_start: 1990,
        year_end: 1997,
        leader: "John Major",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Assinou o Tratado de Maastricht. Enfrentou a Quarta-Feira Negra que ejetou a libra do mecanismo europeu de taxas.",
        key_events: ["1992 - Quarta-Feira Negra na economia", "1994 - Abertura oficial do Eurotúnel"]
      },
      {
        year_start: 1997,
        year_end: 2007,
        leader: "Tony Blair",
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Nova era trabalhista ('New Labour'). Paz na Irlanda do Norte, descentralização de poder e envolvimento na Guerra do Iraque.",
        key_events: ["1998 - Acordo de Sexta-Feira Santa na Irlanda do Norte", "2003 - Participação britânica na Invasão do Iraque"]
      },
      {
        year_start: 2007,
        year_end: 2010,
        leader: "Gordon Brown",
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Assumiu com a saída de Blair. Gerenciou a grande crise financeira de 2008 injetando liquidez bancária.",
        key_events: ["2008 - Nacionalização parcial de bancos britânicos devido à crise"]
      },
      {
        year_start: 2010,
        year_end: 2016,
        leader: "David Cameron",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo de coalizão e depois maioria absoluta. Implementou austeridade fiscal. Convocou o referendo do Brexit e renunciou após a derrota.",
        key_events: ["2014 - Referendo sobre Independência da Escócia (Não vence)", "2016 - Referendo do Brexit decide pela saída da União Europeia"]
      },
      {
        year_start: 2016,
        year_end: 2019,
        leader: "Theresa May",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Teve a tarefa de negociar o acordo de saída com a União Europeia, desgastando seu governo após rejeições no Parlamento.",
        key_events: ["2017 - Acionamento oficial do Artigo 50 da UE"]
      },
      {
        year_start: 2019,
        year_end: 2022,
        leader: "Boris Johnson",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Vitória eleitoral sob o lema 'Get Brexit Done'. Retirada oficial da UE e escândalos pessoais de festas na pandemia ('Partygate').",
        key_events: ["2020 - Saída oficial da UE (Brexit consumado)", "2022 - Escândalo do Partygate força sua renúncia"]
      },
      {
        year_start: 2022,
        year_end: 2022,
        leader: "Liz Truss / Rishi Sunak",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Liz Truss governou por 49 dias após miniorçamento colapsar os mercados. Rishi Sunak assumiu em seguida trazendo estabilidade econômica moderada.",
        key_events: ["2022 - Morte da Rainha Elizabeth II e ascensão de Charles III", "2022 - Mandato recorde de Liz Truss de apenas 7 semanas"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Rishi Sunak",
        party: "Conservador",
        party_full_name: "Conservative Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Lidou com alta inflação e greves. Derrota esmagadora nas eleições gerais após convocar pleito antecipado.",
        key_events: ["2024 - Derrota eleitoral histórica dos Conservadores"]
      },
      {
        year_start: 2024,
        year_end: 2024,
        leader: "Keir Starmer",
        party: "Trabalhista",
        party_full_name: "Labour Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Retorno dos Trabalhadores ao poder após 14 anos sob uma plataforma de reconstrução institucional pragmática.",
        key_events: ["2024 - Retorno dos Trabalhadores com ampla maioria parlamentar"]
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
        party: "Militar (Ditadura)",
        party_full_name: "GOU (Grupo de Oficiais Unificados)",
        spectrum: 4,
        regime_type: "authoritarian",
        description: "Ditadura militar no encerramento da Segunda Guerra Mundial. Ascensão do coronel Juan Perón na pasta do Trabalho.",
        key_events: ["1945 - Grandes manifestações de 17 de Outubro exigindo a liberdade de Perón"]
      },
      {
        year_start: 1946,
        year_end: 1955,
        leader: "Juan Domingo Perón",
        party: "Partido Justicialista",
        party_full_name: "Partido Único de la Revolución Nacional / Peronista",
        spectrum: -3,
        regime_type: "hybrid",
        description: "Nacionalismo econômico, industrialização e expansão de direitos sociais sob a liderança carismática de Perón e Evita Perón. Deposto por militares.",
        key_events: ["1947 - Concessão do sufrágio feminino", "1952 - Morte de Evita Perón", "1955 - Bombardeio da Plaza de Mayo e Golpe Militar"]
      },
      {
        year_start: 1955,
        year_end: 1958,
        leader: "Eduardo Lonardi / Pedro Aramburu",
        party: "Militar (Ditadura)",
        party_full_name: "Revolución Libertadora",
        spectrum: 4,
        regime_type: "authoritarian",
        description: "Regime militar dedicado à 'desperonização' da sociedade e proibição legal do peronismo.",
        key_events: ["1956 - Decreto 4161 criminalizando a menção a Perón ou Evita"]
      },
      {
        year_start: 1958,
        year_end: 1962,
        leader: "Arturo Frondizi",
        party: "UCRI",
        party_full_name: "Unión Cívica Radical Intransigente",
        spectrum: -1,
        regime_type: "democracy",
        description: "Desenvolvimentismo econômico. Presidência sob forte tutela e constantes ultimatos das forças armadas.",
        key_events: ["1961 - Encontro secreto com Che Guevara, que gerou protestos militares", "1962 - Deposição militar após vitórias eleitorais peronistas autorizadas"]
      },
      {
        year_start: 1962,
        year_end: 1963,
        leader: "José María Guido",
        party: "UCR (Tutela Militar)",
        party_full_name: "Unión Cívica Radical",
        spectrum: 3,
        regime_type: "transitional",
        description: "Presidente provisório imposto pelos militares após o golpe contra Frondizi."
      },
      {
        year_start: 1963,
        year_end: 1966,
        leader: "Arturo Illia",
        party: "UCRP",
        party_full_name: "Unión Cívica Radical del Pueblo",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo focado na anulação dos contratos petrolíferos estrangeiros e ampliação de verbas de saúde e educação. Deposto por militares.",
        key_events: ["1966 - Golpe militar que instalou a 'Revolución Argentina'"]
      },
      {
        year_start: 1966,
        year_end: 1973,
        leader: "Juan Carlos Onganía / Alejandro Lanusse",
        party: "Militar (Ditadura)",
        party_full_name: "Revolución Argentina",
        spectrum: 6,
        regime_type: "authoritarian",
        description: "Ditadura militar corporativista e repressiva, enfrentando forte resistência civil urbana.",
        key_events: ["1969 - Revolta popular do 'Cordobazo'", "1972 - Massacre de Trelew"]
      },
      {
        year_start: 1973,
        year_end: 1976,
        leader: "Juan D. Perón / Isabel Perón",
        party: "Partido Justicialista",
        party_full_name: "Frente Justicialista de Liberación",
        spectrum: -2,
        regime_type: "hybrid",
        description: "Retorno do peronismo com Perón e depois sua esposa Isabel. Período violento de lutas internas entre direita e esquerda armada. Depostos por militares.",
        key_events: ["1974 - Morte de Juan Domingo Perón", "1975 - Atividades da Aliança Anticomunista Argentina (Triple A)"]
      },
      {
        year_start: 1976,
        year_end: 1983,
        leader: "Jorge Rafael Videla / Leopoldo Galtieri",
        party: "Militar (Ditadura)",
        party_full_name: "Proceso de Reorganización Nacional",
        spectrum: 9,
        regime_type: "authoritarian",
        description: "Período mais violento da ditadura argentina. 'Guerra Suja' com milhares de mortos e desaparecidos. Derrota na Guerra das Malvinas derrubou o regime.",
        key_events: ["1977 - Início das marchas das Mães da Plaza de Mayo", "1982 - Invasão e derrota na Guerra das Malvinas"]
      },
      {
        year_start: 1983,
        year_end: 1989,
        leader: "Raúl Alfonsín",
        party: "UCR",
        party_full_name: "Unión Cívica Radical",
        spectrum: -1,
        regime_type: "democracy",
        description: "Retorno democrático. Realizou o histórico Julgamento das Juntas Militares. Crise inflacionária extrema nos anos finais.",
        key_events: ["1985 - Julgamento das Juntas Militares de Ditadura", "1987 - Levante militar dos 'Carapintadas'", "1989 - Crise de Hiperinflação histórica"]
      },
      {
        year_start: 1989,
        year_end: 1999,
        leader: "Carlos Menem",
        party: "Partido Justicialista",
        party_full_name: "Partido Justicialista",
        spectrum: 4,
        regime_type: "democracy",
        description: "Virada neoliberal do peronismo. Criação da paridade peso-dólar ('Convertibilidade') e privatização em massa.",
        key_events: ["1991 - Início do Plano de Convertibilidade", "1994 - Reforma Constitucional permite reeleição"]
      },
      {
        year_start: 1999,
        year_end: 2001,
        leader: "Fernando de la Rúa",
        party: "UCR (Alianza)",
        party_full_name: "Unión Cívica Radical / Alianza",
        spectrum: 1,
        regime_type: "democracy",
        description: "Enfrentou recessão profunda que culminou na explosão social da crise de 2001 e fim da paridade cambial.",
        key_events: ["2001 - Bloqueio de depósitos bancários ('Corralito')", "2001 - Protestos violentos e fuga do presidente de helicóptero"]
      },
      {
        year_start: 2001,
        year_end: 2003,
        leader: "Eduardo Duhalde",
        party: "Partido Justicialista",
        party_full_name: "Partido Justicialista (Transição)",
        spectrum: -1,
        regime_type: "transitional",
        description: "Chanceler de transição eleito pelo parlamento. Administrou o caos pós-default soberano.",
        key_events: ["2002 - Desvalorização oficial do Peso / Fim do Corralito"]
      },
      {
        year_start: 2003,
        year_end: 2007,
        leader: "Néstor Kirchner",
        party: "Frente para la Victoria",
        party_full_name: "Frente para la Victoria (Justicialista)",
        spectrum: -4,
        regime_type: "democracy",
        description: "Reconstrução econômica com forte expansão fiscal, renegociação de dívidas externas e reabertura dos julgamentos contra militares da ditadura.",
        key_events: ["2005 - Reestruturação da dívida externa", "2005 - Cancelamento definitivo da dívida com o FMI"]
      },
      {
        year_start: 2007,
        year_end: 2015,
        leader: "Cristina Fernández de Kirchner",
        party: "Frente para la Victoria",
        party_full_name: "Frente para la Victoria (Justicialista)",
        spectrum: -5,
        regime_type: "democracy",
        description: "Nacionalizações importantes (YPF, fundos de previdência). Conflitos com o agronegócio e forte polarização política ('La grieta').",
        key_events: ["2008 - Crise patronal do setor agropecuário por impostos", "2012 - Nacionalização da petrolífera YPF"]
      },
      {
        year_start: 2015,
        year_end: 2019,
        leader: "Mauricio Macri",
        party: "Cambiemos",
        party_full_name: "Propuesta Republicana (PRO) / Cambiemos",
        spectrum: 4,
        regime_type: "democracy",
        description: "Governo de centro-direita. Fim do controle cambial, mas enfrentou forte crise de endividamento levando ao maior resgate do FMI.",
        key_events: ["2018 - Acordo histórico de resgate financeiro com o FMI"]
      },
      {
        year_start: 2019,
        year_end: 2023,
        leader: "Alberto Fernández",
        party: "Frente de Todos",
        party_full_name: "Frente de Todos (Justicialista)",
        spectrum: -3,
        regime_type: "democracy",
        description: "Governo peronista de esquerda tendo Cristina Kirchner como vice. Marcado por grave crise de inflação e pandemia.",
        key_events: ["2020 - Legalização do Aborto", "2022 - Atentado sofrido por Cristina Kirchner"]
      },
      {
        year_start: 2023,
        year_end: 2024,
        leader: "Javier Milei",
        party: "La Libertad Avanza",
        party_full_name: "La Libertad Avanza",
        spectrum: 7,
        regime_type: "democracy",
        description: "Presidente anarcocapitalista. Agenda ultra-liberal de austeridade extrema ('motosserra'), desregulamentação radical e desvalorização do peso.",
        key_events: ["2023 - Decretos de Necessidade e Urgência (DNU) de desregulamentação", "2024 - Obtenção do primeiro superávit fiscal em mais de uma década"]
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
        description: "Triênio Adeco. Primeira tentativa democrática e sufrágio universal, interrompidos por um golpe militar.",
        key_events: ["1947 - Eleição direta de Rómulo Gallegos"]
      },
      {
        year_start: 1948,
        year_end: 1958,
        leader: "Marcos Pérez Jiménez",
        party: "Militar (Ditadura)",
        party_full_name: "Forças Armadas da Venezuela",
        spectrum: 6,
        regime_type: "authoritarian",
        description: "Ditadura militar marcada por boom imobiliário e de obras públicas alimentadas pelo petróleo, junto à severa repressão política.",
        key_events: ["1958 - Greve geral e revolta popular que derrubaram a ditadura"]
      },
      {
        year_start: 1958,
        year_end: 1999,
        leader: "Pacto de Puntofijo (Betancourt, Leoni, CAP, Caldera)",
        party: "AD / COPEI",
        party_full_name: "Acción Democrática / COPEI",
        spectrum: 1,
        regime_type: "democracy",
        description: "Alternância estável bipartidária sob o Pacto de Puntofijo. Anos finais marcados pelo colapso dos preços do petróleo e protestos sociais (Caracazo).",
        key_events: ["1960 - Fundação da OPEP liderada pela Venezuela", "1989 - Revolta popular do Caracazo contra austeridade", "1992 - Tentativas de golpe lideradas por Hugo Chávez"]
      },
      {
        year_start: 1999,
        year_end: 2013,
        leader: "Hugo Chávez",
        party: "MVR / PSUV",
        party_full_name: "Partido Socialista Unido de Venezuela",
        spectrum: -6,
        regime_type: "hybrid",
        description: "Revolução Bolivariana. Nova Constituição, forte gasto social bancado pelo petróleo e guinada socialista anti-imperialista. Controle gradual do Estado.",
        key_events: ["1999 - Nova Constituição Bolivariana", "2002 - Golpe de Estado frustrado de 48 horas contra Chávez", "2007 - Rejeição de reforma em referendo, estatização de indústrias"]
      },
      {
        year_start: 2013,
        year_end: 2024,
        leader: "Nicolás Maduro",
        party: "PSUV",
        party_full_name: "Partido Socialista Unido de Venezuela",
        spectrum: -9,
        regime_type: "authoritarian",
        description: "Colapso econômico histórico (hiperinflação e escassez), guinada totalmente autoritária com supressão do parlamento e repressão sistemática a opositores.",
        key_events: ["2017 - Criação da Assembleia Constituinte paralela", "2019 - Crise de reconhecimento presidencial (Juan Guaidó)", "2024 - Polêmica eleição sob denúncias de fraude massiva"]
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
        leader: "Zoltán Tildy / Ferenc Nagy",
        party: "FKgP",
        party_full_name: "Independent Smallholders Party",
        spectrum: -1,
        regime_type: "transitional",
        description: "Coalizão do pós-guerra sob pressão soviética. Eliminação gradual das forças democráticas pelos comunistas ('Tática do Salame').",
        key_events: ["1947 - Prisão e exílio forçado de líderes democráticos"]
      },
      {
        year_start: 1949,
        year_end: 1956,
        leader: "Mátyás Rákosi",
        party: "Partido Comunista (MDP)",
        party_full_name: "Hungarian Working People's Party",
        spectrum: -10,
        regime_type: "authoritarian",
        description: "Era Stalinista mais severa do bloco do Leste. Expurgos em massa, coletivização forçada e culto absoluto à personalidade.",
        key_events: ["1953 - Afastamento temporário de Rákosi por pressões soviéticas"]
      },
      {
        year_start: 1956,
        year_end: 1956,
        leader: "Imre Nagy",
        party: "Comunista Reformista",
        party_full_name: "Hungarian Working People's Party",
        spectrum: -4,
        regime_type: "transitional",
        description: "Revolução Húngara de 1956. Nagy propõe neutralidade e saída do Pacto de Varsóvia, esmagada por tanques soviéticos.",
        key_events: ["1956 - Revolução de Outubro e subsequente Invasão Soviética", "1958 - Execução de Imre Nagy"]
      },
      {
        year_start: 1956,
        year_end: 1989,
        leader: "János Kádár",
        party: "MSZMP",
        party_full_name: "Hungarian Socialist Workers' Party",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Comunismo Goulash. Pacificação pós-1956 combinando repressão política com pequenas concessões econômicas privadas e de consumo.",
        key_events: ["1968 - Novo Mecanismo Econômico (reforma de mercado limitada)"]
      },
      {
        year_start: 1989,
        year_end: 2010,
        leader: "Era Democrática (Antall, Horn, Orbán I, Gyurcsány)",
        party: "MDF / MSZP / Fidesz",
        party_full_name: "Coalizões Democráticas Alternadas",
        spectrum: 1,
        regime_type: "democracy",
        description: "Retorno da democracia multipartidária. Entrada na OTAN e integração formal na União Europeia.",
        key_events: ["1989 - Abertura da cortina de ferro", "1999 - Hungria ingressa na OTAN", "2004 - Hungria ingressa na União Europeia"]
      },
      {
        year_start: 2010,
        year_end: 2024,
        leader: "Viktor Orbán",
        party: "Fidesz",
        party_full_name: "Fidesz - Hungarian Civic Alliance",
        spectrum: 6,
        regime_type: "hybrid",
        description: "Implementação declarada de uma 'Democracia Iliberal'. Alteração das regras eleitorais, controle da mídia e constante tensão com o bloco da UE.",
        key_events: ["2011 - Aprovação de nova Constituição conservadora", "2015 - Construção de muros fronteiriços contra migração", "2022 - Classificação da Hungria pela UE como autocracia eleitoral"]
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
        description: "Transição pacífica do sistema de partido único kemalista para o multipartidarismo.",
        key_events: ["1946 - Primeiras eleições multipartidárias competitivas"]
      },
      {
        year_start: 1950,
        year_end: 1960,
        leader: "Adnan Menderes",
        party: "DP",
        party_full_name: "Democrat Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo conservador-liberal. Foco no desenvolvimento rural e alinhamento com os EUA. Terminou deposto e executado por militares.",
        key_events: ["1952 - Turquia ingressa na OTAN", "1960 - Primeiro Golpe Militar na Turquia", "1961 - Execução de Menderes por traição"]
      },
      {
        year_start: 1961,
        year_end: 1980,
        leader: "Coalizões Instáveis (Demirel, Ecevit)",
        party: "AP / CHP",
        party_full_name: "Adalet Partisi / Republican People's Party",
        spectrum: 0,
        regime_type: "democracy",
        description: "Período caótico de instabilidade política, polarização violenta entre direita e esquerda e nova intervenção militar.",
        key_events: ["1971 - Golpe por memorando militar", "1974 - Invasão turca de Chipre"]
      },
      {
        year_start: 1980,
        year_end: 1983,
        leader: "General Kenan Evren",
        party: "Militar (Junta)",
        party_full_name: "Conselho de Segurança Nacional",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Golpe de Estado militar mais violento da história turca. Milhares de presos, executados e nova Constituição altamente restritiva.",
        key_events: ["1982 - Aprovação da Constituição militar centralizadora"]
      },
      {
        year_start: 1983,
        year_end: 2003,
        leader: "Turgut Özal / Tansu Çiller",
        party: "ANAP / DYP",
        party_full_name: "Anavatan Partisi / Doğru Yol Partisi",
        spectrum: 2,
        regime_type: "democracy",
        description: "Liberalização econômica profunda e privatizações. Conflito permanente de segurança com o separatismo curdo (PKK).",
        key_events: ["1997 - 'Golpe pós-moderno' militar força renúncia de premiê islâmico Erbakan"]
      },
      {
        year_start: 2003,
        year_end: 2014,
        leader: "Recep Tayyip Erdoğan (Premiê)",
        party: "AKP",
        party_full_name: "Justice and Development Party",
        spectrum: 1,
        regime_type: "hybrid",
        description: "Fase inicial moderada. Reformas pró-União Europeia, boom de infraestrutura e enfraquecimento político da tutela militar kemalista.",
        key_events: ["2005 - Início formal de negociações de adesão à UE", "2013 - Protestos do Parque Gezi marcam endurecimento policial"]
      },
      {
        year_start: 2014,
        year_end: 2024,
        leader: "Recep Tayyip Erdoğan (Presidente)",
        party: "AKP",
        party_full_name: "Justice and Development Party",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Conversão em República Presidencialista. Marcado pela repressão maciça pós-tentativa de golpe de 2016 e centralização do poder.",
        key_events: ["2016 - Tentativa frustrada de Golpe de Estado", "2017 - Plebiscito aprova Presidencialismo Executivo", "2023 - Reeleição de Erdoğan em pleito disputado"]
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
        party: "Congresso",
        party_full_name: "Indian National Congress",
        spectrum: -3,
        regime_type: "democracy",
        description: "Fundador da Índia moderna. Defensor do socialismo democrático, planejamento econômico e política externa de Não-Alinhamento.",
        key_events: ["1947 - Partição da Índia e Independência do Império Britânico", "1948 - Assassinato de Mahatma Gandhi", "1962 - Guerra Sino-Indiana"]
      },
      {
        year_start: 1964,
        year_end: 1966,
        leader: "Lal Bahadur Shastri",
        party: "Congresso",
        party_full_name: "Indian National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Chanceler em período de guerra contra o Paquistão. Lançou as bases da autossuficiência alimentar ('Revolução Verde').",
        key_events: ["1965 - Segunda Guerra Indo-Paquistanesa"]
      },
      {
        year_start: 1966,
        year_end: 1977,
        leader: "Indira Gandhi",
        party: "Congresso",
        party_full_name: "Indian National Congress",
        spectrum: -4,
        regime_type: "democracy", // Teve suspensão autoritária
        description: "Filha de Nehru. Nacionalizou bancos, venceu guerra contra Paquistão. Suspendeu direitos democráticos no 'Estado de Emergência' (1975-1977).",
        key_events: ["1971 - Guerra de Libertação de Bangladesh", "1975 - Declaração de Estado de Emergência autoritário"]
      },
      {
        year_start: 1977,
        year_end: 1980,
        leader: "Morarji Desai",
        party: "Janata",
        party_full_name: "Janata Party Coalition",
        spectrum: 1,
        regime_type: "democracy",
        description: "Primeiro governo não-Congresso da Índia, focado em restaurar as liberdades civis suspensas por Indira."
      },
      {
        year_start: 1980,
        year_end: 1984,
        leader: "Indira Gandhi",
        party: "Congresso",
        party_full_name: "Indian National Congress",
        spectrum: -3,
        regime_type: "democracy",
        description: "Retorno ao poder. Enfrentou grave insurgência sikh, culminando no ataque ao Templo de Ouro e no seu assassinato por guarda-costas.",
        key_events: ["1984 - Operação Estrela Azul (Templo de Ouro)", "1984 - Assassinato de Indira Gandhi"]
      },
      {
        year_start: 1984,
        year_end: 1989,
        leader: "Rajiv Gandhi",
        party: "Congresso",
        party_full_name: "Indian National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Filho de Indira. Iniciou tímidas reformas de modernização tecnológica e telecomunicações.",
        key_events: ["1984 - Desastre químico em Bhopal", "1987 - Intervenção militar indiana no Sri Lanka"]
      },
      {
        year_start: 1989,
        year_end: 1998,
        leader: "P. V. Narasimha Rao / Outros",
        party: "Congresso / Coalizões",
        party_full_name: "Indian National Congress & Coalitions",
        spectrum: -1,
        regime_type: "democracy",
        description: "Abertura e liberalização econômica radical da Índia sob a gestão técnica de Manmohan Singh como ministro.",
        key_events: ["1991 - Lançamento das reformas de liberalização econômica", "1992 - Destruição da Mesquita de Babri gera graves distúrbios religiosos"]
      },
      {
        year_start: 1998,
        year_end: 2004,
        leader: "Atal Bihari Vajpayee",
        party: "BJP",
        party_full_name: "Bharatiya Janata Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Primeiro chanceler de direita nacionalista a completar o mandato. Consolidação da Índia como potência atômica.",
        key_events: ["1998 - Testes nucleares declarados de Pokhran-II", "1999 - Guerra de Kargil com Paquistão"]
      },
      {
        year_start: 2004,
        year_end: 2014,
        leader: "Manmohan Singh",
        party: "Congresso",
        party_full_name: "Indian National Congress (UPA)",
        spectrum: -2,
        regime_type: "democracy",
        description: "Chanceler economista. Crescimento de dois dígitos e combate à pobreza extrema, marcado por escândalos de corrupção partidária no fim.",
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
        description: "Plataforma populista de nacionalismo hindu (Hindutva). Alta taxa de crescimento, centralização política e pressão sobre minorias muçulmanas e liberdade de imprensa.",
        key_events: ["2016 - Desmonetização repentina do papel-moeda", "2019 - Revogação do status especial da Caxemira", "2024 - Inauguração do controverso Templo de Ram em Ayodhya"]
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
        spectrum: -3,
        regime_type: "democracy",
        description: "Declaração de independência e guerra de fundação. Construção do Estado de bem-estar e integração massiva de refugiados judeus.",
        key_events: ["1948 - Declaração de Independência e Guerra Árabe-Israelense", "1956 - Crise de Suez"]
      },
      {
        year_start: 1963,
        year_end: 1969,
        leader: "Levi Eshkol",
        party: "Mapai / Trabalhista",
        party_full_name: "Labor Alignment",
        spectrum: -2,
        regime_type: "democracy",
        description: "Guerra dos Seis Dias em 1967, na qual Israel ocupou a Cisjordânia, Faixa de Gaza, Península do Sinai e Colinas de Golã.",
        key_events: ["1967 - Guerra dos Seis Dias"]
      },
      {
        year_start: 1969,
        year_end: 1974,
        leader: "Golda Meir",
        party: "Trabalhista",
        party_full_name: "Labor Alignment",
        spectrum: -2,
        regime_type: "democracy",
        description: "Guerra do Yom Kippur em 1973. A surpresa inicial do conflito gerou forte crise política interna forçando sua demissão posterior.",
        key_events: ["1972 - Massacre de atletas na Olimpíada de Munique", "1973 - Guerra do Yom Kippur"]
      },
      {
        year_start: 1974,
        year_end: 1977,
        leader: "Yitzhak Rabin",
        party: "Trabalhista",
        party_full_name: "Labor Alignment",
        spectrum: -2,
        regime_type: "democracy",
        description: "Primeiro mandato do ex-general, focando na reestruturação militar pós-1973.",
        key_events: ["1976 - Operação de resgate de reféns em Entebbe"]
      },
      {
        year_start: 1977,
        year_end: 1983,
        leader: "Menachem Begin",
        party: "Likud",
        party_full_name: "Likud Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Fim da hegemonia trabalhista de 29 anos. Assinatura do primeiro tratado de paz árabe-israelense (com o Egito) e invasão do Líbano de 1982.",
        key_events: ["1978 - Acordos de paz de Camp David", "1982 - Invasão israelense do Líbano"]
      },
      {
        year_start: 1983,
        year_end: 1992,
        leader: "Yitzhak Shamir / Shimon Peres",
        party: "Likud / Trabalhista",
        party_full_name: "Governos de Unidade Nacional",
        spectrum: 1,
        regime_type: "democracy",
        description: "Coalizões amplas lidando com a hiperinflação, a primeira Intifada palestina e a conferência de paz de Madri.",
        key_events: ["1987 - Eclosão da Primeira Intifada Palestiniana", "1991 - Conferência de Paz de Madri"]
      },
      {
        year_start: 1992,
        year_end: 1995,
        leader: "Yitzhak Rabin",
        party: "Trabalhista",
        party_full_name: "Labor Party",
        spectrum: -2,
        regime_type: "democracy",
        description: "Assinatura histórica dos Acordos de Oslo criando a Autoridade Palestina. Terminou com seu assassinato por um extremista judeu de direita.",
        key_events: ["1993 - Assinatura dos Acordos de Oslo na Casa Branca", "1994 - Tratado de paz Israel-Jordânia", "1995 - Assassinato de Yitzhak Rabin em Tel Aviv"]
      },
      {
        year_start: 1995,
        year_end: 2009,
        leader: "Netanyahu / Barak / Sharon / Olmert",
        party: "Likud / Kadima",
        party_full_name: "Governos Variados",
        spectrum: 1,
        regime_type: "democracy",
        description: "Colapso do processo de paz de Oslo e início da Segunda Intifada. Desocupação unilateral de Gaza (2005) por Sharon.",
        key_events: ["2000 - Eclosão da Segunda Intifada", "2005 - Retirada unilateral israelense de Gaza", "2006 - Segunda Guerra do Líbano"]
      },
      {
        year_start: 2009,
        year_end: 2021,
        leader: "Benjamin Netanyahu",
        party: "Likud",
        party_full_name: "Likud Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Forte hegemonia conservadora de direita. Expansão de assentamentos na Cisjordânia, acordos de normalização Abraham e foco na contenção do Irã.",
        key_events: ["2018 - Reconhecimento de Jerusalém como capital pelos EUA", "2020 - Assinatura dos Acordos de Abraham"]
      },
      {
        year_start: 2021,
        year_end: 2022,
        leader: "Naftali Bennett / Yair Lapid",
        party: "Yamina / Yesh Atid",
        party_full_name: "Coalizão de Mudança",
        spectrum: 2,
        regime_type: "democracy",
        description: "Coalizão heterogênea inédita composta por partidos de direita, centro, esquerda e um partido árabe-israelense para retirar Netanyahu do poder."
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Benjamin Netanyahu",
        party: "Likud",
        party_full_name: "Likud & Aliados de Extrema-Direita",
        spectrum: 5,
        regime_type: "democracy",
        description: "Governo mais à direita da história do país. Forte divisão social por reforma jurídica seguida pela eclosão da guerra contra o Hamas em Gaza pós-7 de outubro.",
        key_events: ["2023 - Protestos massivos contra a Reforma Judicial", "2023 - Ataques terroristas liderados pelo Hamas em 7 de Outubro e subsequente Guerra em Gaza"]
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
        party: "Monarquia",
        party_full_name: "Dinastia Pahlavi",
        spectrum: 4,
        regime_type: "monarchy",
        description: "Monarca jovem (Xá) governando em regime de monarquia constitucional com crescente influência estrangeira (Reino Unido/EUA).",
        key_events: ["1946 - Retirada soviética sob pressão na crise do Azerbaijão"]
      },
      {
        year_start: 1951,
        year_end: 1953,
        leader: "Mohammad Mossadegh",
        party: "Frente Nacional",
        party_full_name: "National Front of Iran",
        spectrum: -3,
        regime_type: "democracy",
        description: "Premiê eleito democraticamente que nacionalizou o petróleo controlado por britânicos. Deposto em golpe orquestrado por CIA e MI6.",
        key_events: ["1951 - Nacionalização da indústria petrolífera", "1953 - Golpe de Estado orquestrado por CIA/MI6 (Operação Ajax)"]
      },
      {
        year_start: 1953,
        year_end: 1979,
        leader: "Mohammad Reza Pahlavi",
        party: "Monarquia (Autocracia)",
        party_full_name: "Rastakhiz Party / Savak",
        spectrum: 5,
        regime_type: "monarchy",
        description: "Governo autocrático restaurado. Campanha de modernização laica ('Revolução Branca') e repressão sistemática a esquerdistas e clérigos.",
        key_events: ["1963 - Lançamento das reformas da Revolução Branca", "1971 - Comemoração dos 2500 anos do Império Persa"]
      },
      {
        year_start: 1979,
        year_end: 1989,
        leader: "Ruhollah Khomeini",
        party: "Clero Teocrático",
        party_full_name: "Association of Combatant Clergy",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Revolução Islâmica derruba a monarquia e instala uma República Teocrática. Longa e destrutiva guerra defensiva contra o Iraque.",
        key_events: ["1979 - Revolução Islâmica / Crise dos reféns dos EUA", "1980 - Início da Guerra Irã-Iraque", "1988 - Fim da Guerra Irã-Iraque com impasse"]
      },
      {
        year_start: 1989,
        year_end: 1997,
        leader: "Akbar Hashemi Rafsanjani",
        party: "Clero Conservador",
        party_full_name: "Combatant Clergy Association",
        spectrum: -6,
        regime_type: "authoritarian",
        description: "Período de reconstrução econômica pós-guerra sob o comando de Ali Khamenei como novo Líder Supremo."
      },
      {
        year_start: 1997,
        year_end: 2005,
        leader: "Mohammad Khatami",
        party: "Reformista",
        party_full_name: "Association of Combatant Clergy (Reformist faction)",
        spectrum: -4,
        regime_type: "hybrid",
        description: "Tentativa de abertura democrática, promoção de liberdades civis e de imprensa, além de proposta de 'Diálogo entre Civilizações'. Barricado pela linha dura.",
        key_events: ["1999 - Grandes protestos estudantis reprimidos"]
      },
      {
        year_start: 2005,
        year_end: 2013,
        leader: "Mahmoud Ahmadinejad",
        party: "Populista Conservador",
        party_full_name: "Alliance of Builders of Islamic Iran",
        spectrum: -7,
        regime_type: "authoritarian",
        description: "Discurso populista duro contra o Ocidente. Aceleração do programa nuclear. Reeleição contestada em 2009 sob repressão violenta.",
        key_events: ["2009 - Protestos da onda verde contra suspeita de fraude eleitoral"]
      },
      {
        year_start: 2013,
        year_end: 2021,
        leader: "Hassan Rouhani",
        party: "Clero Moderador",
        party_full_name: "Combatant Clergy Association (Moderate)",
        spectrum: -5,
        regime_type: "hybrid",
        description: "Concluiu o acordo nuclear de 2015 com as potências mundiais, implodido posteriormente pela retirada americana em 2018.",
        key_events: ["2015 - Assinatura do Acordo Nuclear (JCPOA)", "2018 - Retirada unilateral americana do JCPOA por Trump"]
      },
      {
        year_start: 2021,
        year_end: 2024,
        leader: "Ebrahim Raisi",
        party: "Clero Linha-Dura",
        party_full_name: "Combatant Clergy Association (Hardline)",
        spectrum: -8,
        regime_type: "authoritarian",
        description: "Governo dominado inteiramente pela linha dura conservadora. Enfrentou massivos protestos pelos direitos das mulheres sob o lema 'Mulher, Vida, Liberdade'.",
        key_events: ["2022 - Protestos após morte de Mahsa Amini", "2024 - Morte de Raisi em acidente de helicóptero"]
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
        party: "Partido Unido",
        party_full_name: "United Party",
        spectrum: 3,
        regime_type: "hybrid", // Democracia para brancos apenas
        description: "Regime de segregação racial de fato, mas com instituições democráticas formais restritas à população branca."
      },
      {
        year_start: 1948,
        year_end: 1994,
        leader: "Apartheid (Malan, Verwoerd, Botha, de Klerk)",
        party: "Partido Nacional",
        party_full_name: "National Party (Apartheid)",
        spectrum: 8,
        regime_type: "authoritarian",
        description: "Codificação legal do Apartheid. Segregação total, retirada de direitos civis da maioria negra, repressão brutal da oposição e isolamento global.",
        key_events: ["1960 - Massacre de Sharpeville contra leis do passe", "1964 - Nelson Mandela é condenado à prisão perpétua", "1976 - Levante estudantil de Soweto", "1990 - Libertação de Nelson Mandela"]
      },
      {
        year_start: 1994,
        year_end: 1999,
        leader: "Nelson Mandela",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -3,
        regime_type: "democracy",
        description: "Primeiro presidente negro eleito de forma universal. Governo de reconciliação nacional e criação da Comissão da Verdade e Reconciliação.",
        key_events: ["1994 - Primeiras eleições multirraciais livres", "1996 - Promulgação da nova Constituição democrática"]
      },
      {
        year_start: 1999,
        year_end: 2008,
        leader: "Thabo Mbeki",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -2,
        regime_type: "democracy",
        description: "Foco no crescimento econômico liberal e na geopolítica da renascença africana, manchado por postura negacionista sobre o HIV.",
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
        description: "Governo manchado por acusações sistêmicas de corrupção e captura do Estado por interesses oligárquicos privados.",
        key_events: ["2012 - Massacre de mineradores em Marikana", "2018 - Renúncia forçada pelo ANC devido a escândalos"]
      },
      {
        year_start: 2018,
        year_end: 2024,
        leader: "Cyril Ramaphosa",
        party: "ANC",
        party_full_name: "African National Congress",
        spectrum: -1,
        regime_type: "democracy",
        description: "Esforço de estabilização pós-Zuma. Enfrentou graves apagões de energia (Eskom) e a primeira perda da maioria absoluta do ANC em 2024.",
        key_events: ["2024 - Eleição em que o ANC perde a maioria absoluta e forma governo de unidade nacional"]
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
        party: "Ocupação Militar (SCAP)",
        party_full_name: "Supreme Commander for the Allied Powers",
        spectrum: 0,
        regime_type: "transitional",
        description: "Desmilitarização e democratização do Japão pós-Segunda Guerra Mundial, com a aprovação de uma nova Constituição pacifista.",
        key_events: ["1947 - Promulgação da Constituição do Japão pacifista", "1951 - Assinatura do Tratado de Paz de San Francisco"]
      },
      {
        year_start: 1952,
        year_end: 1955,
        leader: "Yoshida Shigeru",
        party: "Liberal",
        party_full_name: "Liberal Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Doutrina Yoshida: foco absoluto na reconstrução econômica em aliança de segurança com os EUA.",
        key_events: ["1952 - Recuperação formal da soberania nacional"]
      },
      {
        year_start: 1955,
        year_end: 1993,
        leader: "Predomínio do LDP (Kishi, Ikeda, Sato, Nakasone)",
        party: "LDP (Conservador)",
        party_full_name: "Liberal Democratic Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "O 'Sistema 1955' de domínio do LDP. Forte crescimento econômico e milagre industrial, terminando com o estouro da bolha imobiliária.",
        key_events: ["1964 - Olimpíadas de Tóquio", "1972 - Devolução de Okinawa pelos EUA", "1990 - Estouro da Bolha de Ativos japonesa e início da 'década perdida'"]
      },
      {
        year_start: 1993,
        year_end: 1996,
        leader: "Hosokawa / Murayama",
        party: "Anti-LDP / Coalizão",
        party_full_name: "Coalizão Multipartidária / JSP",
        spectrum: -1,
        regime_type: "democracy",
        description: "Primeira interrupção do poder do LDP por coalizão reformista e depois socialista.",
        key_events: ["1995 - Grande Terremoto de Kobe e ataque com gás sarin no metrô de Tóquio"]
      },
      {
        year_start: 1996,
        year_end: 2009,
        leader: "LDP Restaurado (Hashimoto, Koizumi)",
        party: "LDP (Conservador)",
        party_full_name: "Liberal Democratic Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Retorno do LDP. Marcado pelas reformas postais liberais de Junichiro Koizumi e desregulamentação.",
        key_events: ["2001 - Eleição de Junichiro Koizumi", "2005 - Privatização dos Correios do Japão"]
      },
      {
        year_start: 2009,
        year_end: 2012,
        leader: "Governo do DPJ (Hatoyama, Kan, Noda)",
        party: "DPJ",
        party_full_name: "Democratic Party of Japan",
        spectrum: -1,
        regime_type: "democracy",
        description: "Governo de centro-esquerda. Marcado pelas dificuldades na gestão do triplo desastre de Fukushima (terremoto, tsunami e crise nuclear).",
        key_events: ["2011 - Sismo e tsunami de Tohoku e desastre nuclear de Fukushima"]
      },
      {
        year_start: 2012,
        year_end: 2020,
        leader: "Shinzo Abe",
        party: "LDP (Conservador)",
        party_full_name: "Liberal Democratic Party",
        spectrum: 4,
        regime_type: "democracy",
        description: "Premiê com mandato mais longo. Lançou as reformas macroeconômicas da 'Abenomics' e defendeu postura defensiva mais ativa para as Forças de Autodefesa.",
        key_events: ["2013 - Lançamento da política do Abenomics", "2020 - Renúncia por motivos de saúde"]
      },
      {
        year_start: 2020,
        year_end: 2024,
        leader: "Yoshihide Suga / Fumio Kishida",
        party: "LDP (Conservador)",
        party_full_name: "Liberal Democratic Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Gestão dos Jogos Olímpicos sob restrições da pandemia de COVID-19 e endurecimento da doutrina de defesa devido às tensões regionais.",
        key_events: ["2021 - Realização das Olimpíadas de Tóquio 2020", "2022 - Assassinato do ex-premiê Shinzo Abe"]
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
        party: "Ocupação Militar",
        party_full_name: "US Army Military Government in Korea",
        spectrum: 0,
        regime_type: "transitional",
        description: "Administração provisória dos EUA no sul da península após a libertação do domínio japonês.",
        key_events: ["1945 - Divisão da península da Coreia no paralelo 38"]
      },
      {
        year_start: 1948,
        year_end: 1960,
        leader: "Syngman Rhee",
        party: "Liberal",
        party_full_name: "Liberal Party",
        spectrum: 5,
        regime_type: "authoritarian",
        description: "Primeiro presidente da Coreia do Sul. Anticristão e feroz anticomunista, governou autoritariamente antes de ser deposto por protestos estudantis.",
        key_events: ["1950 - Início da Guerra da Coreia", "1953 - Assinatura do Armistício da Coreia", "1960 - Revolução de Abril força renúncia de Rhee"]
      },
      {
        year_start: 1960,
        year_end: 1961,
        leader: "Segunda República (Yun Posun)",
        party: "Democrata",
        party_full_name: "Democratic Party",
        spectrum: -1,
        regime_type: "democracy",
        description: "Breve período democrático parlamentar sob instabilidade institucional, derrubado por um golpe militar.",
        key_events: ["1961 - Golpe Militar de 16 de Maio liderado por Park Chung-hee"]
      },
      {
        year_start: 1961,
        year_end: 1979,
        leader: "Park Chung-hee",
        party: "Militar / DRP",
        party_full_name: "Democratic Republican Party",
        spectrum: 7,
        regime_type: "authoritarian",
        description: "Chanceler ditatorial de longa data. Conduziu o chamado 'Milagre no Rio Han' com industrialização acelerada (Chaebols) sob severo estado policial. Assassinado por chefe de inteligência.",
        key_events: ["1972 - Constituição Yushin formaliza poderes ditatoriais", "1979 - Assassinato de Park Chung-hee"]
      },
      {
        year_start: 1979,
        year_end: 1988,
        leader: "Chun Doo-hwan",
        party: "Militar / DJP",
        party_full_name: "Democratic Justice Party",
        spectrum: 8,
        regime_type: "authoritarian",
        description: "Assumiu o poder por um golpe militar interno. Enfrentou revoltas civis com extrema violência. Cedeu a eleições diretas devido à pressão popular.",
        key_events: ["1980 - Massacre de civis no Levante de Gwangju", "1987 - Declaração de 29 de Junho cede a eleições democráticas diretas"]
      },
      {
        year_start: 1988,
        year_end: 1993,
        leader: "Roh Tae-woo",
        party: "DJP / DLP",
        party_full_name: "Democratic Liberal Party",
        spectrum: 3,
        regime_type: "transitional",
        description: "Ex-general que venceu a primeira eleição direta competitiva. Focou na normalização internacional com os Jogos Olímpicos.",
        key_events: ["1988 - Olimpíadas de Seul"]
      },
      {
        year_start: 1993,
        year_end: 1998,
        leader: "Kim Young-sam",
        party: "DLP / New Korea",
        party_full_name: "New Korea Party",
        spectrum: 2,
        regime_type: "democracy",
        description: "Primeiro presidente civil de carreira em décadas. Julgou ex-presidentes militares e lidou com a crise asiática de 1997.",
        key_events: ["1996 - Prisão e julgamento de Chun Doo-hwan e Roh Tae-woo", "1997 - Crise Financeira Asiática e intervenção do FMI"]
      },
      {
        year_start: 1998,
        year_end: 2003,
        leader: "Kim Dae-jung",
        party: "Congresso",
        party_full_name: "National Congress for New Politics",
        spectrum: -2,
        regime_type: "democracy",
        description: "Governo reformista de esquerda. Lançou a 'Política do Sol' de aproximação pacífica com a Coreia do Norte. Laureado com o Nobel da Paz.",
        key_events: ["2000 - Cúpula Intercoreana histórica em Pyongyang", "2002 - Copa do Mundo sediada conjuntamente com o Japão"]
      },
      {
        year_start: 2003,
        year_end: 2008,
        leader: "Roh Moo-hyun",
        party: "Uri",
        party_full_name: "Uri Party",
        spectrum: -3,
        regime_type: "democracy",
        description: "Plataforma focada em combate à corrupção e descentralização de poder."
      },
      {
        year_start: 2008,
        year_end: 2017,
        leader: "Lee Myung-bak / Park Geun-hye",
        party: "Hannara / Saenuri",
        party_full_name: "Saenuri Party (Conservative)",
        spectrum: 3,
        regime_type: "democracy",
        description: "Retorno conservador. Terminou com impeachment dramático da presidente Park Geun-hye por tráfico de influência em 2017.",
        key_events: ["2014 - Tragédia do naufrágio da balsa Sewol", "2017 - Impeachment e destituição da presidente Park Geun-hye"]
      },
      {
        year_start: 2017,
        year_end: 2022,
        leader: "Moon Jae-in",
        party: "Democrata",
        party_full_name: "Democratic Party of Korea",
        spectrum: -2,
        regime_type: "democracy",
        description: "Foco no bem-estar social, forte combate à pandemia e nova cúpula histórica de aproximação com Kim Jong-un.",
        key_events: ["2018 - Encontro na Zona Desmilitarizada (DMZ) com Kim Jong-un"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Yoon Suk-yeol",
        party: "Poder Popular",
        party_full_name: "People Power Party",
        spectrum: 3,
        regime_type: "democracy",
        description: "Ex-procurador-geral. Alinhamento de segurança fortalecido com EUA e Japão contra ameaças norte-coreanas.",
        key_events: ["2023 - Cúpula trilateral histórica em Camp David com EUA e Japão"]
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
        party: "Democracia Cristã",
        party_full_name: "Democrazia Cristiana (Transição)",
        spectrum: 0,
        regime_type: "transitional",
        description: "Governo pós-fascismo e pós-Guerra. Transição institucional da monarquia para a república.",
        key_events: ["1946 - Referendo popular extingue a Monarquia e cria a República Italiana"]
      },
      {
        year_start: 1946,
        year_end: 1981,
        leader: "Predomínio Democrata Cristão (De Gasperi, Moro)",
        party: "DC (Centrismo)",
        party_full_name: "Democrazia Cristiana",
        spectrum: 2,
        regime_type: "democracy",
        description: "Anos marcados por forte crescimento industrial, mas também pelos Anos de Chumbo de terrorismo interno e instabilidade de gabinetes.",
        key_events: ["1957 - Tratados de Roma assinados na capital", "1978 - Sequestro e assassinato do ex-premiê Aldo Moro pelo grupo Brigadas Vermelhas"]
      },
      {
        year_start: 1981,
        year_end: 1991,
        leader: "Pentapartito (Bettino Craxi)",
        party: "PSI / DC",
        party_full_name: "Partito Socialista Italiano / Pentapartito",
        spectrum: 1,
        regime_type: "democracy",
        description: "Período governado pela coalizão de cinco partidos liberais e socialistas, com forte crescimento de dívida pública.",
        key_events: ["1984 - Concordata com o Vaticano encerra catolicismo como religião oficial de Estado"]
      },
      {
        year_start: 1991,
        year_end: 1994,
        leader: "Crise Tangentopoli",
        party: "Técnicos (Transição)",
        party_full_name: "Mani Pulite",
        spectrum: 0,
        regime_type: "transitional",
        description: "Colapso do sistema partidário tradicional da 1ª República após revelações massivas de propinas na investigação 'Mãos Limpas'.",
        key_events: ["1992 - Assassinato dos juízes Giovanni Falcone e Paolo Borsellino pela máfia", "1994 - Extinção da Democracia Cristã e do Partido Socialista"]
      },
      {
        year_start: 1994,
        year_end: 2011,
        leader: "Alternância Berlusconi / Prodi",
        party: "Forza Italia / L'Ulivo",
        party_full_name: "Forza Italia vs. Coalizões de Centro-Esquerda",
        spectrum: 2, // Média do espectro dependendo de quem governa (Berlusconi +2, Prodi -2)
        regime_type: "democracy",
        description: "Fase de forte personalização política liderada pelo magnata Silvio Berlusconi intercalado por governos de centro-esquerda de Romano Prodi.",
        key_events: ["2001 - Ingressa na circulação do Euro", "2009 - Sismo devastador na cidade de L'Aquila"]
      },
      {
        year_start: 2011,
        year_end: 2018,
        leader: "Mário Monti / Matteo Renzi",
        party: "Técnicos / PD",
        party_full_name: "Partito Democratico & Governos Técnicos",
        spectrum: 0,
        regime_type: "democracy",
        description: "Governos de salvação e reformas fiscais durante a crise do Euro, seguidos por reformas liberais de Renzi.",
        key_events: ["2016 - Rejeição de referendo constitucional causa renúncia de Renzi"]
      },
      {
        year_start: 2018,
        year_end: 2022,
        leader: "Giuseppe Conte / Mario Draghi",
        party: "M5S / Técnico",
        party_full_name: "Movimento 5 Estrelas / Coalizão Nacional",
        spectrum: 0,
        regime_type: "democracy",
        description: "Governo populista inicial e depois gestão técnica do ex-presidente do BCE Mario Draghi durante a pandemia.",
        key_events: ["2020 - Itália torna-se epicentro ocidental da COVID-19"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Giorgia Meloni",
        party: "Irmãos de Itália",
        party_full_name: "Fratelli d'Italia",
        spectrum: 5,
        regime_type: "democracy",
        description: "Primeira mulher no cargo de primeiro-ministro. Lidera coalizão de direita nacionalista e conservadora com foco em controle migratório.",
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
        party: "Falange / Regime Fascista",
        party_full_name: "Movimiento Nacional",
        spectrum: 9,
        regime_type: "authoritarian",
        description: "Ditadura franquista autoritária corporativista, católica e anticomunista pós-Guerra Civil. Isolamento inicial e posterior abertura econômica dos anos 60.",
        key_events: ["1955 - Espanha é aceita na ONU", "1973 - Assassinato do primeiro-ministro Luis Carrero Blanco pelo grupo ETA", "1975 - Morte de Franco e ascensão do Rei Juan Carlos I"]
      },
      {
        year_start: 1975,
        year_end: 1982,
        leader: "Adolfo Suárez",
        party: "UCD",
        party_full_name: "Unión de Centro Democrático",
        spectrum: 2,
        regime_type: "transitional",
        description: "Período da Transição Espanhola. Anistia geral, legalização de partidos e redação da Constituição democrática de 1978.",
        key_events: ["1978 - Aprovação da Constituição em Referendo", "1981 - Tentativa fracassada de golpe militar do 23-F (Coronel Tejero)"]
      },
      {
        year_start: 1982,
        year_end: 1996,
        leader: "Felipe González",
        party: "PSOE",
        party_full_name: "Partido Socialista Obrero Español",
        spectrum: -3,
        regime_type: "democracy",
        description: "Modernização nacional, entrada da Espanha na UE e na OTAN. Reformas de infraestrutura e consolidação social democrata.",
        key_events: ["1986 - Ingressa na Comunidade Econômica Europeia", "1992 - Jogos Olímpicos de Barcelona e Expo de Sevilha"]
      },
      {
        year_start: 1996,
        year_end: 2004,
        leader: "José María Aznar",
        party: "PP",
        party_full_name: "Partido Popular",
        spectrum: 4,
        regime_type: "democracy",
        description: "Adoção do Euro, crescimento imobiliário impulsionado pelo crédito fácil e forte alinhamento com a intervenção militar americana no Iraque.",
        key_events: ["2002 - Desastre ambiental do petroleiro Prestige", "2004 - Atentados islâmicos nos trens de Madri em 11 de Março"]
      },
      {
        year_start: 2004,
        year_end: 2011,
        leader: "José Luis Rodríguez Zapatero",
        party: "PSOE",
        party_full_name: "Partido Socialista Obrero Español",
        spectrum: -3,
        regime_type: "democracy",
        description: "Retirada de tropas do Iraque, legalização do casamento gay e leis de memória histórica. Governo devastado pela crise de 2008.",
        key_events: ["2005 - Legalização do casamento homoafetivo", "2011 - Grandes protestos de indignados do Movimento 15-M"]
      },
      {
        year_start: 2011,
        year_end: 2018,
        leader: "Mariano Rajoy",
        party: "PP",
        party_full_name: "Partido Popular",
        spectrum: 3,
        regime_type: "democracy",
        description: "Agenda dura de austeridade fiscal contra a crise da dívida soberana e suspensão da autonomia catalã pós-referendo de independência de 2017.",
        key_events: ["2014 - Abdicação do Rei Juan Carlos I em favor de seu filho Felipe VI", "2017 - Referendo de independência inconstitucional na Catalunha e aplicação do artigo 155"]
      },
      {
        year_start: 2018,
        year_end: 2024,
        leader: "Pedro Sánchez",
        party: "PSOE",
        party_full_name: "Partido Socialista Obrero Español",
        spectrum: -2,
        regime_type: "democracy",
        description: "Chanceler em governo de coalizão de esquerda (com Unidas Podemos e apoio regional). Concessão de anistias controversas a separatistas catalães.",
        key_events: ["2019 - Exumação dos restos mortais do ditador Franco do Vale dos Caídos", "2023 - Polêmica aprovação da Lei de Anistia para separatistas da Catalunha"]
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
        party: "Social-Democrata",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -4,
        regime_type: "democracy",
        description: "Chanceler de mandato recorde (24 anos). Criação da base estrutural do modelo de bem-estar sueco (Folkhemmet).",
        key_events: ["1953 - Adoção formal de feriados remunerados de 3 semanas"]
      },
      {
        year_start: 1969,
        year_end: 1976,
        leader: "Olof Palme",
        party: "Social-Democrata",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -5,
        regime_type: "democracy",
        description: "Forte ênfase no ativismo internacional anticoloanista e crítica aberta às superpotências de EUA e URSS.",
        key_events: ["1972 - Crítica dura aos bombardeios americanos em Hanói"]
      },
      {
        year_start: 1976,
        year_end: 1982,
        leader: "Thorbjörn Fälldin",
        party: "Partido do Centro (Coalizão)",
        party_full_name: "Centerpartiet & Coalizão",
        spectrum: 2,
        regime_type: "democracy",
        description: "Primeiro governo não social-democrata em 40 anos, lidando com divisões profundas sobre o abandono de energia nuclear."
      },
      {
        year_start: 1982,
        year_end: 1991,
        leader: "Olof Palme / Ingvar Carlsson",
        party: "Social-Democrata",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -4,
        regime_type: "democracy",
        description: "Retorno de Palme ao cargo. Terminou tragicamente com seu assassinato não resolvido em rua de Estocolmo.",
        key_events: ["1986 - Assassinato do primeiro-ministro Olof Palme"]
      },
      {
        year_start: 1991,
        year_end: 1994,
        leader: "Carl Bildt",
        party: "Moderado (Coalizão)",
        party_full_name: "Moderaterna & Coalizão",
        spectrum: 3,
        regime_type: "democracy",
        description: "Governo focado na desregulamentação de mercados de telefonia e aviação durante severa crise financeira bancária.",
        key_events: ["1992 - Crise de taxas de juros extremas do Banco Central"]
      },
      {
        year_start: 1994,
        year_end: 2006,
        leader: "Ingvar Carlsson / Göran Persson",
        party: "Social-Democrata",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -3,
        regime_type: "democracy",
        description: "Entrada na União Europeia e forte saneamento fiscal para estabilizar as contas do Estado após as crises bancárias.",
        key_events: ["1995 - Suécia ingressa oficialmente na União Europeia", "2003 - Assassinato da ministra de Relações Exteriores Anna Lindh"]
      },
      {
        year_start: 2006,
        year_end: 2014,
        leader: "Fredrik Reinfeldt",
        party: "Moderado (Aliança)",
        party_full_name: "Moderaterna / Alliansen",
        spectrum: 2,
        regime_type: "democracy",
        description: "Reformas de redução de impostos corporativos e de renda do trabalho sob a coalizão da Aliança pela Suécia.",
        key_events: ["2008 - Suécia ratifica o Tratado de Lisboa"]
      },
      {
        year_start: 2014,
        year_end: 2022,
        leader: "Stefan Löfven / M. Andersson",
        party: "Social-Democrata",
        party_full_name: "Sveriges Socialdemokratiska Arbetareparti",
        spectrum: -3,
        regime_type: "democracy",
        description: "Governo minoritário social-democrata. Marcado por alta imigração (2015) e a histórica decisão de abandonar a neutralidade militar para aderir à OTAN.",
        key_events: ["2015 - Crise migratória na Europa e acolhimento recorde na Suécia", "2022 - Pedido formal de adesão da Suécia à OTAN"]
      },
      {
        year_start: 2022,
        year_end: 2024,
        leader: "Ulf Kristersson",
        party: "Moderado",
        party_full_name: "Moderaterna & Aliados",
        spectrum: 3,
        regime_type: "democracy",
        description: "Chanceler moderado governando com apoio parlamentar da extrema-direita (Democratas Suecos) focando em segurança e controle de gangues.",
        key_events: ["2024 - Admissão formal e entrada da Suécia na OTAN como 32º membro"]
      }
    ]
  }
];
