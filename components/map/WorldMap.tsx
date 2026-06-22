/**
 * @file WorldMap.tsx
 * @description Componente de visualização central do mapa-múndi interativo. Utiliza a biblioteca
 * react-simple-maps para renderizar fronteiras com base em dados TopoJSON. Implementa zoom, pan
 * livre, tooltips flutuantes reativos e lógica de coloração/seleção.
 * 
 * Depende de:
 * - Hooks: {@link usePoliticalData}, {@link useMapColors}
 * - Estado Global: {@link useAppStore} para gerenciar o país selecionado e lista de comparação.
 * 
 * Dependente de:
 * - Páginas: {@link Home} em `/app/page.tsx`
 */

"use client";

import React, { useState, useMemo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useAppStore } from "@/lib/store/useAppStore";
import { usePoliticalData } from "@/lib/hooks/usePoliticalData";
import { useMapColors } from "@/lib/hooks/useMapColors";
import { GEOGRAPHY_TO_COUNTRY_CODE } from "@/lib/data/staticDataset";

// Caminho do arquivo de mapa local TopoJSON (110m de resolução para rapidez no carregamento)
const geoUrl = "/geo/world-110m.json";

/**
 * Interface representando as variáveis do estado interno do Tooltip dinâmico.
 */
interface TooltipState {
  /** Posição horizontal absoluta em pixels em relação ao container do mapa */
  x: number;
  /** Posição vertical absoluta em pixels */
  y: number;
  /** Define se o tooltip flutuante deve ser exibido */
  visible: boolean;
  /** Nome amigável do país focalizado */
  countryName: string;
  /** Nome do líder ativo no ano selecionado (opcional) */
  leader?: string;
  /** Sigla do partido político governante (opcional) */
  party?: string;
  /** Valor do espectro político no ano selecionado (opcional) */
  spectrum?: number;
  /** Define se o país não possui registros históricos na base (opcional) */
  noData?: boolean;
}

/**
 * Componente funcional que renderiza o mapa de projeção geoNaturalEarth1 e gerencia
 * as interações de mouse de clique e pairar (hover).
 * 
 * @returns {React.JSX.Element} Elemento React representando o mapa interativo.
 */
