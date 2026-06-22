import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import { staticCountriesData } from "../data/staticDataset";
import { CountryData, PoliticalPeriod } from "../data/types";

export interface TrajectoryPoint {
  year: number;
  spectrum: number;
  leader: string;
  party: string;
  regimeType: string;
}

/**
 * Hook para obter dados detalhados e trajetória temporal de um país específico.
 */
export function useCountryDetail(countryCode: string | null) {
  const selectedYear = useAppStore((state) => state.selectedYear);

  const detail = useMemo(() => {
    if (!countryCode) return null;

    const country = staticCountriesData.find(
      (c) => c.code.toUpperCase() === countryCode.toUpperCase()
    );

    if (!country) return null;

    // Acha o período ativo no ano selecionado
    const activePeriod =
      country.periods.find(
        (p) =>
          selectedYear >= p.year_start &&
          (p.year_end === null || selectedYear <= p.year_end)
      ) || null;

    // Gera a trajetória ano a ano de 1945 a 2024 para o Recharts
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
        // Ponto neutro caso não haja dados daquele ano
        trajectory.push({
          year,
          spectrum: 0,
          leader: "Sem Dados",
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
