/**
 * @file ComparisonDrawer.tsx
 * @description Componente de painel inferior (gaveta) para comparação simultânea de trajetórias políticas.
 * Renderiza de 2 a 3 gráficos de linha contendo o histórico do espectro político de países
 * selecionados no mapa. Os gráficos utilizam a sincronização nativa do Recharts (syncId) para que
 * o hover sobre o ano de um gráfico ative a exibição da régua temporal em todos os outros em tempo real.
 * 
 * Depende de:
 * - Hooks: {@link useCountryDetail}, {@link useMapColors}
 * - Estado Global: {@link useAppStore} para ler e mutar isComparing, comparisonCountryCodes e clearComparison.
 * - Recharts: para renderização dos múltiplos LineCharts sincronizados.
 * 
 * Dependente de:
 * - Páginas: {@link Home} em `/app/page.tsx`
 */

"use client";

import React, { useMemo } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, GitCompare, Info } from "lucide-react";
import { useAppStore } from "@/lib/store/useAppStore";
import { useCountryDetail } from "@/lib/hooks/useCountryDetail";
import { useMapColors } from "@/lib/hooks/useMapColors";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
} from "recharts";

// Bandeiras para identificação rápida dos países na gaveta comparativa
const COUNTRY_FLAGS: Record<string, string> = {
  US: "🇺🇸", RU: "🇷🇺", CN: "🇨🇳", BR: "🇧🇷", DE: "🇩🇪",
  FR: "🇫🇷", GB: "🇬🇧", AR: "🇦🇷", VE: "🇻🇪", HU: "🇭🇺",
  TR: "🇹🇷", IN: "🇮🇳", IL: "🇮🇱", IR: "🇮🇷", ZA: "🇿🇦",
  JP: "🇯🇵", KR: "🇰🇷", IT: "🇮🇹", ES: "🇪🇸", SE: "🇸🇪",
  MX: "🇲🇽", CL: "🇨🇱", CU: "🇨🇺", CO: "🇨🇴", PE: "🇵🇪",
  UY: "🇺🇾", CA: "🇨🇦", PT: "🇵🇹", NO: "🇳🇴", PL: "🇵🇱",
  CZ: "🇨🇿", GR: "🇬🇷", NL: "🇳🇱", BE: "🇧🇪", UA: "🇺🇦",
  KP: "🇰🇵", PK: "🇵🇰", ID: "🇮🇩", VN: "🇻🇳", EG: "🇪🇬",
  NG: "🇳🇬", ET: "🇪🇹", AU: "🇦🇺", NZ: "🇳🇿",
};

// Cores fixas da paleta para diferenciar as linhas de cada país na comparação
const COMPARISON_COLORS = ["#3b82f6", "#ef4444", "#eab308"];

interface CountryChartProps {
  /** Código ISO-2 do país a ser desenhado */
  code: string;
  /** Cor hexadecimal reservada para a linha daquele país */
  color: string;
  /** Método de mapeamento do espectro de cores do Atlas */
  getColor: (val: number) => string;
}

/**
 * Componente interno do gráfico comparativo individual do país.
 * 
 * @param {CountryChartProps} props - Propriedades do gráfico.
 * @returns {React.JSX.Element | null} Elemento React representando o gráfico individual.
 */
