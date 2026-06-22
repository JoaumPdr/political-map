/**
 * @file useAppStore.ts
 * @description Centralização e gerenciamento de estado global reativo utilizando Zustand.
 * Controla estados da linha do tempo, reprodução de autoplay, painéis ativos e filtros de busca.
 * A escolha do Zustand evita o overhead de re-renderizações indesejadas causadas pelo React Context
 * e dispensa a complexidade estrutural de ações/reducers do Redux tradicional.
 * 
 * Dependente de:
 * - Praticamente todos os componentes interativos do projeto: {@link WorldMap}, {@link TimelineSlider},
 *   {@link FilterSidebar}, {@link CountryDetailPanel}, {@link ComparisonDrawer} e a página principal.
 */

import { create } from "zustand";

/**
 * Interface representando o conjunto de filtros ativos no mapa.
 */
interface FilterState {
  /** Região filtrada ("All" ou continente específico, ex: "Europe") */
  region: string;
  /** Tipo de regime ativo ("All" ou valores correspondentes a RegimeType) */
  regimeType: string;
  /** Intervalo numérico do espectro político de -10 a +10, ex: [-5, 5] */
  spectrumRange: [number, number];
}

/**
 * Interface completa de estados e ações da Zustand Store global do Atlas.
 */
interface AppState {
  // === ESTADO DA LINHA DO TEMPO ===
  /** Ano atual sob foco no mapa e nos painéis (1945 a 2024) */
  selectedYear: number;
  /** Função de mutação para atualizar o ano ativo */
  setSelectedYear: (year: number) => void;

  // === ESTADO DE AUTOPLAY ===
  /** Define se o avanço automático de ano está ativo */
  isPlaying: boolean;
  /** Modifica o estado do autoplay */
  setIsPlaying: (isPlaying: boolean) => void;
  /** Fator multiplicador de velocidade de reprodução (0.5, 1, 2) */
  playbackSpeed: number;
  /** Altera a velocidade de reprodução */
  setPlaybackSpeed: (speed: number) => void;

  // === ESTADO DO PAINEL DE DETALHES (GAVETA DIREITA) ===
  /** Código ISO de duas letras do país atualmente sob visualização de detalhes (null se fechado) */
  selectedCountryCode: string | null;
  /** Abre ou fecha o painel de detalhes do país */
  setSelectedCountryCode: (code: string | null) => void;

  // === ESTADO DO MODO COMPARAÇÃO (GAVETA INFERIOR) ===
  /** Indica se o painel comparativo de países está ativo */
  isComparing: boolean;
  /** Ativa ou desativa o modo de comparação na interface */
  setIsComparing: (isComparing: boolean) => void;
  /** Lista de até 3 códigos de países em processo de comparação simultânea */
  comparisonCountryCodes: string[];
  /** Adiciona um país na listagem de comparação (limite de 3) */
  addCountryToComparison: (code: string) => void;
  /** Remove um país da lista de comparação */
  removeCountryFromComparison: (code: string) => void;
  /** Limpa todos os países da comparação */
  clearComparison: () => void;

  // === ESTADO DE FILTRAGEM ===
  /** Estrutura interna que agrupa os filtros reativos */
  filters: FilterState;
  /** Filtra o mapa por região geográfica */
  setRegionFilter: (region: string) => void;
  /** Filtra o mapa pelo tipo de regime político ativo */
  setRegimeTypeFilter: (regimeType: string) => void;
  /** Filtra o mapa pela faixa do espectro político */
  setSpectrumRangeFilter: (range: [number, number]) => void;
  /** Reseta todos os filtros para as configurações padrão */
  resetFilters: () => void;

  // === ESTADO DE IDIOMA ===
  /** Idioma ativo na aplicação ('en' | 'pt') */
  locale: "en" | "pt";
  /** Altera o idioma ativo e persiste no localStorage */
  setLocale: (locale: "en" | "pt") => void;
}

export const useAppStore = create<AppState>((set) => ({
  // === ESTADO INICIAL ===
  locale: "pt",
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

  // === AÇÕES ===

  setSelectedYear: (year) =>
    set((state) => {
      // Clampa as bordas do ano entre 1945 e 2024 para evitar extrapolação
      const clampedYear = Math.max(1945, Math.min(2024, year));
      return { selectedYear: clampedYear };
    }),

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  
  setPlaybackSpeed: (playbackSpeed) => set({ playbackSpeed }),

  setSelectedCountryCode: (code) =>
    set({
      selectedCountryCode: code ? code.toUpperCase() : null,
    }),

  setIsComparing: (isComparing) =>
    set((state) => {
      // Se desativar o modo de comparação, limpa os países selecionados
      // para evitar estados residuais na reabertura.
      if (!isComparing) {
        return { isComparing, comparisonCountryCodes: [] };
      }
      return { isComparing };
    }),

  addCountryToComparison: (code) =>
    set((state) => {
      const formattedCode = code.toUpperCase();
      // Impede duplicações ou ultrapassar o limite de 3 países na grade de comparação
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

  setLocale: (locale) =>
    set((state) => {
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("political-atlas-locale", locale);
        } catch (e) {
          console.warn("Falha ao salvar locale no localStorage:", e);
        }
      }
      return { locale };
    }),
}));
