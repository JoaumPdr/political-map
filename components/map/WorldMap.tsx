"use client";

import React, { useState, useMemo, useRef } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useAppStore } from "@/lib/store/useAppStore";
import { usePoliticalData } from "@/lib/hooks/usePoliticalData";
import { useMapColors } from "@/lib/hooks/useMapColors";
import { GEOGRAPHY_TO_COUNTRY_CODE, COUNTRY_MAPPING } from "@/lib/data/staticDataset";

const geoUrl = "/geo/world-110m.json";

interface TooltipState {
  x: number;
  y: number;
  visible: boolean;
  countryName: string;
  leader?: string;
  party?: string;
  spectrum?: number;
  noData?: boolean;
}

export default function WorldMap() {
  const { countries } = usePoliticalData();
  const { getColor, neutralColor } = useMapColors();
  
  // Zustand State
  const selectedCountryCode = useAppStore((state) => state.selectedCountryCode);
  const setSelectedCountryCode = useAppStore((state) => state.setSelectedCountryCode);
  const isComparing = useAppStore((state) => state.isComparing);
  const comparisonCountryCodes = useAppStore((state) => state.comparisonCountryCodes);
  const addCountryToComparison = useAppStore((state) => state.addCountryToComparison);
  const removeCountryFromComparison = useAppStore((state) => state.removeCountryFromComparison);

  // Tooltip State
  const [tooltip, setTooltip] = useState<TooltipState>({
    x: 0,
    y: 0,
    visible: false,
    countryName: "",
  });

  // Mapeia os dados dos países por código para busca O(1) na renderização do mapa
  const countriesMap = useMemo(() => {
    const map = new Map<string, typeof countries[0]>();
    countries.forEach((c) => {
      map.set(c.code.toUpperCase(), c);
    });
    return map;
  }, [countries]);

  // Função para lidar com clique no país
  const handleCountryClick = (geo: any) => {
    const id = geo.id || geo.properties?.name;
    const code = GEOGRAPHY_TO_COUNTRY_CODE[id];

    if (!code) return;

    if (isComparing) {
      if (comparisonCountryCodes.includes(code)) {
        removeCountryFromComparison(code);
      } else {
        addCountryToComparison(code);
      }
    } else {
      setSelectedCountryCode(code);
    }
  };

  // Coordenadas do mouse para tooltip
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!tooltip.visible) return;
    
    // Obtém a posição do mouse em relação ao container do mapa
    const bounds = event.currentTarget.getBoundingClientRect();
    setTooltip((prev) => ({
      ...prev,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top - 10, // Deslocamento para cima do cursor
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
          scale: 160
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

                let fillColor = neutralColor;
                let strokeColor = "#1a1a1a";
                let strokeWidth = 0.5;

                if (countryInfo && countryInfo.activePeriod && countryInfo.matchesFilters) {
                  fillColor = getColor(countryInfo.activePeriod.spectrum);
                }

                // Destaca se selecionado ou em comparação
                if (isSelected) {
                  strokeColor = "#ffffff";
                  strokeWidth = 1.8;
                } else if (isCompared) {
                  strokeColor = "#F9A825"; // Dourado/Amarelo para comparação
                  strokeWidth = 1.8;
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo)}
                    onMouseEnter={(event) => {
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

                      const bounds = event.currentTarget.parentElement?.getBoundingClientRect();
                      const parentBounds = event.currentTarget.getBoundingClientRect();

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

      {/* Floating Tooltip */}
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
