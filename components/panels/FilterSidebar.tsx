/**
 * @file FilterSidebar.tsx
 * @description Componente de barra lateral esquerda colapsável contendo os filtros interativos da aplicação.
 * Permite filtrar o mapa e os dados por região, tipo de regime e espectro político (slider duplo).
 * Comunica-se diretamente com a Zustand Store para disparar as atualizações reativas do mapa.
 * 
 * Depende de:
 * - Estado Global: {@link useAppStore} para ler e atualizar filtros ativos.
 * - Radix Slider: `@radix-ui/react-slider` para o controle deslizante de dois cursores.
 * 
 * Dependente de:
 * - Páginas: {@link Home} em `/app/page.tsx`
 */

"use client";

import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { useAppStore } from "@/lib/store/useAppStore";
import { ChevronLeft, ChevronRight, SlidersHorizontal, RotateCcw } from "lucide-react";

// Lista de regiões geográficas suportadas na interface
const REGIONS = ["All", "Americas", "Europe", "Asia", "Africa", "Middle East"];

// Lista de regimes políticos mapeados e suas classes de cores utilitárias correspondentes
const REGIMES = [
  { value: "All", label: "Todos os Regimes" },
  { value: "Democracy", label: "Democracia", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { value: "Authoritarian", label: "Autoritarismo", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { value: "Hybrid", label: "Híbrido", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { value: "Monarchy", label: "Monarquia", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { value: "Transitional", label: "Transição", color: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30" },
];

/**
 * Componente que renderiza a barra lateral colapsável com controle de filtros.
 * 
 * @returns {React.JSX.Element} Elemento React representando a barra de filtros.
 */
export default function FilterSidebar() {
  // Estado local para controle do painel estar aberto (expandido) ou colapsado
  const [isOpen, setIsOpen] = useState(true);

  // Zustand: Filtros ativos e suas respectivas funções de mutação
  const filters = useAppStore((state) => state.filters);
  const setRegionFilter = useAppStore((state) => state.setRegionFilter);
  const setRegimeTypeFilter = useAppStore((state) => state.setRegimeTypeFilter);
  const setSpectrumRangeFilter = useAppStore((state) => state.setSpectrumRangeFilter);
  const resetFilters = useAppStore((state) => state.resetFilters);

  return (
    <div 
      className={`relative h-full flex transition-all duration-300 ease-in-out z-40 ${
        isOpen ? "w-80" : "w-0"
      }`}
    >
      {/* Container Principal do Painel com Glassmorphism */}
      <div 
        className={`w-80 h-full glass-panel border-r border-white/10 flex flex-col transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Cabeçalho do Painel */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-gray-200">
            <SlidersHorizontal className="w-4 h-4 text-white" />
            <span>Filtros do Atlas</span>
          </div>
          <button 
            onClick={resetFilters}
            className="text-xs text-muted-foreground hover:text-white flex items-center gap-1 hover:bg-white/5 px-2.5 py-1.5 rounded-lg smooth-transition border border-transparent hover:border-white/10"
            title="Resetar todos os filtros"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Resetar</span>
          </button>
        </div>

        {/* Listagem de Filtros Disponíveis */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6 scrollbar-thin">
          
          {/* 1. Filtro de Região */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Região Geográfica</label>
            <div className="grid grid-cols-2 gap-1.5">
              {REGIONS.map((region) => {
                const active = filters.region === region;
                return (
                  <button
                    key={region}
                    onClick={() => setRegionFilter(region)}
                    className={`text-xs text-left px-3 py-2 rounded-lg border font-medium smooth-transition ${
                      active 
                        ? "bg-white/15 border-white/30 text-white shadow-md shadow-black/20" 
                        : "bg-white/2 border-white/5 text-muted-foreground hover:text-white hover:bg-white/5 hover:border-white/10"
                    }`}
                  >
                    {region === "All" ? "Todas" : region}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Filtro de Tipo de Regime */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Tipo de Regime</label>
            <div className="flex flex-col gap-1.5">
              {REGIMES.map((regime) => {
                const active = filters.regimeType === regime.value;
                return (
                  <button
                    key={regime.value}
                    onClick={() => setRegimeTypeFilter(regime.value)}
                    className={`text-xs text-left px-3 py-2.5 rounded-lg border font-medium smooth-transition flex justify-between items-center ${
                      active 
                        ? "bg-white/15 border-white/30 text-white shadow-md shadow-black/20" 
                        : "bg-white/2 border-white/5 text-muted-foreground hover:text-white hover:bg-white/5 hover:border-white/10"
                    }`}
                  >
                    <span>{regime.label}</span>
                    {regime.value !== "All" && (
                      <span className={`text-[9px] px-2 py-0.5 rounded-md border font-semibold ${regime.color}`}>
                        {regime.value === "transitional" ? "transição" : regime.value}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Slider de Espectro Político Duplo (Radix Slider) */}
          <div className="flex flex-col gap-3.5 border-t border-white/5 pt-5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Faixa do Espectro</label>
              <span className="text-xs font-semibold text-white px-2 py-0.5 bg-white/5 rounded border border-white/10">
                {filters.spectrumRange[0]} a {filters.spectrumRange[1]}
              </span>
            </div>
            
            {/* Slider de dois cursores do Radix UI */}
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={filters.spectrumRange}
              onValueChange={(val) => setSpectrumRangeFilter(val as [number, number])}
              min={-10}
              max={10}
              step={1}
            >
              <Slider.Track className="bg-white/10 relative grow rounded-full h-1.5">
                <Slider.Range className="absolute bg-white/40 rounded-full h-full" />
              </Slider.Track>
              
              <Slider.Thumb 
                className="block w-4.5 h-4.5 bg-white rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-grab active:cursor-grabbing smooth-transition" 
                aria-label="Min Spectrum"
              />
              <Slider.Thumb 
                className="block w-4.5 h-4.5 bg-white rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-grab active:cursor-grabbing smooth-transition" 
                aria-label="Max Spectrum"
              />
            </Slider.Root>

            <div className="flex justify-between text-[9px] text-muted-foreground font-medium">
              <span>-10 (Esquerda)</span>
              <span>0 (Centro)</span>
              <span>+10 (Direita)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Aba de Controle de Colapso (Aba Flutuante) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 -translate-y-1/2 -right-5 w-5 h-16 bg-[#1a1a1a] border-y border-r border-white/10 hover:border-white/20 rounded-r-lg flex items-center justify-center text-muted-foreground hover:text-white cursor-pointer select-none transition-all shadow-md shadow-black/40 hover:bg-[#222]"
      >
        {isOpen ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
