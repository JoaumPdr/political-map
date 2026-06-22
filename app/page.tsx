/**
 * @file page.tsx
 * @description Ponto de entrada principal da interface do Atlas Político (página de rotas da pasta app).
 * Organiza a barra de navegação superior, painel de filtros lateral, área central do mapa vetorial
 * e a linha do tempo no rodapé. Implementa lazy loading nos painéis pesados de detalhe do país
 * e gaveta comparativa para maximizar o desempenho e velocidade de inicialização inicial.
 * 
 * Depende de:
 * - Componentes Síncronos: {@link FilterSidebar}, {@link WorldMap}, {@link MapLegend}, {@link TimelineSlider}
 * - Componentes Lazy-Loaded: {@link CountryDetailPanel}, {@link ComparisonDrawer}
 * - Estado Global: {@link useAppStore} para gerenciar o modo de comparação, ano ativo e limpar seleções.
 */

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useAppStore } from "@/lib/store/useAppStore";
import FilterSidebar from "@/components/panels/FilterSidebar";
import WorldMap from "@/components/map/WorldMap";
import { MapLegend } from "@/components/map/MapLegend";
import TimelineSlider from "@/components/timeline/TimelineSlider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { GitCompare, Map as MapIcon, Calendar } from "lucide-react";

/**
 * Lazy loading dos componentes pesados (Gaveta de detalhes e Gaveta de comparação).
 * ssr: false impede que estes componentes (que usam hooks do cliente como Recharts ou Radix dialog)
 * tentem ser renderizados do lado do servidor (SSR), o que causaria quebras de hidratação (hydration mismatches).
 */
const CountryDetailPanel = dynamic(
  () => import("@/components/panels/CountryDetailPanel"),
  { ssr: false }
);

const ComparisonDrawer = dynamic(
  () => import("@/components/panels/ComparisonDrawer"),
  { ssr: false }
);

/**
 * Componente principal da página de visualização do Atlas Político.
 * 
 * @returns {React.JSX.Element} Elemento React representando a página inteira.
 */
export default function Home() {
  const t = useTranslations("nav");
  // Zustand: Modo de comparação ativo, mutação do modo, ano atual e seleção de país ativo
  const isComparing = useAppStore((state) => state.isComparing);
  const setIsComparing = useAppStore((state) => state.setIsComparing);
  const selectedYear = useAppStore((state) => state.selectedYear);
  const setSelectedCountryCode = useAppStore((state) => state.setSelectedCountryCode);

  /**
   * Alterna a exibição do modo de comparação de países.
   * Se for ativado, limpa qualquer país ativo que esteja aberto no painel de detalhes na direita
   * para evitar sobreposição confusa de painéis na interface.
   */
  const handleToggleComparison = () => {
    if (!isComparing) {
      setSelectedCountryCode(null);
    }
    setIsComparing(!isComparing);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-gray-200 overflow-hidden font-sans">
      
      {/* 1. Barra de Navegação Superior (Header) */}
      <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-[#121212]/80 backdrop-blur-md z-30 select-none">
        
        {/* Lado Esquerdo: Identidade do Produto */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg border border-white/5 shadow-inner">
            <MapIcon className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black tracking-wider text-white uppercase leading-none">
              {t("title")}
            </h1>
            <span className="text-[10px] font-bold text-muted-foreground tracking-wide mt-1 uppercase">
              {t("subtitle")}
            </span>
          </div>
        </div>

        {/* Lado Direito: Ações Globais */}
        <div className="flex items-center gap-4">
          
          {/* Alternador do Modo de Comparação */}
          <button
            onClick={handleToggleComparison}
            className={`text-xs font-semibold px-4 py-2 rounded-lg border flex items-center gap-2 smooth-transition cursor-pointer ${
              isComparing
                ? "bg-yellow-500 border-yellow-600 text-black shadow-lg shadow-yellow-500/25"
                : "bg-white/5 border-white/10 hover:border-white/20 text-white hover:bg-white/10"
            }`}
          >
            <GitCompare className="w-4 h-4" />
            <span>{isComparing ? t("compareActive") : t("compare")}</span>
          </button>

          {/* Rótulo Sutil de Ano Atual */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold text-white">
            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
            <span>{t("year")}: {selectedYear}</span>
          </div>

          {/* Seletor de Idioma */}
          <LanguageSwitcher />

        </div>

      </header>

      {/* 2. Área de Trabalho Principal */}
      <div className="flex-1 flex relative overflow-hidden">
        
        {/* Filtros reativos (Lado Esquerdo) */}
        <FilterSidebar />

        {/* Visualizador Cartográfico Vetorial (Centro/Direito) */}
        <main className="flex-1 relative h-full">
          <WorldMap />

          {/* Legenda flutuante (Bottom-Left) */}
          <div className="absolute bottom-5 left-5 z-20 pointer-events-auto">
            <MapLegend />
          </div>
        </main>

      </div>

      {/* 3. Controle e Slider da Linha do Tempo (Rodapé Fixo) */}
      <TimelineSlider />

      {/* 4. Componentes Lazy-Loaded Carregados sob demanda baseados no Estado da Store */}
      <CountryDetailPanel />
      <ComparisonDrawer />

    </div>
  );
}
