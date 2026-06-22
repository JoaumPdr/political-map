import { scaleLinear } from "d3-scale";

// Escala linear de cores interpoladas do espectro político:
// -10: Vermelho escuro (far-left)
// -5: Vermelho (left)
// 0: Amarelo/Dourado (center)
// 5: Azul (right)
// 10: Azul escuro (far-right)
export const politicalColorScale = scaleLinear<string>()
  .domain([-10, -5, 0, 5, 10])
  .range(["#8B0000", "#E53935", "#F9A825", "#1565C0", "#0D2B6B"])
  .clamp(true);

/**
 * Retorna a cor correspondente a um determinado valor do espectro político.
 */
export function getPoliticalColor(value: number | null | undefined): string {
  if (value === null || value === undefined) {
    return "#2a2a2a"; // Cinza escuro neutro para países sem dados ou filtrados
  }
  return politicalColorScale(value);
}
