/**
 * @file usePoliticalData.ts
 * @description Hook customizado para consulta e filtragem reativa dos dados de países.
 * Este hook atua como a única interface de consumo dos dados de países do mapa central,
 * garantindo o encapsulamento e isolamento do dataset estático. A filtragem é executada
 * dinamicamente em memória a cada mudança de ano ou filtros.
 * 
 * Depende de:
 * - Dataset: {@link staticCountriesData} de `lib/data/staticDataset`
 * - Estado Global: {@link useAppStore} de `lib/store/useAppStore`
 * 
 * Dependente de:
 * - Componentes: {@link WorldMap} em `components/map/WorldMap.tsx`
 */

import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import { staticCountriesData } from "../data/staticDataset";
import { CountryData, PoliticalPeriod } from "../data/types";

/**
 * Interface que representa o estado computado de um país para um determinado ano.
 */
export interface ActiveCountryState {
  /** Código ISO-2 do país */
  code: string;
  /** Nome amigável do país em PT-BR */
  name: string;
  /** Região continental do país */
  region: string;
  /** Período político ativo no ano consultado (null se inexistente) */
  activePeriod: PoliticalPeriod | null;
  /** Flag booleano indicando se o país atende a todos os filtros da Zustand Store */
  matchesFilters: boolean;
}

/**
 * Hook customizado para obter os dados políticos do Atlas.
 * 
 * @param {string} [countryCode] - Se fornecido, retorna dados apenas para o país informado.
 * @param {number} [year] - Se fornecido, avalia o estado dos países no ano informado em vez de usar o ano global da store.
 * @returns {{ countries: ActiveCountryState[], country: CountryData | null, year: number }} Estado de dados processados.
 */
export function usePoliticalData(countryCode?: string, year?: number) {
  // Lê o ano selecionado e os filtros diretamente do estado global do Zustand
  const globalYear = useAppStore((state) => state.selectedYear);
  const filters = useAppStore((state) => state.filters);

  // O ano alvo da pesquisa será o ano passado por parâmetro ou o ano global ativo na linha do tempo
  const targetYear = year !== undefined ? year : globalYear;

  /**
   * Processamento e filtragem de dados históricos em memória.
   * O uso de useMemo garante que os filtros e a busca de períodos de todos os países
   * sejam recalculados apenas se houver mudanças no ano alvo, nos filtros de região,
   * regime político ou espectro político selecionados, evitando processamentos inúteis
   * a cada re-renderização menor de componentes.
   */
  const processedData = useMemo(() => {
    const countries = staticCountriesData;

    // Se a intenção for obter dados de um único país com histórico completo (ex: para painel)
    if (countryCode) {
      const single = countries.find(
        (c) => c.code.toUpperCase() === countryCode.toUpperCase()
      );
      return single ? [single] : [];
    }

    // Processa a lista inteira computando o período ativo de cada nação
    return countries.map((country): ActiveCountryState => {
      // Localiza o período cujo intervalo de anos cobre o targetYear
      const activePeriod =
        country.periods.find(
          (p) =>
            targetYear >= p.year_start &&
            (p.year_end === null || targetYear <= p.year_end)
        ) || null;

      let matchesFilters = true;

      // === FILTRAGEM DINÂMICA ===
      
      // 1. Filtro por Região Geográfica
      if (filters.region !== "All" && country.region !== filters.region) {
        matchesFilters = false;
      }

      // Se o país não tem período ativo no ano, ele automaticamente cai fora dos filtros
      if (!activePeriod) {
        matchesFilters = false;
      } else {
        // 2. Filtro por Tipo de Regime Político
        if (
          filters.regimeType !== "All" &&
          activePeriod.regime_type !== filters.regimeType.toLowerCase()
        ) {
          matchesFilters = false;
        }

        // 3. Filtro por Faixa do Espectro Político
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

  // Memoriza o objeto de país único se requisitado por código
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
