"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useAppStore } from "@/lib/store/useAppStore";
import FilterSidebar from "@/components/panels/FilterSidebar";
import WorldMap from "@/components/map/WorldMap";
import { MapLegend } from "@/components/map/MapLegend";
import TimelineSlider from "@/components/timeline/TimelineSlider";
import { GitCompare, Map as MapIcon, Calendar } from "lucide-react";

// Lazy loading dos painéis mais pesados (detalhes e comparação)
const CountryDetailPanel = dynamic(
  () => import("@/components/panels/CountryDetailPanel"),
  { ssr: false }
);

const ComparisonDrawer = dynamic(
  () => import("@/components/panels/ComparisonDrawer"),
  { ssr: false }
);

export default function Home() {
  const isComparing = useAppStore((state) => state.isComparing);
  const setIsComparing = useAppStore((state) => state.setIsComparing);
  const selectedYear = useAppStore((state) => state.selectedYear);
  const setSelectedCountryCode = useAppStore((state) => state.setSelectedCountryCode);

  const handleToggleComparison = () => {
    // Ao ativar comparação, fecha o painel de detalhes aberto
    if (!isComparing) {
      setSelectedCountryCode(null);
    }
    setIsComparing(!isComparing);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-gray-200 overflow-hidden font-sans">
      
      {/* 1. Barra de Navegação Superior (Header) */}
      <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-[#121212]/80 backdrop-blur-md z-30 select-none">
        
        {/* Lado Esquerdo: Título da App */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg border border-white/5 shadow-inner">
            <MapIcon className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black tracking-wider text-white uppercase leading-none">
              Political Atlas
            </h1>
            <span className="text-[10px] font-bold text-muted-foreground tracking-wide mt-1 uppercase">
              Visualizador Histórico de Regimes
            </span>
          </div>
        </div>

        {/* Lado Direito: Controles Globais e Indicador de Ano */}
        <div className="flex items-center gap-4">
          
          {/* Botão de Comparar */}
          <button
            onClick={handleToggleComparison}
            className={`text-xs font-semibold px-4 py-2 rounded-lg border flex items-center gap-2 smooth-transition cursor-pointer ${
              isComparing
                ? "bg-yellow-500 border-yellow-600 text-black shadow-lg shadow-yellow-500/25"
                : "bg-white/5 border-white/10 hover:border-white/20 text-white hover:bg-white/10"
            }`}
          >
            <GitCompare className="w-4 h-4" />
            <span>{isComparing ? "Modo Comparação Ativo" : "Comparar Países"}</span>
          </button>

          {/* Indicador de Ano Sutil */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold text-white">
            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Ano: {selectedYear}</span>
          </div>

        </div>

      </header>

      {/* 2. Conteúdo Central: Filtros Esquerda + Mapa Centro/Direita */}
      <div className="flex-1 flex relative overflow-hidden">
        
        {/* Painel de Filtros (Esquerda) */}
        <FilterSidebar />

        {/* Área do Mapa (Centro/Direita) */}
        <main className="flex-1 relative h-full">
          <WorldMap />

          {/* Legenda do Espectro flutuante (Bottom-Left) */}
          <div className="absolute bottom-5 left-5 z-20 pointer-events-auto">
            <MapLegend />
          </div>
        </main>

      </div>

      {/* 3. Barra Inferior de Linha do Tempo (Footer) */}
      <TimelineSlider />

      {/* 4. Componentes Lazy-Loaded (Sheet de Detalhes e Gaveta de Comparação) */}
      <CountryDetailPanel />
      <ComparisonDrawer />

    </div>
  );
}
