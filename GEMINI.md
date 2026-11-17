# Confra App — Frontend & Design System Invariants

Ao desenvolver, criar ou refatorar qualquer interface, tela, componente ou estilo neste repositório, siga obrigatoriamente as diretrizes abaixo e consulte sempre o [design_system.md](design_system.md):

## 1. Diretriz Anti-"AI Slop"
- NUNCA utilize a estética genérica de IA: fundos cinza/escuro com gradientes roxos/índigo, cards com bordas imperceptíveis de 1px cinza (`border-gray-200`) e sombras difusas flutuantes sem peso físico.
- SEMPRE utilize contornos físicos nítidos de `2px solid #3A001D`, cantos arredondados generosos (`rounded-3xl` / `24px` a `28px` para bento cards, `rounded-full` para botões e chips) e paleta calorosa e acolhedora.

## 2. Paleta de Cores Obrigatória
- **Fundo da Aplicação:** `#FFF9EE` (Warm Biscuit Cream).
- **Tinta, Tipografia e Bordas:** `#3A001D` (Deep Pomegranate Wine).
- **Acentos Oficiais:**
  - Amarelo Mel: `#FECB66` (Botões de ação primária e destaques).
  - Coral Berry: `#FF6F89` (Badges de alerta positivo, status vital).
  - Menta Fresca: `#79D3A8` (Equilíbrio, sucesso e indicadores).
  - Azul Céu: `#8EC5FC` (Métricas de tempo e categorias secundárias).
  - Lilás Suave: `#D8B4E2` (Tags de perfil e chips secundários).

## 3. Física Tátil dos Componentes
- **Botões:** Devem ter base física e afundar no toque via `:active` com deslocamento vertical (`transform: translateY(3px)` ou `4px`), com timing `cubic-bezier(0.19, 1, 0.22, 1)`.
- **Cartões:** Modelo Bento Box com separação de cabeçalho por linha de 2px e fundos pastéis contrastantes.
- **Micro-labels:** Caixa alta com tracking aberto (`letter-spacing: 0.08em`, 11px a 12px, font-bold).
- **Números e Métricas:** Sempre aplicar `font-variant-numeric: tabular-nums` para evitar oscilações em relógios e contadores.

## 4. Iconografia e SVGs
- Repositório padrão: [https://mcp.svgrepo.com](https://mcp.svgrepo.com).
- Estilo mandatório: *Outline / Line Monoline* com espessura de traço (`stroke-width`) de `1.75px` a `2px` e terminações arredondadas (`stroke-linecap="round"` e `stroke-linejoin="round"`), combinando com as bordas do sistema.

## 5. PWA & Ergonomia Mobile
- Respeitar sempre as Safe Areas do iOS e Android: `env(safe-area-inset-top)` e `env(safe-area-inset-bottom)`.
- Aplicar `-webkit-tap-highlight-color: transparent` e `overscroll-behavior-y: contain`.
- Alvos de toque com altura mínima de 44px a 48px na *Thumb Zone*.
