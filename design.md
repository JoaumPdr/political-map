# 🎨 Manual de Identidade Visual e Design - Political Map

Este documento estabelece as diretrizes de design, a filosofia visual e os tokens de estilo do **Political Map**. O sistema foi concebido sob uma abordagem que prioriza a legibilidade cartográfica, estética premium inspirada em jornais de referência (como *The Economist* e *The New York Times*) e uma experiência de usuário imersiva apoiada em transparências e micro-animações.

---

## 👁️ 1. Filosofia Visual

A interface adota a estética de **painéis informativos de alta resolução**, onde a cartografia é a protagonista absoluta da tela. O design segue as seguintes premissas:

* **Dark Mode Absoluto (Fundo Profundo):** Reduz a fadiga visual e maximiza o contraste cromático dos países coloridos no mapa.
* **Glassmorphism Estrutural:** Painéis flutuantes que parecem sobrepostos em uma camada de vidro fosco por cima do mapa, fornecendo uma percepção de profundidade tridimensional.
* **Foco no Rigor Gráfico:** Ausência de ornamentos desnecessários, cantos levemente arredondados, bordas extremamente finas de alta definição e tipografia limpa.

---

## 🎨 2. Paleta de Cores do Tema (Core Tokens)

Os tokens fundamentais de cor estão declarados como variáveis CSS no arquivo [`globals.css`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/app/globals.css) e injetados diretamente na configuração `@theme` do Tailwind CSS v4.

| Token | Variável CSS | Cor Hex/RGBA | Uso Interface |
| :--- | :--- | :--- | :--- |
| **Background** | `--background` | `#0f0f0f` | Fundo principal da aplicação |
| **Foreground** | `--foreground` | `#f3f4f6` | Textos principais e títulos |
| **Card / Panel** | `--card` | `#1a1a1a` | Fundo de painéis flutuantes (base) |
| **Muted Text** | `--muted-foreground` | `#9ca3af` | Subtítulos, rótulos secundários e legendas |
| **Border / Stroke** | `--border` | `#2a2a2a` | Linhas de divisão, bordas de componentes |
| **Neutral No-Data** | `-` | `#2a2a2a` | Preenchimento de países sem dados históricos |

---

## 🗺️ 3. Escala do Espectro Político (Gradiente Ideológico)

