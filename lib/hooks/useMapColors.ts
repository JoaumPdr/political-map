/**
 * @file useMapColors.ts
 * @description Hook customizado para fornecer de forma otimizada as cores e a lógica
 * de interpolação cromática do espectro político.
 * 
 * Depende de:
 * - Utilitários: {@link getPoliticalColor} de `lib/utils/colorInterpolation`
 * 
 * Dependente de:
 * - Componentes: {@link WorldMap}, {@link CountryDetailPanel}, {@link ComparisonDrawer} e legendas.
 */

import { useMemo } from "react";
import { getPoliticalColor } from "../utils/colorInterpolation";

/**
 * Hook para obter cores correspondentes ao espectro político.
 * Memoriza os acessos às funções utilitárias para evitar recriação de escopo.
 */
export function useMapColors() {
  // Memoriza o callback de cores para evitar re-renderização de componentes dependentes
  const getColor = useMemo(() => {
    return (value: number | null | undefined) => getPoliticalColor(value);
  }, []);

  return {
    /** Função utilitária que interpola e retorna o hexadecimal de cor correspondente */
    getColor,
    /** Cor cinza neutro para países sem dados ou desativados por filtros */
    neutralColor: "#2a2a2a",
    /** Vermelho escuro de esquerda radical (-10) */
    farLeftColor: "#8B0000",
    /** Vermelho de esquerda (-5) */
    leftColor: "#E53935",
    /** Amarelo de centro (0) */
    centerColor: "#F9A825",
    /** Azul de direita (+5) */
    rightColor: "#1565C0",
    /** Azul escuro de extrema direita (+10) */
    farRightColor: "#0D2B6B",
  };
}
