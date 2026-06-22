/**
 * @file HistoricalEvents.tsx
 * @description Componente de marcação de eventos históricos posicionados de forma proporcional
 * logo acima do slider de linha do tempo. Permite ao usuário visualizar anos chave de transição
 * global e saltar a linha do tempo diretamente para o ano ao clicar sobre a marcação.
 * 
 * Depende de:
 * - Estado Global: {@link useAppStore} para ler e mutar o ano ativo (selectedYear, setSelectedYear).
 * 
 * Dependente de:
 * - Componentes: {@link TimelineSlider} em `components/timeline/TimelineSlider.tsx`
 */

"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useAppStore } from "@/lib/store/useAppStore";

const EVENT_YEARS = [1945, 1953, 1962, 1973, 1989, 1991, 2001, 2008, 2011, 2022];

/**
 * Componente que renderiza os botões dos marcos históricos.
 * 
 * @returns {React.JSX.Element} Elemento React representando a régua de eventos.
 */
export default function HistoricalEvents() {
  const t = useTranslations("timeline.historicalEvents");
  const selectedYear = useAppStore((state) => state.selectedYear);
  const setSelectedYear = useAppStore((state) => state.setSelectedYear);

  /**
   * Calcula a porcentagem de deslocamento horizontal para posicionar o botão do evento
   * exatamente sobre a posição correspondente do ano no trilho do slider (1945 a 2024).
   * 
   * @param {number} year - Ano do evento.
   * @returns {number} Porcentagem horizontal correspondente (0% a 100%).
   */
  const getPercentPosition = (year: number) => {
    const min = 1945;
    const max = 2024;
    return ((year - min) / (max - min)) * 100;
  };

  return (
    <div className="relative w-full h-8 mb-5 select-none hidden md:block">
      {/* Linha guia horizontal fina no fundo */}
      <div className="absolute top-[13px] left-0 right-0 h-[1px] bg-white/5" />

      {EVENT_YEARS.map((year) => {
        // Calcula a posição percentual correspondente ao ano do evento
        const percent = getPercentPosition(year);
        const isActive = selectedYear === year;
        const label = t(`e${year}.label`);

        return (
          <div
            key={year}
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center group"
            style={{ left: `${percent}%` }}
          >
            {/* Ponto indicador (Botão clicável) */}
            <button
              onClick={() => setSelectedYear(year)}
              className={`w-2.5 h-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                isActive 
                  ? "bg-white border-white scale-125 shadow-lg shadow-white/20" 
                  : "bg-[#161616] border-white/20 hover:border-white hover:scale-110"
              }`}
              title={`${year} — ${label}`}
            />

            {/* Ano em exibição */}
            <span
              onClick={() => setSelectedYear(year)}
              className={`text-[8.5px] font-semibold mt-1.5 transition-all duration-200 whitespace-nowrap cursor-pointer px-1 rounded ${
                isActive 
                  ? "text-white bg-white/10" 
                  : "text-muted-foreground group-hover:text-white"
              }`}
            >
              {year}
            </span>

            {/* Tooltip flutuante completo descritivo ao pairar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/10 text-white text-[9.5px] font-medium py-1 px-2.5 rounded shadow-xl pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 whitespace-nowrap z-50">
              <span className="font-bold text-yellow-400">{year}: </span>
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
