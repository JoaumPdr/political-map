/**
 * @file types.ts
 * @description Definições de tipos e interfaces do TypeScript para a camada de dados
 * do Atlas Político. Define as estruturas semânticas do espectro, tipos de regimes,
 * períodos governamentais e registros por país.
 * 
 * Dependente de:
 * - {@link staticCountriesData} em `lib/data/staticDataset.ts`
 * - {@link usePoliticalData} em `lib/hooks/usePoliticalData.ts`
 */

/**
 * Representa a posição de um governo no espectro político-econômico.
 * Varia de -10 (esquerda radical, ex: controle total do estado, Maoísmo/Castroismo)
 * a +10 (extrema direita, ex: desregulamentação absoluta de mercado e conservadorismo fiscal radical).
 */
export type SpectrumValue = number;

/**
 * Classificação do tipo de regime político ativo no período:
 * - 'democracy': eleições livres e competitivas, estado de direito consolidado.
 * - 'authoritarian': controle de partido único ou junta militar, sem eleições livres.
 * - 'hybrid': há eleições, mas sob censura midiática, assédio a opositores e aparelhamento estatal.
 * - 'monarchy': poder executivo de fato concentrado na coroa (monarquia absoluta/semi-absoluta).
 * - 'transitional': guerras civis, revoluções ativas ou interregnos de poder.
 */
export type RegimeType = "democracy" | "authoritarian" | "hybrid" | "monarchy" | "transitional";

/**
 * Representa um intervalo temporal contínuo na governança de um país sob um mesmo espectro e regime.
 */
export interface PoliticalPeriod {
  /** Ano de início do período (inclusive) */
  year_start: number;
  /** Ano de encerramento do período (inclusive), ou null se for o período ativo atualmente */
  year_end: number | null;
  /** Nome completo do governante ou da junta governamental ativa */
  leader: string;
  /** Sigla ou nome curto do partido político governista */
  party: string;
  /** Nome completo oficial do partido político governista */
  party_full_name: string;
  /** Valor numérico calibrado do espectro político de -10 a +10 */
  spectrum: SpectrumValue;
  /** Classificação do regime de governança ativa */
  regime_type: RegimeType;
  /** Resumo didático e fatual de 2 a 3 sentenças descrevendo o contexto do período (bilíngue) */
  description: {
    en: string;
    pt: string;
  };
  /** Lista opcional de marcos históricos marcantes que ocorreram nesse período (bilíngue) */
  key_events?: {
    en: string[];
    pt: string[];
  };
}

/**
 * Agrupa o histórico político e metadados geográficos de uma determinada nação.
 */
export interface CountryData {
  /** Código ISO 3166-1 alpha-2 de representação internacional do país (ex: 'BR', 'US') */
  code: string;
  /** Nome em Português do Brasil para exibição na interface */
  name: string;
  /** Continente ou agrupamento geográfico regional (ex: 'Americas', 'Europe') */
  region: string;
  /** Array de períodos políticos cobrindo a história do país de 1945 a 2024 sem lacunas */
  periods: PoliticalPeriod[];
}
