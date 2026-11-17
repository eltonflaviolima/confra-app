# 🎨 Design System & Frontend Guidelines — Confra App (Mobile PWA)

> **Versão:** 1.0.0  
> **Arquitetura:** Mobile-First Progressive Web App (PWA)  
> **Direção Visual:** *Tactile Neo-Pop Editorial / Humanist Health-Tech*  
> **Referências Principais:** [Pomegranate Health](https://pomegranate.health), pasta local `references/` (`design_reference.png`, `elements_01..03.png`)  
> **Cores Base Mandatórias:** `#FFF9EE` (Warm Biscuit Cream) e `#3A001D` (Deep Pomegranate Wine)  
> **Repositório Oficial de Ícones SVG:** [https://mcp.svgrepo.com](https://mcp.svgrepo.com)

---

## 1. 🛡️ O Manifesto Anti-"AI Slop"

Muitos modelos de IA geram interfaces idênticas e sem alma: fundos cinza-escuro com gradientes roxos neon, cards com cantos genéricos de 8px, sombras difusas flutuantes sem peso físico, fontes padrão *Inter* sem ritmo e falta de ergonomia tátil para mobile.

Para garantir que o **Confra App** tenha identidade de produto premiado (no nível Wondermake / Awwwards / Pomegranate):

```
                                🚫 O QUE É "AI SLOP"                              ✨ O PADRÃO CONFRA APP
┌────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────┐
│ Gradientes roxos/índigo genéricos em cards escuros      │ Paleta orgânica, quente e editorial (#FFF9EE + #3A001D)│
│ Bordas cinzas finas e invisíveis (border-gray-200)      │ Linhas sólidas, nítidas e deliberadas de 1.5px a 2px    │
│ Sombras flutuantes sem peso (box-shadow gigante e fofo) │ Elevação tátil neo-brutalista (offset físico + bevel)  │
│ Tipografia monótona (Inter em todo lugar sem escala)    │ Display com personalidade + Sans geométrica tabular    │
│ Telas frias e hospitalares                             │ Tons pastéis quentes, orgânicos e convidativos         │
│ Botões que não dão vontade de apertar                  │ Botões táteis com física de clique (translate-y ativo) │
│ Layout estático de desktop comprimido para celular      │ Ergonomia pura mobile de polegar (Thumb Zone + Safe-Area)│
└────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────┘
```

### Princípios de Design
1. **Físico & Tátil (Neo-Skeuomorphic Pop):** Os componentes parecem objetos de brinquedo de alta precisão ou papéis nobres recortados. Os botões têm borda escura, corpo contrastante e uma sombra de projeção sólida que afunda quando você toca.
2. **Quente, Humano e Acolhedor:** O fundo nunca é branco puro (`#FFFFFF`) nem preto frio (`#000000`). O tom creme `#FFF9EE` fornece calor visual e reduz a fadiga ocular.
3. **Clareza de Dados Lúdica (Data Playfulness):** Gráficos não usam barras cinzas corporativas; utilizam arcos de arco-íris, medidores circulares com marcadores de bolinhas, badges arredondadas e micro-ilustrações expressivas.
4. **Respeito à Plataforma PWA Mobile:** Cada área de toque respeita no mínimo 44x44px, sem delay de 300ms, sem destaque azul nativo do WebKit e adaptado ao entalhe (notch) do iPhone e Android.

---

## 2. 🎨 Paleta de Cores & Tokens

### 2.1 Cores Nucleares (Core Tokens)

| Token CSS | Hex | Nome Comercial | Uso Principal |
| :--- | :--- | :--- | :--- |
| `--color-bg-base` | `#FFF9EE` | **Warm Biscuit Cream** | Fundo de tela do app, páginas e canvas principal |
| `--color-ink-primary`| `#3A001D` | **Deep Pomegranate Wine**| Tipografia principal, bordas de 2px, ícones e sombras táteis |
| `--color-surface-card`| `#FFFFFF` | **Pure White** | Fundo dos cards bento em destaque |
| `--color-surface-tint`| `#FFF5E4` | **Warm Butter Cream** | Cards secundários, áreas de filtro, cabeçalhos de tabela |
| `--color-surface-muted`| `#F3EBDB` | **Sand Neutral** | Segmented controls, divisores de seção e tracks de progresso |

### 2.2 Acentos de Personalidade (Accent & Mood Palette)
Extraídos diretamente da identidade do Pomegranate Health e das telas de referência:

| Token | Hex | Nome | Aplicação |
| :--- | :--- | :--- | :--- |
| `--color-accent-coral` | `#FF6F89` | **Pomegranate Berry** | Botões primários alternativos, status ativo, métricas vitais |
| `--color-accent-yellow`| `#FECB66` | **Sun Honey** | Botão primário oficial Pomegranate, badges de conquista, estrelas |
| `--color-accent-mint`  | `#79D3A8` | **Fresh Sage** | Indicadores de status positivo ("Balanced", "Completed"), arcos |
| `--color-accent-sky`   | `#8EC5FC` | **Periwinkle Air** | Tags de categorias, métricas de sono/tempo, badges frias |
| `--color-accent-lilac` | `#D8B4E2` | **Soft Orchid** | Tags de perfil ("Fitness Enthusiast"), anéis de avatar |
| `--color-accent-apricot`|`#FFB694` | **Muted Peach** | Alertas amenos, zonas de frequência, tags de atenção |

### 2.3 Relação de Contraste e Acessibilidade (WCAG)
- **Texto `#3A001D` sobre Fundo `#FFF9EE`:** Taxa de contraste de **11.4:1** (Supera amplamente o padrão **WCAG AAA** de 7:1).
- **Texto `#3A001D` sobre `#FECB66`:** Taxa de contraste de **8.2:1** (Aprovado em **WCAG AAA**).
- **Linhas e Bordas:** Todas as divisórias e contornos com `border: 2px solid #3A001D` garantem leitura perfeita até sob luz solar direta em smartphones.

---

## 3. ✍️ Tipografia & Hierarquia Editorial

A tipografia do Confra App combina o charme editorial e retrô dos anos 70/modernista com a clareza analítica das healthtechs de vanguarda.

### 3.1 Famílias Tipográficas
1. **Display & Headings (Identidade e Títulos):**
   - *Famílias sugeridas:* **Fraunces** (Google Fonts / Variable), **Recoleta**, **GT Ultra** ou **Plus Jakarta Sans / Outfit (com peso 800)**.
   - *Características:* Curvas cheias, calor orgânico, terminais macios e grande presença.
2. **Interface, Body & Dados (UI & Leitura):**
   - *Famílias recomendadas:* **Noto Sans** (utilizada pelo Pomegranate) ou **Plus Jakarta Sans / Inter Tight**.
   - *Obrigatório para números:* `font-variant-numeric: tabular-nums` para evitar que cronômetros, batimentos e números fiquem oscilando a largura do layout.
3. **Micro-Labels (Metadados Técnicos):**
   - Uppercase, peso bold (`font-weight: 700`), `letter-spacing: 0.08em` (tracking amplo), corpo pequeno (10px a 12px). Ex: `ACTIVITY SCORE`, `RESTING HEART RATE`.

### 3.2 Escala Tipográfica (Mobile Scale)

| Nível | Tamanho | Entrelinha | Peso | Tracking | Uso |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `32px (2rem)` | `1.15` | Bold (800) | `-0.03em` | Título de boas-vindas e tela inicial |
| **Heading 1** | `24px (1.5rem)`| `1.2` | Bold (700) | `-0.02em` | Títulos de tela e cards principais |
| **Heading 2** | `20px (1.25rem)`| `1.3` | Bold (700) | `-0.01em` | Título de seções internas dos cards |
| **Stat Large** | `36px - 44px` | `1.0` | ExtraBold (800) | `-0.02em` | Destaque numérico central (`2,820`, `98%`) |
| **Body Large** | `16px (1rem)` | `1.45` | Regular/Medium | `0` | Parágrafos explicativos |
| **Body Small** | `14px (0.875rem)`| `1.4` | Regular (400) | `0` | Textos secundários de apoio |
| **Badge / Caption** | `11px - 12px` | `1.2` | Bold (700) | `+0.08em` | Tags em caixa alta e badges de status |

---

## 4. 📐 Geometria, Bordas e Elevação Tátil

### 4.1 Regras de Contorno (O Traço Característico)
- **Espessura Padrão:** `2px solid var(--color-ink-primary)` (ou `1.5px` para chips pequenos).
- **Sem cantos vivos pontiagudos:** A interface é suave e amigável:
  - Cards Bento: `border-radius: 24px` a `28px` (`rounded-3xl`).
  - Botões, Badges e Chips: `border-radius: 9999px` (`rounded-full`).
  - Inputs e Modais: `border-radius: 20px` a `24px`.

### 4.2 Física dos Botões (Efeito "Tactile 3D Bevel")
Inspirado na engenharia de botões do Pomegranate Health (`.ui-button`), evitamos sombras difusas usando uma **base de clique real**:

```css
/* Exemplo de Botão Tátil Confra */
.btn-tactile {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}

/* Base de profundidade física (o fundo do botão) */
.btn-tactile::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #3A001D;
  border-radius: 9999px;
  transform: translateY(3px); /* Altura da base */
  transition: transform 0.15s ease;
}

/* Superfície visível do botão */
.btn-tactile-content {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #FECB66; /* Ou #FFFFFF */
  border: 2px solid #3A001D;
  border-radius: 9999px;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #3A001D;
  transform: translateY(0);
  transition: transform 0.15s cubic-bezier(0.19, 1, 0.22, 1);
  user-select: none;
  -webkit-user-select: none;
}

/* Quando o usuário pressiona na tela do celular */
.btn-tactile:active .btn-tactile-content {
  transform: translateY(3px); /* O botão afunda fisicamente até a base */
}
```

---

## 5. 🎯 Biblioteca de Componentes Core (PWA Mobile)

### 5.1 Cartões "Bento Box" (Bento Data Cards)
A disposição visual do Pomegranate organiza informações em blocos modulares bem delimitados:

1. **Card com Cabeçalho Colorido (Header Pill):**
   - Fundo do card em `#FFFFFF`.
   - Borda `2px solid #3A001D`.
   - Área de título com fundo colorido (ex: `#FECB66` ou `#FF6F89`) separada por linha horizontal de `2px solid #3A001D`.
2. **Indicadores em Arco (Rainbow Progress Arches):**
   - Arcos concêntricos em tons pastéis (`#FF6F89`, `#FECB66`, `#79D3A8`, `#8EC5FC`).
   - Traço de contorno escuro (`#3A001D`).
   - Ponto terminal com círculo e checkmark ou ícone de destaque.
3. **Indicador de Status (Status Chip):**
   - Mini círculo de cor (ex: `#79D3A8`) com borda de `1.5px solid #3A001D`.
   - Texto em bold: `Balanced`, `Attention`, `Optimal`.

### 5.2 Segmented Control (Tabs Deslizantes em Pílula)
- Container com fundo `#FFF5E4` ou `#FFF9EE` e borda `2px solid #3A001D`.
- Borda totalmente arredondada (`rounded-full`).
- Aba ativa: Fundo `#FFFFFF`, borda `2px solid #3A001D`, sombra sutil ou texto bold em `#3A001D`.
- Abas inativas: Sem borda, cor `#3A001D` com opacidade reduzida (`opacity: 0.7`).

### 5.3 Badges & Tags Táteis
- Pílulas arredondadas com borda de `1.5px solid #3A001D`.
- Fundo pastel de acordo com a categoria (Lilás, Menta, Pêssego).
- Tipografia: 12px, peso 600, centralizado.

### 5.4 Bottom Navigation Bar para PWA
- Fixa na parte inferior com respeito à Safe Area: `padding-bottom: max(16px, env(safe-area-inset-bottom))`.
- Ilha flutuante centralizada ou barra integrada com borda superior `2px solid #3A001D`.
- Fundo em `#FFFFFF` ou `#FFF9EE` com leve blur ou opacidade sólida.
- Ícones de ação com estado ativo indicado por badge circular de fundo colorido (`#FECB66`).

---

## 6. 🌐 Diretrizes de Ícones & SVGs (MCP SVG Repo)

O repositório padrão oficial de ícones para o projeto é:  
👉 **[https://mcp.svgrepo.com](https://mcp.svgrepo.com)** (e a biblioteca de vetores abertos do SVGREPO).

### 6.1 Regras de Estilo de Ícones
Para manter consistência visual estrita e repelir ícones descombinados:
1. **Estilo de Traço Único (Line Monoline):**
   - Use preferencialmente ícones do tipo **Line / Outline** ou **Monoline**.
   - Espessura do traço (`stroke-width`): **1.75px a 2px**, combinando exatamente com as bordas do sistema.
   - Terminações de linha: `stroke-linecap="round"` e `stroke-linejoin="round"`.
2. **Cor do Traço:**
   - Sempre dinâmico via `stroke="currentColor"` herdando `--color-ink-primary` (`#3A001D`).
3. **Badges Circulares para Ícones:**
   - Sempre que um ícone for representativo (como categorias de saúde, esportes, confra), envolva-o em um contêiner circular:
     - Diâmetro: 40px ou 48px.
     - Borda: `2px solid #3A001D`.
     - Fundo: Uma cor de destaque da paleta (pêssego, menta, céu, lilás ou amarelo mel).

### 6.2 Como pesquisar e importar pelo MCP SVG Repo
Ao solicitar ou buscar ícones para o projeto:
- Preferir categorias: *Health, Fitness, Food, Social, Minimalistic Interface, Arrows, User Actions*.
- Consultar via SVGREPO mantendo a consistência de cantos arredondados (`round joins`).

---

## 7. 📱 Engenharia PWA Mobile & Prevenção de Falhas Nativas

A experiência móvel PWA precisa se comportar como um app nativo iOS/Android sem travamentos web típicos:

### 7.1 Safe Areas & Viewport
Configuração indispensável no `<head>` do HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no">
<meta name="theme-color" content="#FFF9EE">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
```

No CSS global:
```css
/* Adaptação aos entalhes (notch) e barra de navegação gestual */
:root {
  --sat: env(safe-area-inset-top, 0px);
  --sar: env(safe-area-inset-right, 0px);
  --sab: env(safe-area-inset-bottom, 0px);
  --sal: env(safe-area-inset-left, 0px);
}

body {
  background-color: #FFF9EE;
  color: #3A001D;
  padding-top: var(--sat);
  padding-bottom: var(--sab);
  overscroll-behavior-y: contain; /* Impede pull-to-refresh acidental */
  -webkit-font-smoothing: antialiased;
}
```

### 7.2 Interatividade e Toque Tátil
- **Desativar o Highlight Azul Padrão:**
  ```css
  * {
    -webkit-tap-highlight-color: transparent;
  }
  ```
- **Evitar atraso de clique (300ms touch delay):**
  ```css
  button, a, input, select {
    touch-action: manipulation;
  }
  ```
- **Zona de Polegar (Thumb-Zone Ergonomics):**
  - Ações primárias ("Salvar", "Confirmar", "Próximo") devem ser posicionadas na metade inferior da tela.
  - A altura mínima de qualquer elemento clicável é **48px** (com margem de toque de pelo menos 8px entre eles).

---

## 8. 💻 Implementação Prática (Tokens Tailwind / CSS)

### 8.1 Variáveis CSS Globais (`tokens.css`)

```css
:root {
  /* Cores Base */
  --color-bg-base: #FFF9EE;
  --color-ink-primary: #3A001D;
  --color-ink-muted: rgba(58, 0, 29, 0.65);
  --color-ink-subtle: rgba(58, 0, 29, 0.35);

  /* Superfícies */
  --color-surface-pure: #FFFFFF;
  --color-surface-warm: #FFF5E4;
  --color-surface-muted: #F3EBDB;

  /* Acentos Pomegranate */
  --color-accent-coral: #FF6F89;
  --color-accent-yellow: #FECB66;
  --color-accent-mint: #79D3A8;
  --color-accent-sky: #8EC5FC;
  --color-accent-lilac: #D8B4E2;
  --color-accent-peach: #FFB694;

  /* Bordas e Sombras */
  --border-thick: 2px solid var(--color-ink-primary);
  --border-thin: 1.5px solid var(--color-ink-primary);
  --radius-bento: 24px;
  --radius-pill: 9999px;

  /* Easing de Interação */
  --ease-tactile: cubic-bezier(0.19, 1, 0.22, 1);
}
```

### 8.2 Extensão para `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        cream: {
          base: "#FFF9EE",
          surface: "#FFF5E4",
          muted: "#F3EBDB",
        },
        wine: {
          DEFAULT: "#3A001D",
          muted: "rgba(58, 0, 29, 0.65)",
          subtle: "rgba(58, 0, 29, 0.35)",
        },
        pom: {
          coral: "#FF6F89",
          yellow: "#FECB66",
          mint: "#79D3A8",
          sky: "#8EC5FC",
          lilac: "#D8B4E2",
          peach: "#FFB694",
        },
      },
      borderRadius: {
        'bento': '24px',
        'bento-lg': '28px',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'tactile-sm': '0 2px 0 0 #3A001D',
        'tactile': '0 4px 0 0 #3A001D',
        'tactile-lg': '0 6px 0 0 #3A001D',
      },
      fontFamily: {
        display: ['"Fraunces"', '"Plus Jakarta Sans"', 'serif'],
        sans: ['"Noto Sans"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 9. 📋 Checklist de Validação de Código (Code Review)

Antes de aprovar qualquer tela ou componente neste projeto, verifique:

- [ ] **Não há "AI Slop":** O componente tem identidade tátil, borda nítida de 2px e não usa gradientes roxos sem sentido.
- [ ] **Fundo Correto:** O background da página é `#FFF9EE` e os textos usam `#3A001D`.
- [ ] **Botões Reativos:** Os botões afundam fisicamente com `:active` (`translate-y-[2px]` ou `translate-y-[3px]`).
- [ ] **Métricas Formatadas:** Todos os números contêm `tabular-nums` e rótulos pequenos em caixa alta com espaçamento largo (`tracking-wider`).
- [ ] **Ícones Padronizados:** Ícones provenientes de `https://mcp.svgrepo.com` com traço monoline consistente e `stroke-width` compatível (2px).
- [ ] **Ergonomia PWA:** Testado em viewport móvel, respeitando Safe Areas (`env(safe-area-inset-bottom)`) e sem recortes no iPhone ou Android.
