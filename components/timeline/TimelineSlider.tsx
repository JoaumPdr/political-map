"use client";

import React, { useState, useEffect, useRef } from "react";
import * as Slider from "@radix-ui/react-slider";
import { useAppStore } from "@/lib/store/useAppStore";
import { Play, Pause, FastForward } from "lucide-react";
import HistoricalEvents from "./HistoricalEvents";

export default function TimelineSlider() {
  const selectedYear = useAppStore((state) => state.selectedYear);
  const setSelectedYear = useAppStore((state) => state.setSelectedYear);
  const isPlaying = useAppStore((state) => state.isPlaying);
  const setIsPlaying = useAppStore((state) => state.setIsPlaying);
  const playbackSpeed = useAppStore((state) => state.playbackSpeed);
  const setPlaybackSpeed = useAppStore((state) => state.setPlaybackSpeed);

  // Estado local para debounce de renderização pesada do mapa
  const [localYear, setLocalYear] = useState(selectedYear);

  // Sincroniza localYear quando selectedYear mudar externamente (ex: auto-play ou clique em marco histórico)
  useEffect(() => {
    setLocalYear(selectedYear);
  }, [selectedYear]);

  // Debounce: atualiza a store global após 50ms sem alteração no localYear
  useEffect(() => {
    if (localYear === selectedYear) return;
    
    const handler = setTimeout(() => {
      setSelectedYear(localYear);
    }, 50);

    return () => clearTimeout(handler);
  }, [localYear, selectedYear, setSelectedYear]);

  // Efeito para reprodução automática (Auto-play)
  useEffect(() => {
    if (!isPlaying) return;

    // Calcula o intervalo de avanço baseado na velocidade de reprodução
    // Base 800ms: 0.5x -> 1600ms, 1x -> 800ms, 2x -> 400ms
    const intervalTime = 800 / playbackSpeed;

    const interval = setInterval(() => {
      if (selectedYear >= 2024) {
        setIsPlaying(false);
      } else {
        setSelectedYear(selectedYear + 1);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, selectedYear, playbackSpeed, setIsPlaying, setSelectedYear]);

  // Alterna play/pause
  const togglePlay = () => {
    if (selectedYear >= 2024 && !isPlaying) {
      // Reinicia do ano inicial se já estiver no fim
      setSelectedYear(1945);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full bg-[#121212]/80 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col z-30 select-none">
      {/* 1. Régua de Eventos Históricos */}
      <HistoricalEvents />

      {/* 2. Controles de Reprodução e Slider */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
        {/* Controles de Play/Pause e Velocidade */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`w-11 h-11 rounded-full flex items-center justify-center border cursor-pointer smooth-transition ${
              isPlaying 
                ? "bg-white border-white text-[#0f0f0f] shadow-lg shadow-white/10" 
                : "bg-white/5 border-white/10 hover:border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          {/* Velocidade de reprodução */}
          <div className="flex bg-white/5 border border-white/10 rounded-lg p-0.5">
            {[0.5, 1, 2].map((speed) => {
              const active = playbackSpeed === speed;
              return (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`text-[10px] font-bold px-2.5 py-1.5 rounded-md cursor-pointer smooth-transition ${
                    active 
                      ? "bg-white/10 text-white shadow-sm" 
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {speed}x
                </button>
              );
            })}
          </div>
        </div>

        {/* Trilho de Tempo (Slider) */}
        <div className="flex-1 w-full flex items-center gap-4">
          <span className="text-[10px] font-mono text-muted-foreground">1945</span>
          
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
            value={[localYear]}
            onValueChange={(val) => setLocalYear(val[0])}
            min={1945}
            max={2024}
            step={1}
          >
            <Slider.Track className="bg-white/10 relative grow rounded-full h-1.5">
              <Slider.Range className="absolute bg-white/30 rounded-full h-full" />
            </Slider.Track>
            
            <Slider.Thumb 
              className="block w-5 h-5 bg-white rounded-full shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-grab active:cursor-grabbing smooth-transition border-2 border-black" 
              aria-label="Selecionar Ano"
            />
          </Slider.Root>

          <span className="text-[10px] font-mono text-muted-foreground">2024</span>
        </div>

        {/* Ano Exibido de Forma Destacada */}
        <div className="flex flex-col items-center justify-center min-w-[70px]">
          <span className="text-3xl font-extrabold font-mono tracking-tight text-white leading-none">
            {localYear}
          </span>
          <span className="text-[9px] font-bold text-muted-foreground tracking-wider uppercase mt-1">
            Ano Foco
          </span>
        </div>

      </div>
    </div>
  );
}