export default function WorldMap() {
  // Hook customizado central de dados políticos reativos aos filtros e ano foco
  const { countries } = usePoliticalData();
  // Hook de mapeamento de cores do espectro
  const { getColor, neutralColor } = useMapColors();
  
  // Zustand Global State
  const selectedCountryCode = useAppStore((state) => state.selectedCountryCode);
  const setSelectedCountryCode = useAppStore((state) => state.setSelectedCountryCode);
  const isComparing = useAppStore((state) => state.isComparing);
  const comparisonCountryCodes = useAppStore((state) => state.comparisonCountryCodes);
  const addCountryToComparison = useAppStore((state) => state.addCountryToComparison);
  const removeCountryFromComparison = useAppStore((state) => state.removeCountryFromComparison);

  // Estado local para coordenar o Tooltip flutuante personalizado
  const [tooltip, setTooltip] = useState<TooltipState>({
    x: 0,
    y: 0,
    visible: false,
    countryName: "",
  });

  /**
   * Mapeia os dados processados dos países por código ISO-2 em formato Map.
   * A busca na renderização passa a ser O(1), prevenindo lentidões ao iterar
   * centenas de polígonos no SVG.
   */
  const countriesMap = useMemo(() => {
    const map = new Map<string, typeof countries[0]>();
    countries.forEach((c) => {
      map.set(c.code.toUpperCase(), c);
    });
    return map;
  }, [countries]);

  /**
   * Gerencia a ação de clique nas fronteiras do país.
   * Se o modo comparação estiver ativo, adiciona ou remove da lista de comparação.
   * Se desativado, abre a gaveta de detalhes na direita do país clicado.
   * 
   * @param {any} geo - Propriedade geográfica do elemento clicado.
   */
  const handleCountryClick = (geo: any) => {
    const id = geo.id || geo.properties?.name;
    const code = GEOGRAPHY_TO_COUNTRY_CODE[id];

    if (!code) return;

    if (isComparing) {
      // Modo de Comparação ativo (gaveta inferior aberta)
      if (comparisonCountryCodes.includes(code)) {
        removeCountryFromComparison(code);
      } else {
        addCountryToComparison(code);
      }
    } else {
      // Modo normal (abre painel de detalhes na direita)
      setSelectedCountryCode(code);
    }
  };

  /**
   * Atualiza a posição do Tooltip flutuante de acordo com o movimento físico do cursor.
   * 
   * @param {React.MouseEvent} event - Evento nativo de mouse.
   */
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!tooltip.visible) return;
    
    // Calcula a posição do cursor relativa às bordas do mapa
    const bounds = event.currentTarget.getBoundingClientRect();
    setTooltip((prev) => ({
      ...prev,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top - 10, // Deslocamento de 10px para cima do ponteiro
    }));
  };

  return (
    <div 
      className="relative w-full h-full bg-[#0a0a0a] overflow-hidden select-none flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <ComposableMap 
        projection="geoNaturalEarth1"
        className="w-full h-full max-h-[85vh]"
        projectionConfig={{
          scale: 160 // Escala padrão calibrada para o mapa cobrir o centro da tela
        }}
      >
        <ZoomableGroup 
          translateExtent={[
            [0, -100],
            [800, 600]
          ]}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = geo.id || geo.properties?.name;
                const code = GEOGRAPHY_TO_COUNTRY_CODE[id];
                const countryInfo = code ? countriesMap.get(code) : null;
                const isSelected = selectedCountryCode === code;
                const isCompared = code ? comparisonCountryCodes.includes(code) : false;

                // Define as cores padrões
                let fillColor = neutralColor;
                let strokeColor = "#1a1a1a";
                let strokeWidth = 0.5;

                // Colore com o espectro político caso o país atenda aos filtros e possua dados ativos no ano
                if (countryInfo && countryInfo.activePeriod && countryInfo.matchesFilters) {
                  fillColor = getColor(countryInfo.activePeriod.spectrum);
                }

                // Destaca as fronteiras se selecionado ou incluído em comparação
                if (isSelected) {
                  strokeColor = "#ffffff";
                  strokeWidth = 1.8;
                } else if (isCompared) {
                  strokeColor = "#F9A825"; // Borda dourada marcante para comparação
                  strokeWidth = 1.8;
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo)}
                    onMouseEnter={(event) => {
                      // Se não estiver mapeado em nosso dataset
                      if (!code) {
                        setTooltip({
                          x: 0,
                          y: 0,
                          visible: true,
                          countryName: geo.properties?.name || "Sem Nome",
                          noData: true,
                        });
                        return;
                      }

                      setTooltip({
                        x: 0,
                        y: 0,
                        visible: true,
                        countryName: countryInfo ? countryInfo.name : geo.properties?.name,
                        leader: countryInfo?.activePeriod?.leader,
                        party: countryInfo?.activePeriod?.party,
                        spectrum: countryInfo?.activePeriod?.spectrum,
                        noData: !countryInfo || !countryInfo.activePeriod,
                      });
                    }}
                    onMouseLeave={() => {
                      setTooltip((prev) => ({ ...prev, visible: false }));
                    }}
                    style={{
                      default: {
                        fill: fillColor,
                        stroke: strokeColor,
                        strokeWidth: strokeWidth,
                        outline: "none",
                        transition: "fill 300ms ease, stroke 200ms ease, stroke-width 200ms ease",
                      },
                      hover: {
                        fill: fillColor === neutralColor ? "#3f3f46" : fillColor,
                        stroke: isSelected || isCompared ? strokeColor : "#ffffff",
                        strokeWidth: isSelected || isCompared ? strokeWidth : 1.2,
                        outline: "none",
                        cursor: code ? "pointer" : "default",
                      },
                      pressed: {
                        fill: fillColor,
                        stroke: strokeColor,
                        strokeWidth: strokeWidth,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Floating Tooltip customizado com Glassmorphism e fade-in suave */}
      {tooltip.visible && (
        <div
          className="absolute z-50 glass-panel p-3 rounded-lg shadow-2xl pointer-events-none flex flex-col gap-1 text-[11px] min-w-[180px] animate-fade-in transition-all duration-75"
          style={{
            left: `${tooltip.x + 15}px`,
            top: `${tooltip.y - 70}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="font-bold text-sm border-b border-white/10 pb-1 flex justify-between items-center">
            <span>{tooltip.countryName}</span>
            {tooltip.spectrum !== undefined && (
              <span 
                className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white shadow-sm"
                style={{ backgroundColor: getColor(tooltip.spectrum) }}
              >
                {tooltip.spectrum > 0 ? `+${tooltip.spectrum}` : tooltip.spectrum}
              </span>
            )}
          </div>
          
          {tooltip.noData ? (
            <span className="text-muted-foreground italic mt-1">Sem dados históricos ativos</span>
          ) : (
            <div className="flex flex-col gap-0.5 mt-1">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Líder:</span>
                <span className="font-medium text-right text-gray-200">{tooltip.leader}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Partido:</span>
                <span className="font-medium text-right text-gray-200">{tooltip.party}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
