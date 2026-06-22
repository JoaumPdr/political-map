/**
 * @file politicalData.ts
 * @description Módulo de abstração para fornecimento de dados históricos de países.
 * Este arquivo isola os componentes da importação direta do JSON/dataset estático,
 * facilitando futuras migrações para um banco de dados real ou chamadas de API externa.
 * 
 * Depende de:
 * - Dataset: {@link staticCountriesData} de `./staticDataset`
 * - Types: {@link CountryData}, {@link PoliticalPeriod} de `./types`
 * 
 * Dependente de:
 * - Hooks: {@link usePoliticalData} de `lib/hooks/usePoliticalData.ts`
 * - Rota de API: `/app/api/political-data/route.ts`
 */

import { staticCountriesData } from "./staticDataset";
import { CountryData, PoliticalPeriod } from "./types";

/**
 * Recupera os dados completos de todos os países mapeados.
 * Simula uma operação assíncrona comum em bancos de dados reais.
 * 
 * @returns {Promise<CountryData[]>} Lista imutável clonada contendo todos os dados geográficos e cronológicos.
 */
export async function getCountriesData(): Promise<CountryData[]> {
  // Retorna uma cópia profunda para simular o comportamento de um banco de dados imutável.
  // Evita efeitos colaterais caso os componentes tentem alterar propriedades em memória.
  return JSON.parse(JSON.stringify(staticCountriesData));
}

/**
 * Recupera o histórico completo de um país específico utilizando o código ISO alpha-2.
 * 
 * @param {string} code - Código de duas letras do país (ex: "BR", "US").
 * @returns {Promise<CountryData | null>} Objeto de dados do país correspondente ou null se não localizado.
 */
export async function getCountryByCode(code: string): Promise<CountryData | null> {
  const data = await getCountriesData();
  const country = data.find((c) => c.code.toUpperCase() === code.toUpperCase());
  return country || null;
}

/**
 * Localiza o período político ativo de um país para um ano cronológico determinado.
 * 
 * @param {string} code - Código ISO de duas letras do país.
 * @param {number} year - Ano alvo da simulação (ex: 1989).
 * @returns {Promise<PoliticalPeriod | null>} O período governamental ativo ou null.
 */
export async function getCountryPeriodByYear(
  code: string,
  year: number
): Promise<PoliticalPeriod | null> {
  const country = await getCountryByCode(code);
  if (!country) return null;

  // Encontra o período em que o ano alvo se enquadra na faixa [year_start, year_end]
  // Caso year_end seja null, o período é considerado ativo até o presente (2024).
  const period = country.periods.find(
    (p) => year >= p.year_start && (p.year_end === null || year <= p.year_end)
  );

  return period || null;
}