A escala cromática do espectro político representa a dimensão ideológica do partido de governo ou regime ativo no país. Ela varia de `-10` (extrema-esquerda) a `+10` (extrema-direita) e é matematicamente interpolada em [`colorInterpolation.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/utils/colorInterpolation.ts) usando d3-scale:

```text
[-10] ------------------- [-5] ------------------ [0] ------------------ [+5] ------------------ [+10]
  |                        |                      |                       |                       |
#8B0000                 #E53935                #F9A825                 #1565C0                 #0D2B6B
Vermelho Escuro         Vermelho               Amarelo Dourado         Azul                    Azul Escuro
(Esquerda Radical)      (Esquerda)             (Centro)                (Direita)               (Extrema Direita)
```

### Especificações das Âncoras Cromáticas:
1. **Esquerda Radical (`-10`):** `#8B0000` (RGB: `139, 0, 0`) — Vermelho profundo associado a regimes de partido único de inspiração socialista revolucionária.
2. **Esquerda (`-5`):** `#E53935` (RGB: `229, 57, 53`) — Vermelho médio associado a partidos social-democratas ou trabalhistas.
3. **Centro (`0`):** `#F9A825` (RGB: `249, 168, 37`) — Dourado/Amarelo quente neutro para posições centristas ou de equilíbrio.
4. **Direita (`+5`):** `#1565C0` (RGB: `21, 101, 192`) — Azul médio associado a partidos liberais ou conservadores moderados.
5. **Extrema Direita (`+10`):** `#0D2B6B` (RGB: `13, 43, 107`) — Azul marinho fechado profundo associado a nacionalistas ou regimes conservadores radicais.

---

## 🏛️ 4. Classificação e Cores de Regimes Políticos

Os regimes são exibidos na interface como pequenos distintivos (*badges*) com cores distintas para rápida identificação visual em [`CountryDetailPanel.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/panels/CountryDetailPanel.tsx):

* 🟩 **Democracia (`democracy`):** Verde
  * *Tailwind:* `bg-emerald-500/20 text-emerald-400 border-emerald-500/30`
  * *Uso:* Eleições multipartidárias abertas e respeito contínuo às garantias constitucionais.
* 🟥 **Autoritarismo (`authoritarian`):** Vermelho
  * *Tailwind:* `bg-red-500/20 text-red-400 border-red-500/30`
  * *Uso:* Ditaduras militares, regimes teocráticos ou estados com partido único de fato.
* 🟧 **Híbrido (`hybrid`):** Laranja
  * *Tailwind:* `bg-orange-500/20 text-orange-400 border-orange-500/30`
  * *Uso:* Regimes onde ocorrem eleições formais, porém sob alto grau de coerção estatal e interferência midiática.
* 🟪 **Monarquia (`monarchy`):** Roxo
  * *Tailwind:* `bg-purple-500/20 text-purple-400 border-purple-500/30`
  * *Uso:* Monarquias tradicionais com chefia de governo concentrada na coroa dinástica.
* ⬜ **Transição (`transitional`):** Cinza Neutro
  * *Tailwind:* `bg-zinc-500/20 text-zinc-400 border-zinc-500/30`
  * *Uso:* Governos provisórios, períodos de ocupação internacional ou guerras civis generalizadas.

---

## ✍️ 5. Tipografia

A tipografia do projeto é focada na máxima precisão de leitura e clareza de dados estatísticos. O layout usa o motor de fontes do Next.js para carregar duas famílias:

1. **Fonte Principal (Interface e Dados):** **Inter**
   * *Fallback:* `ui-sans-serif, system-ui`
   * *Uso:* Rótulos do mapa, estatísticas, barra lateral, botões, gráficos e navegação da timeline.
2. **Fonte Auxiliar (Títulos e Nomes de Líderes):** **Geist**
   * *Fallback:* `ui-sans-serif, sans-serif`
   * *Uso:* Cabeçalhos dos painéis, títulos das seções principais e nomes dos governantes de destaque.

---

## 🔮 6. Efeitos e Texturas (Glassmorphism)

Para obter o visual de vidro transparente, as classes de estilo `.glass-panel` e `.glass-panel-glow` estão declaradas no CSS global e utilizam os seguintes parâmetros:

* **Opacidade de Fundo:** `rgba(26, 26, 26, 0.65)` (65% de opacidade para permitir que a cor de fundo dos países seja vagamente percebida sob o painel).
* **Desfoque de Fundo:** `backdrop-filter: blur(16px)` para desfocar os elementos cartográficos ocultos atrás do painel.
* **Borda Delicada:** `border: 1px solid rgba(255, 255, 255, 0.08)` (borda branca com apenas 8% de opacidade, criando a quina iluminada característica do vidro).
* **Sombra de Profundidade:** `box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6)` (sombra escura dispersa para separar claramente o painel flutuante da malha geográfica do mapa).

---

## 🛡️ 7. Ícones (Lucide React)

O sistema utiliza a biblioteca **Lucide React** para representação gráfica de comandos. A utilização segue regras semânticas estritas:
* ⏸️ / ▶️ `Play` / `Pause` / `VolumeX` — Controle do tempo e automação da linha temporal.
* ⚙️ `Filter` — Controle de filtros e busca.
* 🗺️ `Map` — Botão de reset de zoom e visualização global.
* ❌ `X` / `ChevronRight` / `ChevronLeft` — Controles direcionais e fechamento de painéis retráteis.
* 🔄 `Shuffle` / `Scale` — Controles para comparação entre países e dados de crescimento histórico.

---

## 🏃 8. Transições e Micro-Animações

A fluidez das interações é ditada pela classe `.smooth-transition`:
* **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (suave na aceleração e desaceleração).
* **Duração Padrão:** `300ms` (tempo ideal para dar resposta visual clara sem atrasar a experiência do usuário).
* **Hover de Países:** Os países no mapa alteram sua opacidade de preenchimento (`fill-opacity`) em `150ms` para `0.85` ao passar o ponteiro do mouse, voltando para `1.0` após a saída, fornecendo feedback de clique imediato.

---

## 🌐 9. Internacionalização (i18n) e Suporte Bilíngue

A interface adota suporte completo a multilinguismo (Português do Brasil - **PT-BR** e Inglês - **EN**) com chaveamento reativo instantâneo na camada do cliente sem recarregamento da página (refresh-free).

### Arquitetura de i18n:
* **next-intl no Cliente:** Integração do provedor [`I18nProvider.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/providers/I18nProvider.tsx) que envelopa o layout raiz do Next.js.
* **Sincronização com Zustand e LocalStorage:** O estado ativo do idioma é controlado globalmente pelo hook de estado global [`useAppStore.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/store/useAppStore.ts) e persistido no `localStorage` (chave `political-atlas-locale`), com fallback para as preferências nativas do navegador.
* **Prevenção de Hydration Mismatches:** O `I18nProvider` adota renderização de hidratação segura iniciando estaticamente com o locale padrão do servidor (`pt`) e realizando a hidratação e chaveamento no cliente pós-montagem (`useEffect`).
* **LanguageSwitcher Estético:** O seletor de idiomas [`LanguageSwitcher.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/ui/LanguageSwitcher.tsx) é estilizado como pílula minimalista com glassmorphism translúcido (`bg-white/5` + `backdrop-blur-md`) e micro-animação de escala (`scale-105`) com realce de contraste de texto.
* **Dicionários Localizados:** Todas as chaves do cabeçalho, rodapé, linha do tempo, painel de filtros, gavetas comparativas e detalhadas estão mapeadas e localizadas nos arquivos JSON de tradução em [`/messages/pt.json`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/messages/pt.json) e [`/messages/en.json`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/messages/en.json).
