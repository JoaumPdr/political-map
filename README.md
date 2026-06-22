# 🗺️ Political Map - Visualizador Interativo do Espectro Político Global (1945–2024)

```text
       _..._
     .-'     '-.      POLITICAL MAP
    /     _     \     Plataforma analítica e histórica do espectro político global
   |    _( )_    |    Mapeamento de regimes, líderes e ideologias de 1945 a 2024
   |   (_/ \_)   |    
    \     "     /     Inspirado em publicações como The Economist e New York Times
     '-._____.-'
```

Uma aplicação web interativa e de alta performance construída em **Next.js 15 (App Router)**, **TypeScript** e **Tailwind CSS v4**, projetada para rastrear, analisar e comparar a evolução ideológica e de regimes políticos de todos os países do mundo desde o fim da Segunda Guerra Mundial até os dias atuais.

---

## 🎯 Propósito do Projeto

Este projeto foi desenvolvido com foco em excelência visual e rigor histórico, permitindo que acadêmicos, estudantes e entusiastas de geopolítica explorem as transições ideológicas globais. O sistema mapeia o espectro político em um eixo contínuo de `-10` (Esquerda Radical) a `+10` (Extrema Direita) e classifica os regimes sob 5 tipologias clássicas de ciência política. A aplicação trata dados complexos como a fusão e fragmentação de estados históricos (como a URSS, a Alemanha dividida e a Tchecoslováquia) diretamente a nível de dados, mantendo a compatibilidade com projeções cartográficas modernas.

---

## 🚀 Configuração e Execução Local

### Pré-requisitos
* Node.js v20.x ou superior
* npm v10.x ou superior

### Passos para Instalação

1. **Clone o repositório ou navegue até a pasta do projeto:**
   ```bash
   cd "c:/Users/joaop/antigravity web projects/politcmap"
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o aplicativo em execução.

4. **Gere a build de produção:**
   ```bash
   npm run build
   ```

5. **Inicie o servidor em modo de produção:**
   ```bash
   npm run start
   ```

---

## 📁 Estrutura de Arquivos e Componentes

Abaixo está o mapeamento detalhado da árvore de diretórios do projeto, contendo links diretos para cada arquivo chave:

* 📂 **`app/`** — Roteamento do Next.js (App Router) e layout global do sistema
  * 📄 [`layout.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/app/layout.tsx) — Provedor de fontes e estrutura principal da página.
  * 📄 [`page.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/app/page.tsx) — Página inicial do dashboard, integrando todos os componentes com carregamento dinâmico.
  * 📄 [`globals.css`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/app/globals.css) — Estilos globais e tokens customizados do Tailwind CSS v4.
  * 📂 **`api/political-data/`**
    * 📄 [`route.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/app/api/political-data/route.ts) — Ponto de entrada da API que expõe os dados políticos estáticos e serve como base para futuras integrações de banco de dados.

