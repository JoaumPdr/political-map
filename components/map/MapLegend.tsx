import React from "react";

export function MapLegend() {
  return (
    <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 w-64 text-xs select-none">
      <div className="flex items-center justify-between font-medium text-muted-foreground mb-1">
        <span>Espectro Político</span>
        <span>-10 a +10</span>
      </div>
      
      {/* Barra de Gradiente */}
      <div 
        className="h-3 rounded-full w-full"
        style={{
          background: "linear-gradient(to right, #8B0000 0%, #E53935 25%, #F9A825 50%, #1565C0 75%, #0D2B6B 100%)"
        }}
      />
      
      {/* Marcadores de Rótulo */}
      <div className="flex justify-between text-[10px] text-muted-foreground px-0.5 mt-0.5">
        <span className="font-semibold text-red-500">-10 (Esquerda)</span>
        <span className="font-semibold text-yellow-500">0 (Centro)</span>
        <span className="font-semibold text-blue-400">+10 (Direita)</span>
      </div>

      <div className="flex flex-col gap-1 mt-2 border-t border-white/5 pt-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#2a2a2a] border border-white/10" />
          <span>Fora dos filtros ou sem dados históricos</span>
        </div>
      </div>
    </div>
  );
}
