/**
 * @file staticDataset.ts
 * @description Base de dados históricos estática contendo a cronologia de períodos políticos de
 * dezenas de nações ao redor do globo cobrindo o período pós-Segunda Guerra Mundial (1945-2024).
 * Este arquivo foi gerado automaticamente pelo script convert-vdem.ts integrando os dados reais do V-Dem.
 * 
 * Depende de:
 * - Types: {@link CountryData}, {@link PoliticalPeriod} de "./types.ts"
 */

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
    "code": "US",
    "name": "Estados Unidos",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1953,
        "leader": "Harry S. Truman",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": 0.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Presidente pós-Guerra e início da Guerra Fria. Lançamento da Doutrina Truman e do Plano Marshall.",
          "en": "President after the War and beginning of the Cold War. Launch of the Truman Doctrine and the Marshall Plan."
        },
        "key_events": {
          "pt": [
            "1945 - Fim da Segunda Guerra Mundial",
            "1947 - Doutrina Truman",
            "1948 - Plano Marshall"
          ],
          "en": [
            "1945 - End of World War II",
            "1947 - Truman Doctrine",
            "1948 - Marshall Plan"
          ]
        }
      },
      {
        "year_start": 1953,
        "year_end": 1961,
        "leader": "Dwight D. Eisenhower",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -1,
        "regime_type": "democracy",
        "description": {
          "pt": "General da Segunda Guerra de linha moderada. Crescimento da infraestrutura doméstica (rodovias) e doutrina de contenção anticomunista.",
          "en": "General of the Second World War of moderate line. Growth of domestic infrastructure (highways) and anti-communist containment doctrine."
        },
        "key_events": {
          "pt": [
            "1953 - Fim da Guerra da Coreia",
            "1957 - Crise de Little Rock (direitos civis)"
          ],
          "en": [
            "1953 - End of the Korean War",
            "1957 - Little Rock Crisis (civil rights)"
          ]
        }
      },
      {
        "year_start": 1961,
        "year_end": 1963,
        "leader": "John F. Kennedy",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": -1.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Nova Fronteira. Crise dos mísseis em Cuba e início da intervenção no Vietnã. Assassinado em Dallas.",
          "en": "New Frontier. Missile crisis in Cuba and beginning of intervention in Vietnam. Murdered in Dallas."
        },
        "key_events": {
          "pt": [
            "1961 - Invasão da Baía dos Porcos",
            "1962 - Crise dos Mísseis de Cuba",
            "1963 - Assassinato de JFK"
          ],
          "en": [
            "1961 - Bay of Pigs Invasion",
            "1962 - Cuban Missile Crisis",
            "1963 - JFK assassination"
          ]
        }
      },
      {
        "year_start": 1963,
        "year_end": 1969,
        "leader": "Lyndon B. Johnson",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": -2.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Projeto 'Grande Sociedade' focada em direitos civis e combate à pobreza, manchado pelo aprofundamento na Guerra do Vietnã.",
          "en": "'Great Society' project focused on civil rights and combating poverty, marred by the deepening Vietnam War."
        },
        "key_events": {
          "pt": [
            "1964 - Lei dos Direitos Civis",
            "1965 - Escala na Guerra do Vietnã",
            "1968 - Assassinato de Martin Luther King Jr."
          ],
          "en": [
            "1964 - Civil Rights Act",
            "1965 - Escalation in the Vietnam War",
            "1968 - Assassination of Martin Luther King Jr."
          ]
        }
      },
      {
        "year_start": 1969,
        "year_end": 1974,
        "leader": "Richard Nixon",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -1.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Détente com URSS e abertura da China. Fim da participação direta dos EUA no Vietnã. Renunciou devido ao escândalo de Watergate.",
          "en": "Détente with USSR and opening of China. End of direct US participation in Vietnam. Resigned due to the Watergate scandal."
        },
        "key_events": {
          "pt": [
            "1969 - Pouso na Lua da Apollo 11",
            "1972 - Visita à China",
            "1974 - Renúncia devido ao escândalo Watergate"
          ],
          "en": [
            "1969 – Apollo 11 Moon Landing",
            "1972 - Visit to China",
            "1974 - Resignation due to the Watergate scandal"
          ]
        }
      },
      {
        "year_start": 1974,
        "year_end": 1977,
        "leader": "Gerald Ford",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "Assumiu a presidência após a renúncia de Nixon, concedendo perdão presidencial a ele. Período marcado por estagflação.",
          "en": "He assumed the presidency after Nixon's resignation, granting him a presidential pardon. Period marked by stagflation."
        },
        "key_events": {
          "pt": [
            "1975 - Queda de Saigon / Fim da Guerra do Vietnã"
          ],
          "en": [
            "1975 - Fall of Saigon / End of the Vietnam War"
          ]
        }
      },
      {
        "year_start": 1977,
        "year_end": 1981,
        "leader": "Jimmy Carter",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": -5.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Ênfase nos direitos humanos na política externa. Mediação dos Acordos de Camp David. Crise dos reféns no Irã e crise energética prejudicaram o governo.",
          "en": "Emphasis on human rights in foreign policy. Mediation of the Camp David Accords. Iran hostage crisis and energy crisis have hampered the government."
        },
        "key_events": {
          "pt": [
            "1978 - Acordos de Camp David",
            "1979 - Início da crise dos reféns no Irã"
          ],
          "en": [
            "1978 - Camp David Accords",
            "1979 - Beginning of the Iran hostage crisis"
          ]
        }
      },
      {
        "year_start": 1981,
        "year_end": 1989,
        "leader": "Ronald Reagan",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -2.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Revolução Conservadora ('Reaganomics'). Forte retórica anticomunista, desregulamentação da economia e redução de impostos.",
          "en": "Conservative Revolution ('Reaganomics'). Strong anti-communist rhetoric, deregulation of the economy and tax cuts."
        },
        "key_events": {
          "pt": [
            "1981 - Atentado sofrido por Reagan",
            "1983 - Invasão de Granada",
            "1987 - Discurso no Muro de Berlim"
          ],
          "en": [
            "1981 - Attack suffered by Reagan",
            "1983 - Invasion of Grenada",
            "1987 - Speech at the Berlin Wall"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 1993,
        "leader": "George H. W. Bush",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -2.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Gestão do fim da Guerra Fria e a dissolução da União Soviética. Liderou a coalizão internacional na Guerra do Golfo.",
          "en": "Management of the end of the Cold War and the dissolution of the Soviet Union. Led the international coalition in the Gulf War."
        },
        "key_events": {
          "pt": [
            "1989 - Queda do Muro de Berlim",
            "1991 - Guerra do Golfo / Dissolução da URSS"
          ],
          "en": [
            "1989 - Fall of the Berlin Wall",
            "1991 - Gulf War / Dissolution of the USSR"
          ]
        }
      },
      {
        "year_start": 1993,
        "year_end": 2001,
        "leader": "Bill Clinton",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": -6.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Plataforma de Terceira Via (centrismo democrata). Expansão econômica recorde dos anos 90, assinatura do NAFTA e processos de paz.",
          "en": "Third Way Platform (Democratic centrism). Record economic expansion of the 1990s, signing of NAFTA and peace processes."
        },
        "key_events": {
          "pt": [
            "1993 - Assinatura do NAFTA",
            "1999 - Intervenção da OTAN em Kosovo",
            "1999 - Processo de Impeachment (absolvido)"
          ],
          "en": [
            "1993 - Signing of NAFTA",
            "1999 - NATO intervention in Kosovo",
            "1999 - Impeachment Process (acquitted)"
          ]
        }
      },
      {
        "year_start": 2001,
        "year_end": 2009,
        "leader": "George W. Bush",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -2.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Marcado pelos ataques de 11 de setembro e a subsequente 'Guerra ao Terror' com invasões no Afeganistão e Iraque. Crise financeira em 2008.",
          "en": "Marked by the September 11 attacks and the subsequent 'War on Terror' with invasions in Afghanistan and Iraq. Financial crisis in 2008."
        },
        "key_events": {
          "pt": [
            "2001 - Ataques terroristas de 11 de Setembro",
            "2003 - Invasão do Iraque",
            "2008 - Grande Crise Financeira Global"
          ],
          "en": [
            "2001 - September 11 terrorist attacks",
            "2003 - Invasion of Iraq",
            "2008 - Great Global Financial Crisis"
          ]
        }
      },
      {
        "year_start": 2009,
        "year_end": 2017,
        "leader": "Barack Obama",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": -2.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro presidente negro. Implementação do Obamacare (reforma da saúde). Retomada das relações com Cuba. Estímulo pós-crise.",
          "en": "First black president. Implementation of Obamacare (health reform). Resumption of relations with Cuba. Post-crisis stimulus."
        },
        "key_events": {
          "pt": [
            "2010 - Obamacare",
            "2011 - Morte de Osama bin Laden",
            "2015 - Acordo de Paris"
          ],
          "en": [
            "2010 - Obamacare",
            "2011 - Death of Osama bin Laden",
            "2015 - Paris Agreement"
          ]
        }
      },
      {
        "year_start": 2017,
        "year_end": 2021,
        "leader": "Donald Trump",
        "party": "GOP",
        "party_full_name": "Republican Party",
        "spectrum": -2.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Plataforma populista nacionalista 'America First'. Guerra comercial com a China, renegociação de tratados e nomeação de juízes conservadores.",
          "en": "Nationalist populist 'America First' platform. Trade war with China, renegotiation of treaties and appointment of conservative judges."
        },
        "key_events": {
          "pt": [
            "2018 - Guerra Comercial China",
            "2020 - COVID-19",
            "2021 - Invasão do Capitólio"
          ],
          "en": [
            "2018 - China Trade War",
            "2020 - COVID-19",
            "2021 - Invasion of the Capitol"
          ]
        }
      },
      {
        "year_start": 2021,
        "year_end": null,
        "leader": "Joe Biden",
        "party": "DEM",
        "party_full_name": "Democratic Party",
        "spectrum": -5.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo focado na reconstrução pós-pandêmica, investimentos massivos em infraestrutura e forte apoio à Ucrânia.",
          "en": "Government focused on post-pandemic reconstruction, massive investments in infrastructure and strong support for Ukraine."
        },
        "key_events": {
          "pt": [
            "2021 - Retirada do Afeganistão",
            "2022 - Apoio militar à Ucrânia"
          ],
          "en": [
            "2021 - Withdrawal from Afghanistan",
            "2022 - Military support for Ukraine"
          ]
        }
      }
    ]
  },
  {
    "code": "RU",
    "name": "Rússia / URSS",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1953,
        "leader": "Joseph Stalin",
        "party": "CPSU",
        "party_full_name": "Communist Party of the Soviet Union",
        "spectrum": 3.3,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Totalitarismo soviético no pós-Guerra. Consolidação do bloco do Leste e industrialização forçada no início da Guerra Fria.",
          "en": "Soviet totalitarianism in the post-war period. Consolidation of the Eastern bloc and forced industrialization at the beginning of the Cold War."
        },
        "key_events": {
          "pt": [
            "1945 - Vitória na Guerra",
            "1949 - Bomba Atômica Soviética"
          ],
          "en": [
            "1945 - Victory in the War",
            "1949 - Soviet Atomic Bomb"
          ]
        }
      },
      {
        "year_start": 1953,
        "year_end": 1964,
        "leader": "Nikita Khrushchev",
        "party": "CPSU",
        "party_full_name": "Communist Party of the Soviet Union",
        "spectrum": 3.3,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Período do 'Degelo' e início da Desestalinização. Corrida Espacial e a Crise dos Mísseis.",
          "en": "Period of 'Thaw' and beginning of De-Stalinization. Space Race and the Missile Crisis."
        },
        "key_events": {
          "pt": [
            "1956 - Discurso Secreto",
            "1957 - Sputnik",
            "1962 - Crise de Cuba"
          ],
          "en": [
            "1956 - Secret Speech",
            "1957 - Sputnik",
            "1962 - Cuban Crisis"
          ]
        }
      },
      {
        "year_start": 1964,
        "year_end": 1982,
        "leader": "Leonid Brezhnev",
        "party": "CPSU",
        "party_full_name": "Communist Party of the Soviet Union",
        "spectrum": 3.3,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Era da Estagnação Soviética. Doutrina Brezhnev de intervenção em governos socialistas e invasão do Afeganistão.",
          "en": "Era of Soviet Stagnation. Brezhnev doctrine of intervention in socialist governments and invasion of Afghanistan."
        },
        "key_events": {
          "pt": [
            "1968 - Primavera de Praga",
            "1979 - Invasão do Afeganistão"
          ],
          "en": [
            "1968 - Prague Spring",
            "1979 - Invasion of Afghanistan"
          ]
        }
      },
      {
        "year_start": 1982,
        "year_end": 1985,
        "leader": "Yuri Andropov / Konstantin Chernenko",
        "party": "CPSU",
        "party_full_name": "Communist Party of the Soviet Union",
        "spectrum": 3.2,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Breves governos liderados por membros seniores do politburo marcados por problemas de saúde e impasse político.",
          "en": "Brief governments led by senior politburo members marked by health problems and political impasse."
        },
        "key_events": {
          "pt": [
            "1983 - Incidente do voo KAL 007"
          ],
          "en": [
            "1983 - Flight KAL 007 incident"
          ]
        }
      },
      {
        "year_start": 1985,
        "year_end": 1991,
        "leader": "Mikhail Gorbachev",
        "party": "CPSU",
        "party_full_name": "Communist Party of the Soviet Union",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Tentativa de salvação da União Soviética através das reformas da Glasnost (abertura política) e Perestroika (reestruturação econômica).",
          "en": "Attempt to save the Soviet Union through the reforms of Glasnost (political opening) and Perestroika (economic restructuring)."
        },
        "key_events": {
          "pt": [
            "1986 - Chernobyl",
            "1989 - Retirada do Afeganistão",
            "1991 - Fim da URSS"
          ],
          "en": [
            "1986 - Chernobyl",
            "1989 - Withdrawal from Afghanistan",
            "1991 - End of the USSR"
          ]
        }
      },
      {
        "year_start": 1991,
        "year_end": 1999,
        "leader": "Boris Yeltsin",
        "party": "IND",
        "party_full_name": "Independente (Liderança Liberal)",
        "spectrum": 1.1,
        "regime_type": "hybrid",
        "description": {
          "pt": "Primeiro presidente da Federação Russa. Transição caótica para o capitalismo, privatizações massivas e crise constitucional de 1993.",
          "en": "First President of the Russian Federation. Chaotic transition to capitalism, massive privatizations and constitutional crisis of 1993."
        },
        "key_events": {
          "pt": [
            "1993 - Crise Constitucional e bombardeio do Parlamento",
            "1994 - Guerra da Chechênia"
          ],
          "en": [
            "1993 - Constitutional Crisis and bombing of Parliament",
            "1994 - Chechen War"
          ]
        }
      },
      {
        "year_start": 1999,
        "year_end": 2008,
        "leader": "Vladimir Putin",
        "party": "UR",
        "party_full_name": "United Russia Party",
        "spectrum": 3.3,
        "regime_type": "hybrid",
        "description": {
          "pt": "Reconstrução do poder central russo, controle dos oligarcas e forte crescimento econômico impulsionado pelo petróleo.",
          "en": "Reconstruction of Russian central power, control of oligarchs and strong economic growth driven by oil."
        },
        "key_events": {
          "pt": [
            "1999 - Segunda Guerra da Chechênia",
            "2004 - Crise dos reféns em Beslan"
          ],
          "en": [
            "1999 - Second Chechen War",
            "2004 - Beslan hostage crisis"
          ]
        }
      },
      {
        "year_start": 2008,
        "year_end": 2012,
        "leader": "Dmitry Medvedev",
        "party": "UR",
        "party_full_name": "United Russia Party",
        "spectrum": 4.4,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período de 'modernização' tecnológica com Putin atuando como Primeiro-Ministro. Conflito armado com a Geórgia.",
          "en": "Period of technological 'modernization' with Putin serving as Prime Minister. Armed conflict with Georgia."
        },
        "key_events": {
          "pt": [
            "2008 - Guerra Russo-Georgiana",
            "2011 - Protestos em Moscou"
          ],
          "en": [
            "2008 - Russo-Georgian War",
            "2011 - Protests in Moscow"
          ]
        }
      },
      {
        "year_start": 2012,
        "year_end": null,
        "leader": "Vladimir Putin",
        "party": "UR",
        "party_full_name": "United Russia Party",
        "spectrum": 5.5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Guinada conservadora e nacionalista. Anexação da Crimeia e subsequente invasão em larga escala da Ucrânia, isolando a Rússia do Ocidente.",
          "en": "Conservative and nationalist turn. Annexation of Crimea and subsequent large-scale invasion of Ukraine, isolating Russia from the West."
        },
        "key_events": {
          "pt": [
            "2014 - Anexação da Crimeia",
            "2022 - Invasão em larga escala da Ucrânia"
          ],
          "en": [
            "2014 - Annexation of Crimea",
            "2022 - Large-scale invasion of Ukraine"
          ]
        }
      }
    ]
  },
  {
    "code": "CN",
    "name": "China",
    "region": "Asia",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1949,
        "leader": "Chiang Kai-shek",
        "party": "KMT",
        "party_full_name": "Kuomintang",
        "spectrum": 7.7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Guerra Civil Chinesa entre os nacionalistas do Kuomintang e os comunistas liderados por Mao Zedong.",
          "en": "Chinese Civil War between the Kuomintang nationalists and the communists led by Mao Zedong."
        },
        "key_events": {
          "pt": [
            "1949 - Proclamação da RPC e recuo nacionalista para Taiwan"
          ],
          "en": [
            "1949 - Proclamation of the PRC and nationalist retreat to Taiwan"
          ]
        }
      },
      {
        "year_start": 1949,
        "year_end": 1976,
        "leader": "Mao Zedong",
        "party": "CPC",
        "party_full_name": "Chinese Communist Party",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Coletivização da agricultura e planos industriais agressivos. Marcado pela tragédia do Grande Salto Adiante e o caos da Revolução Cultural.",
          "en": "Collectivization of agriculture and aggressive industrial plans. Marked by the tragedy of the Great Leap Forward and the chaos of the Cultural Revolution."
        },
        "key_events": {
          "pt": [
            "1958 - Grande Salto Adiante",
            "1966 - Revolução Cultural",
            "1972 - Visita de Nixon"
          ],
          "en": [
            "1958 - Great Leap Forward",
            "1966 - Cultural Revolution",
            "1972 - Nixon visit"
          ]
        }
      },
      {
        "year_start": 1976,
        "year_end": 1978,
        "leader": "Hua Guofeng",
        "party": "CPC",
        "party_full_name": "Chinese Communist Party",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Transição após a morte de Mao. Prisão do 'Bando dos Quatro' e início do fim do radicalismo ideológico da Revolução Cultural.",
          "en": "Transition after Mao's death. Arrest of the 'Bando dos Quatro' and beginning of the end of the ideological radicalism of the Cultural Revolution."
        },
        "key_events": {
          "pt": [
            "1976 - Prisão do Bando dos Quatro"
          ],
          "en": [
            "1976 - Arrest of the Gang of Four"
          ]
        }
      },
      {
        "year_start": 1978,
        "year_end": 1989,
        "leader": "Deng Xiaoping",
        "party": "CPC",
        "party_full_name": "Chinese Communist Party",
        "spectrum": 3.2,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Início do 'Socialismo com Características Chinesas' e as reformas econômicas. Criação das Zonas Econômicas Especiais.",
          "en": "Beginning of 'Socialism with Chinese Characteristics' and economic reforms. Creation of Special Economic Zones."
        },
        "key_events": {
          "pt": [
            "1978 - Adoção da política de Reforma e Abertura",
            "1989 - Massacre na Praça Tiananmen"
          ],
          "en": [
            "1978 - Adoption of the Reform and Opening policy",
            "1989 - Tiananmen Square Massacre"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 2002,
        "leader": "Jiang Zemin",
        "party": "CPC",
        "party_full_name": "Chinese Communist Party",
        "spectrum": 3.2,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Forte crescimento econômico focado nas exportações e reintegração diplomática após Tiananmen. Devolução de Hong Kong.",
          "en": "Strong economic growth focused on exports and diplomatic reintegration after Tiananmen. Return from Hong Kong."
        },
        "key_events": {
          "pt": [
            "1997 - Devolução de Hong Kong",
            "2001 - Entrada da China na OMC"
          ],
          "en": [
            "1997 - Handover of Hong Kong",
            "2001 - China's entry into the WTO"
          ]
        }
      },
      {
        "year_start": 2002,
        "year_end": 2012,
        "leader": "Hu Jintao",
        "party": "CPC",
        "party_full_name": "Chinese Communist Party",
        "spectrum": 3.2,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Doutrina do 'Desenvolvimento Científico' e a busca por uma 'Sociedade Harmoniosa'. Grande expansão global e Olimpíadas de Pequim.",
          "en": "Doctrine of 'Scientific Development' and the search for a 'Harmonious Society'. Great global expansion and Beijing Olympics."
        },
        "key_events": {
          "pt": [
            "2008 - Olimpíadas de Pequim",
            "2010 - China torna-se 2ª maior economia mundial"
          ],
          "en": [
            "2008 - Beijing Olympics",
            "2010 - China becomes the world's 2nd largest economy"
          ]
        }
      },
      {
        "year_start": 2012,
        "year_end": null,
        "leader": "Xi Jinping",
        "party": "CPC",
        "party_full_name": "Chinese Communist Party",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Centralização drástica do poder, repressão a dissidências, iniciativa do 'Cinturão e Rota' e postura diplomática mais assertiva.",
          "en": "Drastic centralization of power, repression of dissent, 'Belt and Road' initiative and more assertive diplomatic stance."
        },
        "key_events": {
          "pt": [
            "2013 - Cinturão e Rota",
            "2020 - Lei de Segurança de Hong Kong"
          ],
          "en": [
            "2013 - Belt and Road",
            "2020 - Hong Kong Security Law"
          ]
        }
      }
    ]
  },
  {
    "code": "BR",
    "name": "Brasil",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1946,
        "leader": "José Linhares",
        "party": "IND",
        "party_full_name": "Supremo Tribunal Federal",
        "spectrum": 5.7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Presidente provisório após a deposição de Getúlio Vargas do Estado Novo, organizando as eleições livres de 1945.",
          "en": "Provisional president after the deposition of Getúlio Vargas of the Estado Novo, organizing the free elections of 1945."
        },
        "key_events": {
          "pt": [
            "1945 - Deposição de Getúlio Vargas"
          ],
          "en": [
            "1945 - Deposition of Getúlio Vargas"
          ]
        }
      },
      {
        "year_start": 1946,
        "year_end": 1951,
        "leader": "Eurico Gaspar Dutra",
        "party": "PSD",
        "party_full_name": "Partido Social Democrático",
        "spectrum": 2.5,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Promulgação da Constituição de 1946. Alinhamento internacional claro com os EUA e proibição do Partido Comunista Brasileiro (PCB).",
          "en": "Promulgation of the 1946 Constitution. Clear international alignment with the USA and ban on the Brazilian Communist Party (PCB)."
        },
        "key_events": {
          "pt": [
            "1946 - Promulgação da nova Constituição",
            "1947 - Rompimento com a URSS"
          ],
          "en": [
            "1946 - Promulgation of the new Constitution",
            "1947 - Break with the USSR"
          ]
        }
      },
      {
        "year_start": 1951,
        "year_end": 1954,
        "leader": "Getúlio Vargas",
        "party": "PTB",
        "party_full_name": "Partido Trabalhista Brasileiro",
        "spectrum": 0.9,
        "regime_type": "hybrid",
        "description": {
          "pt": "Retorno de Vargas nos 'braços do povo'. Nacionalismo econômico radical com a fundação da Petrobras. Terminou com seu suicídio devido à forte crise militar.",
          "en": "Vargas' return in the 'arms of the people'. Radical economic nationalism with the founding of Petrobras. It ended with his suicide due to the strong military crisis."
        },
        "key_events": {
          "pt": [
            "1953 - Criação da Petrobras",
            "1954 - Atentado da Rua Tonelero",
            "1954 - Suicídio de Vargas"
          ],
          "en": [
            "1953 - Creation of Petrobras",
            "1954 - Tonelero Street attack",
            "1954 - Vargas' suicide"
          ]
        }
      },
      {
        "year_start": 1954,
        "year_end": 1956,
        "leader": "Café Filho / Nereu Ramos",
        "party": "PSP",
        "party_full_name": "Partido Social Progressista",
        "spectrum": 2.2,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período de grande instabilidade política e militar sob a sombra do suicídio de Vargas, resolvido pela intervenção legalista do General Lott.",
          "en": "Period of great political and military instability under the shadow of Vargas' suicide, resolved by the legalist intervention of General Lott."
        },
        "key_events": {
          "pt": [
            "1955 - Eleição presidencial de JK",
            "1955 - Golpe Preventivo do General Lott"
          ],
          "en": [
            "1955 - JK presidential election",
            "1955 - General Lott's Preemptive Coup"
          ]
        }
      },
      {
        "year_start": 1956,
        "year_end": 1961,
        "leader": "Juscelino Kubitschek",
        "party": "PSD",
        "party_full_name": "Partido Social Democrático",
        "spectrum": 0.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Anos Dourados. Plano de Metas de '50 anos em 5'. Construção e inauguração da nova capital, Brasília.",
          "en": "Golden Years. '50 years in 5' Goal Plan. Construction and inauguration of the new capital, Brasília."
        },
        "key_events": {
          "pt": [
            "1956 - Início de Brasília",
            "1960 - Inauguração de Brasília"
          ],
          "en": [
            "1956 - Beginning of Brasilia",
            "1960 - Inauguration of Brasília"
          ]
        }
      },
      {
        "year_start": 1961,
        "year_end": 1961,
        "leader": "Jânio Quadros",
        "party": "PTN",
        "party_full_name": "Partido Trabalhista Nacional",
        "spectrum": 1.7,
        "regime_type": "hybrid",
        "description": {
          "pt": "Campanha da vassoura contra a corrupção. Política externa independente aproximando-se de países socialistas. Renúncia misteriosa após 7 meses.",
          "en": "Broom campaign against corruption. Independent foreign policy approaching socialist countries. Mysterious resignation after 7 months."
        },
        "key_events": {
          "pt": [
            "1961 - Condecoração de Che Guevara",
            "1961 - Renúncia de Jânio Quadros"
          ],
          "en": [
            "1961 - Che Guevara awarded",
            "1961 - Resignation of Jânio Quadros"
          ]
        }
      },
      {
        "year_start": 1961,
        "year_end": 1964,
        "leader": "João Goulart",
        "party": "PTB",
        "party_full_name": "Partido Trabalhista Brasileiro",
        "spectrum": 1.1,
        "regime_type": "hybrid",
        "description": {
          "pt": "Assumiu sob forte oposição militar no parlamentarismo. Conseguiu retorno ao presidencialismo. Promoveu as Reformas de Base. Deposto por um golpe militar.",
          "en": "He took office under strong military opposition in parliamentarism. He managed to return to presidentialism. Promoted Basic Reforms. Deposed by a military coup."
        },
        "key_events": {
          "pt": [
            "1961 - Campanha da Legalidade",
            "1963 - Plebiscito restaura o Presidencialismo",
            "1964 - Golpe Militar"
          ],
          "en": [
            "1961 - Legality Campaign",
            "1963 - Plebiscite restores Presidentialism",
            "1964 - Military Coup"
          ]
        }
      },
      {
        "year_start": 1964,
        "year_end": 1985,
        "leader": "Ditadura Militar",
        "party": "ARENA",
        "party_full_name": "Aliança Renovadora Nacional",
        "spectrum": 6.1,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Regime de exceção liderado por generais. Marcado por forte repressão através dos Atos Institucionais (AI-5), o Milagre Econômico e megaprojetos.",
          "en": "Exception regime led by generals. Marked by strong repression through Institutional Acts (AI-5), the Economic Miracle and megaprojects."
        },
        "key_events": {
          "pt": [
            "1968 - Promulgação do AI-5",
            "1973 - Auge do 'Milagre Econômico'",
            "1984 - Campanha das Diretas Já"
          ],
          "en": [
            "1968 - Promulgation of AI-5",
            "1973 - Peak of the 'Economic Miracle'",
            "1984 - Diretas Já Campaign"
          ]
        }
      },
      {
        "year_start": 1985,
        "year_end": 1990,
        "leader": "José Sarney",
        "party": "PMDB",
        "party_full_name": "Partido do Movimento Democrático Brasileiro",
        "spectrum": -0.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Assumiu devido à morte de Tancredo Neves. Período de transição democrática, promulgação da Constituição de 1988 e hiperinflação galopante.",
          "en": "He took over due to the death of Tancredo Neves. Period of democratic transition, promulgation of the 1988 Constitution and galloping hyperinflation."
        },
        "key_events": {
          "pt": [
            "1985 - Morte de Tancredo Neves",
            "1986 - Plano Cruzado",
            "1988 - Promulgação da Constituição Cidadã"
          ],
          "en": [
            "1985 - Death of Tancredo Neves",
            "1986 - Cruzado Plan",
            "1988 - Promulgation of the Citizen Constitution"
          ]
        }
      },
      {
        "year_start": 1990,
        "year_end": 1992,
        "leader": "Fernando Collor",
        "party": "PRN",
        "party_full_name": "Partido da Reconstrução Nacional",
        "spectrum": -2.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeira eleição direta desde 1960. Bloqueio das cadernetas de poupança e abertura neoliberal. Sofreu impeachment após escândalos de corrupção.",
          "en": "First direct election since 1960. Blocking of savings accounts and neoliberal opening. He was impeached following corruption scandals."
        },
        "key_events": {
          "pt": [
            "1990 - Confisco da Poupança",
            "1992 - Protestos dos Caras-Pintadas",
            "1992 - Renúncia antes da votação de Impeachment"
          ],
          "en": [
            "1990 - Confiscation of Savings",
            "1992 - Protests of the Painted Faces",
            "1992 - Resignation before Impeachment vote"
          ]
        }
      },
      {
        "year_start": 1992,
        "year_end": 1995,
        "leader": "Itamar Franco",
        "party": "PMDB",
        "party_full_name": "Partido do Movimento Democrático Brasileiro",
        "spectrum": -2.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Assumiu o cargo após a saída de Collor. Implementou o Plano Real em 1994 sob a liderança do ministro FHC, debelando a hiperinflação histórica.",
          "en": "He took over the position after Collor left. He implemented the Real Plan in 1994 under the leadership of Minister FHC, putting an end to historic hyperinflation."
        },
        "key_events": {
          "pt": [
            "1993 - Plebiscito de Governo",
            "1994 - Lançamento da moeda Real"
          ],
          "en": [
            "1993 - Government Plebiscite",
            "1994 - Launch of the Real currency"
          ]
        }
      },
      {
        "year_start": 1995,
        "year_end": 2003,
        "leader": "Fernando Henrique Cardoso",
        "party": "PSDB",
        "party_full_name": "Partido da Social Democracia Brasileira",
        "spectrum": -2.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Consolidação da estabilidade econômica. Grandes privatizações de estatais, reforma do Estado e criação de agências reguladoras.",
          "en": "Consolidation of economic stability. Large privatizations of state-owned companies, State reform and creation of regulatory agencies."
        },
        "key_events": {
          "pt": [
            "1997 - Aprovação da Emenda da Reeleição",
            "2001 - Crise do Apagão energético"
          ],
          "en": [
            "1997 - Approval of the Reelection Amendment",
            "2001 - Energy Blackout Crisis"
          ]
        }
      },
      {
        "year_start": 2003,
        "year_end": 2011,
        "leader": "Luiz Inácio Lula da Silva",
        "party": "PT",
        "party_full_name": "Partido dos Trabalhadores",
        "spectrum": -6.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo focado em inclusão social (Bolsa Família) e alta das commodities. Projeção internacional do Brasil como potência emergente (BRICS).",
          "en": "Government focused on social inclusion (Bolsa Família) and rise in commodities. International projection of Brazil as an emerging power (BRICS)."
        },
        "key_events": {
          "pt": [
            "2003 - Lançamento do Bolsa Família",
            "2005 - Mensalão"
          ],
          "en": [
            "2003 - Launch of Bolsa Família",
            "2005 - Mensalão"
          ]
        }
      },
      {
        "year_start": 2011,
        "year_end": 2016,
        "leader": "Dilma Rousseff",
        "party": "PT",
        "party_full_name": "Partido dos Trabalhadores",
        "spectrum": -6.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeira presidente mulher. Forte recessão econômica nos anos finais, intensos protestos populares (2013) e destituição via impeachment.",
          "en": "First female president. Strong economic recession in the final years, intense popular protests (2013) and dismissal via impeachment."
        },
        "key_events": {
          "pt": [
            "2013 - Jornadas de Junho",
            "2014 - Operação Lava Jato",
            "2016 - Impeachment de Dilma"
          ],
          "en": [
            "2013 - June Journeys",
            "2014 - Operation Lava Jato",
            "2016 - Impeachment of Dilma"
          ]
        }
      },
      {
        "year_start": 2016,
        "year_end": 2019,
        "leader": "Michel Temer",
        "party": "MDB",
        "party_full_name": "Movimento Democrático Brasileiro",
        "spectrum": -1.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Vice que assumiu a presidência. Adotou agenda de reformas liberais, como o Teto de Gastos Públicos e a Reforma Trabalhista.",
          "en": "Vice who assumed the presidency. He adopted a liberal reform agenda, such as the Public Spending Cap and the Labor Reform."
        },
        "key_events": {
          "pt": [
            "2016 - Teto de Gastos",
            "2017 - Reforma Trabalhista"
          ],
          "en": [
            "2016 - Spending Ceiling",
            "2017 - Labor Reform"
          ]
        }
      },
      {
        "year_start": 2019,
        "year_end": 2023,
        "leader": "Jair Bolsonaro",
        "party": "PL",
        "party_full_name": "Partido Liberal",
        "spectrum": -1,
        "regime_type": "democracy",
        "description": {
          "pt": "Plataforma conservadora e liberal (Paulo Guedes). Marcado por constantes tensões institucionais e a gestão da pandemia de COVID-19.",
          "en": "Conservative and liberal platform (Paulo Guedes). Marked by constant institutional tensions and the management of the COVID-19 pandemic."
        },
        "key_events": {
          "pt": [
            "2019 - Reforma da Previdência",
            "2020 - Pandemia de COVID-19"
          ],
          "en": [
            "2019 - Pension Reform",
            "2020 - COVID-19 Pandemic"
          ]
        }
      },
      {
        "year_start": 2023,
        "year_end": null,
        "leader": "Luiz Inácio Lula da Silva",
        "party": "PT",
        "party_full_name": "Partido dos Trabalhadores",
        "spectrum": -4.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno de Lula à presidência após vencer eleição polarizada. Foco na reconstrução ambiental e programas sociais clássicos.",
          "en": "Lula's return to the presidency after winning a polarized election. Focus on environmental reconstruction and classic social programs."
        },
        "key_events": {
          "pt": [
            "2023 - Ataques de 8 de Janeiro",
            "2023 - Presidência do G20"
          ],
          "en": [
            "2023 - January 8th Attacks",
            "2023 - Presidency of the G20"
          ]
        }
      }
    ]
  },
  {
    "code": "DE",
    "name": "Alemanha",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1949,
        "leader": "Ocupação Aliada",
        "party": "ACC",
        "party_full_name": "Allied Control Council",
        "spectrum": 7.5,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Período pós-guerra sob administração conjunta militar. Ocupação dividida entre EUA, Reino Unido, França e URSS.",
          "en": "Post-war period under joint military administration. Occupation divided between USA, United Kingdom, France and USSR."
        },
        "key_events": {
          "pt": [
            "1945 - Julgamentos de Nuremberg",
            "1948 - Bloqueio de Berlim"
          ],
          "en": [
            "1945 - Nuremberg Trials",
            "1948 - Berlin Blockade"
          ]
        }
      },
      {
        "year_start": 1949,
        "year_end": 1963,
        "leader": "Konrad Adenauer",
        "party": "CDU",
        "party_full_name": "Christian Democratic Union",
        "spectrum": 7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Primeiro chanceler da Alemanha Ocidental (RFA). Reconstrução econômica (Milagre do Reno) e integração à OTAN.",
          "en": "First Chancellor of West Germany (FRG). Economic reconstruction (Miracle on the Rhine) and integration into NATO."
        },
        "key_events": {
          "pt": [
            "1955 - Alemanha Ocidental ingressa na OTAN",
            "1961 - Construção do Muro de Berlim"
          ],
          "en": [
            "1955 - West Germany joins NATO",
            "1961 - Construction of the Berlin Wall"
          ]
        }
      },
      {
        "year_start": 1963,
        "year_end": 1966,
        "leader": "Ludwig Erhard",
        "party": "CDU",
        "party_full_name": "Christian Democratic Union",
        "spectrum": 7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Chanceler considerado o arquiteto da 'Economia Social de Mercado' alemã ocidental.",
          "en": "Chancellor considered the architect of the West German 'Social Market Economy'."
        },
        "key_events": {
          "pt": [
            "1965 - Início da desaceleração do Milagre Econômico"
          ],
          "en": [
            "1965 - Beginning of the Economic Miracle slowdown"
          ]
        }
      },
      {
        "year_start": 1966,
        "year_end": 1969,
        "leader": "Kurt Georg Kiesinger",
        "party": "CDU",
        "party_full_name": "Christian Democratic Union",
        "spectrum": 7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Liderou a primeira 'Grande Coalizão' da Alemanha Ocidental entre CDU e SPD.",
          "en": "Led West Germany's first 'Grand Coalition' between CDU and SPD."
        },
        "key_events": {
          "pt": [
            "1968 - Protestos estudantis alemães"
          ],
          "en": [
            "1968 - German student protests"
          ]
        }
      },
      {
        "year_start": 1969,
        "year_end": 1974,
        "leader": "Willy Brandt",
        "party": "SPD",
        "party_full_name": "Social Democratic Party",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Chanceler social-democrata. Implementou a Ostpolitik (normalização de relações com o bloco soviético).",
          "en": "Social Democratic Chancellor. Implemented Ostpolitik (normalization of relations with the Soviet bloc)."
        },
        "key_events": {
          "pt": [
            "1970 - Genuflexão de Varsóvia",
            "1974 - Escândalo Guillaume (Espionagem)"
          ],
          "en": [
            "1970 - Warsaw Genuflection",
            "1974 - Guillaume Scandal (Espionage)"
          ]
        }
      },
      {
        "year_start": 1974,
        "year_end": 1982,
        "leader": "Helmut Schmidt",
        "party": "SPD",
        "party_full_name": "Social Democratic Party",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Lidou com crises de petróleo e o pico do terrorismo doméstico comunista do grupo Fração do Exército Vermelho.",
          "en": "Dealt with oil crises and the spike in communist domestic terrorism by the Red Army Faction group."
        },
        "key_events": {
          "pt": [
            "1977 - Outono Alemão (Crise do Terrorismo)"
          ],
          "en": [
            "1977 - German Autumn (Terrorism Crisis)"
          ]
        }
      },
      {
        "year_start": 1982,
        "year_end": 1998,
        "leader": "Helmut Kohl",
        "party": "CDU",
        "party_full_name": "Christian Democratic Union",
        "spectrum": -0.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler que liderou a Reunificação da Alemanha Oriental e Ocidental e as negociações do Tratado de Maastricht.",
          "en": "Chancellor who led the Reunification of East and West Germany and the Maastricht Treaty negotiations."
        },
        "key_events": {
          "pt": [
            "1989 - Queda do Muro de Berlim",
            "1990 - Reunificação Alemã",
            "1992 - Tratado de Maastricht"
          ],
          "en": [
            "1989 - Fall of the Berlin Wall",
            "1990 - German Reunification",
            "1992 - Maastricht Treaty"
          ]
        }
      },
      {
        "year_start": 1998,
        "year_end": 2005,
        "leader": "Gerhard Schröder",
        "party": "SPD",
        "party_full_name": "Social Democratic Party",
        "spectrum": -7.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Aliança SPD-Verdes. Opositor destacado da invasão do Iraque e implementador de reformas trabalhistas ('Agenda 2010').",
          "en": "SPD-Greens Alliance. Prominent opponent of the invasion of Iraq and implementer of labor reforms ('Agenda 2010')."
        },
        "key_events": {
          "pt": [
            "2002 - Introdução física do Euro",
            "2003 - Agenda 2010"
          ],
          "en": [
            "2002 - Physical introduction of the Euro",
            "2003 - Agenda 2010"
          ]
        }
      },
      {
        "year_start": 2005,
        "year_end": 2021,
        "leader": "Angela Merkel",
        "party": "CDU",
        "party_full_name": "Christian Democratic Union",
        "spectrum": -2.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeira chanceler mulher. Liderou a Alemanha e a UE durante a crise do Euro, migratória (2015) e a pandemia.",
          "en": "First female chancellor. He led Germany and the EU during the Euro crisis, migration crisis (2015) and the pandemic."
        },
        "key_events": {
          "pt": [
            "2011 - Fim de energia nuclear planejado",
            "2015 - Crise de Refugiados na Europa"
          ],
          "en": [
            "2011 - End of nuclear power planned",
            "2015 - Refugee Crisis in Europe"
          ]
        }
      },
      {
        "year_start": 2021,
        "year_end": null,
        "leader": "Olaf Scholz",
        "party": "SPD",
        "party_full_name": "Social Democratic Party",
        "spectrum": -6.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Líder da coalizão 'Semáforo'. Declarou o Zeitenwende (virada histórica de defesa alemã) devido à guerra ucraniana.",
          "en": "Leader of the 'Semaphore' coalition. He declared the Zeitenwende (historical turning point in German defense) due to the Ukrainian war."
        },
        "key_events": {
          "pt": [
            "2022 - Zeitenwende e rearmamento",
            "2023 - Fim de dependência do gás russo"
          ],
          "en": [
            "2022 - Zeitenwende and rearmament",
            "2023 - End of dependence on Russian gas"
          ]
        }
      }
    ]
  },
  {
    "code": "FR",
    "name": "França",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1947,
        "leader": "Charles de Gaulle",
        "party": "IND",
        "party_full_name": "GPRF (Governo Provisório)",
        "spectrum": 1,
        "regime_type": "hybrid",
        "description": {
          "pt": "Líder da França Livre no comando do governo provisório pós-libertação alemã.",
          "en": "Leader of the Free French in command of the provisional post-liberation German government."
        },
        "key_events": {
          "pt": [
            "1944 - Sufrágio feminino concedido na França"
          ],
          "en": [
            "1944 - Women's suffrage granted in France"
          ]
        }
      },
      {
        "year_start": 1947,
        "year_end": 1954,
        "leader": "Vincent Auriol",
        "party": "SFIO",
        "party_full_name": "Section Française de l'Internationale Ouvrière",
        "spectrum": -3.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro presidente da Quarta República Francesa, caracterizada por forte instabilidade parlamentar.",
          "en": "First president of the French Fourth Republic, characterized by strong parliamentary instability."
        },
        "key_events": {
          "pt": [
            "1950 - Declaração Schuman",
            "1954 - Derrota francesa na Indochina"
          ],
          "en": [
            "1950 - Schuman Declaration",
            "1954 - French defeat in Indochina"
          ]
        }
      },
      {
        "year_start": 1954,
        "year_end": 1958,
        "leader": "René Coty",
        "party": "CNIP",
        "party_full_name": "Centre National des Indépendants et Paysans",
        "spectrum": -1.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Presidente final da Quarta República, colapsada em razão do conflito colonial da Guerra da Argélia.",
          "en": "Final president of the Fourth Republic, collapsed due to the colonial conflict of the Algerian War."
        },
        "key_events": {
          "pt": [
            "1954 - Início da Guerra da Argélia",
            "1957 - Tratados de Roma"
          ],
          "en": [
            "1954 - Start of the Algerian War",
            "1957 - Treaties of Rome"
          ]
        }
      },
      {
        "year_start": 1958,
        "year_end": 1969,
        "leader": "Charles de Gaulle",
        "party": "UNR",
        "party_full_name": "Union pour la Nouvelle République",
        "spectrum": -1.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Instituiu a Quinta República com poderes executivos fortes. Resolveu a independência argelina e buscou autonomia internacional.",
          "en": "He instituted the Fifth Republic with strong executive powers. It resolved Algerian independence and sought international autonomy."
        },
        "key_events": {
          "pt": [
            "1962 - Independência da Argélia",
            "1968 - Revolta de Maio de 1968"
          ],
          "en": [
            "1962 - Independence of Algeria",
            "1968 - May Uprising of 1968"
          ]
        }
      },
      {
        "year_start": 1969,
        "year_end": 1974,
        "leader": "Georges Pompidou",
        "party": "UDR",
        "party_full_name": "Union des Démocrates pour la République",
        "spectrum": -2.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Sucessor do Gaullismo, promovendo industrialização acelerada e modernização de transportes e infraestrutura.",
          "en": "Successor to Gaullism, promoting accelerated industrialization and modernization of transport and infrastructure."
        },
        "key_events": {
          "pt": [
            "1973 - Choque do Petróleo"
          ],
          "en": [
            "1973 - Oil Shock"
          ]
        }
      },
      {
        "year_start": 1974,
        "year_end": 1981,
        "leader": "Valéry Giscard d'Estaing",
        "party": "UDF",
        "party_full_name": "Union pour la Démocratie Française",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler liberal-reformista. Legalizou o aborto sob a liderança de Simone Veil e reduziu maioridade eleitoral.",
          "en": "Liberal-reformist chancellor. Legalized abortion under the leadership of Simone Veil and reduced the voting age."
        },
        "key_events": {
          "pt": [
            "1975 - Despenalização do aborto (Lei Veil)"
          ],
          "en": [
            "1975 - Decriminalization of abortion (Veil Law)"
          ]
        }
      },
      {
        "year_start": 1981,
        "year_end": 1995,
        "leader": "François Mitterrand",
        "party": "PS",
        "party_full_name": "Parti Socialiste",
        "spectrum": -6.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro presidente socialista da Quinta República. Promoveu nacionalizações no início e depois adotou política de rigor econômico.",
          "en": "First socialist president of the Fifth Republic. He promoted nationalizations at the beginning and then adopted a policy of economic rigor."
        },
        "key_events": {
          "pt": [
            "1981 - Abolição da pena de morte",
            "1986 - Primeira Coabitação com a direita"
          ],
          "en": [
            "1981 - Abolition of the death penalty",
            "1986 - First Cohabitation with the Right"
          ]
        }
      },
      {
        "year_start": 1995,
        "year_end": 2007,
        "leader": "Jacques Chirac",
        "party": "RPR",
        "party_full_name": "Rassemblement pour la République",
        "spectrum": -2.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo de centro-direita. Opositor destacado da Guerra do Iraque de 2003 e implementador do mandato presidencial de 5 anos.",
          "en": "Center-right government. Prominent opponent of the 2003 Iraq War and implementer of the 5-year presidential term."
        },
        "key_events": {
          "pt": [
            "2002 - Disputa contra Jean-Marie Le Pen",
            "2003 - Rejeição à Guerra do Iraque na ONU"
          ],
          "en": [
            "2002 - Dispute against Jean-Marie Le Pen",
            "2003 - Rejection of the Iraq War at the UN"
          ]
        }
      },
      {
        "year_start": 2007,
        "year_end": 2012,
        "leader": "Nicolas Sarkozy",
        "party": "UMP",
        "party_full_name": "Union pour um Mouvement Populaire",
        "spectrum": -2.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Estilo presidencial enérgico. Reinseriu a França no comando militar integrado da OTAN durante crises globais.",
          "en": "Energetic presidential style. Reinserted France into NATO's integrated military command during global crises."
        },
        "key_events": {
          "pt": [
            "2008 - Crise Financeira",
            "2011 - Operação Militar na Líbia"
          ],
          "en": [
            "2008 - Financial Crisis",
            "2011 - Military Operation in Libya"
          ]
        }
      },
      {
        "year_start": 2012,
        "year_end": 2017,
        "leader": "François Hollande",
        "party": "PS",
        "party_full_name": "Parti Socialiste",
        "spectrum": -7,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo marcado pela aprovação do casamento igualitário e por graves atentados terroristas do Estado Islâmico.",
          "en": "Government marked by the approval of equal marriage and serious terrorist attacks by the Islamic State."
        },
        "key_events": {
          "pt": [
            "2013 - Casamento igualitário aprovado",
            "2015 - Atentados terroristas em Paris"
          ],
          "en": [
            "2013 - Equal marriage approved",
            "2015 - Terrorist attacks in Paris"
          ]
        }
      },
      {
        "year_start": 2017,
        "year_end": null,
        "leader": "Emmanuel Macron",
        "party": "RE",
        "party_full_name": "Renaissance",
        "spectrum": -6.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Centrismo liberal e pró-União Europeia. Enfrentou protestos duradouros dos Coletes Amarelos e polêmica reforma previdenciária.",
          "en": "Liberal and pro-European Union centrism. It faced long-lasting Yellow Vest protests and controversial pension reform."
        },
        "key_events": {
          "pt": [
            "2018 - Coletes Amarelos",
            "2023 - Reforma da Previdência"
          ],
          "en": [
            "2018 - Yellow Vests",
            "2023 - Pension Reform"
          ]
        }
      }
    ]
  },
  {
    "code": "GB",
    "name": "Reino Unido",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1951,
        "leader": "Clement Attlee",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -4.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Vitória pós-Guerra. Estabeleceu o Estado de Bem-Estar Social britânico e nacionalizou as indústrias chave.",
          "en": "Post-War victory. Established the British welfare state and nationalized key industries."
        },
        "key_events": {
          "pt": [
            "1947 - Independência da Índia",
            "1948 - Fundação do NHS"
          ],
          "en": [
            "1947 - Independence of India",
            "1948 - Foundation of the NHS"
          ]
        }
      },
      {
        "year_start": 1951,
        "year_end": 1955,
        "leader": "Winston Churchill",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "Retornou focando no papel geopolítico britânico e na contenção nuclear da União Soviética.",
          "en": "He returned focusing on the British geopolitical role and nuclear containment of the Soviet Union."
        },
        "key_events": {
          "pt": [
            "1952 - Morte de George VI e coroação de Elizabeth II"
          ],
          "en": [
            "1952 - Death of George VI and coronation of Elizabeth II"
          ]
        }
      },
      {
        "year_start": 1955,
        "year_end": 1957,
        "leader": "Anthony Eden",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -1.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler conservador. Renunciou devido ao fracasso militar e diplomático na Crise de Suez de 1956.",
          "en": "Conservative Chancellor. Resigned due to military and diplomatic failure in the 1956 Suez Crisis."
        },
        "key_events": {
          "pt": [
            "1956 - Crise do Canal de Suez"
          ],
          "en": [
            "1956 - Suez Canal Crisis"
          ]
        }
      },
      {
        "year_start": 1957,
        "year_end": 1963,
        "leader": "Harold Macmillan",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "Reestruturou as finanças e aceitou a descolonização inevitável no continente africano.",
          "en": "He restructured finances and accepted the inevitable decolonization of the African continent."
        },
        "key_events": {
          "pt": [
            "1960 - Discurso 'Ventos de Mudança'"
          ],
          "en": [
            "1960 - 'Winds of Change' Speech"
          ]
        }
      },
      {
        "year_start": 1963,
        "year_end": 1964,
        "leader": "Alec Douglas-Home",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "Curto governo conservador antes da virada trabalhista dos anos 60.",
          "en": "Short Conservative government before the Labor turn of the 1960s."
        }
      },
      {
        "year_start": 1964,
        "year_end": 1970,
        "leader": "Harold Wilson",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -5.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo marcado por reformas sociais liberais e desregulamentação civil.",
          "en": "Government marked by liberal social reforms and civil deregulation."
        },
        "key_events": {
          "pt": [
            "1967 - Desvalorização da Libra"
          ],
          "en": [
            "1967 - Devaluation of the Pound"
          ]
        }
      },
      {
        "year_start": 1970,
        "year_end": 1974,
        "leader": "Edward Heath",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Garantiu a entrada oficial do país no mercado comum da Comunidade Econômica Europeia.",
          "en": "It guaranteed the country's official entry into the common market of the European Economic Community."
        },
        "key_events": {
          "pt": [
            "1973 - Ingressa na CEE"
          ],
          "en": [
            "1973 - Joins the EEC"
          ]
        }
      },
      {
        "year_start": 1974,
        "year_end": 1976,
        "leader": "Harold Wilson",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -5.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Retornou em segundo mandato lidando com forte estagflação e tensão com sindicatos de mineiros.",
          "en": "He returned for a second term dealing with strong stagflation and tension with miner unions."
        }
      },
      {
        "year_start": 1976,
        "year_end": 1979,
        "leader": "James Callaghan",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -5.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Seu governo caiu no desastroso 'Inverno do Descontentamento', assolado por greves gerais nos serviços públicos.",
          "en": "His government fell into the disastrous 'Winter of Discontent', plagued by general strikes in public services."
        },
        "key_events": {
          "pt": [
            "1976 - Empréstimo emergencial do FMI",
            "1979 - Inverno do Descontentamento"
          ],
          "en": [
            "1976 - Emergency loan from the IMF",
            "1979 - Winter of Discontent"
          ]
        }
      },
      {
        "year_start": 1979,
        "year_end": 1990,
        "leader": "Margaret Thatcher",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "A 'Dama de Ferro'. Implementou privatizações radicais, combateu sindicatos e venceu o conflito militar das Malvinas.",
          "en": "The 'Iron Lady'. He implemented radical privatizations, fought unions and won the Falklands military conflict."
        },
        "key_events": {
          "pt": [
            "1982 - Guerra das Malvinas",
            "1984 - Greve de Mineiros"
          ],
          "en": [
            "1982 - Falklands War",
            "1984 - Miners Strike"
          ]
        }
      },
      {
        "year_start": 1990,
        "year_end": 1997,
        "leader": "John Major",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler conservador. Assinou o Tratado de Maastricht. Enfrentou turbulências monetárias na Quarta-Feira Negra.",
          "en": "Conservative Chancellor. Signed the Maastricht Treaty. It faced monetary turmoil on Black Wednesday."
        },
        "key_events": {
          "pt": [
            "1992 - Quarta-Feira Negra cambial",
            "1994 - Abertura do Eurotúnel"
          ],
          "en": [
            "1992 - Black Wednesday exchange rate",
            "1994 - Opening of the Eurotunnel"
          ]
        }
      },
      {
        "year_start": 1997,
        "year_end": 2007,
        "leader": "Tony Blair",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Plataforma de 'New Labour'. Assinou a paz na Irlanda do Norte, mas desgastou-se pelo apoio à invasão do Iraque.",
          "en": "'New Labour' platform. He signed peace in Northern Ireland, but was worn down by supporting the invasion of Iraq."
        },
        "key_events": {
          "pt": [
            "1998 - Acordo de Sexta-Feira Santa",
            "2003 - Guerra do Iraque"
          ],
          "en": [
            "1998 - Good Friday Agreement",
            "2003 - Iraq War"
          ]
        }
      },
      {
        "year_start": 2007,
        "year_end": 2010,
        "leader": "Gordon Brown",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -6.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Assumiu com a saída de Blair. Gerenciou a grande crise de 2008 com intervenção estatal bancária.",
          "en": "He took over when Blair left. He managed the great crisis of 2008 with state banking intervention."
        },
        "key_events": {
          "pt": [
            "2008 - Nacionalização de bancos na crise"
          ],
          "en": [
            "2008 - Nationalization of banks in the crisis"
          ]
        }
      },
      {
        "year_start": 2010,
        "year_end": 2016,
        "leader": "David Cameron",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo marcado por austeridade. Convocou o referendo do Brexit em 2016 e renunciou após a vitória da saída.",
          "en": "Government marked by austerity. He called for the Brexit referendum in 2016 and resigned after the Brexit victory."
        },
        "key_events": {
          "pt": [
            "2014 - Referendo da Escócia",
            "2016 - Referendo do Brexit decide pela saída da UE"
          ],
          "en": [
            "2014 - Scottish Referendum",
            "2016 - Brexit referendum decides to leave the EU"
          ]
        }
      },
      {
        "year_start": 2016,
        "year_end": 2019,
        "leader": "Theresa May",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Teve a difícil missão de negociar os termos de saída do Brexit na UE, sob constante oposição parlamentar.",
          "en": "He had the difficult task of negotiating the terms of Brexit in the EU, under constant parliamentary opposition."
        },
        "key_events": {
          "pt": [
            "2017 - Acionamento do Artigo 50"
          ],
          "en": [
            "2017 - Activation of Article 50"
          ]
        }
      },
      {
        "year_start": 2019,
        "year_end": 2022,
        "leader": "Boris Johnson",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Consumou o Brexit após vitória esmagadora. Caiu devido a escândalos de quebras de regras sanitárias de seu gabinete.",
          "en": "Brexit was completed after a landslide victory. It fell due to scandals involving breaches of health rules by its office."
        },
        "key_events": {
          "pt": [
            "2020 - Brexit finalizado",
            "2022 - Partygate força sua saída"
          ],
          "en": [
            "2020 - Brexit finalized",
            "2022 - Partygate forces its exit"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": 2022,
        "leader": "Liz Truss",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler por apenas 49 dias. Seu miniorçamento fiscal colapsou a libra nos mercados financeiros.",
          "en": "Chancellor for just 49 days. His fiscal mini-budget collapsed the pound on financial markets."
        },
        "key_events": {
          "pt": [
            "2022 - Morte de Elizabeth II",
            "2022 - Crise de mercado força renúncia recorde"
          ],
          "en": [
            "2022 - Death of Elizabeth II",
            "2022 - Market crisis forces record resignation"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": 2024,
        "leader": "Rishi Sunak",
        "party": "CON",
        "party_full_name": "Conservative Party",
        "spectrum": -2.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Estabilizou o governo conservador, mas sofreu derrota histórica nas eleições gerais convocadas em 2024.",
          "en": "It stabilized the conservative government, but suffered a historic defeat in the general elections called in 2024."
        },
        "key_events": {
          "pt": [
            "2024 - Derrota eleitoral dos conservadores"
          ],
          "en": [
            "2024 - Electoral defeat of the Conservatives"
          ]
        }
      },
      {
        "year_start": 2024,
        "year_end": null,
        "leader": "Keir Starmer",
        "party": "LAB",
        "party_full_name": "Labour Party",
        "spectrum": -5.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno do Partido Trabalhista após 14 anos de governos conservadores, focando na reestruturação pública.",
          "en": "Return of the Labor Party after 14 years of conservative governments, focusing on public restructuring."
        },
        "key_events": {
          "pt": [
            "2024 - Ampla maioria trabalhista conquistada"
          ],
          "en": [
            "2024 - Large labor majority won"
          ]
        }
      }
    ]
  },
  {
    "code": "AR",
    "name": "Argentina",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1946,
        "leader": "Edelmiro Farrell",
        "party": "MIL",
        "party_full_name": "GOU (Ditadura Militar)",
        "spectrum": 5.7,
        "regime_type": "hybrid",
        "description": {
          "pt": "Ditadura militar no encerramento da Segunda Guerra Mundial. Ascensão de Juan Perón na pasta do Trabalho.",
          "en": "Military dictatorship at the end of the Second World War. Juan Perón's rise to the Labor portfolio."
        },
        "key_events": {
          "pt": [
            "1945 - Manifestações massivas de 17 de Outubro"
          ],
          "en": [
            "1945 - Massive demonstrations on October 17th"
          ]
        }
      },
      {
        "year_start": 1946,
        "year_end": 1955,
        "leader": "Juan Domingo Perón",
        "party": "PJ",
        "party_full_name": "Partido Justicialista (Peronista)",
        "spectrum": 1.3,
        "regime_type": "hybrid",
        "description": {
          "pt": "Nacionalismo econômico e expansão massiva de direitos trabalhistas com forte influência de Evita Perón. Deposto por militares.",
          "en": "Economic nationalism and massive expansion of labor rights with strong influence of Evita Perón. Deposed by the military."
        },
        "key_events": {
          "pt": [
            "1947 - Sufrágio feminino aprovado",
            "1952 - Morte de Evita Perón",
            "1955 - Golpe militar depõe Perón"
          ],
          "en": [
            "1947 - Women's suffrage approved",
            "1952 - Death of Evita Perón",
            "1955 - Military coup deposes Perón"
          ]
        }
      },
      {
        "year_start": 1955,
        "year_end": 1958,
        "leader": "Eduardo Lonardi / Pedro Aramburu",
        "party": "MIL",
        "party_full_name": "Revolución Libertadora",
        "spectrum": 5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Ditadura militar dedicada a banir o peronismo da vida civil e desmantelar a estrutura social peronista.",
          "en": "Military dictatorship dedicated to banishing Peronism from civilian life and dismantling the Peronist social structure."
        },
        "key_events": {
          "pt": [
            "1956 - Decreto baniu menção a Perón ou Evita"
          ],
          "en": [
            "1956 - Decree banned mention of Perón or Evita"
          ]
        }
      },
      {
        "year_start": 1958,
        "year_end": 1962,
        "leader": "Arturo Frondizi",
        "party": "UCRI",
        "party_full_name": "Unión Cívica Radical Intransigente",
        "spectrum": 0.5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Desenvolvimentismo econômico. Sofreu forte tutela e frequentes ultimatos militares durante a sua gestão.",
          "en": "Economic developmentalism. He suffered strong tutelage and frequent military ultimatums during his administration."
        },
        "key_events": {
          "pt": [
            "1961 - Reunião com Che Guevara",
            "1962 - Golpe militar depõe Frondizi"
          ],
          "en": [
            "1961 - Meeting with Che Guevara",
            "1962 - Military coup deposes Frondizi"
          ]
        }
      },
      {
        "year_start": 1962,
        "year_end": 1963,
        "leader": "José María Guido",
        "party": "UCR",
        "party_full_name": "Unión Cívica Radical (Presidente de Fato)",
        "spectrum": 3.9,
        "regime_type": "hybrid",
        "description": {
          "pt": "Presidente interino nomeado sob forte tutela militar após a deposição de Frondizi.",
          "en": "Interim president appointed under strong military tutelage after Frondizi's ouster."
        }
      },
      {
        "year_start": 1963,
        "year_end": 1966,
        "leader": "Arturo Illia",
        "party": "UCRP",
        "party_full_name": "Unión Cívica Radical del Pueblo",
        "spectrum": 0.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Foco no nacionalismo econômico e investimentos em saúde e educação. Acabou deposto por nova junta militar.",
          "en": "Focus on economic nationalism and investments in health and education. He ended up deposed by a new military junta."
        },
        "key_events": {
          "pt": [
            "1966 - Golpe militar encerra governo Illia"
          ],
          "en": [
            "1966 - Military coup ends Illia government"
          ]
        }
      },
      {
        "year_start": 1966,
        "year_end": 1973,
        "leader": "Juan Carlos Onganía / Alejandro Lanusse",
        "party": "MIL",
        "party_full_name": "Revolución Argentina (Ditadura)",
        "spectrum": 6.5,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Ditadura corporativista militar altamente repressiva. Enfrentou massivas revoltas sociais urbanas como o Cordobazo.",
          "en": "Highly repressive military corporatist dictatorship. It faced massive urban social uprisings such as Cordobazo."
        },
        "key_events": {
          "pt": [
            "1969 - Revolta do Cordobazo",
            "1972 - Massacre de Trelew"
          ],
          "en": [
            "1969 - Cordobazo Revolt",
            "1972 - Trelew Massacre"
          ]
        }
      },
      {
        "year_start": 1973,
        "year_end": 1976,
        "leader": "Juan D. Perón / Isabel Perón",
        "party": "PJ",
        "party_full_name": "Frente Justicialista de Liberación",
        "spectrum": 0.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno do peronismo sob forte violência política interna entre facções armadas de direita e esquerda. Depostos por militares.",
          "en": "Return of Peronism under strong internal political violence between armed factions of the right and left. Deposed by military personnel."
        },
        "key_events": {
          "pt": [
            "1974 - Morte de Juan Domingo Perón",
            "1975 - Atividades da Aliança Anticomunista (Triple A)"
          ],
          "en": [
            "1974 - Death of Juan Domingo Perón",
            "1975 - Activities of the Anti-Communist Alliance (Triple A)"
          ]
        }
      },
      {
        "year_start": 1976,
        "year_end": 1983,
        "leader": "Jorge Rafael Videla / Leopoldo Galtieri",
        "party": "MIL",
        "party_full_name": "Proceso de Reorganización Nacional",
        "spectrum": 7.9,
        "regime_type": "authoritarian",
        "description": {
          "pt": "O mais violento regime militar da história argentina. Milhares de desaparecidos políticos e colapso pós-derrota nas Malvinas.",
          "en": "The most violent military regime in Argentine history. Thousands of political disappearances and post-defeat collapse in the Falklands."
        },
        "key_events": {
          "pt": [
            "1977 - Marchas das Mães da Plaza de Mayo",
            "1982 - Derrota na Guerra das Malvinas"
          ],
          "en": [
            "1977 - Marches of the Mothers of Plaza de Mayo",
            "1982 - Defeat in the Falklands War"
          ]
        }
      },
      {
        "year_start": 1983,
        "year_end": 1989,
        "leader": "Raúl Alfonsín",
        "party": "UCR",
        "party_full_name": "Unión Cívica Radical",
        "spectrum": -3.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno democrático. Conduziu o julgamento das juntas militares da ditadura, mas caiu sob forte hiperinflação.",
          "en": "Democratic return. He led the trial of the military junta of the dictatorship, but fell under severe hyperinflation."
        },
        "key_events": {
          "pt": [
            "1985 - Julgamento das Juntas Militares",
            "1989 - Crise de hiperinflação histórica"
          ],
          "en": [
            "1985 - Trial of the Military Juntas",
            "1989 - Historic hyperinflation crisis"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 1999,
        "leader": "Carlos Menem",
        "party": "PJ",
        "party_full_name": "Partido Justicialista",
        "spectrum": -1.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Peronismo convertido à agenda neoliberal. Criou a Convertibilidade cambial peso-dólar e promoveu privatizações massivas.",
          "en": "Peronism converted to the neoliberal agenda. He created peso-dollar exchange rate convertibility and promoted massive privatizations."
        },
        "key_events": {
          "pt": [
            "1991 - Plano de Convertibilidade",
            "1994 - Reforma Constitucional"
          ],
          "en": [
            "1991 - Convertibility Plan",
            "1994 - Constitutional Reform"
          ]
        }
      },
      {
        "year_start": 1999,
        "year_end": 2001,
        "leader": "Fernando de la Rúa",
        "party": "UCR",
        "party_full_name": "Unión Cívica Radical (Alianza)",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo incapaz de frear a forte recessão e endividamento, terminando com a eclosão da crise social de 2001.",
          "en": "Government unable to stop the strong recession and debt, ending with the outbreak of the 2001 social crisis."
        },
        "key_events": {
          "pt": [
            "2001 - Corralito bancário e fuga presidencial de helicóptero"
          ],
          "en": [
            "2001 - Corralito banking and presidential escape by helicopter"
          ]
        }
      },
      {
        "year_start": 2001,
        "year_end": 2003,
        "leader": "Eduardo Duhalde",
        "party": "PJ",
        "party_full_name": "Partido Justicialista (Transição)",
        "spectrum": -4.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Presidente de transição eleito pelo parlamento. Teve que administrar a desvalorização cambial pós-default.",
          "en": "Transitional president elected by parliament. It had to manage the post-default exchange rate devaluation."
        },
        "key_events": {
          "pt": [
            "2002 - Desvalorização oficial do Peso"
          ],
          "en": [
            "2002 - Official devaluation of the Peso"
          ]
        }
      },
      {
        "year_start": 2003,
        "year_end": 2007,
        "leader": "Néstor Kirchner",
        "party": "FPV",
        "party_full_name": "Frente para la Victoria (Justicialista)",
        "spectrum": -4.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Início do Kirchnerismo. Forte recuperação econômica, renegociação de títulos da dívida e revogação das leis de anistia aos militares.",
          "en": "Beginning of Kirchnerism. Strong economic recovery, renegotiation of debt securities and repeal of military amnesty laws."
        },
        "key_events": {
          "pt": [
            "2005 - Reestruturação da dívida soberana",
            "2005 - Quitação de débito com o FMI"
          ],
          "en": [
            "2005 - Restructuring of sovereign debt",
            "2005 - Payment of debt with the IMF"
          ]
        }
      },
      {
        "year_start": 2007,
        "year_end": 2015,
        "leader": "Cristina Fernández de Kirchner",
        "party": "FPV",
        "party_full_name": "Frente para la Victoria (Justicialista)",
        "spectrum": -3.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Nacionalizou a YPF, estatizou pensões e promoveu forte gasto social, enfrentando grande polarização com setores do agronegócio.",
          "en": "He nationalized YPF, nationalized pensions and promoted strong social spending, facing great polarization with agribusiness sectors."
        },
        "key_events": {
          "pt": [
            "2008 - Conflito com produtores agrícolas",
            "2012 - Nacionalização da petrolífera YPF"
          ],
          "en": [
            "2008 - Conflict with agricultural producers",
            "2012 - Nationalization of the oil company YPF"
          ]
        }
      },
      {
        "year_start": 2015,
        "year_end": 2019,
        "leader": "Mauricio Macri",
        "party": "PRO",
        "party_full_name": "Propuesta Republicana (Cambiemos)",
        "spectrum": -1.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo de centro-direita. Eliminou controles cambiais, mas enfrentou forte crise de inflação necessitando de resgate emergencial do FMI.",
          "en": "Center-right government. It eliminated exchange controls, but faced a strong inflation crisis requiring emergency rescue from the IMF."
        },
        "key_events": {
          "pt": [
            "2018 - Empréstimo emergencial recorde do FMI"
          ],
          "en": [
            "2018 - Record emergency loan from the IMF"
          ]
        }
      },
      {
        "year_start": 2019,
        "year_end": 2023,
        "leader": "Alberto Fernández",
        "party": "FdT",
        "party_full_name": "Frente de Todos (Justicialista)",
        "spectrum": -4.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo peronista de esquerda tendo Cristina Kirchner como vice-presidente. Enfrentou grave recessão e inflação acentuada.",
          "en": "Left-wing Peronist government with Cristina Kirchner as vice-president. It faced severe recession and sharp inflation."
        },
        "key_events": {
          "pt": [
            "2020 - Legalização do Aborto",
            "2022 - Atentado frustrado contra Cristina Kirchner"
          ],
          "en": [
            "2020 - Legalization of Abortion",
            "2022 - Failed attack on Cristina Kirchner"
          ]
        }
      },
      {
        "year_start": 2023,
        "year_end": null,
        "leader": "Javier Milei",
        "party": "LLA",
        "party_full_name": "La Libertad Avanza",
        "spectrum": -1.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo libertário-ultraliberal. Agenda drástica de austeridade fiscal, desregulamentação generalizada e forte combate à inflação.",
          "en": "Libertarian-ultraliberal government. Drastic agenda of fiscal austerity, widespread deregulation and strong fight against inflation."
        },
        "key_events": {
          "pt": [
            "2023 - Decreto DNU de desregulamentação",
            "2024 - Obtenção do primeiro superávit fiscal em uma década"
          ],
          "en": [
            "2023 - DNU deregulation decree",
            "2024 - Obtaining the first fiscal surplus in a decade"
          ]
        }
      }
    ]
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1948,
        "leader": "Rómulo Betancourt / Rómulo Gallegos",
        "party": "AD",
        "party_full_name": "Acción Democrática",
        "spectrum": 1.9,
        "regime_type": "hybrid",
        "description": {
          "pt": "Triênio democrático inicial. Sufrágio universal direto introduzido, derrubado por levante militar conservador.",
          "en": "Initial democratic triennium. Direct universal suffrage introduced, overturned by conservative military uprising."
        },
        "key_events": {
          "pt": [
            "1947 - Eleição direta de Rómulo Gallegos"
          ],
          "en": [
            "1947 - Direct election of Rómulo Gallegos"
          ]
        }
      },
      {
        "year_start": 1948,
        "year_end": 1958,
        "leader": "Marcos Pérez Jiménez",
        "party": "MIL",
        "party_full_name": "Forças Armadas da Venezuela (Ditadura)",
        "spectrum": 7.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Ditadura militar nacionalista alimentada pela receita petrolífera, caracterizada por grandes obras e supressão da oposição.",
          "en": "Nationalist military dictatorship fueled by oil revenue, characterized by major works and suppression of the opposition."
        },
        "key_events": {
          "pt": [
            "1958 - Levante civil-militar de 23 de Janeiro derruba ditadura"
          ],
          "en": [
            "1958 - Civil-military uprising of January 23 overthrows dictatorship"
          ]
        }
      },
      {
        "year_start": 1958,
        "year_end": 1999,
        "leader": "Pacto de Puntofijo (Betancourt, Leoni, CAP, Caldera)",
        "party": "AD / COPEI",
        "party_full_name": "Acción Democrática / COPEI",
        "spectrum": -0.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Sistema bipartidário estável. Anos finais marcados por colapso do preço do petróleo, austeridade e revolta social.",
          "en": "Stable two-party system. Final years marked by the collapse of oil prices, austerity and social upheaval."
        },
        "key_events": {
          "pt": [
            "1960 - Fundação da OPEP",
            "1989 - Revolta popular do Caracazo",
            "1992 - Tentativas de Golpe lideradas por Chávez"
          ],
          "en": [
            "1960 - Founding of OPEC",
            "1989 - Caracazo popular uprising",
            "1992 - Coup Attempts led by Chávez"
          ]
        }
      },
      {
        "year_start": 1999,
        "year_end": 2013,
        "leader": "Hugo Chávez",
        "party": "PSUV",
        "party_full_name": "Partido Socialista Unido de Venezuela",
        "spectrum": 0.5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Revolução Bolivariana. Nova Constituição nacionalista, forte controle estatal e programas sociais massivos ('misiones') financiados por petróleo.",
          "en": "Bolivarian Revolution. New nationalist Constitution, strong state control and massive social programs ('misiones') financed by oil."
        },
        "key_events": {
          "pt": [
            "1999 - Nova Constituição Bolivariana",
            "2002 - Golpe de Estado de 48 horas frustrado",
            "2007 - Estatização de setores estratégicos"
          ],
          "en": [
            "1999 - New Bolivarian Constitution",
            "2002 - 48-hour coup d'état foiled",
            "2007 - Nationalization of strategic sectors"
          ]
        }
      },
      {
        "year_start": 2013,
        "year_end": null,
        "leader": "Nicolás Maduro",
        "party": "PSUV",
        "party_full_name": "Partido Socialista Unido de Venezuela",
        "spectrum": 2.3,
        "regime_type": "hybrid",
        "description": {
          "pt": "Consolidação autoritária sob grave colapso humanitário e hiperinflação. Supressão do parlamento e das forças opositoras.",
          "en": "Authoritarian consolidation under serious humanitarian collapse and hyperinflation. Suppression of parliament and opposing forces."
        },
        "key_events": {
          "pt": [
            "2017 - Criação da Assembleia Constituinte paralela",
            "2019 - Crise de legitimidade (Juan Guaidó)",
            "2024 - Contestação internacional de fraude eleitoral"
          ],
          "en": [
            "2017 - Creation of the parallel Constituent Assembly",
            "2019 - Crisis of legitimacy (Juan Guaidó)",
            "2024 - International contestation of electoral fraud"
          ]
        }
      }
    ]
  },
  {
    "code": "HU",
    "name": "Hungria",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1949,
        "leader": "Coalizão pós-Guerra (Tildy, Nagy)",
        "party": "FKgP",
        "party_full_name": "Független Kisgazdapárt (Pequenos Proprietários)",
        "spectrum": 2.6,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Governo multipartidário inicial. Pressão soviética eliminou gradualmente os democratas ('tática do salame').",
          "en": "Early multiparty government. Soviet pressure gradually eliminated the Democrats ('salami tactic')."
        },
        "key_events": {
          "pt": [
            "1947 - Prisão de líderes da oposição democrata"
          ],
          "en": [
            "1947 - Arrest of Democratic opposition leaders"
          ]
        }
      },
      {
        "year_start": 1949,
        "year_end": 1956,
        "leader": "Mátyás Rákosi",
        "party": "MDP",
        "party_full_name": "Hungarian Working People's Party",
        "spectrum": 3,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Era Stalinista violenta. Coletivização forçada e expurgos brutais caracterizaram seu governo pró-Moscou.",
          "en": "He was a violent Stalinist. Forced collectivization and brutal purges characterized his pro-Moscow government."
        },
        "key_events": {
          "pt": [
            "1953 - Afastamento temporário de Rákosi por pressões do Kremlin"
          ],
          "en": [
            "1953 - Temporary removal of Rákosi due to pressure from the Kremlin"
          ]
        }
      },
      {
        "year_start": 1956,
        "year_end": 1956,
        "leader": "Imre Nagy",
        "party": "MDP",
        "party_full_name": "Hungarian Working People's Party (Reformista)",
        "spectrum": 3.1,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Revolução de 1956. Nagy propõe neutralidade e saída do Pacto de Varsóvia, esmagada por intervenção militar do exército soviético.",
          "en": "Revolution of 1956. Nagy proposes neutrality and exit from the Warsaw Pact, crushed by military intervention by the Soviet army."
        },
        "key_events": {
          "pt": [
            "1956 - Invasão Soviética e esmagamento da revolta",
            "1958 - Execução de Imre Nagy"
          ],
          "en": [
            "1956 - Soviet invasion and crushing of the uprising",
            "1958 - Execution of Imre Nagy"
          ]
        }
      },
      {
        "year_start": 1956,
        "year_end": 1989,
        "leader": "János Kádár",
        "party": "MSZMP",
        "party_full_name": "Hungarian Socialist Workers' Party",
        "spectrum": 2.9,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Instalação do Comunismo Goulash. Controle político rígido atenuado por pequenas concessões de consumo privado e reformas limitadas.",
          "en": "Installation of Goulash Communism. Rigid political control mitigated by small private consumption concessions and limited reforms."
        },
        "key_events": {
          "pt": [
            "1968 - Novo Mecanismo Econômico"
          ],
          "en": [
            "1968 - New Economic Mechanism"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 2010,
        "leader": "Era Democrática (Antall, Horn, Orbán I, Gyurcsány)",
        "party": "MDF / MSZP / Fidesz",
        "party_full_name": "Coalizões Democráticas Alternadas",
        "spectrum": -2.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Transição democrática bem-sucedida. Entrada do país na OTAN e integração econômica na União Europeia.",
          "en": "Successful democratic transition. The country's entry into NATO and economic integration into the European Union."
        },
        "key_events": {
          "pt": [
            "1989 - Abertura da fronteira com a Áustria",
            "1999 - Ingressa na OTAN",
            "2004 - Ingressa na União Europeia"
          ],
          "en": [
            "1989 - Opening of the border with Austria",
            "1999 - Joins NATO",
            "2004 - Joins the European Union"
          ]
        }
      },
      {
        "year_start": 2010,
        "year_end": null,
        "leader": "Viktor Orbán",
        "party": "Fidesz",
        "party_full_name": "Fidesz - Hungarian Civic Alliance",
        "spectrum": -0.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Implantação declarada da 'Democracia Iliberal'. Controle ferrenho da mídia, alteração de leis eleitorais e atritos constantes com a União Europeia.",
          "en": "Declared implementation of 'Illiberal Democracy'. Strict control of the media, changes to electoral laws and constant friction with the European Union."
        },
        "key_events": {
          "pt": [
            "2011 - Nova Constituição conservadora",
            "2015 - Construção de cercas contra imigrantes",
            "2022 - Parlamento Europeu classifica país como autocracia eleitoral"
          ],
          "en": [
            "2011 - New conservative Constitution",
            "2015 - Construction of fences against immigrants",
            "2022 - European Parliament classifies country as electoral autocracy"
          ]
        }
      }
    ]
  },
  {
    "code": "TR",
    "name": "Turquia",
    "region": "Middle East",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1950,
        "leader": "İsmet İnönü",
        "party": "CHP",
        "party_full_name": "Republican People's Party",
        "spectrum": -1,
        "regime_type": "transitional",
        "description": {
          "pt": "Transição pacífica do modelo de partido único autoritário kemalista para eleições democráticas competitivas.",
          "en": "Peaceful transition from the Kemalist authoritarian one-party model to competitive democratic elections."
        },
        "key_events": {
          "pt": [
            "1946 - Primeiras eleições abertas multipartidárias"
          ],
          "en": [
            "1946 - First open multi-party elections"
          ]
        }
      },
      {
        "year_start": 1950,
        "year_end": 1960,
        "leader": "Adnan Menderes",
        "party": "DP",
        "party_full_name": "Democrat Party",
        "spectrum": 3,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo liberal-conservador. Foco no desenvolvimento agrário e alinhamento com EUA. Deposto e executado por golpe militar.",
          "en": "Liberal-conservative government. Focus on agrarian development and alignment with the USA. Deposed and executed by military coup."
        },
        "key_events": {
          "pt": [
            "1952 - Turquia ingressa na OTAN",
            "1960 - Primeiro golpe militar turco",
            "1961 - Execução de Menderes"
          ],
          "en": [
            "1952 - Türkiye joins NATO",
            "1960 - First Turkish military coup",
            "1961 - Execution of Menderes"
          ]
        }
      },
      {
        "year_start": 1960,
        "year_end": 1980,
        "leader": "Coalizões e Instabilidade (Demirel, Ecevit)",
        "party": "AP / CHP",
        "party_full_name": "Adalet Partisi / Republican People's Party",
        "spectrum": 0,
        "regime_type": "democracy",
        "description": {
          "pt": "Instabilidade governamental marcada por violência urbana crônica entre milícias de extrema-direita e grupos de esquerda.",
          "en": "Government instability marked by chronic urban violence between far-right militias and left-wing groups."
        },
        "key_events": {
          "pt": [
            "1971 - Golpe de Estado militar por Memorando",
            "1974 - Invasão e partição de Chipre"
          ],
          "en": [
            "1971 - Military coup d'état by Memorandum",
            "1974 - Invasion and partition of Cyprus"
          ]
        }
      },
      {
        "year_start": 1980,
        "year_end": 1983,
        "leader": "General Kenan Evren",
        "party": "MIL",
        "party_full_name": "Conselho Militar de Fato (Junta)",
        "spectrum": 5,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Golpe de Estado militar repressivo. Suspensão de partidos políticos, detenções em massa e promulgação de nova Constituição restritiva.",
          "en": "Repressive military coup d'état. Suspension of political parties, mass arrests and promulgation of a new restrictive Constitution."
        },
        "key_events": {
          "pt": [
            "1982 - Promulgação da Constituição militar centralizadora"
          ],
          "en": [
            "1982 - Promulgation of the centralizing military Constitution"
          ]
        }
      },
      {
        "year_start": 1983,
        "year_end": 2003,
        "leader": "Turgut Özal / Tansu Çiller",
        "party": "ANAP / DYP",
        "party_full_name": "Anavatan Partisi / Doğru Yol Partisi",
        "spectrum": 2,
        "regime_type": "democracy",
        "description": {
          "pt": "Abertura econômica e privatizações de mercado. Conflito armado prolongado com o separatismo curdo do PKK.",
          "en": "Economic opening and market privatization. Prolonged armed conflict with the Kurdish separatist PKK."
        },
        "key_events": {
          "pt": [
            "1997 - 'Golpe pós-moderno' força renúncia de primeiro-ministro islâmico"
          ],
          "en": [
            "1997 - 'Postmodern coup' forces Islamic prime minister to resign"
          ]
        }
      },
      {
        "year_start": 2003,
        "year_end": 2014,
        "leader": "Recep Tayyip Erdoğan (Premiê)",
        "party": "AKP",
        "party_full_name": "Justice and Development Party",
        "spectrum": 1,
        "regime_type": "hybrid",
        "description": {
          "pt": "Reformas iniciais pró-adesão europeia e boom econômico. Afastamento dos militares das decisões políticas.",
          "en": "Early pro-European accession reforms and economic boom. Removal of the military from political decisions."
        },
        "key_events": {
          "pt": [
            "2005 - Início formal de negociações de adesão à UE",
            "2013 - Protestos do Parque Gezi"
          ],
          "en": [
            "2005 - Formal start of EU accession negotiations",
            "2013 - Gezi Park protests"
          ]
        }
      },
      {
        "year_start": 2014,
        "year_end": null,
        "leader": "Recep Tayyip Erdoğan (Presidente)",
        "party": "AKP",
        "party_full_name": "Justice and Development Party",
        "spectrum": 4.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Centralização drástica de poder pós-tentativa de golpe em 2016. Conversão do regime em Presidencialismo Executivo forte.",
          "en": "Drastic centralization of power after the coup attempt in 2016. Conversion of the regime into strong Executive Presidentialism."
        },
        "key_events": {
          "pt": [
            "2016 - Tentativa fracassada de golpe militar",
            "2017 - Plebiscito aprova Presidencialismo",
            "2023 - Reeleição disputada de Erdoğan"
          ],
          "en": [
            "2016 - Failed military coup attempt",
            "2017 - Plebiscite approves Presidentialism",
            "2023 - Erdoğan's disputed re-election"
          ]
        }
      }
    ]
  },
  {
    "code": "IN",
    "name": "Índia",
    "region": "Asia",
    "periods": [
      {
        "year_start": 1947,
        "year_end": 1964,
        "leader": "Jawaharlal Nehru",
        "party": "INC",
        "party_full_name": "Indian National Congress",
        "spectrum": 0,
        "regime_type": "democracy",
        "description": {
          "pt": "Fundador do Estado indiano moderno. Defensor do não-alinhamento externo, do planejamento estatal e do secularismo constitucional.",
          "en": "Founder of the modern Indian state. Defender of external non-alignment, state planning and constitutional secularism."
        },
        "key_events": {
          "pt": [
            "1947 - Independência e Partição da Índia",
            "1948 - Assassinato de Mahatma Gandhi",
            "1962 - Guerra Sino-Indiana"
          ],
          "en": [
            "1947 - Independence and Partition of India",
            "1948 - Assassination of Mahatma Gandhi",
            "1962 - Sino-Indian War"
          ]
        }
      },
      {
        "year_start": 1964,
        "year_end": 1966,
        "leader": "Lal Bahadur Shastri",
        "party": "INC",
        "party_full_name": "Indian National Congress",
        "spectrum": -1,
        "regime_type": "democracy",
        "description": {
          "pt": "Liderou a Índia na Segunda Guerra com o Paquistão. Lançou as bases para a autonomia agrícola nacional.",
          "en": "Led India in the Second War with Pakistan. It laid the foundations for national agricultural autonomy."
        },
        "key_events": {
          "pt": [
            "1965 - Segunda Guerra Indo-Paquistanesa"
          ],
          "en": [
            "1965 - Second Indo-Pakistani War"
          ]
        }
      },
      {
        "year_start": 1966,
        "year_end": 1977,
        "leader": "Indira Gandhi",
        "party": "INC",
        "party_full_name": "Indian National Congress",
        "spectrum": 0.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Nacionalizou bancos. Decretou o Estado de Emergência autoritário (1975-1977) suspendendo direitos civis para reprimir a oposição.",
          "en": "Nationalized banks. He declared the authoritarian State of Emergency (1975-1977), suspending civil rights to repress the opposition."
        },
        "key_events": {
          "pt": [
            "1971 - Guerra de Bangladesh",
            "1975 - Declaração de Estado de Emergência autoritário"
          ],
          "en": [
            "1971 - Bangladesh War",
            "1975 - Declaration of an authoritarian State of Emergency"
          ]
        }
      },
      {
        "year_start": 1977,
        "year_end": 1980,
        "leader": "Morarji Desai",
        "party": "JP",
        "party_full_name": "Janata Party Coalition",
        "spectrum": -0.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro governo não-INC da Índia. Focado na reversão das medidas autoritárias do Estado de Emergência.",
          "en": "India's first non-INC government. Focused on reversing the authoritarian measures of the State of Emergency."
        }
      },
      {
        "year_start": 1980,
        "year_end": 1984,
        "leader": "Indira Gandhi",
        "party": "INC",
        "party_full_name": "Indian National Congress",
        "spectrum": 1,
        "regime_type": "democracy",
        "description": {
          "pt": "Retornou focando na contenção da insurgência sikh em Punjab. Assassinada por seus próprios guarda-costas sikhs em 1984.",
          "en": "He returned focusing on containing the Sikh insurgency in Punjab. Murdered by her own Sikh bodyguards in 1984."
        },
        "key_events": {
          "pt": [
            "1984 - Operação Estrela Azul (Templo de Ouro)",
            "1984 - Assassinato de Indira Gandhi"
          ],
          "en": [
            "1984 - Operation Blue Star (Golden Temple)",
            "1984 - Assassination of Indira Gandhi"
          ]
        }
      },
      {
        "year_start": 1984,
        "year_end": 1989,
        "leader": "Rajiv Gandhi",
        "party": "INC",
        "party_full_name": "Indian National Congress",
        "spectrum": -1.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler modernizador focado em telecomunicações. Interveio militarmente na Guerra Civil do vizinho Sri Lanka.",
          "en": "Modernizing chancellor focused on telecommunications. It intervened militarily in the Civil War in neighboring Sri Lanka."
        },
        "key_events": {
          "pt": [
            "1984 - Desastre químico em Bhopal",
            "1987 - Intervenção militar no Sri Lanka"
          ],
          "en": [
            "1984 - Chemical disaster in Bhopal",
            "1987 - Military intervention in Sri Lanka"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 1998,
        "leader": "P. V. Narasimha Rao / Outros",
        "party": "INC",
        "party_full_name": "Indian National Congress (Coalizão)",
        "spectrum": -1.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Lançamento de reformas de abertura de mercado lideradas pelo ministro técnico de finanças Manmohan Singh.",
          "en": "Launch of market opening reforms led by technical finance minister Manmohan Singh."
        },
        "key_events": {
          "pt": [
            "1991 - Liberalização Econômica da Índia",
            "1992 - Demolição da mesquita de Babri"
          ],
          "en": [
            "1991 - Economic Liberalization of India",
            "1992 - Demolition of the Babri mosque"
          ]
        }
      },
      {
        "year_start": 1998,
        "year_end": 2004,
        "leader": "Atal Bihari Vajpayee",
        "party": "BJP",
        "party_full_name": "Bharatiya Janata Party",
        "spectrum": -1.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Líder de direita nacionalista moderada. Consolidação militar atômica indiana e conflito de Kargil.",
          "en": "Leader of the moderate nationalist right. Indian atomic military consolidation and Kargil conflict."
        },
        "key_events": {
          "pt": [
            "1998 - Testes atômicos Pokhran-II",
            "1999 - Conflito armado em Kargil"
          ],
          "en": [
            "1998 - Pokhran-II atomic tests",
            "1999 - Armed conflict in Kargil"
          ]
        }
      },
      {
        "year_start": 2004,
        "year_end": 2014,
        "leader": "Manmohan Singh",
        "party": "INC",
        "party_full_name": "Indian National Congress (UPA)",
        "spectrum": -2,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler economista. Rápido crescimento econômico nacional, mas abalado por escândalos e acusações de corrupção interna.",
          "en": "Economist Chancellor. Rapid national economic growth, but shaken by scandals and accusations of internal corruption."
        },
        "key_events": {
          "pt": [
            "2008 - Ataques terroristas em Mumbai"
          ],
          "en": [
            "2008 - Terrorist attacks in Mumbai"
          ]
        }
      },
      {
        "year_start": 2014,
        "year_end": null,
        "leader": "Narendra Modi",
        "party": "BJP",
        "party_full_name": "Bharatiya Janata Party",
        "spectrum": 0.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Plataforma populista nacionalista hindu (Hindutva). Crescimento econômico com declínio de pluralismo de imprensa e direitos de minorias.",
          "en": "Hindu nationalist populist platform (Hindutva). Economic growth with decline in press pluralism and minority rights."
        },
        "key_events": {
          "pt": [
            "2016 - Desmonetização financeira",
            "2019 - Revogação da autonomia especial da Caxemira",
            "2024 - Inauguração do Templo Ram Mandir em Ayodhya"
          ],
          "en": [
            "2016 - Financial demonetization",
            "2019 - Revocation of Kashmir's special autonomy",
            "2024 - Opening of Ram Mandir Temple in Ayodhya"
          ]
        }
      }
    ]
  },
  {
    "code": "IL",
    "name": "Israel",
    "region": "Middle East",
    "periods": [
      {
        "year_start": 1948,
        "year_end": 1963,
        "leader": "David Ben-Gurion",
        "party": "Mapai",
        "party_full_name": "Workers' Party of Eretz Yisrael",
        "spectrum": 0.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Declaração de independência e guerra de fundação. Construção do Estado de bem-estar e acolhimento em massa de refugiados.",
          "en": "Declaration of Independence and Founding War. Construction of the welfare state and mass reception of refugees."
        },
        "key_events": {
          "pt": [
            "1948 - Independência de Israel / Primeira Guerra",
            "1956 - Crise de Suez"
          ],
          "en": [
            "1948 - Israel Independence / First World War",
            "1956 - Suez Crisis"
          ]
        }
      },
      {
        "year_start": 1963,
        "year_end": 1969,
        "leader": "Levi Eshkol",
        "party": "Mapai",
        "party_full_name": "Labor Alignment",
        "spectrum": -1.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Guerra dos Seis Dias em 1967. Início da ocupação israelense de Gaza, Cisjordânia, Península do Sinai e Colinas de Golã.",
          "en": "Six-Day War in 1967. Beginning of the Israeli occupation of Gaza, the West Bank, the Sinai Peninsula and the Golan Heights."
        },
        "key_events": {
          "pt": [
            "1967 - Guerra dos Seis Dias"
          ],
          "en": [
            "1967 - Six Day War"
          ]
        }
      },
      {
        "year_start": 1969,
        "year_end": 1974,
        "leader": "Golda Meir",
        "party": "LAB",
        "party_full_name": "Labor Alignment",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Guerra do Yom Kippur de 1973. A surpresa militar árabe provocou séria crise governamental e forçou sua saída.",
          "en": "Yom Kippur War of 1973. The Arab military surprise caused a serious government crisis and forced his departure."
        },
        "key_events": {
          "pt": [
            "1972 - Massacre nas Olimpíadas de Munique",
            "1973 - Guerra do Yom Kippur"
          ],
          "en": [
            "1972 - Massacre at the Munich Olympics",
            "1973 - Yom Kippur War"
          ]
        }
      },
      {
        "year_start": 1974,
        "year_end": 1977,
        "leader": "Yitzhak Rabin",
        "party": "LAB",
        "party_full_name": "Labor Alignment",
        "spectrum": -3.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro mandato do general focando na reconstrução e defesa militar no pós-1973.",
          "en": "The general's first term focusing on reconstruction and military defense in the post-1973 period."
        },
        "key_events": {
          "pt": [
            "1976 - Operação militar de resgate de Entebbe"
          ],
          "en": [
            "1976 - Entebbe military rescue operation"
          ]
        }
      },
      {
        "year_start": 1977,
        "year_end": 1983,
        "leader": "Menachem Begin",
        "party": "Likud",
        "party_full_name": "Likud Party",
        "spectrum": -1.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Fim da hegemonia trabalhista. Assinou a paz com o Egito em Camp David e invadiu o sul do Líbano em 1982.",
          "en": "End of labor hegemony. He signed peace with Egypt at Camp David and invaded southern Lebanon in 1982."
        },
        "key_events": {
          "pt": [
            "1978 - Acordos de Camp David com o Egito",
            "1982 - Invasão de Beirute no Líbano"
          ],
          "en": [
            "1978 - Camp David Accords with Egypt",
            "1982 - Invasion of Beirut in Lebanon"
          ]
        }
      },
      {
        "year_start": 1983,
        "year_end": 1992,
        "leader": "Yitzhak Shamir / Shimon Peres",
        "party": "Likud / LAB",
        "party_full_name": "Governo de Unidade Nacional (Rotatividade)",
        "spectrum": -1.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Grandes coalizões combatendo a hiperinflação, eclosão da Primeira Intifada e Conferência de Paz de Madri.",
          "en": "Large coalitions combating hyperinflation, outbreak of the First Intifada and Madrid Peace Conference."
        },
        "key_events": {
          "pt": [
            "1987 - Primeira Intifada Palestiniana",
            "1991 - Conferência de Madri"
          ],
          "en": [
            "1987 - First Palestinian Intifada",
            "1991 - Madrid Conference"
          ]
        }
      },
      {
        "year_start": 1992,
        "year_end": 1995,
        "leader": "Yitzhak Rabin",
        "party": "LAB",
        "party_full_name": "Labor Party",
        "spectrum": -4.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Acordos de paz de Oslo estabelecendo a Autoridade Palestina. Assassinado em Tel Aviv por extremista judeu ultra-nacionalista.",
          "en": "Oslo peace accords establishing the Palestinian Authority. Murdered in Tel Aviv by ultra-nationalist Jewish extremist."
        },
        "key_events": {
          "pt": [
            "1993 - Acordos de Oslo assinados",
            "1995 - Assassinato de Yitzhak Rabin"
          ],
          "en": [
            "1993 - Oslo Accords signed",
            "1995 - Assassination of Yitzhak Rabin"
          ]
        }
      },
      {
        "year_start": 1995,
        "year_end": 2009,
        "leader": "Netanyahu / Barak / Sharon / Olmert",
        "party": "Likud / Kadima",
        "party_full_name": "Governos de Centro e Direita Alternados",
        "spectrum": -1.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Eclosão da violenta Segunda Intifada palestina. Desocupação unilateral israelense de Gaza em 2005 por Ariel Sharon.",
          "en": "Outbreak of the violent Second Palestinian Intifada. Israeli unilateral disoccupation of Gaza in 2005 by Ariel Sharon."
        },
        "key_events": {
          "pt": [
            "2000 - Início da Segunda Intifada",
            "2005 - Retirada militar de Gaza"
          ],
          "en": [
            "2000 - Beginning of the Second Intifada",
            "2005 - Military withdrawal from Gaza"
          ]
        }
      },
      {
        "year_start": 2009,
        "year_end": 2021,
        "leader": "Benjamin Netanyahu",
        "party": "Likud",
        "party_full_name": "Likud Party",
        "spectrum": -1.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo de direita. Forte expansão de assentamentos, contenção e isolamento do Irã, e normalização de laços árabes.",
          "en": "Right-wing government. Strong expansion of settlements, containment and isolation of Iran, and normalization of Arab ties."
        },
        "key_events": {
          "pt": [
            "2018 - Embaixada dos EUA em Jerusalém",
            "2020 - Acordos de Abraham"
          ],
          "en": [
            "2018 - US Embassy in Jerusalem",
            "2020 - Abraham Accords"
          ]
        }
      },
      {
        "year_start": 2021,
        "year_end": 2022,
        "leader": "Naftali Bennett / Yair Lapid",
        "party": "Yamina / YA",
        "party_full_name": "Coalizão de Mudança",
        "spectrum": -1.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo de ampla coalizão contendo partidos da direita, esquerda e um bloco político árabe para tirar Netanyahu.",
          "en": "Broad coalition government containing parties from the right, left and an Arab political bloc to oust Netanyahu."
        }
      },
      {
        "year_start": 2022,
        "year_end": null,
        "leader": "Benjamin Netanyahu",
        "party": "Likud",
        "party_full_name": "Likud & Aliados de Extrema-Direita",
        "spectrum": -1.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo conservador polarizador. Envolvido em profunda divisão por reforma jurídica e na guerra contra o Hamas em Gaza.",
          "en": "Polarizing Conservative government. Involved in deep division over legal reform and the war against Hamas in Gaza."
        },
        "key_events": {
          "pt": [
            "2023 - Crise da Reforma Judicial",
            "2023 - Ataques terroristas de 7 de Outubro e subsequente Guerra em Gaza"
          ],
          "en": [
            "2023 - Judicial Reform Crisis",
            "2023 – October 7th terrorist attacks and subsequent War in Gaza"
          ]
        }
      }
    ]
  },
  {
    "code": "IR",
    "name": "Irã",
    "region": "Middle East",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1951,
        "leader": "Mohammad Reza Pahlavi",
        "party": "MON",
        "party_full_name": "Dinastia Pahlavi (Monarquia)",
        "spectrum": 6.7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Jovem Xá governando sob Constituição persa sob forte influência britânica no refino de petróleo.",
          "en": "Young Shah ruling under Persian Constitution under strong British influence in oil refining."
        },
        "key_events": {
          "pt": [
            "1946 - Crise Soviética do Azerbaijão"
          ],
          "en": [
            "1946 - Azerbaijan Soviet Crisis"
          ]
        }
      },
      {
        "year_start": 1951,
        "year_end": 1953,
        "leader": "Mohammad Mossadegh",
        "party": "NF",
        "party_full_name": "Frente Nacional",
        "spectrum": 2.6,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Premiê democraticamente eleito. Nacionalizou a produção de petróleo, gerando retaliação e deposição militar ocidental.",
          "en": "Democratically elected Prime Minister. Nationalized oil production, generating retaliation and Western military deposition."
        },
        "key_events": {
          "pt": [
            "1951 - Nacionalização do Petróleo",
            "1953 - Golpe de Estado orquestrado pela CIA/MI6 (Operação Ajax)"
          ],
          "en": [
            "1951 - Nationalization of Oil",
            "1953 - Coup d'état orchestrated by the CIA/MI6 (Operation Ajax)"
          ]
        }
      },
      {
        "year_start": 1953,
        "year_end": 1979,
        "leader": "Mohammad Reza Pahlavi (Restaurado)",
        "party": "MON",
        "party_full_name": "Monarquia Autocrática / Savak",
        "spectrum": 8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Retorno do Xá. Estabeleceu governo pró-ocidental autoritário, reprimindo islâmicos e comunistas sob forte repressão policial.",
          "en": "Return of the Shah. Established authoritarian pro-Western government, repressing Islamists and communists under strong police repression."
        },
        "key_events": {
          "pt": [
            "1963 - Revolução Branca",
            "1971 - Festividades de 2500 anos de Persa"
          ],
          "en": [
            "1963 - White Revolution",
            "1971 - 2500 years of Persian festivities"
          ]
        }
      },
      {
        "year_start": 1979,
        "year_end": 1989,
        "leader": "Ruhollah Khomeini",
        "party": "CLER",
        "party_full_name": "Clero Islâmico Teocrático (Líder Supremo)",
        "spectrum": 2.9,
        "regime_type": "hybrid",
        "description": {
          "pt": "Revolução Islâmica depõe monarquia e instala República Teocrática xiita. Longo conflito de fronteira defensivo contra o Iraque.",
          "en": "Islamic Revolution deposes monarchy and installs Shiite Theocratic Republic. Long defensive border conflict against Iraq."
        },
        "key_events": {
          "pt": [
            "1979 - Revolução Islâmica / Reféns americanos",
            "1980 - Início da Guerra Irã-Iraque",
            "1988 - Fim da Guerra com impasse"
          ],
          "en": [
            "1979 - Islamic Revolution / American hostages",
            "1980 - Start of the Iran-Iraq War",
            "1988 - End of the War with stalemate"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 1997,
        "leader": "Akbar Hashemi Rafsanjani",
        "party": "CLER",
        "party_full_name": "Clero Conservador (Liderança Teocrática)",
        "spectrum": 2.6,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período de reconstrução econômica nacional sob o comando teocrático do novo Líder Supremo Ali Khamenei.",
          "en": "Period of national economic reconstruction under the theocratic command of the new Supreme Leader Ali Khamenei."
        }
      },
      {
        "year_start": 1997,
        "year_end": 2005,
        "leader": "Mohammad Khatami",
        "party": "REF",
        "party_full_name": "Clero Reformista",
        "spectrum": 2.2,
        "regime_type": "hybrid",
        "description": {
          "pt": "Tentativa de abertura democrática interna e de liberdades civis. Bloqueado pelo conselho teocrático conservador.",
          "en": "Attempt at internal democratic opening and civil liberties. Blocked by the conservative theocratic council."
        },
        "key_events": {
          "pt": [
            "1999 - Repressão a protestos estudantis"
          ],
          "en": [
            "1999 - Repression of student protests"
          ]
        }
      },
      {
        "year_start": 2005,
        "year_end": 2013,
        "leader": "Mahmoud Ahmadinejad",
        "party": "CON",
        "party_full_name": "Aliança de Construtores do Irã",
        "spectrum": 2.6,
        "regime_type": "hybrid",
        "description": {
          "pt": "Populismo anti-ocidental radical. Aceleração do enriquecimento de urânio. Reeleição sob denúncia e repressão violenta em 2009.",
          "en": "Radical anti-Western populism. Acceleration of uranium enrichment. Re-election under denunciation and violent repression in 2009."
        },
        "key_events": {
          "pt": [
            "2009 - Protestos da Onda Verde contra fraude"
          ],
          "en": [
            "2009 - Onda Verde protests against fraud"
          ]
        }
      },
      {
        "year_start": 2013,
        "year_end": 2021,
        "leader": "Hassan Rouhani",
        "party": "MOD",
        "party_full_name": "Clero Moderado",
        "spectrum": 2.5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Concluiu o acordo de controle atômico em 2015 com potências. Acordo enfraquecido após saída americana em 2018.",
          "en": "It concluded the atomic control agreement in 2015 with powers. Agreement weakened after American withdrawal in 2018."
        },
        "key_events": {
          "pt": [
            "2015 - Acordo Nuclear JCPOA",
            "2018 - Retirada unilateral americana do JCPOA por Trump"
          ],
          "en": [
            "2015 - JCPOA Nuclear Agreement",
            "2018 - US unilateral withdrawal from the JCPOA by Trump"
          ]
        }
      },
      {
        "year_start": 2021,
        "year_end": null,
        "leader": "Ebrahim Raisi",
        "party": "CON",
        "party_full_name": "Clero Linha-Dura",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Domínio integral conservador. Enfrentou grandes revoltas populares sob a liderança de mulheres e repressão violenta.",
          "en": "Conservative full domain. It faced major popular uprisings under the leadership of women and violent repression."
        },
        "key_events": {
          "pt": [
            "2022 - Protestos pela morte de Mahsa Amini",
            "2024 - Morte de Raisi em queda de helicóptero"
          ],
          "en": [
            "2022 - Protests over the death of Mahsa Amini",
            "2024 - Raisi dies in helicopter crash"
          ]
        }
      }
    ]
  },
  {
    "code": "ZA",
    "name": "África do Sul",
    "region": "Africa",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1948,
        "leader": "Jan Smuts",
        "party": "UP",
        "party_full_name": "United Party",
        "spectrum": 5.6,
        "regime_type": "hybrid",
        "description": {
          "pt": "Democracia restrita apenas à minoria branca. Início do estabelecimento de segregações raciais de fato antes da lei.",
          "en": "Democracy restricted only to the white minority. Beginning of the establishment of de facto racial segregations before the law."
        }
      },
      {
        "year_start": 1948,
        "year_end": 1994,
        "leader": "Apartheid (Malan, Verwoerd, Botha, de Klerk)",
        "party": "NP",
        "party_full_name": "National Party (Apartheid)",
        "spectrum": 6.3,
        "regime_type": "hybrid",
        "description": {
          "pt": "Legalização e repressão extrema do regime de segregação racial do Apartheid. Maioria negra banida da participação política formal.",
          "en": "Legalization and extreme repression of the Apartheid racial segregation regime. Black majority banned from formal political participation."
        },
        "key_events": {
          "pt": [
            "1960 - Massacre de Sharpeville",
            "1964 - Prisão perpétua de Mandela",
            "1976 - Protesto de Soweto",
            "1990 - Libertação de Nelson Mandela"
          ],
          "en": [
            "1960 - Sharpeville Massacre",
            "1964 - Mandela's life imprisonment",
            "1976 - Soweto Protest",
            "1990 - Release of Nelson Mandela"
          ]
        }
      },
      {
        "year_start": 1994,
        "year_end": 1999,
        "leader": "Nelson Mandela",
        "party": "ANC",
        "party_full_name": "African National Congress",
        "spectrum": 0.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro presidente negro eleito democraticamente. Governo focado em reconciliação social e nova Constituição igualitária.",
          "en": "First democratically elected black president. Government focused on social reconciliation and new egalitarian Constitution."
        },
        "key_events": {
          "pt": [
            "1994 - Primeiras eleições universais livres",
            "1996 - Nova Constituição assinada"
          ],
          "en": [
            "1994 - First free universal elections",
            "1996 - New Constitution signed"
          ]
        }
      },
      {
        "year_start": 1999,
        "year_end": 2008,
        "leader": "Thabo Mbeki",
        "party": "ANC",
        "party_full_name": "African National Congress",
        "spectrum": -3.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Foco no crescimento econômico neoliberal africano, mas criticado por posturas erráticas de controle da crise do HIV.",
          "en": "Focus on African neoliberal economic growth, but criticized for erratic stances on controlling the HIV crisis."
        },
        "key_events": {
          "pt": [
            "2008 - Destituído pela liderança interna do ANC"
          ],
          "en": [
            "2008 - Removed by internal ANC leadership"
          ]
        }
      },
      {
        "year_start": 2008,
        "year_end": 2018,
        "leader": "Jacob Zuma",
        "party": "ANC",
        "party_full_name": "African National Congress",
        "spectrum": -3.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Período marcado por acusações sistêmicas de suborno e de captura do Estado por interesses oligárquicos comerciais.",
          "en": "A period marked by systemic accusations of bribery and state capture by oligarchic commercial interests."
        },
        "key_events": {
          "pt": [
            "2012 - Tiroteio policial de Marikana",
            "2018 - Renúncia forçada pelo ANC devido a escândalos"
          ],
          "en": [
            "2012 – Marikana police shooting",
            "2018 - Forced resignation by ANC due to scandals"
          ]
        }
      },
      {
        "year_start": 2018,
        "year_end": null,
        "leader": "Cyril Ramaphosa",
        "party": "ANC",
        "party_full_name": "African National Congress",
        "spectrum": -3.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Busca por reforma econômica, enfrentando graves problemas na rede energética estatal e a perda de maioria do ANC em 2024.",
          "en": "Search for economic reform, facing serious problems in the state energy network and the loss of the ANC majority in 2024."
        },
        "key_events": {
          "pt": [
            "2024 - Perda de maioria absoluta força governo de unidade"
          ],
          "en": [
            "2024 - Loss of absolute majority forces unity government"
          ]
        }
      }
    ]
  },
  {
    "code": "JP",
    "name": "Japão",
    "region": "Asia",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1952,
        "leader": "Ocupação Aliada (Douglas MacArthur)",
        "party": "MIL",
        "party_full_name": "Ocupação Militar (SCAP)",
        "spectrum": 1.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período pós-Guerra. Ocupação militar americana focada em desmilitarização e na introdução da Constituição Pacifista.",
          "en": "Post-War period. American military occupation focused on demilitarization and the introduction of the Pacifist Constitution."
        },
        "key_events": {
          "pt": [
            "1947 - Nova Constituição do Japão",
            "1951 - Tratado de San Francisco"
          ],
          "en": [
            "1947 - New Constitution of Japan",
            "1951 - Treaty of San Francisco"
          ]
        }
      },
      {
        "year_start": 1952,
        "year_end": 1955,
        "leader": "Yoshida Shigeru",
        "party": "LP",
        "party_full_name": "Liberal Party",
        "spectrum": -1.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Doutrina Yoshida: priorização do crescimento industrial em estreita aliança militar protetiva com EUA.",
          "en": "Yoshida Doctrine: prioritization of industrial growth in a close protective military alliance with the USA."
        },
        "key_events": {
          "pt": [
            "1952 - Recuperação de soberania nipônica"
          ],
          "en": [
            "1952 - Recovery of Japanese sovereignty"
          ]
        }
      },
      {
        "year_start": 1955,
        "year_end": 1993,
        "leader": "Predomínio do LDP (Ikeda, Sato, Nakasone)",
        "party": "LDP",
        "party_full_name": "Liberal Democratic Party (Conservador)",
        "spectrum": -2.3,
        "regime_type": "democracy",
        "description": {
          "pt": "O chamado 'Sistema 1955' de hegemonia conservadora. Forte milagre industrial encerrado pelo estouro de bolha imobiliária.",
          "en": "The so-called '1955 System' of conservative hegemony. Strong industrial miracle ended by the bursting of the real estate bubble."
        },
        "key_events": {
          "pt": [
            "1964 - Olimpíadas de Tóquio",
            "1972 - Devolução de Okinawa",
            "1990 - Estouro de bolha financeira japonesa"
          ],
          "en": [
            "1964 - Tokyo Olympics",
            "1972 - Return of Okinawa",
            "1990 - Japanese financial bubble bursts"
          ]
        }
      },
      {
        "year_start": 1993,
        "year_end": 1996,
        "leader": "Hosokawa / Murayama",
        "party": "COAL",
        "party_full_name": "Coalizão Anti-LDP / JSP",
        "spectrum": -5.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro afastamento do LDP do poder por ampla coalizão reformista e depois socialista.",
          "en": "First, the LDP was removed from power by a broad reformist and then socialist coalition."
        },
        "key_events": {
          "pt": [
            "1995 - Sismo de Kobe e atentado químico com sarin no metrô de Tóquio"
          ],
          "en": [
            "1995 – Kobe earthquake and sarin chemical attack on the Tokyo subway"
          ]
        }
      },
      {
        "year_start": 1996,
        "year_end": 2009,
        "leader": "LDP Restaurado (Hashimoto, Koizumi)",
        "party": "LDP",
        "party_full_name": "Liberal Democratic Party",
        "spectrum": -2.4,
        "regime_type": "democracy",
        "description": {
          "pt": "LDP reassume. Marcado pelas privatizações e reformas liberais agressivas de Junichiro Koizumi nos correios.",
          "en": "LDP resumes. Marked by Junichiro Koizumi's privatization and aggressive liberal reforms in the post office."
        },
        "key_events": {
          "pt": [
            "2001 - Eleição de Junichiro Koizumi",
            "2005 - Privatização dos Correios"
          ],
          "en": [
            "2001 - Election of Junichiro Koizumi",
            "2005 - Privatization of the Post Office"
          ]
        }
      },
      {
        "year_start": 2009,
        "year_end": 2012,
        "leader": "Governo do DPJ (Hatoyama, Kan, Noda)",
        "party": "DPJ",
        "party_full_name": "Democratic Party of Japan",
        "spectrum": -6.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Gestão de centro-esquerda. Crise política decorrente da catástrofe de Fukushima (tsunami e fusão atômica).",
          "en": "Center-left management. Political crisis resulting from the Fukushima catastrophe (tsunami and atomic meltdown)."
        },
        "key_events": {
          "pt": [
            "2011 - Sismo e Tsunami de Tohoku e Desastre de Fukushima"
          ],
          "en": [
            "2011 - Tohoku Earthquake and Tsunami and Fukushima Disaster"
          ]
        }
      },
      {
        "year_start": 2012,
        "year_end": 2020,
        "leader": "Shinzo Abe",
        "party": "LDP",
        "party_full_name": "Liberal Democratic Party",
        "spectrum": -2.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler de mandato longo. Implementou a macroeconomia do 'Abenomics' e buscou reinterpretação da Constituição pacifista.",
          "en": "Long-term chancellor. He implemented the macroeconomics of 'Abenomics' and sought to reinterpret the pacifist Constitution."
        },
        "key_events": {
          "pt": [
            "2013 - Abenomics iniciado",
            "2020 - Renúncia por problemas de saúde"
          ],
          "en": [
            "2013 - Abenomics started",
            "2020 - Resignation due to health problems"
          ]
        }
      },
      {
        "year_start": 2020,
        "year_end": null,
        "leader": "Yoshihide Suga / Fumio Kishida",
        "party": "LDP",
        "party_full_name": "Liberal Democratic Party",
        "spectrum": -2.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Gestão pós-pandemia e realização das Olimpíadas. Fortalecimento da aliança de defesa regional frente à China.",
          "en": "Post-pandemic management and holding of the Olympics. Strengthening the regional defense alliance against China."
        },
        "key_events": {
          "pt": [
            "2021 - Olimpíadas de Tóquio 2020",
            "2022 - Assassinato de Shinzo Abe"
          ],
          "en": [
            "2021 - Tokyo 2020 Olympics",
            "2022 - Assassination of Shinzo Abe"
          ]
        }
      }
    ]
  },
  {
    "code": "KR",
    "name": "Coreia do Sul",
    "region": "Asia",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1948,
        "leader": "Governo Militar dos EUA",
        "party": "MIL",
        "party_full_name": "United States Army Military Government",
        "spectrum": 8.1,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Administração militar pós-guerra no sul da península após a derrota do Império Japonês.",
          "en": "Post-war military administration in the south of the peninsula after the defeat of the Japanese Empire."
        },
        "key_events": {
          "pt": [
            "1945 - Divisão da Coreia no paralelo 38"
          ],
          "en": [
            "1945 - Division of Korea at the 38th parallel"
          ]
        }
      },
      {
        "year_start": 1948,
        "year_end": 1960,
        "leader": "Syngman Rhee",
        "party": "LP",
        "party_full_name": "Liberal Party",
        "spectrum": 5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Primeiro presidente coreano. Governo autoritário anticomunista severo, deposto por revolta civil estudantil.",
          "en": "First Korean president. Severe anti-communist authoritarian government, deposed by student civil revolt."
        },
        "key_events": {
          "pt": [
            "1950 - Guerra da Coreia",
            "1953 - Armistício de Coreia",
            "1960 - Revolução de Abril força renúncia de Rhee"
          ],
          "en": [
            "1950 - Korean War",
            "1953 - Armistice of Korea",
            "1960 - April Revolution forces Rhee's resignation"
          ]
        }
      },
      {
        "year_start": 1960,
        "year_end": 1961,
        "leader": "Segunda República (Yun Posun)",
        "party": "DP",
        "party_full_name": "Democratic Party",
        "spectrum": 1.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Breve interregno democrático marcado por instabilidade interna, destituído por oficiais militares.",
          "en": "Brief democratic interregnum marked by internal instability, dismissed by military officers."
        },
        "key_events": {
          "pt": [
            "1961 - Golpe militar de 16 de Maio liderado por Park"
          ],
          "en": [
            "1961 - May 16th military coup led by Park"
          ]
        }
      },
      {
        "year_start": 1961,
        "year_end": 1979,
        "leader": "Park Chung-hee",
        "party": "DRP",
        "party_full_name": "Democratic Republican Party (Ditadura)",
        "spectrum": 5.5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Ditadura militar desenvolvimentista (Milagre no Rio Han com Chaebols). Assassinado pelo próprio chefe da inteligência coreana.",
          "en": "Developmental military dictatorship (Miracle on the Han River with Chaebols). Assassinated by the head of Korean intelligence himself."
        },
        "key_events": {
          "pt": [
            "1972 - Constituição Yushin autocrática",
            "1979 - Assassinato de Park Chung-hee"
          ],
          "en": [
            "1972 - Autocratic Yushin Constitution",
            "1979 - Murder of Park Chung-hee"
          ]
        }
      },
      {
        "year_start": 1979,
        "year_end": 1988,
        "leader": "Chun Doo-hwan",
        "party": "DJP",
        "party_full_name": "Democratic Justice Party (Ditadura)",
        "spectrum": 4.3,
        "regime_type": "hybrid",
        "description": {
          "pt": "Assumiu o poder por golpe militar. Reprimiu revoltas com violência, forçado a aceitar abertura eleitoral em 1987.",
          "en": "He took power through a military coup. He repressed revolts with violence, forced to accept electoral openness in 1987."
        },
        "key_events": {
          "pt": [
            "1980 - Massacre de Gwangju",
            "1987 - Declaração de Abertura Eleitoral Direta"
          ],
          "en": [
            "1980 - Gwangju Massacre",
            "1987 - Declaration of Direct Electoral Opening"
          ]
        }
      },
      {
        "year_start": 1988,
        "year_end": 1993,
        "leader": "Roh Tae-woo",
        "party": "DLP",
        "party_full_name": "Democratic Liberal Party",
        "spectrum": -0.5,
        "regime_type": "democracy",
        "description": {
          "pt": "General que venceu primeira eleição direta competitiva. Foco na diplomacia olímpica e transição democrática.",
          "en": "General who won the first direct competitive election. Focus on Olympic diplomacy and democratic transition."
        },
        "key_events": {
          "pt": [
            "1988 - Olimpíadas de Seul"
          ],
          "en": [
            "1988 - Seoul Olympics"
          ]
        }
      },
      {
        "year_start": 1993,
        "year_end": 1998,
        "leader": "Kim Young-sam",
        "party": "DLP",
        "party_full_name": "Democratic Liberal Party",
        "spectrum": -1.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro presidente totalmente civil. Conduziu o julgamento histórico dos ex-presidentes militares e lidou com crise financeira.",
          "en": "First fully civilian president. He conducted the historic trial of former military presidents and dealt with the financial crisis."
        },
        "key_events": {
          "pt": [
            "1996 - Julgamento e prisão de Chun e Roh",
            "1997 - Crise Financeira Asiática"
          ],
          "en": [
            "1996 - Trial and arrest of Chun and Roh",
            "1997 - Asian Financial Crisis"
          ]
        }
      },
      {
        "year_start": 1998,
        "year_end": 2003,
        "leader": "Kim Dae-jung",
        "party": "MDP",
        "party_full_name": "Millennium Democratic Party",
        "spectrum": -5.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo progressista de esquerda. Estabeleceu a 'Política do Sol' com a Coreia do Norte, recebendo o Nobel da Paz.",
          "en": "Progressive left-wing government. He established the 'Sunshine Policy' with North Korea, receiving the Nobel Peace Prize."
        },
        "key_events": {
          "pt": [
            "2000 - Cúpula Intercoreana",
            "2002 - Copa do Mundo Coreia-Japão"
          ],
          "en": [
            "2000 - Inter-Korean Summit",
            "2002 - Korea-Japan World Cup"
          ]
        }
      },
      {
        "year_start": 2003,
        "year_end": 2008,
        "leader": "Roh Moo-hyun",
        "party": "URI",
        "party_full_name": "Uri Party",
        "spectrum": -5.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo focado no combate à corrupção e no fortalecimento de reformas civis internas.",
          "en": "Government focused on combating corruption and strengthening internal civil reforms."
        }
      },
      {
        "year_start": 2008,
        "year_end": 2017,
        "leader": "Lee Myung-bak / Park Geun-hye",
        "party": "SEN",
        "party_full_name": "Saenuri Party (Conservador)",
        "spectrum": -1.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo conservador. Culminou no impeachment e detenção de Park Geun-hye em 2017 após grandes protestos.",
          "en": "Conservative government. It culminated in the impeachment and detention of Park Geun-hye in 2017 following large protests."
        },
        "key_events": {
          "pt": [
            "2014 - Tragédia do Sewol",
            "2017 - Impeachment de Park Geun-hye"
          ],
          "en": [
            "2014 - Sewol Tragedy",
            "2017 - Impeachment of Park Geun-hye"
          ]
        }
      },
      {
        "year_start": 2017,
        "year_end": 2022,
        "leader": "Moon Jae-in",
        "party": "DPK",
        "party_full_name": "Democratic Party of Korea",
        "spectrum": -6,
        "regime_type": "democracy",
        "description": {
          "pt": "Progressista. Avanços sociais, forte combate à pandemia e nova aproximação pacífica com o Norte.",
          "en": "Progressive. Social advances, a strong fight against the pandemic and a new peaceful rapprochement with the North."
        },
        "key_events": {
          "pt": [
            "2018 - Encontro na DMZ com Kim Jong-un"
          ],
          "en": [
            "2018 - Meeting at the DMZ with Kim Jong-un"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": null,
        "leader": "Yoon Suk-yeol",
        "party": "PPP",
        "party_full_name": "People Power Party",
        "spectrum": -1.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Conservador. Alinhamento militar estreito com EUA e Japão contra ameaças norte-coreanas.",
          "en": "Conservative. Close military alignment with the US and Japan against North Korean threats."
        },
        "key_events": {
          "pt": [
            "2023 - Cúpula Trilateral de Camp David"
          ],
          "en": [
            "2023 - Camp David Trilateral Summit"
          ]
        }
      }
    ]
  },
  {
    "code": "IT",
    "name": "Itália",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1946,
        "leader": "Alcide De Gasperi",
        "party": "DC",
        "party_full_name": "Democrazia Cristiana (Transição)",
        "spectrum": 4,
        "regime_type": "hybrid",
        "description": {
          "pt": "Governo de coalizão pós-fascista organizando o referendo constitucional de fundação da República.",
          "en": "Post-fascist coalition government organizing the constitutional referendum to found the Republic."
        },
        "key_events": {
          "pt": [
            "1946 - Referendo decreta fim de Monarquia e cria República"
          ],
          "en": [
            "1946 - Referendum decrees the end of the Monarchy and creates the Republic"
          ]
        }
      },
      {
        "year_start": 1946,
        "year_end": 1981,
        "leader": "Predomínio Democrata Cristão (De Gasperi, Moro)",
        "party": "DC",
        "party_full_name": "Democrazia Cristiana",
        "spectrum": -1.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Anos marcados por boom industrial, mas assolados pelo terrorismo doméstico dos Anos de Chumbo.",
          "en": "Years marked by an industrial boom, but plagued by the domestic terrorism of the Years of Lead."
        },
        "key_events": {
          "pt": [
            "1957 - Tratados de Roma",
            "1978 - Sequestro e morte de Aldo Moro"
          ],
          "en": [
            "1957 - Treaties of Rome",
            "1978 - Kidnapping and death of Aldo Moro"
          ]
        }
      },
      {
        "year_start": 1981,
        "year_end": 1991,
        "leader": "Bettino Craxi / Pentapartito",
        "party": "PSI",
        "party_full_name": "Partito Socialista Italiano / Coalizão",
        "spectrum": -2.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Governos de cinco partidos liberais e socialistas. Forte aumento de endividamento público.",
          "en": "Governments of five liberal and socialist parties. Strong increase in public debt."
        },
        "key_events": {
          "pt": [
            "1984 - Concordata do Vaticano"
          ],
          "en": [
            "1984 - Vatican Concordat"
          ]
        }
      },
      {
        "year_start": 1991,
        "year_end": 1994,
        "leader": "Mani Pulite (Transição)",
        "party": "IND",
        "party_full_name": "Governos Técnicos (Mãos Limpas)",
        "spectrum": -2.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Colapso judicial dos principais partidos da Primeira República devido à investigação Mani Pulite.",
          "en": "Judicial collapse of the main parties of the First Republic due to the Mani Pulite investigation."
        },
        "key_events": {
          "pt": [
            "1992 - Assassinatos de Falcone e Borsellino",
            "1994 - Fim dos partidos tradicionais (DC, PSI)"
          ],
          "en": [
            "1992 - Murders of Falcone and Borsellino",
            "1994 - End of traditional parties (DC, PSI)"
          ]
        }
      },
      {
        "year_start": 1994,
        "year_end": 2011,
        "leader": "Alternância Berlusconi / Prodi",
        "party": "FI / UL",
        "party_full_name": "Forza Italia / Coalizão L'Ulivo",
        "spectrum": -2.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Heurística política de Silvio Berlusconi e seus aliados de direita, alternada por governos de Romano Prodi.",
          "en": "Political heuristics of Silvio Berlusconi and his right-wing allies, alternated by governments of Romano Prodi."
        },
        "key_events": {
          "pt": [
            "2001 - Euro entra em circulação",
            "2009 - Terremoto de L'Aquila"
          ],
          "en": [
            "2001 - Euro enters circulation",
            "2009 - L'Aquila earthquake"
          ]
        }
      },
      {
        "year_start": 2011,
        "year_end": 2018,
        "leader": "Mário Monti / Matteo Renzi",
        "party": "PD",
        "party_full_name": "Partito Democratico & Técnicos",
        "spectrum": -2.6,
        "regime_type": "democracy",
        "description": {
          "pt": "Governos técnicos de austeridade fiscal decorrente da crise do Euro e posterior gestão liberal de Renzi.",
          "en": "Technical governments of fiscal austerity resulting from the Euro crisis and subsequent liberal management by Renzi."
        },
        "key_events": {
          "pt": [
            "2016 - Renúncia de Renzi pós-referendo"
          ],
          "en": [
            "2016 - Renzi's resignation post-referendum"
          ]
        }
      },
      {
        "year_start": 2018,
        "year_end": 2022,
        "leader": "Giuseppe Conte / Mario Draghi",
        "party": "M5S",
        "party_full_name": "Movimento 5 Estrelas / Técnico",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo populista e posterior gestão do ex-chefe do BCE Mario Draghi durante a pandemia de COVID-19.",
          "en": "Populist government and subsequent management of former ECB head Mario Draghi during the COVID-19 pandemic."
        },
        "key_events": {
          "pt": [
            "2020 - Itália torna-se primeiro foco ocidental da COVID-19"
          ],
          "en": [
            "2020 - Italy becomes the first Western outbreak of COVID-19"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": null,
        "leader": "Giorgia Meloni",
        "party": "FdI",
        "party_full_name": "Fratelli d'Italia",
        "spectrum": -2.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeira mulher a assumir o executivo italiano. Lidera coalizão conservadora e nacionalista com foco em segurança.",
          "en": "First woman to take over the Italian executive. Leads conservative and nationalist coalition focused on security."
        },
        "key_events": {
          "pt": [
            "2022 - Posse do governo Meloni",
            "2023 - Morte de Silvio Berlusconi"
          ],
          "en": [
            "2022 - Meloni government takes office",
            "2023 - Death of Silvio Berlusconi"
          ]
        }
      }
    ]
  },
  {
    "code": "ES",
    "name": "Espanha",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1975,
        "leader": "Francisco Franco",
        "party": "FE",
        "party_full_name": "Falange Española / Movimiento Nacional",
        "spectrum": 8.3,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Ditadura fascista/corporativista católica. Isolamento internacional inicial seguido por boom turístico e abertura econômica tardia.",
          "en": "Fascist/Catholic corporatist dictatorship. Initial international isolation followed by tourist boom and late economic opening."
        },
        "key_events": {
          "pt": [
            "1955 - Espanha entra na ONU",
            "1973 - Assassinato de Carrero Blanco por ETA",
            "1975 - Morte de Franco e restauração do rei"
          ],
          "en": [
            "1955 - Spain joins the UN",
            "1973 - Murder of Carrero Blanco by ETA",
            "1975 - Death of Franco and restoration of the king"
          ]
        }
      },
      {
        "year_start": 1975,
        "year_end": 1982,
        "leader": "Adolfo Suárez",
        "party": "UCD",
        "party_full_name": "Unión de Centro Democrático",
        "spectrum": -0.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Período da Transição Espanhola. Redação da Constituição democrática de 1978 e concessão de anistias gerais.",
          "en": "Spanish Transition Period. Drafting of the 1978 democratic Constitution and granting of general amnesties."
        },
        "key_events": {
          "pt": [
            "1978 - Aprovação da Constituição democrática",
            "1981 - Tentativa de golpe militar do 23-F"
          ],
          "en": [
            "1978 - Approval of the democratic Constitution",
            "1981 - 23-F military coup attempt"
          ]
        }
      },
      {
        "year_start": 1982,
        "year_end": 1996,
        "leader": "Felipe González",
        "party": "PSOE",
        "party_full_name": "Partido Socialista Obrero Español",
        "spectrum": -7,
        "regime_type": "democracy",
        "description": {
          "pt": "Modernização nacional de infraestrutura e adesão formal da Espanha à União Europeia e OTAN.",
          "en": "National infrastructure modernization and formal accession of Spain to the European Union and NATO."
        },
        "key_events": {
          "pt": [
            "1986 - Espanha entra na CEE",
            "1992 - Olimpíadas de Barcelona"
          ],
          "en": [
            "1986 - Spain enters the EEC",
            "1992 - Barcelona Olympics"
          ]
        }
      },
      {
        "year_start": 1996,
        "year_end": 2004,
        "leader": "José María Aznar",
        "party": "PP",
        "party_full_name": "Partido Popular",
        "spectrum": -2.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Boom imobiliário alimentado por juros baixos, adoção do Euro e alinhamento com a intervenção militar no Iraque.",
          "en": "Real estate boom fueled by low interest rates, adoption of the Euro and alignment with military intervention in Iraq."
        },
        "key_events": {
          "pt": [
            "2002 - Desastre ecológico do petroleiro Prestige",
            "2004 - Atentados terroristas islâmicos no metrô de Madri"
          ],
          "en": [
            "2002 - Prestige oil tanker ecological disaster",
            "2004 – Islamic terrorist attacks on the Madrid metro"
          ]
        }
      },
      {
        "year_start": 2004,
        "year_end": 2011,
        "leader": "José Luis Rodríguez Zapatero",
        "party": "PSOE",
        "party_full_name": "Partido Socialista Obrero Español",
        "spectrum": -6.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Legalização do casamento gay, leis de memória histórica. Governo abalado gravemente pela crise global de 2008.",
          "en": "Legalization of gay marriage, historical memory laws. Government seriously shaken by the global crisis of 2008."
        },
        "key_events": {
          "pt": [
            "2005 - Casamento homoafetivo legalizado",
            "2011 - Protestos do Movimento 15-M"
          ],
          "en": [
            "2005 - Same-sex marriage legalized",
            "2011 - Protests by the 15-M Movement"
          ]
        }
      },
      {
        "year_start": 2011,
        "year_end": 2018,
        "leader": "Mariano Rajoy",
        "party": "PP",
        "party_full_name": "Partido Popular",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Medidas drásticas de austeridade pós-crise. Suspensão temporária do governo regional catalão após plebiscito inconstitucional de independência.",
          "en": "Drastic post-crisis austerity measures. Temporary suspension of the Catalan regional government after an unconstitutional independence plebiscite."
        },
        "key_events": {
          "pt": [
            "2014 - Abdicação de Juan Carlos I",
            "2017 - Referendo ilegal na Catalunha"
          ],
          "en": [
            "2014 - Abdication of Juan Carlos I",
            "2017 - Illegal referendum in Catalonia"
          ]
        }
      },
      {
        "year_start": 2018,
        "year_end": null,
        "leader": "Pedro Sánchez",
        "party": "PSOE",
        "party_full_name": "Partido Socialista Obrero Español",
        "spectrum": -6.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo progressista de coalizão. Implementou anistia polêmica a separatistas catalães visando sustentação parlamentar.",
          "en": "Progressive coalition government. He implemented a controversial amnesty for Catalan separatists aiming for parliamentary support."
        },
        "key_events": {
          "pt": [
            "2019 - Exumação dos restos de Franco",
            "2023 - Lei de Anistia Catalã controversa"
          ],
          "en": [
            "2019 - Exhumation of Franco's remains",
            "2023 - Controversial Catalan Amnesty Law"
          ]
        }
      }
    ]
  },
  {
    "code": "SE",
    "name": "Suécia",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1969,
        "leader": "Tage Erlander",
        "party": "SAP",
        "party_full_name": "Sveriges Socialdemokratiska Arbetareparti",
        "spectrum": -4.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler social-democrata com mandato recorde (24 anos). Estabeleceu as bases do modelo de bem-estar sueco.",
          "en": "Social-democratic chancellor with record mandate (24 years). It laid the foundations of the Swedish welfare model."
        },
        "key_events": {
          "pt": [
            "1953 - Ampliação de férias legais remuneradas"
          ],
          "en": [
            "1953 - Expansion of legal paid vacations"
          ]
        }
      },
      {
        "year_start": 1969,
        "year_end": 1976,
        "leader": "Olof Palme",
        "party": "SAP",
        "party_full_name": "Sveriges Socialdemokratiska Arbetareparti",
        "spectrum": -6.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Forte ativismo em direitos humanos internacionais e crítica aberta aos imperialismos soviético e americano.",
          "en": "Strong activism in international human rights and open criticism of Soviet and American imperialism."
        },
        "key_events": {
          "pt": [
            "1972 - Crítica aos bombardeios dos EUA em Hanói"
          ],
          "en": [
            "1972 - Criticism of the US bombings of Hanoi"
          ]
        }
      },
      {
        "year_start": 1976,
        "year_end": 1982,
        "leader": "Thorbjörn Fälldin",
        "party": "C",
        "party_full_name": "Centerpartiet (Coalizão)",
        "spectrum": -3.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeiro governo não social-democrata em 40 anos, sob impasse em relação ao uso de energia nuclear.",
          "en": "First non-social democratic government in 40 years, faced with an impasse over the use of nuclear energy."
        }
      },
      {
        "year_start": 1982,
        "year_end": 1991,
        "leader": "Olof Palme / Ingvar Carlsson",
        "party": "SAP",
        "party_full_name": "Sveriges Socialdemokratiska Arbetareparti",
        "spectrum": -7.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno de Palme ao poder. Período encerrado pelo seu assassinato não resolvido em Estocolmo.",
          "en": "Palme's return to power. Period ended by his unsolved murder in Stockholm."
        },
        "key_events": {
          "pt": [
            "1986 - Assassinato do primeiro-ministro Olof Palme"
          ],
          "en": [
            "1986 - Assassination of Prime Minister Olof Palme"
          ]
        }
      },
      {
        "year_start": 1991,
        "year_end": 1994,
        "leader": "Carl Bildt",
        "party": "M",
        "party_full_name": "Moderaterna (Coalizão)",
        "spectrum": -3.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Liderou reformas liberais de mercado e desregulamentação civil durante forte crise bancária nacional.",
          "en": "Led liberal market reforms and civil deregulation during a severe national banking crisis."
        },
        "key_events": {
          "pt": [
            "1992 - Crise de taxas de juros recordes"
          ],
          "en": [
            "1992 - Record interest rate crisis"
          ]
        }
      },
      {
        "year_start": 1994,
        "year_end": 2006,
        "leader": "Ingvar Carlsson / Göran Persson",
        "party": "SAP",
        "party_full_name": "Sveriges Socialdemokratiska Arbetareparti",
        "spectrum": -7.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Ingresso do país na União Europeia e consolidação das finanças pós-crise com corte de gastos.",
          "en": "The country's entry into the European Union and consolidation of post-crisis finances with spending cuts."
        },
        "key_events": {
          "pt": [
            "1995 - Suécia entra na União Europeia",
            "2003 - Assassinato de Anna Lindh"
          ],
          "en": [
            "1995 - Sweden enters the European Union",
            "2003 - Murder of Anna Lindh"
          ]
        }
      },
      {
        "year_start": 2006,
        "year_end": 2014,
        "leader": "Fredrik Reinfeldt",
        "party": "M",
        "party_full_name": "Moderaterna (Aliança)",
        "spectrum": -3.1,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo de centro-direita. Redução de impostos sobre renda corporativa e trabalhista sob a coligação Alliansen.",
          "en": "Center-right government. Reduction of taxes on corporate and labor income under the Alliansen coalition."
        },
        "key_events": {
          "pt": [
            "2008 - Suécia ratifica o Tratado de Lisboa"
          ],
          "en": [
            "2008 - Sweden ratifies the Lisbon Treaty"
          ]
        }
      },
      {
        "year_start": 2014,
        "year_end": 2022,
        "leader": "Stefan Löfven / M. Andersson",
        "party": "SAP",
        "party_full_name": "Sveriges Socialdemokratiska Arbetareparti",
        "spectrum": -7.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo progressista minoritário. Lidou com crise migratória de 2015 e iniciou o pedido de entrada à OTAN.",
          "en": "Progressive minority government. He dealt with the 2015 migration crisis and initiated the request to join NATO."
        },
        "key_events": {
          "pt": [
            "2015 - Acolhimento massivo de refugiados",
            "2022 - Pedido de adesão à OTAN pós-invasão da Ucrânia"
          ],
          "en": [
            "2015 - Mass reception of refugees",
            "2022 - NATO membership application post-invasion of Ukraine"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": null,
        "leader": "Ulf Kristersson",
        "party": "M",
        "party_full_name": "Moderaterna & Aliados",
        "spectrum": -2.9,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler moderado governando com suporte da extrema-direita (SD) focando no combate à criminalidade urbana.",
          "en": "Moderate chancellor governing with support from the extreme right (SD) focusing on combating urban crime."
        },
        "key_events": {
          "pt": [
            "2024 - Suécia entra oficialmente na OTAN como 32º membro"
          ],
          "en": [
            "2024 - Sweden officially joins NATO as the 32nd member"
          ]
        }
      }
    ]
  },
  {
    "code": "MX",
    "name": "México",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 2000,
        "leader": "Hegemonia do PRI (Alemán, Portillo, Salinas)",
        "party": "PRI",
        "party_full_name": "Partido Revolucionario Institucional",
        "spectrum": 4.2,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período do 'desenvolvimento estabilizador' sob controle quase absoluto do PRI. Eleições sob acusações de controle estatal.",
          "en": "Period of 'stabilizing development' under almost absolute control of the PRI. Elections under accusations of state control."
        },
        "key_events": {
          "pt": [
            "1968 - Massacre de Tlatelolco",
            "1994 - Rebelião Zapatista (EZLN) e assinatura do NAFTA"
          ],
          "en": [
            "1968 - Tlatelolco Massacre",
            "1994 - Zapatista Rebellion (EZLN) and signing of NAFTA"
          ]
        }
      },
      {
        "year_start": 2000,
        "year_end": 2012,
        "leader": "Fox / Calderón (Alternância)",
        "party": "PAN",
        "party_full_name": "Partido Acción Nacional",
        "spectrum": -0.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeira alternância de poder do México moderno. Calderón militarizou o combate ao crime organizado (guerra às drogas).",
          "en": "First alternation of power in modern Mexico. Calderón militarized the fight against organized crime (war on drugs)."
        },
        "key_events": {
          "pt": [
            "2006 - Início da ofensiva militar contra carteis de drogas"
          ],
          "en": [
            "2006 - Beginning of the military offensive against drug cartels"
          ]
        }
      },
      {
        "year_start": 2012,
        "year_end": 2018,
        "leader": "Enrique Peña Nieto",
        "party": "PRI",
        "party_full_name": "Partido Revolucionario Institucional",
        "spectrum": -0.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno do PRI. Implementação de reformas estruturais (energia), sob fortes escândalos e crise de segurança.",
          "en": "Return of the PRI. Implementation of structural reforms (energy), under strong scandals and security crisis."
        },
        "key_events": {
          "pt": [
            "2014 - Desaparecimento forçado de estudantes de Ayotzinapa"
          ],
          "en": [
            "2014 - Forced disappearance of Ayotzinapa students"
          ]
        }
      },
      {
        "year_start": 2018,
        "year_end": null,
        "leader": "Andrés Manuel López Obrador",
        "party": "MORENA",
        "party_full_name": "Movimiento Regeneración Nacional",
        "spectrum": 0.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo progressista de esquerda ('Quarta Transformação'). Programas sociais de infraestrutura e postura retórica soberanista.",
          "en": "Left-wing progressive government ('Fourth Transformation'). Social infrastructure programs and sovereignist rhetorical stance."
        },
        "key_events": {
          "pt": [
            "2020 - Criação da Guarda Nacional",
            "2024 - Eleição histórica de Claudia Sheinbaum"
          ],
          "en": [
            "2020 - Creation of the National Guard",
            "2024 - Historic election of Claudia Sheinbaum"
          ]
        }
      }
    ]
  },
  {
    "code": "CL",
    "name": "Chile",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1970,
        "leader": "Presidências Democráticas (González, Alessandri, Frei)",
        "party": "PR / PDC",
        "party_full_name": "Partido Radical / Democracia Cristã",
        "spectrum": -0.6,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período democrático estável. Reformas agrárias graduais sob a Doutrina de Revolução em Liberdade de Frei Montalva.",
          "en": "Stable democratic period. Gradual agrarian reforms under Frei Montalva's Doctrine of Revolution in Freedom."
        }
      },
      {
        "year_start": 1970,
        "year_end": 1973,
        "leader": "Salvador Allende",
        "party": "UP",
        "party_full_name": "Unidad Popular (Socialista)",
        "spectrum": 0.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Via chilena ao socialismo: nacionalização do cobre e intervenções agrárias rápidas. Derrubado por violento golpe militar em 1973.",
          "en": "Chilean path to socialism: nationalization of copper and rapid agrarian interventions. Overthrown by violent military coup in 1973."
        },
        "key_events": {
          "pt": [
            "1971 - Nacionalização do Cobre",
            "1973 - Golpe Militar e bombardeio de La Moneda"
          ],
          "en": [
            "1971 - Nationalization of Copper",
            "1973 - Military Coup and bombing of La Moneda"
          ]
        }
      },
      {
        "year_start": 1973,
        "year_end": 1990,
        "leader": "Augusto Pinochet",
        "party": "MIL",
        "party_full_name": "Junta Militar de Gobierno (Ditadura)",
        "spectrum": 7.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Ditadura militar altamente repressiva. Implementação de reformas neoliberais (Chicago Boys) e nova Constituição de 1980.",
          "en": "Highly repressive military dictatorship. Implementation of neoliberal reforms (Chicago Boys) and new Constitution of 1980."
        },
        "key_events": {
          "pt": [
            "1980 - Promulgação de nova Constituição",
            "1988 - Plebiscito do 'Não' determina fim do regime"
          ],
          "en": [
            "1980 - Promulgation of new Constitution",
            "1988 - 'No' plebiscite determines the end of the regime"
          ]
        }
      },
      {
        "year_start": 1990,
        "year_end": 2010,
        "leader": "Concertación (Aylwin, Frei, Lagos, Bachelet I)",
        "party": "PDC / PS",
        "party_full_name": "Coalición de Partidos por la Democracia",
        "spectrum": -6.4,
        "regime_type": "democracy",
        "description": {
          "pt": "Retorno democrático sob coalizão progressista. Crescimento econômico acelerado aliado a programas de redução de pobreza extrema.",
          "en": "Democratic return under progressive coalition. Accelerated economic growth combined with extreme poverty reduction programs."
        },
        "key_events": {
          "pt": [
            "1998 - Detenção de Pinochet em Londres",
            "2006 - Posse da primeira presidente mulher, Michelle Bachelet"
          ],
          "en": [
            "1998 - Pinochet's arrest in London",
            "2006 - Inauguration of the first female president, Michelle Bachelet"
          ]
        }
      },
      {
        "year_start": 2010,
        "year_end": 2022,
        "leader": "Alternância Piñera / Bachelet II",
        "party": "RN / PS",
        "party_full_name": "Renovación Nacional / Partido Socialista",
        "spectrum": -2.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Alternâncias regulares. Período marcado pelo severo Estallido Social de 2019 exigindo novas reformas constitucionais.",
          "en": "Regular alternations. Period marked by the severe Social Estallido of 2019 demanding new constitutional reforms."
        },
        "key_events": {
          "pt": [
            "2019 - Eclosão do Estallido Social",
            "2020 - Plebiscito aprova processo constituinte"
          ],
          "en": [
            "2019 - Outbreak of the Social Outbreak",
            "2020 - Plebiscite approves constituent process"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": null,
        "leader": "Gabriel Boric",
        "party": "AD",
        "party_full_name": "Apruebo Dignidad (Frente Amplia)",
        "spectrum": -6,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo progressista jovem focado em reformas ambientais e sociais, marcado pela rejeição de novas propostas de texto constitucional.",
          "en": "Young progressive government focused on environmental and social reforms, marked by the rejection of new constitutional text proposals."
        },
        "key_events": {
          "pt": [
            "2022 - Rejeição do primeiro rascunho da Constituição em plebiscito"
          ],
          "en": [
            "2022 - Rejection of the first draft of the Constitution in a plebiscite"
          ]
        }
      }
    ]
  },
  {
    "code": "CU",
    "name": "Cuba",
    "region": "Americas",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1952,
        "leader": "Grau San Martín / Carlos Prío",
        "party": "PRC-A",
        "party_full_name": "Partido Revolucionario Cubano - Auténtico",
        "spectrum": 1.7,
        "regime_type": "hybrid",
        "description": {
          "pt": "Período democrático caracterizado por crescimento econômico, mas assolado por alta corrupção estatal.",
          "en": "Democratic period characterized by economic growth, but plagued by high state corruption."
        }
      },
      {
        "year_start": 1952,
        "year_end": 1959,
        "leader": "Fulgencio Batista",
        "party": "PAP",
        "party_full_name": "Partido de Acción Unida (Ditadura)",
        "spectrum": 5.4,
        "regime_type": "hybrid",
        "description": {
          "pt": "Assumiu via golpe militar. Governo autoritário repressivo pró-EUA, derrubado pelo Movimento 26 de Julho.",
          "en": "He took over via military coup. Pro-US repressive authoritarian government, overthrown by the 26th of July Movement."
        },
        "key_events": {
          "pt": [
            "1953 - Assalto ao Quartel Moncada",
            "1959 - Fuga de Batista / Vitória da Revolução Cubana"
          ],
          "en": [
            "1953 - Assault on Moncada Barracks",
            "1959 - Escape of Batista / Victory of the Cuban Revolution"
          ]
        }
      },
      {
        "year_start": 1959,
        "year_end": 2008,
        "leader": "Fidel Castro",
        "party": "PCC",
        "party_full_name": "Partido Comunista de Cuba",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Instalação do regime socialista soviético de partido único. Avanços em educação e medicina sob forte controle estatal.",
          "en": "Installation of the single-party Soviet socialist regime. Advances in education and medicine under strong state control."
        },
        "key_events": {
          "pt": [
            "1961 - Declaração do caráter socialista da Revolução",
            "1962 - Embargo econômico dos EUA",
            "1991 - Início do Período Especial pós-queda soviética"
          ],
          "en": [
            "1961 - Declaration of the socialist character of the Revolution",
            "1962 - US economic embargo",
            "1991 - Beginning of the Special Period after the Soviet fall"
          ]
        }
      },
      {
        "year_start": 2008,
        "year_end": 2018,
        "leader": "Raúl Castro",
        "party": "PCC",
        "party_full_name": "Partido Comunista de Cuba",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Assumiu após afastamento de Fidel. Implementou reformas econômicas tímidas para a iniciativa privada e reatou laços com EUA.",
          "en": "He took over after Fidel's departure. He implemented timid economic reforms for the private sector and reestablished ties with the USA."
        },
        "key_events": {
          "pt": [
            "2015 - Restabelecimento de relações diplomáticas com os EUA"
          ],
          "en": [
            "2015 - Reestablishment of diplomatic relations with the USA"
          ]
        }
      },
      {
        "year_start": 2018,
        "year_end": null,
        "leader": "Miguel Díaz-Canel",
        "party": "PCC",
        "party_full_name": "Partido Comunista de Cuba",
        "spectrum": 2.7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Primeiro presidente civil cubano pós-revolução. Enfrentou grave recessão energética e inéditos protestos populares.",
          "en": "First post-revolution Cuban civilian president. It faced a serious energy recession and unprecedented popular protests."
        },
        "key_events": {
          "pt": [
            "2021 - Protestos em massa de 11 de Julho (11J)"
          ],
          "en": [
            "2021 - July 11th mass protests (11J)"
          ]
        }
      }
    ]
  },
  {
    "code": "KP",
    "name": "Coreia do Norte",
    "region": "Asia",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1948,
        "leader": "Ocupação Soviética",
        "party": "MIL",
        "party_full_name": "Comando Militar da URSS na Península",
        "spectrum": 3.9,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Divisão da Coreia e administração militar soviética no norte do paralelo 38.",
          "en": "Division of Korea and Soviet military administration north of the 38th parallel."
        }
      },
      {
        "year_start": 1948,
        "year_end": 1994,
        "leader": "Kim Il-sung",
        "party": "WPK",
        "party_full_name": "Workers' Party of Korea",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Fundador do Estado sob a doutrina nacionalista Juche (autossuficiência). Culto absoluto à personalidade e isolamento total.",
          "en": "Founder of the State under the nationalist doctrine Juche (self-sufficiency). Absolute cult of personality and total isolation."
        },
        "key_events": {
          "pt": [
            "1950 - Invasão do Sul / Guerra da Coreia",
            "1972 - Adoção da ideologia Juche na Constituição"
          ],
          "en": [
            "1950 - Invasion of the South / Korean War",
            "1972 - Adoption of Juche ideology in the Constitution"
          ]
        }
      },
      {
        "year_start": 1994,
        "year_end": 2011,
        "leader": "Kim Jong-il",
        "party": "WPK",
        "party_full_name": "Workers' Party of Korea",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Doutrina Songun (prioridade absoluta militar). Enfrentou severa fome generalizada nos anos 90 e iniciou o programa atômico.",
          "en": "Songun Doctrine (absolute military priority). It faced severe widespread famine in the 1990s and began the atomic program."
        },
        "key_events": {
          "pt": [
            "1996 - Auge da Grande Fome Coreana",
            "2006 - Primeiro teste nuclear declarado da Coreia do Norte"
          ],
          "en": [
            "1996 - Peak of the Great Korean Famine",
            "2006 - North Korea's first declared nuclear test"
          ]
        }
      },
      {
        "year_start": 2011,
        "year_end": null,
        "leader": "Kim Jong-un",
        "party": "WPK",
        "party_full_name": "Workers' Party of Korea",
        "spectrum": 3.4,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Desenvolvimento rápido de mísseis balísticos intercontinentais e arsenal atômico sob isolamento contínuo.",
          "en": "Rapid development of intercontinental ballistic missiles and atomic arsenal under continued isolation."
        },
        "key_events": {
          "pt": [
            "2018 - Cúpula histórica com Donald Trump em Singapura",
            "2024 - Abandono formal da meta de reunificação pacífica com o Sul"
          ],
          "en": [
            "2018 - Historic summit with Donald Trump in Singapore",
            "2024 - Formal abandonment of the goal of peaceful reunification with the South"
          ]
        }
      }
    ]
  },
  {
    "code": "VN",
    "name": "Vietnã",
    "region": "Asia",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1954,
        "leader": "Guerra da Indochina (Ho Chi Minh / Ocupação)",
        "party": "VM",
        "party_full_name": "Viet Minh (Liga da Independência)",
        "spectrum": 2.9,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Guerra de libertação anticolonial contra o domínio francês na Indochina.",
          "en": "Anti-colonial liberation war against French rule in Indochina."
        },
        "key_events": {
          "pt": [
            "1945 - Proclamação da independência",
            "1954 - Derrota francesa em Dien Bien Phu / Divisão do Vietnã"
          ],
          "en": [
            "1945 - Proclamation of independence",
            "1954 - French defeat at Dien Bien Phu / Division of Vietnam"
          ]
        }
      },
      {
        "year_start": 1954,
        "year_end": 1975,
        "leader": "Vietnã do Sul (Ngo Dinh Diem / Nguyen Van Thieu)",
        "party": "IND",
        "party_full_name": "República do Vietnã (Fronteiras Modernas no Mapa)",
        "spectrum": 4.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Vietnã do Sul aliado aos EUA contra o Norte comunista de Ho Chi Minh, encerrado com a queda de Saigon em 1975.",
          "en": "South Vietnam allied with the USA against Ho Chi Minh's communist North, ended with the fall of Saigon in 1975."
        },
        "key_events": {
          "pt": [
            "1963 - Deposição e morte de Ngo Dinh Diem",
            "1965 - Entrada massiva de tropas dos EUA",
            "1975 - Queda de Saigon / Reunificação"
          ],
          "en": [
            "1963 - Deposition and death of Ngo Dinh Diem",
            "1965 - Mass entry of US troops",
            "1975 - Fall of Saigon / Reunification"
          ]
        }
      },
      {
        "year_start": 1975,
        "year_end": 1986,
        "leader": "Le Duan",
        "party": "CPV",
        "party_full_name": "Communist Party of Vietnam",
        "spectrum": 2.7,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Reunificação sob regime comunista. Coletivização agrária sob forte isolamento econômico pós-Guerra do Vietnã.",
          "en": "Reunification under communist rule. Agrarian collectivization under strong post-Vietnam War economic isolation."
        },
        "key_events": {
          "pt": [
            "1978 - Intervenção vietnamita no Camboja derruba Khmer Vermelho",
            "1979 - Guerra Sino-Vietnamita de fronteira"
          ],
          "en": [
            "1978 - Vietnamese intervention in Cambodia overthrows Khmer Rouge",
            "1979 - Sino-Vietnamese Border War"
          ]
        }
      },
      {
        "year_start": 1986,
        "year_end": null,
        "leader": "Doi Moi (Reformas de Mercado)",
        "party": "CPV",
        "party_full_name": "Communist Party of Vietnam",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Reformas de liberalização econômica Doi Moi (Economia de Mercado Orientada ao Socialismo), atraindo fortes investimentos globais.",
          "en": "Doi Moi (Socialist Oriented Market Economy) economic liberalization reforms, attracting strong global investments."
        },
        "key_events": {
          "pt": [
            "1995 - Normalização de relações com os EUA",
            "2007 - Entrada do Vietnã na OMC"
          ],
          "en": [
            "1995 - Normalization of relations with the USA",
            "2007 - Vietnam's entry into the WTO"
          ]
        }
      }
    ]
  },
  {
    "code": "CZ",
    "name": "República Tcheca",
    "region": "Europe",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1948,
        "leader": "Edvard Beneš (Tchecoslováquia)",
        "party": "ČSNS",
        "party_full_name": "Czechoslovak National Social Party",
        "spectrum": 2.6,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Período democrático provisório na Tchecoslováquia pós-guerra, finalizado com o golpe comunista de 1948.",
          "en": "Provisional democratic period in post-war Czechoslovakia, ended with the communist coup of 1948."
        },
        "key_events": {
          "pt": [
            "1948 - Golpe de Praga instala regime comunista"
          ],
          "en": [
            "1948 - Prague coup installs communist regime"
          ]
        }
      },
      {
        "year_start": 1948,
        "year_end": 1968,
        "leader": "Klement Gottwald / Antonín Novotný",
        "party": "KSČ",
        "party_full_name": "Communist Party of Czechoslovakia",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Instalação do modelo soviético stalinista na Tchecoslováquia, com expurgos internos e nacionalização completa.",
          "en": "Installation of the Stalinist Soviet model in Czechoslovakia, with internal purges and complete nationalization."
        },
        "key_events": {
          "pt": [
            "1968 - Primavera de Praga sob o reformismo de Alexander Dubček"
          ],
          "en": [
            "1968 - Prague Spring under the reformism of Alexander Dubček"
          ]
        }
      },
      {
        "year_start": 1968,
        "year_end": 1989,
        "leader": "Gustáv Husák (Normalização)",
        "party": "KSČ",
        "party_full_name": "Communist Party of Czechoslovakia",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Período da Normalização pós-invasão de tanques soviéticos, revertendo reformas da Primavera de Praga.",
          "en": "Period of Normalization post-Soviet tank invasion, reversing Prague Spring reforms."
        },
        "key_events": {
          "pt": [
            "1977 - Publicação do manifesto dissidente Carta 77",
            "1989 - Revolução de Veludo depõe comunistas"
          ],
          "en": [
            "1977 - Publication of the dissident manifesto Carta 77",
            "1989 - Velvet Revolution deposes communists"
          ]
        }
      },
      {
        "year_start": 1989,
        "year_end": 1993,
        "leader": "Václav Havel (Tchecoslováquia)",
        "party": "OF",
        "party_full_name": "Civic Forum (Fórum Cívico)",
        "spectrum": -1.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Primeira presidência democrática de Václav Havel à frente do desmembramento pacífico com a Eslováquia.",
          "en": "Václav Havel's first democratic presidency ahead of the peaceful dismemberment with Slovakia."
        },
        "key_events": {
          "pt": [
            "1993 - Dissolução da Tchecoslováquia (Divórcio de Veludo)"
          ],
          "en": [
            "1993 - Dissolution of Czechoslovakia (Velvet Divorce)"
          ]
        }
      },
      {
        "year_start": 1993,
        "year_end": 2013,
        "leader": "Václav Klaus (República Tcheca)",
        "party": "ODS",
        "party_full_name": "Civic Democratic Party",
        "spectrum": -2.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Consolidação econômica liberal da República Tcheca e integração na União Europeia e OTAN.",
          "en": "Liberal economic consolidation of the Czech Republic and integration into the European Union and NATO."
        },
        "key_events": {
          "pt": [
            "1999 - Entrada na OTAN",
            "2004 - Entrada na União Europeia"
          ],
          "en": [
            "1999 - Entry into NATO",
            "2004 - Entry into the European Union"
          ]
        }
      },
      {
        "year_start": 2013,
        "year_end": null,
        "leader": "Miloš Zeman / Petr Fiala",
        "party": "SPO / ODS",
        "party_full_name": "Strana Práv Občanů / Civic Democratic Party",
        "spectrum": -2.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo caracterizado por alianças de centro-direita e forte engajamento de defesa com a União Europeia.",
          "en": "Government characterized by center-right alliances and strong defense engagement with the European Union."
        },
        "key_events": {
          "pt": [
            "2023 - Eleição do ex-general da OTAN Petr Pavel como presidente"
          ],
          "en": [
            "2023 - Election of former NATO general Petr Pavel as president"
          ]
        }
      }
    ]
  },
  {
    "code": "EG",
    "name": "Egito",
    "region": "Africa",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1952,
        "leader": "Rei Farouk I",
        "party": "MON",
        "party_full_name": "Dinastia Muhammad Ali (Monarquia)",
        "spectrum": 6.3,
        "regime_type": "hybrid",
        "description": {
          "pt": "Monarquia constitucional pró-britânica, marcada por desigualdade severa e descontentamento militar pós-guerra contra Israel.",
          "en": "Pro-British constitutional monarchy, marked by severe inequality and post-war military discontent against Israel."
        },
        "key_events": {
          "pt": [
            "1948 - Primeira Guerra Árabe-Israelense",
            "1952 - Revolução dos Oficiais Livres depõe monarca"
          ],
          "en": [
            "1948 - First Arab-Israeli War",
            "1952 - Free Officers Revolution deposes monarch"
          ]
        }
      },
      {
        "year_start": 1952,
        "year_end": 1970,
        "leader": "Gamal Abdel Nasser",
        "party": "ASU",
        "party_full_name": "Arab Socialist Union",
        "spectrum": 2.8,
        "regime_type": "authoritarian",
        "description": {
          "pt": "Nacionalismo árabe laico e socialismo nasserista. Nacionalizou o Canal de Suez e buscou liderança regional no Oriente Médio.",
          "en": "Secular Arab nationalism and Nasserist socialism. He nationalized the Suez Canal and sought regional leadership in the Middle East."
        },
        "key_events": {
          "pt": [
            "1956 - Nacionalização de Suez / Guerra",
            "1967 - Guerra dos Seis Dias"
          ],
          "en": [
            "1956 - Nationalization of Suez / War",
            "1967 - Six Day War"
          ]
        }
      },
      {
        "year_start": 1970,
        "year_end": 1981,
        "leader": "Anwar Sadat",
        "party": "NDP",
        "party_full_name": "National Democratic Party",
        "spectrum": 5.8,
        "regime_type": "hybrid",
        "description": {
          "pt": "Iniciou abertura econômica (Infitah) e assinou a paz histórica com Israel, gerando retaliação e seu assassinato em 1981.",
          "en": "He initiated economic opening (Infitah) and signed historic peace with Israel, generating retaliation and his assassination in 1981."
        },
        "key_events": {
          "pt": [
            "1973 - Guerra do Yom Kippur",
            "1978 - Acordos de Camp David",
            "1981 - Assassinato de Sadat"
          ],
          "en": [
            "1973 - Yom Kippur War",
            "1978 - Camp David Accords",
            "1981 - Assassination of Sadat"
          ]
        }
      },
      {
        "year_start": 1981,
        "year_end": 2011,
        "leader": "Hosni Mubarak",
        "party": "NDP",
        "party_full_name": "National Democratic Party",
        "spectrum": 5.6,
        "regime_type": "hybrid",
        "description": {
          "pt": "Ditadura militar sob estado de emergência perpétuo. Alinhado aos EUA, derrubado nos protestos da Primavera Árabe em 2011.",
          "en": "Military dictatorship under a perpetual state of emergency. Aligned with the US, overthrown in the Arab Spring protests in 2011."
        },
        "key_events": {
          "pt": [
            "2011 - Protestos da Praça Tahrir forçam renúncia de Mubarak"
          ],
          "en": [
            "2011 - Tahrir Square protests force Mubarak to resign"
          ]
        }
      },
      {
        "year_start": 2011,
        "year_end": 2013,
        "leader": "Mohamed Morsi (Irmandade Islâmica)",
        "party": "FJP",
        "party_full_name": "Freedom and Justice Party",
        "spectrum": 2.2,
        "regime_type": "hybrid",
        "description": {
          "pt": "Primeiro presidente civil democraticamente eleito, destituído por golpe militar após intensos protestos populares.",
          "en": "First democratically elected civilian president, removed by military coup after intense popular protests."
        },
        "key_events": {
          "pt": [
            "2013 - Golpe de Estado militar liderado por al-Sisi"
          ],
          "en": [
            "2013 - Military coup d'état led by al-Sisi"
          ]
        }
      },
      {
        "year_start": 2013,
        "year_end": null,
        "leader": "Abdel Fattah al-Sisi",
        "party": "IND",
        "party_full_name": "Independente (Militar/Fato)",
        "spectrum": 6.5,
        "regime_type": "hybrid",
        "description": {
          "pt": "Consolidação autoritária militar. Repressão drástica a grupos islâmicos e opositores civis sob forte crise econômica nacional.",
          "en": "Military authoritarian consolidation. Drastic repression of Islamic groups and civil opponents under a severe national economic crisis."
        },
        "key_events": {
          "pt": [
            "2019 - Reformas constitucionais estendem mandatos presidenciais"
          ],
          "en": [
            "2019 - Constitutional reforms extend presidential terms"
          ]
        }
      }
    ]
  },
  {
    "code": "AU",
    "name": "Austrália",
    "region": "Oceania",
    "periods": [
      {
        "year_start": 1945,
        "year_end": 1949,
        "leader": "Ben Chifley",
        "party": "ALP",
        "party_full_name": "Australian Labor Party",
        "spectrum": -5.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Governo trabalhista pós-guerra focado em imigração europeia em massa e industrialização.",
          "en": "Post-war Labor government focused on mass European immigration and industrialization."
        }
      },
      {
        "year_start": 1949,
        "year_end": 1966,
        "leader": "Robert Menzies",
        "party": "LP",
        "party_full_name": "Liberal Party of Australia",
        "spectrum": -2.3,
        "regime_type": "democracy",
        "description": {
          "pt": "Chanceler conservador de mandato recorde. Boom de commodities pós-guerra e forte alinhamento anticomunista com EUA.",
          "en": "Conservative chancellor with a record term. Post-war commodity boom and strong anti-communist alignment with the USA."
        },
        "key_events": {
          "pt": [
            "1951 - Assinatura do Tratado de Aliança ANZUS"
          ],
          "en": [
            "1951 - Signing of the ANZUS Alliance Treaty"
          ]
        }
      },
      {
        "year_start": 1966,
        "year_end": 1972,
        "leader": "Holt / Gorton / McMahon",
        "party": "LP",
        "party_full_name": "Liberal Party of Australia",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Envio de contingente militar na Guerra do Vietnã e início do abandono da restritiva política migratória branca.",
          "en": "Sending of military contingents in the Vietnam War and beginning of the abandonment of the restrictive white migration policy."
        }
      },
      {
        "year_start": 1972,
        "year_end": 1975,
        "leader": "Gough Whitlam",
        "party": "ALP",
        "party_full_name": "Australian Labor Party",
        "spectrum": -6.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Fim do envio de tropas ao Vietnã, sufrágio universal de aborígenes. Demitido formalmente pelo Governador-Geral em crise constitucional.",
          "en": "End of sending troops to Vietnam, universal suffrage for aborigines. Formally dismissed by the Governor-General in a constitutional crisis."
        },
        "key_events": {
          "pt": [
            "1975 - Crise Constitucional e demissão de Whitlam pelo representante da coroa"
          ],
          "en": [
            "1975 - Constitutional Crisis and dismissal of Whitlam by the crown representative"
          ]
        }
      },
      {
        "year_start": 1975,
        "year_end": 1983,
        "leader": "Malcolm Fraser",
        "party": "LP",
        "party_full_name": "Liberal Party of Australia",
        "spectrum": -2.7,
        "regime_type": "democracy",
        "description": {
          "pt": "Conservador. Saneamento fiscal pós-crise constitucional e aceitação de imigração asiática em massa.",
          "en": "Conservative. Post-constitutional crisis fiscal sanitation and acceptance of mass Asian immigration."
        }
      },
      {
        "year_start": 1983,
        "year_end": 1996,
        "leader": "Bob Hawke / Paul Keating",
        "party": "ALP",
        "party_full_name": "Australian Labor Party",
        "spectrum": -7.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Trabalhismo reformista de mercado: desregulamentação financeira e flutuação cambial do dólar australiano.",
          "en": "Market reformist labor: financial deregulation and exchange rate fluctuation of the Australian dollar."
        }
      },
      {
        "year_start": 1996,
        "year_end": 2007,
        "leader": "John Howard",
        "party": "LP",
        "party_full_name": "Liberal Party of Australia",
        "spectrum": -2.8,
        "regime_type": "democracy",
        "description": {
          "pt": "Conservador. Apoio à Guerra ao Terror americana, introdução de imposto sobre consumo geral e reformas trabalhistas.",
          "en": "Conservative. Support for the American War on Terror, introduction of general excise tax, and labor reforms."
        },
        "key_events": {
          "pt": [
            "1996 - Restrição nacional à posse de armas de fogo",
            "2003 - Envio de tropas no Iraque"
          ],
          "en": [
            "1996 - National restriction on the possession of firearms",
            "2003 - Deployment of troops in Iraq"
          ]
        }
      },
      {
        "year_start": 2007,
        "year_end": 2013,
        "leader": "Kevin Rudd / Julia Gillard",
        "party": "ALP",
        "party_full_name": "Australian Labor Party",
        "spectrum": -7.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Assinatura do Protocolo de Quioto e desculpas formais nacionais às gerações roubadas aborígenes.",
          "en": "Signing of the Kyoto Protocol and formal national apologies to the Aboriginal Stolen Generations."
        },
        "key_events": {
          "pt": [
            "2008 - Desculpas oficiais governamentais aos Aborígenes"
          ],
          "en": [
            "2008 - Official government apology to Aboriginal people"
          ]
        }
      },
      {
        "year_start": 2013,
        "year_end": 2022,
        "leader": "Abbott / Turnbull / Morrison",
        "party": "LP",
        "party_full_name": "Liberal Party of Australia (Coalizão)",
        "spectrum": -2.5,
        "regime_type": "democracy",
        "description": {
          "pt": "Políticas duras de interceptação marítima contra barcos de imigrantes e gestão de grandes incêndios florestais.",
          "en": "Tough maritime interception policies against immigrant boats and management of large forest fires."
        },
        "key_events": {
          "pt": [
            "2021 - Parceria militar internacional AUKUS"
          ],
          "en": [
            "2021 - AUKUS International Military Partnership"
          ]
        }
      },
      {
        "year_start": 2022,
        "year_end": null,
        "leader": "Anthony Albanese",
        "party": "ALP",
        "party_full_name": "Australian Labor Party",
        "spectrum": -6.2,
        "regime_type": "democracy",
        "description": {
          "pt": "Foco em transição energética e na realização do plebiscito constitucional pelo reconhecimento parlamentar da voz aborígene.",
          "en": "Focus on energy transition and holding the constitutional plebiscite for parliamentary recognition of the aboriginal voice."
        },
        "key_events": {
          "pt": [
            "2023 - Rejeição em plebiscito da emenda de representação Aborígene"
          ],
          "en": [
            "2023 - Rejection of the Aboriginal representation amendment in a plebiscite"
          ]
        }
      }
    ]
  }
];
