import { create } from "zustand";
import { RegimeType } from "../data/types";

interface FilterState {
  region: string; // "All" ou regiões específicas
  regimeType: string; // "All" ou RegimeType
  spectrumRange: [number, number]; // [min, max]
}

interface AppState {
  // Ano selecionado
  selectedYear: number;
  setSelectedYear: (year: number) => void;

  // Controle de reprodução automática
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playbackSpeed: number; // 0.5, 1, 2
  setPlaybackSpeed: (speed: number) => void;

  // País selecionado para detalhes (Drawer direito)
  selectedCountryCode: string | null;
  setSelectedCountryCode: (code: string | null) => void;

  // Modo de comparação (Drawer inferior)
  isComparing: boolean;
  setIsComparing: (isComparing: boolean) => void;
  comparisonCountryCodes: string[];
  addCountryToComparison: (code: string) => void;
  removeCountryFromComparison: (code: string) => void;
  clearComparison: () => void;

  // Filtros ativos
  filters: FilterState;
  setRegionFilter: (region: string) => void;
  setRegimeTypeFilter: (regimeType: string) => void;
  setSpectrumRangeFilter: (range: [number, number]) => void;
  resetFilters: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Estado inicial
  selectedYear: 1945,
  isPlaying: false,
  playbackSpeed: 1,
  selectedCountryCode: null,
  isComparing: false,
  comparisonCountryCodes: [],
  filters: {
    region: "All",
    regimeType: "All",
    spectrumRange: [-10, 10],
  },

  // Modificadores de ano
  setSelectedYear: (year) =>
    set((state) => {
      // Clampa o ano entre 1945 e 2024
      const clampedYear = Math.max(1945, Math.min(2024, year));
      return { selectedYear: clampedYear };
    }),

  // Modificadores de reprodução
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setPlaybackSpeed: (playbackSpeed) => set({ playbackSpeed }),

  // Modificadores de país selecionado
  setSelectedCountryCode: (code) =>
    set({
      selectedCountryCode: code ? code.toUpperCase() : null,
    }),

  // Modificadores de comparação
  setIsComparing: (isComparing) =>
    set((state) => {
      // Se desativar o modo de comparação, limpa a lista
      if (!isComparing) {
        return { isComparing, comparisonCountryCodes: [] };
      }
      return { isComparing };
    }),
  addCountryToComparison: (code) =>
    set((state) => {
      const formattedCode = code.toUpperCase();
      // Não permite adicionar o mesmo país e clampa no máximo 3 países
      if (
        state.comparisonCountryCodes.includes(formattedCode) ||
        state.comparisonCountryCodes.length >= 3
      ) {
        return {};
      }
      return {
        comparisonCountryCodes: [...state.comparisonCountryCodes, formattedCode],
      };
    }),
  removeCountryFromComparison: (code) =>
    set((state) => {
      const formattedCode = code.toUpperCase();
      return {
        comparisonCountryCodes: state.comparisonCountryCodes.filter(
          (c) => c !== formattedCode
        ),
      };
    }),
  clearComparison: () => set({ comparisonCountryCodes: [] }),

  // Modificadores de filtros
  setRegionFilter: (region) =>
    set((state) => ({
      filters: { ...state.filters, region },
    })),
  setRegimeTypeFilter: (regimeType) =>
    set((state) => ({
      filters: { ...state.filters, regimeType },
    })),
  setSpectrumRangeFilter: (spectrumRange) =>
    set((state) => ({
      filters: { ...state.filters, spectrumRange },
    })),
  resetFilters: () =>
    set({
      filters: {
        region: "All",
        regimeType: "All",
        spectrumRange: [-10, 10],
      },
    }),
}));
