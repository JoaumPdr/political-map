/**
 * @file useCountryDetail.ts
 * @description Hook customizado para carregar os detalhes consolidados de um país específico.
 * Gera a trajetória temporal (de 1945 a 2024) formatada sob medida para consumo dos gráficos
 * do Recharts, além de rastrear o líder ativo no ano e o histórico completo de transições.
 * 
 * Depende de:
 * - Dataset: {@link staticCountriesData} de `lib/data/staticDataset`
 * - Estado Global: {@link useAppStore} de `lib/store/useAppStore`
 * 
 * Dependente de:
 * - Componentes: {@link CountryDetailPanel} e {@link ComparisonDrawer}
 */

import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import { staticCountriesData } from "../data/staticDataset";
import { CountryData, PoliticalPeriod } from "../data/types";

/**
 * Representa um ponto de dados no gráfico de evolução histórica do espectro.
 */
export interface TrajectoryPoint {
  /** Ano do ponto de dado */
  year: number;
  /** Valor do espectro político (-10 a +10) */
  spectrum: number;
  /** Nome do líder no ano correspondente */
  leader: string;
  /** Sigla do partido governante */
  party: string;
  /** Tipo de regime de governança no ano */
  regimeType: string;
}

/**
 * Hook para obter dados detalhados e trajetória de evolução de um país.
 * 
 * @param {string | null} countryCode - Código ISO-2 do país desejado.
 * @returns {null | { country: CountryData, activePeriod: PoliticalPeriod | null, periods: PoliticalPeriod[], trajectory: TrajectoryPoint[] }} Detalhes do país.
 */
export function useCountryDetail(countryCode: string | null) {
  // Observa o ano selecionado globalmente para identificar o período ativo correspondente
  const selectedYear = useAppStore((state) => state.selectedYear);

  /**
   * O uso de useMemo evita recomputar a linha do tempo (1945-2024) a menos que o país consultado
   * ou o ano global de observação mudem.
   */
  const detail = useMemo(() => {
    if (!countryCode) return null;

    const country = staticCountriesData.find(
      (c) => c.code.toUpperCase() === countryCode.toUpperCase()
    );

    if (!country) return null;

    // Encontra o período correspondente ao ano ativo na timeline global
    const activePeriod =
      country.periods.find(
        (p) =>
          selectedYear >= p.year_start &&
          (p.year_end === null || selectedYear <= p.year_end)
      ) || null;

    // Gera a trajetória contínua ano a ano de 1945 a 2024 para o Recharts LineChart.
    // Isso garante que o eixo X seja idêntico para todos os países, permitindo a sincronização
    // exata de múltiplos gráficos (syncId) no painel comparativo.
    const trajectory: TrajectoryPoint[] = [];
    for (let year = 1945; year <= 2024; year++) {
      const period = country.periods.find(
        (p) => year >= p.year_start && (p.year_end === null || year <= p.year_end)
      );

      if (period) {
        trajectory.push({
          year,
          spectrum: period.spectrum,
          leader: period.leader,
          party: period.party,
          regimeType: period.regime_type,
        });
      } else {
        // Ponto neutro para evitar quebras no gráfico caso o país tenha sido fundado após 1945
        // (Roteado como transição sem valor de espectro no gráfico)
        trajectory.push({
          year,
          spectrum: 0,
          leader: "Sem Dados / Ocupação",
          party: "N/A",
          regimeType: "transitional",
        });
      }
    }

    return {
      country,
      activePeriod,
      periods: country.periods,
      trajectory,
    };
  }, [countryCode, selectedYear]);

  return detail;
}
