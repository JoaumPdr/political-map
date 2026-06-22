import { useEffect, useState, useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import { staticCountriesData } from "../data/staticDataset";
import { CountryData, PoliticalPeriod } from "../data/types";

export interface ActiveCountryState {
  code: string;
  name: string;
  region: string;
  activePeriod: PoliticalPeriod | null;
  // Flag para indicar se o país passa pelos filtros ativos ou não
  matchesFilters: boolean;
}

/**
 * Hook centralizado de acesso aos dados políticos do Atlas.
 * Evita importação direta de JSON nos componentes.
 * 
 * Se chamado sem argumentos, utiliza o ano e filtros da Zustand store global.
 */
export function usePoliticalData(countryCode?: string, year?: number) {
  const globalYear = useAppStore((state) => state.selectedYear);
  const filters = useAppStore((state) => state.filters);

  // Determina o ano a ser considerado
  const targetYear = year !== undefined ? year : globalYear;

  // Processa e memoriza a lista de estados de países ativos para o ano e filtros
  const processedData = useMemo(() => {
    // Busca dados estáticos (aqui simulado, mas centralizado na lib)
    const countries = staticCountriesData;

    // Se o objetivo for buscar um único país histórico completo
    if (countryCode) {
      const single = countries.find(
        (c) => c.code.toUpperCase() === countryCode.toUpperCase()
      );
      return single ? [single] : [];
    }

    // Caso contrário, calcula o estado ativo de cada país no ano alvo
    return countries.map((country): ActiveCountryState => {
      // Acha o período político correspondente ao ano
      const activePeriod =
        country.periods.find(
          (p) =>
            targetYear >= p.year_start &&
            (p.year_end === null || targetYear <= p.year_end)
        ) || null;

      // Validação de filtros
      let matchesFilters = true;

      // 1. Filtro de Região
      if (filters.region !== "All" && country.region !== filters.region) {
        matchesFilters = false;
      }

      // Se não há período ativo, não bate com filtros de regime ou espectro
      if (!activePeriod) {
        matchesFilters = false;
      } else {
        // 2. Filtro de Regime
        if (
          filters.regimeType !== "All" &&
          activePeriod.regime_type !== filters.regimeType.toLowerCase()
        ) {
          matchesFilters = false;
        }

        // 3. Filtro de Espectro
        const [minSpec, maxSpec] = filters.spectrumRange;
        if (
          activePeriod.spectrum < minSpec ||
          activePeriod.spectrum > maxSpec
        ) {
          matchesFilters = false;
        }
      }

      return {
        code: country.code,
        name: country.name,
        region: country.region,
        activePeriod,
        matchesFilters,
      };
    });
  }, [countryCode, targetYear, filters.region, filters.regimeType, filters.spectrumRange]);

  // Se buscou por país específico, retorna o primeiro (se houver) ou null
  const singleCountry = useMemo(() => {
    if (countryCode && processedData.length > 0) {
      return processedData[0] as unknown as CountryData;
    }
    return null;
  }, [countryCode, processedData]);

  return {
    countries: countryCode ? [] : (processedData as ActiveCountryState[]),
    country: singleCountry,
    year: targetYear,
  };
}
