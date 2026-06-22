/**
 * @file colorInterpolation.ts
 * @description Implementação matemática da escala de interpolação de cores do espectro político.
 * Utiliza o algoritmo de escala linear da biblioteca d3-scale para realizar a transição
 * suave de cores entre os 5 pontos de ancoragem definidos no guia de calibração.
 * 
 * Depende de:
 * - D3-Scale: `scaleLinear` para interpolação contínua
 * 
 * Dependente de:
 * - Hooks: {@link useMapColors} em `lib/hooks/useMapColors.ts`
 */

import { scaleLinear } from "d3-scale";

/**
 * Escala linear de cores interpoladas baseada nas 5 âncoras exigidas:
 * -10: Vermelho escuro (#8B0000) -> Esquerda Radical
 * -5: Vermelho (#E53935) -> Esquerda
 * 0: Amarelo/Dourado (#F9A825) -> Centro
 * +5: Azul (#1565C0) -> Direita
 * +10: Azul escuro (#0D2B6B) -> Extrema Direita
 * 
 * A propriedade .clamp(true) garante que qualquer valor fora da faixa [-10, 10]
 * (ex: -12 ou 11) seja limitado aos limites das cores extremas, impedindo erros cromáticos.
 */
export const politicalColorScale = scaleLinear<string>()
  .domain([-10, -5, 0, 5, 10])
  .range(["#8B0000", "#E53935", "#F9A825", "#1565C0", "#0D2B6B"])
  .clamp(true);

/**
 * Retorna a cor correspondente a um determinado valor do espectro político.
 * Se o valor for inválido ou nulo, retorna uma cor cinza neutra escura.
 * 
 * @param {number | null | undefined} value - Valor do espectro político (-10 a +10).
 * @returns {string} Hexadecimal de cor correspondente (ex: "#8B0000").
 */
export function getPoliticalColor(value: number | null | undefined): string {
  if (value === null || value === undefined) {
    return "#2a2a2a"; // Cinza escuro neutro para nações sem dados históricos
  }
  return politicalColorScale(value);
}
