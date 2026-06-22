"use client";

import React, { useMemo } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Calendar, User, Users, ShieldAlert, TrendingUp } from "lucide-react";
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
  CartesianGrid 
} from "recharts";

// Tradução e mapeamento de bandeiras
const COUNTRY_INFO: Record<string, { flag: string; nativeName: string }> = {
  US: { flag: "🇺🇸", nativeName: "United States" },
  RU: { flag: "🇷🇺", nativeName: "Rossiya" },
  CN: { flag: "🇨🇳", nativeName: "Zhongguo" },
  BR: { flag: "🇧🇷", nativeName: "Brasil" },
  DE: { flag: "🇩🇪", nativeName: "Deutschland" },
  FR: { flag: "🇫🇷", nativeName: "France" },
  GB: { flag: "🇬🇧", nativeName: "United Kingdom" },
  AR: { flag: "🇦🇷", nativeName: "Argentina" },
  VE: { flag: "🇻🇪", nativeName: "Venezuela" },
  HU: { flag: "🇭🇺", nativeName: "Magyarország" },
  TR: { flag: "🇹🇷", nativeName: "Türkiye" },
  IN: { flag: "🇮🇳", nativeName: "Bharat" },
  IL: { flag: "🇮🇱", nativeName: "Yisra'el" },
  IR: { flag: "🇮🇷", nativeName: "Iran" },
  ZA: { flag: "🇿🇦", nativeName: "South Africa" },
  JP: { flag: "🇯🇵", nativeName: "Nihon" },
  KR: { flag: "🇰🇷", nativeName: "Daehanminguk" },
  IT: { flag: "🇮🇹", nativeName: "Italia" },
  ES: { flag: "🇪🇸", nativeName: "España" },
  SE: { flag: "🇸🇪", nativeName: "Sverige" },
};