function CountryComparisonChart({ code, color, getColor }: CountryChartProps) {
  const detail = useCountryDetail(code);

  /**
   * Componente interno de Tooltip reduzido para a comparação.
   * Exibe informações concisas de governante no ano correspondente do hover.
   */
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass-panel p-2 rounded text-[10px] shadow-lg border border-white/5 flex flex-col gap-0.5 select-none pointer-events-none">
          <div className="font-bold text-white border-b border-white/5 pb-0.5 flex justify-between gap-3">
            <span>{data.year}</span>
            <span 
              className="px-1 rounded font-bold" 
              style={{ backgroundColor: getColor(data.spectrum) }}
            >
              {data.spectrum > 0 ? `+${data.spectrum}` : data.spectrum}
            </span>
          </div>
          <div>Líder: <span className="font-semibold text-gray-200">{data.leader}</span></div>
          <div>Partido: <span className="font-semibold text-gray-200">{data.party}</span></div>
        </div>
      );
    }
    return null;
  };

  if (!detail) return null;

  return (
    <div className="flex-1 min-w-0 glass-panel p-4 rounded-xl flex flex-col h-[230px] border border-white/5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{COUNTRY_FLAGS[code] || "🏳️"}</span>
        <span className="font-bold text-xs text-white truncate">{detail.country.name}</span>
      </div>
      
      <div className="w-full h-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          {/* O uso do syncId="politicalTrajectory" unifica a timeline de cursor de todos os LineCharts na tela */}
          <LineChart data={detail.trajectory} syncId="politicalTrajectory" margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
            <CartesianGrid stroke="#1e1e1e" strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="year" 
              stroke="#4b5563" 
              fontSize={8} 
              tickLine={false} 
              axisLine={false}
              ticks={[1945, 1965, 1985, 2005, 2024]}
            />
            <YAxis 
              domain={[-10, 10]} 
              stroke="#4b5563" 
              fontSize={8} 
              tickLine={false} 
              axisLine={false}
              ticks={[-10, -5, 0, 5, 10]}
            />
            <ReferenceLine y={0} stroke="#3f3f46" strokeWidth={1} strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="spectrum" 
              stroke={color} 
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 3.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/**
 * Componente que renderiza a gaveta de comparação inferior utilizando Radix Dialog.
 * 
 * @returns {React.JSX.Element} Elemento React representando a gaveta de comparação.
 */
export default function ComparisonDrawer() {
  // Zustand: Estado da gaveta, lista de países em comparação e limpeza de lista
  const isComparing = useAppStore((state) => state.isComparing);
  const setIsComparing = useAppStore((state) => state.setIsComparing);
  const comparisonCountryCodes = useAppStore((state) => state.comparisonCountryCodes);
  const clearComparison = useAppStore((state) => state.clearComparison);
  // Hook utilitário de mapeamento de cores do espectro
  const { getColor } = useMapColors();

  // Fecha o painel de comparação inferior limpando a lista de países
  const handleClose = () => {
    setIsComparing(false);
    clearComparison();
  };

  return (
    <Dialog.Root open={isComparing} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        {/*
          Nota de design: Não renderizamos overlay escuro para esta gaveta inferior,
          permitindo que o usuário clique e selecione/deselecione países no mapa
          enquanto visualiza os gráficos mudarem no rodapé!
        */}
        
        {/* Painel inferior de comparação */}
        <Dialog.Content 
          className="fixed bottom-0 left-0 w-full h-[360px] bg-[#121212]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl z-40 flex flex-col focus:outline-none animate-in slide-in-from-bottom duration-300"
        >
          {/* Cabeçalho */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <GitCompare className="w-4.5 h-4.5 text-yellow-400" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-bold text-white uppercase tracking-wider">
                  Comparação de Trajetórias Políticas
                </Dialog.Title>
                <Dialog.Description className="text-xs text-muted-foreground">
                  Selecione até 3 países no mapa para alinhar seus históricos de 1945 a 2024.
                </Dialog.Description>
              </div>
            </div>

            <button 
              onClick={handleClose}
              className="text-xs text-muted-foreground hover:text-white flex items-center gap-1.5 hover:bg-white/5 px-3 py-1.5 rounded-lg smooth-transition border border-transparent hover:border-white/10"
            >
              <X className="w-4 h-4" />
              <span>Fechar</span>
            </button>
          </div>

          {/* Área de Exibição dos Gráficos Sincronizados ou Estado Vazio */}
          <div className="flex-1 flex p-6 gap-6 justify-center items-center overflow-x-auto">
            {comparisonCountryCodes.length < 2 ? (
              <div className="flex flex-col items-center text-center gap-3 select-none">
                <div className="p-3 bg-white/5 rounded-full border border-white/5 animate-pulse">
                  <Info className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-sm font-semibold text-white mb-1">Aguardando Seleção</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Clique em <strong className="text-gray-300">2 ou 3 países</strong> no mapa para renderizar e sincronizar suas trajetórias políticas lado a lado.
                  </p>
                </div>
                {comparisonCountryCodes.length === 1 && (
                  <div className="text-xs font-semibold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full mt-2">
                    Selecionado: {COUNTRY_FLAGS[comparisonCountryCodes[0]]} {comparisonCountryCodes[0]} (Selecione mais um)
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-5">
                {comparisonCountryCodes.map((code, idx) => (
                  <CountryComparisonChart
                    key={code}
                    code={code}
                    color={COMPARISON_COLORS[idx] || "#ffffff"}
                    getColor={getColor}
                  />
                ))}
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
