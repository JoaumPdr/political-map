import { staticCountriesData } from "./staticDataset";
import { CountryData, PoliticalPeriod } from "./types";

/**
 * Retorna todos os dados de países do dataset político.
 * Esse método simula uma chamada a banco de dados e pode ser facilmente
 * substituído no futuro por um fetch dinâmico de uma API ou banco real.
 */
export async function getCountriesData(): Promise<CountryData[]> {
  // Retorna uma cópia profunda para simular o comportamento de um banco de dados imutável
  return JSON.parse(JSON.stringify(staticCountriesData));
}

/**
 * Retorna os dados de um país específico pelo código ISO alpha-2.
 */
export async function getCountryByCode(code: string): Promise<CountryData | null> {
  const data = await getCountriesData();
  const country = data.find((c) => c.code.toUpperCase() === code.toUpperCase());
  return country || null;
}

/**
 * Retorna o período político ativo em um país para um ano específico.
 */
export async function getCountryPeriodByYear(
  code: string,
  year: number
): Promise<PoliticalPeriod | null> {
  const country = await getCountryByCode(code);
  if (!country) return null;

  const period = country.periods.find(
    (p) => year >= p.year_start && (p.year_end === null || year <= p.year_end)
  );

  return period || null;
}