const REGIME_BADGES: Record<string, { label: string; style: string }> = {
  democracy: { label: "Democracia", style: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  authoritarian: { label: "Autoritarismo", style: "bg-red-500/20 text-red-400 border-red-500/30" },
  hybrid: { label: "Híbrido", style: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  monarchy: { label: "Monarquia", style: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  transitional: { label: "Transição", style: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30" },
};

export default function CountryDetailPanel() {
  const selectedCountryCode = useAppStore((state) => state.selectedCountryCode);
  const setSelectedCountryCode = useAppStore((state) => state.setSelectedCountryCode);
  const selectedYear = useAppStore((state) => state.selectedYear);
  
  const detail = useCountryDetail(selectedCountryCode);
  const { getColor } = useMapColors();

  // Fecha o painel
  const handleClose = () => {
    setSelectedCountryCode(null);
  };

  const metadata = useMemo(() => {
    if (!selectedCountryCode) return { flag: "🏳️", nativeName: "" };
    return COUNTRY_INFO[selectedCountryCode] || { flag: "🏳️", nativeName: "" };
  }, [selectedCountryCode]);

  if (!detail) return null;

  const { country, activePeriod, periods, trajectory } = detail;

  // Calcula a posição do dot de espectro na barra horizontal (-10 a +10 -> 0% a 100%)
  const activeSpectrum = activePeriod ? activePeriod.spectrum : 0;
  const dotPositionPercent = ((activeSpectrum + 10) / 20) * 100;

  // Custom Tooltip para o Recharts
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const regimeInfo = REGIME_BADGES[data.regimeType] || REGIME_BADGES.transitional;
      return (
        <div className="glass-panel p-3 rounded-lg text-xs shadow-2xl flex flex-col gap-1 border border-white/10 select-none">
          <div className="font-bold text-white mb-1 border-b border-white/5 pb-1 flex justify-between gap-4">
            <span>Ano: {data.year}</span>
            <span 
              className="px-1.5 py-0.5 rounded font-bold text-[10px]" 
              style={{ backgroundColor: getColor(data.spectrum) }}
            >
              {data.spectrum > 0 ? `+${data.spectrum}` : data.spectrum}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Líder:</span>
            <span className="font-medium text-gray-200">{data.leader}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Partido:</span>
            <span className="font-medium text-gray-200">{data.party}</span>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <span className="text-muted-foreground">Regime:</span>
            <span className={`text-[9px] px-1.5 py-0.2 rounded border font-semibold ${regimeInfo.style}`}>
              {regimeInfo.label}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Dialog.Root open={!!selectedCountryCode} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        {/* Fundo Escurecido */}
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300" />
        
        {/* Conteúdo da Gaveta */}
        <Dialog.Content 
          className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#121212] border-l border-white/10 shadow-2xl z-50 flex flex-col focus:outline-none animate-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl">{metadata.flag}</span>
                <Dialog.Title className="text-2xl font-bold tracking-tight font-serif text-white">
                  {country.name}
                </Dialog.Title>
              </div>
              <Dialog.Description className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span>{metadata.nativeName}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>Região: {country.region}</span>
              </Dialog.Description>
            </div>
            
            <Dialog.Close asChild>
              <button 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-muted-foreground hover:text-white flex items-center justify-center smooth-transition hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Painel Interno de Scroll */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 scrollbar-thin">
            
            {/* 1. Líder Ativo no Ano Selecionado */}
            {activePeriod ? (
              <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-full filter blur-[40px] opacity-20 pointer-events-none"
                  style={{ backgroundColor: getColor(activeSpectrum) }}
                />
                
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase mb-1">Estado Político no Ano</span>
                    <span className="text-lg font-bold text-white flex items-center gap-2">
                      <User className="w-4.5 h-4.5 text-muted-foreground" />
                      {activePeriod.leader}
                    </span>
                  </div>
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-bold text-white shadow-md shadow-black/20"
                    style={{ backgroundColor: getColor(activeSpectrum) }}
                  >
                    {activeSpectrum > 0 ? `+${activeSpectrum}` : activeSpectrum}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs border-t border-white/5 pt-3 mt-1">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Partido</span>
                    <span className="font-semibold text-gray-200">{activePeriod.party}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> Regime</span>
                    <span className={`w-fit mt-0.5 text-[9px] px-2 py-0.5 rounded border font-bold ${
                      REGIME_BADGES[activePeriod.regime_type]?.style || REGIME_BADGES.transitional.style
                    }`}>
                      {REGIME_BADGES[activePeriod.regime_type]?.label || "Transição"}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed bg-white/2 p-3 rounded-lg border border-white/5">
                  {activePeriod.description}
                </p>

                {activePeriod.key_events && activePeriod.key_events.length > 0 && (
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold text-muted-foreground tracking-wider uppercase">Eventos do Período</span>
                    <ul className="flex flex-col gap-1 text-[11px] text-gray-400 pl-4 list-disc">
                      {activePeriod.key_events.map((evt, idx) => (
                        <li key={idx}>{evt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass-panel p-5 rounded-2xl text-center italic text-xs text-muted-foreground">
                Sem informações para o ano selecionado.
              </div>
            )}

            {/* 2. Barra de Espectro Político Visual */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Posição no Espectro</span>
              
              <div className="relative w-full h-4 rounded-full border border-white/5 overflow-visible">
                {/* Gradiente */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(to right, #8B0000 0%, #E53935 25%, #F9A825 50%, #1565C0 75%, #0D2B6B 100%)"
                  }}
                />
                
                {/* Marcador animado (Dot) */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5.5 h-5.5 rounded-full bg-white shadow-xl shadow-black/80 border-2 border-black flex items-center justify-center transition-all duration-500 ease-out"
                  style={{ 
                    left: `${dotPositionPercent}%`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
              </div>
              
              <div className="flex justify-between text-[9px] text-muted-foreground px-0.5">
                <span>Esquerda (-10)</span>
                <span>Centro (0)</span>
                <span>Direita (+10)</span>
              </div>
            </div>

            {/* 3. Trajectory Chart */}
            <div className="flex flex-col gap-3 border-t border-white/5 pt-6">
              <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-white" />
                Trajetória Histórica (1945 - 2024)
              </span>
              
              <div className="w-full h-44 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trajectory} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                    <CartesianGrid stroke="#1e1e1e" strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      stroke="#4b5563" 
                      fontSize={9} 
                      tickLine={false} 
                      axisLine={false}
                      ticks={[1945, 1960, 1975, 1990, 2005, 2020]}
                    />
                    <YAxis 
                      domain={[-10, 10]} 
                      stroke="#4b5563" 
                      fontSize={9} 
                      tickLine={false} 
                      axisLine={false}
                      ticks={[-10, -5, 0, 5, 10]}
                    />
                    <ReferenceLine y={0} stroke="#3f3f46" strokeWidth={1} strokeDasharray="3 3" />
                    {activePeriod && (
                      <ReferenceLine x={selectedYear} stroke="#ffffff" strokeWidth={1} />
                    )}
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="spectrum" 
                      stroke="#e5e7eb" 
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: "#ffffff", stroke: "#000000", strokeWidth: 1.5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 4. Linha do tempo de períodos histórica */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-white" />
                Histórico de Períodos
              </span>

              <div className="flex flex-col pl-3 border-l border-white/10 gap-6 mt-1">
                {periods.map((period, idx) => {
                  const isActive = selectedYear >= period.year_start && (period.year_end === null || selectedYear <= period.year_end);
                  
                  return (
                    <div 
                      key={idx} 
                      className={`relative flex flex-col gap-2 rounded-xl p-4 border transition-all duration-200 ${
                        isActive 
                          ? "bg-white/5 border-white/20 shadow-md" 
                          : "bg-white/2 border-white/5 opacity-70 hover:opacity-100"
                      }`}
                    >
                      {/* Marcador na linha vertical */}
                      <div 
                        className={`absolute -left-[17px] top-5 w-2 h-2 rounded-full border transition-all duration-200 ${
                          isActive ? "bg-white border-white scale-125" : "bg-[#121212] border-white/30"
                        }`} 
                      />

                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-white/90">
                          {period.year_start} – {period.year_end || "Presente"}
                        </span>
                        
                        <span 
                          className="px-2 py-0.5 rounded font-bold text-[9px] text-white"
                          style={{ backgroundColor: getColor(period.spectrum) }}
                        >
                          {period.spectrum > 0 ? `+${period.spectrum}` : period.spectrum}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        {period.leader}
                      </div>

                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-muted-foreground">{period.party}</span>
                        <span className={`px-1.5 py-0.2 rounded border font-semibold text-[8px] ${
                          REGIME_BADGES[period.regime_type]?.style || REGIME_BADGES.transitional.style
                        }`}>
                          {REGIME_BADGES[period.regime_type]?.label || "Transição"}
                        </span>
                      </div>

                      <p className="text-[11px] text-gray-400 leading-normal border-t border-white/5 pt-2 mt-0.5">
                        {period.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
