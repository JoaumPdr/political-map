export type SpectrumValue = number; // -10 (far-left) to +10 (far-right)
export type RegimeType = "democracy" | "authoritarian" | "hybrid" | "monarchy" | "transitional";

export interface PoliticalPeriod {
  year_start: number;
  year_end: number | null;
  leader: string;
  party: string;
  party_full_name: string;
  spectrum: SpectrumValue;
  regime_type: RegimeType;
  description: string;
  key_events?: string[];
}

export interface CountryData {
  code: string;         // ISO 3166-1 alpha-2 ou alpha-3 (nota: react-simple-maps usa ISO de 3 letras para IDs de países por padrão na projeção natural, mas o prompt especifica 'code: ISO 3166-1 alpha-2'. Vamos suportar a conversão ou usar o que for melhor para o mapa. Espera, o TopoJSON baixado usa ISO de 3 letras no id dos países ou usa id numérico? No arquivo de visualização vimos: "id":"840","properties":{"name":"United States of America"}. 840 é o ID numérico ISO 3166-1. Nós mapearemos os códigos de país. Vamos usar ISO alpha-3 ou mapear de alpha-2 para o id numérico / nome.)
  name: string;
  region: string;
  periods: PoliticalPeriod[];
}
