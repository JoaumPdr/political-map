import { useMemo } from "react";
import { getPoliticalColor } from "../utils/colorInterpolation";

/**
 * Hook para obter cores correspondentes ao espectro político.
 * Memoriza os cálculos para evitar reprocessamento inútil.
 */
export function useMapColors() {
  const getColor = useMemo(() => {
    return (value: number | null | undefined) => getPoliticalColor(value);
  }, []);

  return {
    getColor,
    neutralColor: "#2a2a2a",
    farLeftColor: "#8B0000",
    leftColor: "#E53935",
    centerColor: "#F9A825",
    rightColor: "#1565C0",
    farRightColor: "#0D2B6B",
  };
}