* 📂 **`components/`** — Componentes de UI modulares e focados
  * 📂 **`map/`** — Componentes relacionados à cartografia interativa
    * 📄 [`WorldMap.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/map/WorldMap.tsx) — Mapa interativo com projeção Natural Earth, pan & zoom, hover interativo e seleção de países.
    * 📄 [`MapLegend.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/map/MapLegend.tsx) — Legenda explicativa de cores baseada na escala do espectro político.
  * 📂 **`panels/`** — Painéis flutuantes e gavetas de controle analítico
    * 📄 [`FilterSidebar.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/panels/FilterSidebar.tsx) — Barra lateral retrátil para filtragem por região, tipo de regime e pontuação ideológica.
    * 📄 [`CountryDetailPanel.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/panels/CountryDetailPanel.tsx) — Painel lateral detalhado (Sheet) com linha do tempo de líderes, evolução do regime e gráficos Recharts.
    * 📄 [`ComparisonDrawer.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/panels/ComparisonDrawer.tsx) — Gaveta inferior que possibilita a comparação síncrona de gráficos históricos de dois países em paralelo.
  * 📂 **`timeline/`** — Sistema de navegação temporal e eventos históricos
    * 📄 [`TimelineSlider.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/timeline/TimelineSlider.tsx) — Controle deslizante de anos com autoplay, velocidade variável e debounce de renderização.
    * 📄 [`HistoricalEvents.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/timeline/HistoricalEvents.tsx) — Indicador e marcador visual de grandes marcos da geopolítica mundial sobrepostos na timeline.

* 📂 **`lib/`** — Arquitetura de dados, Hooks personalizados e utilitários
  * 📂 **`data/`** — Camada de dados centralizada do sistema
    * 📄 [`types.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/data/types.ts) — Definições de tipos TypeScript rigorosos e documentação JSDoc para a aplicação.
    * 📄 [`staticDataset.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/data/staticDataset.ts) — Dataset de fatos históricos expandido cobrindo países das Américas, Europa, Ásia, África e Oceania de 1945 a 2024.
    * 📄 [`politicalData.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/data/politicalData.ts) — Camada de abstração que encapsula as requisições aos dados brutos.
  * 📂 **`hooks/`** — Lógica de componentes e controle de estado desacoplados
    * 📄 [`usePoliticalData.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/hooks/usePoliticalData.ts) — Hook para busca filtrada de dados agregados por país e por ano.
    * 📄 [`useCountryDetail.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/hooks/useCountryDetail.ts) — Hook para construção de trajetórias temporais detalhadas de cada nação para os gráficos Recharts.
    * 📄 [`useMapColors.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/hooks/useMapColors.ts) — Hook otimizado (`useMemo`) para computação e interpolação de cores do mapa com base no ano ativo.
  * 📂 **`store/`** — Gerenciamento de estado global com Zustand
    * 📄 [`useAppStore.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/store/useAppStore.ts) — Zustand store contendo o ano selecionado, estados de reprodução automática, países em comparação e filtros aplicados.
  * 📂 **`utils/`** — Funções matemáticas e lógicas auxiliares
    * 📄 [`colorInterpolation.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/utils/colorInterpolation.ts) — Utilitário de mapeamento linear e geração de gradientes contínuos usando a escala d3-scale.

---

## 🗺️ Mapa de Documentação Adicional

Para uma imersão profunda nas escolhas de arquitetura e design do projeto, consulte a documentação detalhada listada na tabela abaixo:

| Documento | Caminho | Descrição do Conteúdo |
| :--- | :--- | :--- |
| **Relatório Técnico** | 📄 [`RELATORIO.md`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/RELATORIO.md) | Explicação aprofundada da arquitetura React/Next.js, fluxo de dados detalhado em ASCII, modelagem e tratamento de países históricos (divisões temporais) e um guia passo a passo para migrar o backend de arquivos JSON estáticos para uma API REST dinâmica conectada à base do V-Dem. |
| **Manual de Design** | 📄 [`design.md`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/design.md) | Detalhamento do sistema visual premium (Dark Mode absoluto), tokens de cores hexadecimais de todo o espectro político, diretrizes de glassmorphism, tipografia baseada na família Geist, micro-interações de UI e tokens de animação. |

---

## 🛠️ Stack Tecnológica

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) — Renderização otimizada de páginas no cliente e no servidor.
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) — Tipagem estática rígida em toda a camada de dados e UI.
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) — Novo motor CSS-only de alto desempenho com tokens definidos em `@theme` inline no arquivo CSS.
* **Gerenciamento de Estado:** [Zustand v5](https://zustand-demo.pmnd.rs/) — Armazenamento global e subscrição reativa para alta performance.
* **Mapas:** [React Simple Maps v3](https://www.react-simple-maps.io/) — Renderização declarativa SVG de mapas mundiais usando dados TopoJSON locais.
* **Visualização de Dados:** [Recharts v3](https://recharts.org/) — Gráficos vetoriais responsivos e interativos para timelines históricas.

## 📊 Integração Científica com V-Dem e Suporte Bilíngue

A plataforma foi atualizada e integrada com o banco de dados oficial do **V-Dem (Varieties of Democracy) v16** cobrindo séries históricas completas (1945–2024), além de incorporar suporte de internacionalização bilíngue nativo de alto desempenho.

### 1. Ingestão de Dados do V-Dem
Desenvolvemos um pipeline automatizado na pasta [`scripts/`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/scripts):
* 📄 [`convert-vdem.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/scripts/convert-vdem.ts) — Script executável via Node.js que realiza o download automático do dataset ZIP do V-Dem v16, extrai o CSV, faz o mapeamento de códigos de países históricos (como a URSS e Tchecoslováquia), calibra o índice do espectro político de `-10` a `+10` cruzando as variáveis `v2x_polyarchy` e `v2x_libdem`, determina o regime a partir de `v2x_regime`, traduz todas as descrições/marcos via Google Translate API de forma concorrente em lotes e gera a base final [`staticDataset.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/data/staticDataset.ts).
* 📄 [`validate-dataset.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/scripts/validate-dataset.ts) — Validador estático que analisa o dataset gerado certificando que não haja sobreposições ou lacunas temporais nos períodos e que todos os dados sejam compatíveis com os contratos do TypeScript.

Para rodar os scripts de ingestão e validação:
```bash
# Executar a ingestão e tradução
npx tsx scripts/convert-vdem.ts

# Validar integridade dos dados gerados
npx tsx scripts/validate-dataset.ts
```

### 2. Suporte Bilíngue (PT-BR | EN)
* **next-intl Cliente:** Integração sem recarregamento da página (refresh-free) utilizando o componente [`I18nProvider.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/providers/I18nProvider.tsx).
* **Seletor de Idiomas:** O componente [`LanguageSwitcher.tsx`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/components/ui/LanguageSwitcher.tsx) implementado no cabeçalho superior permite chavear instantaneamente todas as legendas, botões, gráficos e descrições históricas entre Português e Inglês.
* **Persistência local:** O idioma selecionado é gravado na Zustand Store e mantido de forma persistente no `localStorage` do navegador.

---

## 🤝 Guia de Contribuição Técnica Rápido

1. **Desenvolvimento de Novas Funcionalidades:**
   * Certifique-se de que novos estados de tela sejam gerenciados centralizadamente via Zustand em [`useAppStore.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/store/useAppStore.ts) para manter a integridade cromática e temporal sincronizada.
2. **Regras de Estilização:**
   * O Tailwind CSS v4 não utiliza `tailwind.config.js`. Qualquer nova cor, variável de espaçamento ou efeito deve ser declarado sob a diretiva `@theme` dentro de [`globals.css`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/app/globals.css).
3. **Consistência de Tipagem:**
   * Novos indicadores devem ser incluídos em [`types.ts`](file:///c:/Users/joaop/antigravity%20web%20projects/politcmap/lib/data/types.ts) e devidamente documentados com JSDoc estruturado antes da implementação.
