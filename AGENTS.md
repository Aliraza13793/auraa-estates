# AURAA ESTATS — DESIGN SYSTEM CONSTITUTION

## Purpose

This document serves as the **single source of truth** for all design decisions across Auraa Estates marketing surfaces. Every component, token, and layout rule defined here is binding — creative deviation from this system is not permitted.

---

## Brand Identity

**Brand Name:** Auraa Estates  
**Industry:** Real Estate  
**Website Type:** Marketing & Lead Generation  
**Design Style:** Modern, Premium, Engineer-Grade  

### Brand Personality
- Confident and premium, with clean geometric precision
- Professional warmth — approachable but never casual
- Data-driven aesthetic with real product imagery (property mockups, dashboards, maps)
- Stark white canvas as the foundational surface

### Brand Voice
- Clear, direct, and trustworthy
- Technical precision meets human warmth
- No jargon — accessible to all buyer personas

---

## Design Principles

### 1. **The Canvas Principle**
The white canvas is sacred. Every element on it must earn its space through purpose, not decoration. Generous whitespace is not empty — it's the foundation of premium perception.

### 2. **The Pill Signature**
Every button, badge, pill, and interactive element uses **fully rounded corners** (9999px). This is the brand's visual DNA — never soften or square these corners.

### 3. **Black Dominance**
Black is the dominant CTA color across all surfaces. It signals confidence, authority, and premium positioning. Reserve yellow strictly for brand recognition, never for primary actions.

### 4. **Real Over Abstract**
Show real property listings, real dashboards, real maps — never stock photography. Product mockups and UI illustrations must feel authentic and functional.

### 5. **Pastel Warmth**
Feature cards use a warm pastel palette (rose, teal, coral, yellow) that echoes real estate warmth — sunrise over properties, welcoming interiors, natural landscapes.

### 6. **Typography Hierarchy**
Roobert PRO (fallback: Noto Sans) carries every surface from 80px hero displays to 11px micro labels. The typeface's geometric character reinforces the engineer-grade precision of the brand.

---

## Color System

### Brand & Accent
| Token | Hex | Use |
|-------|-----|-----|
| `brand-yellow` | #FFD43B | Wordmark, promo banners, tag pills ONLY |
| `brand-yellow-deep` | #F59F00 | Yellow hover states |
| `yellow-light` | #FFF3BF | Pale yellow backgrounds |
| `yellow-dark` | #495057 | Yellow tag text |
| `brand-blue` | #228BE6 | Inline links, featured pricing border |
| `blue-pressed` | #1C7ED6 | Blue pressed states |
| `brand-coral` | #FF6B6B | Warm callouts |
| `coral-light` | #FFE3E3 | Coral feature cards |
| `coral-dark` | #C92A2A | Coral tag text |
| `brand-rose` | #E64980 | Rose feature cards |
| `brand-teal` | #20C997 | Teal feature cards |
| `teal-light` | #C3FAE8 | Pale teal backgrounds |
| `moss-dark` | #087F5B | Deep teal text |
| `brand-pink` | #FCC2D7 | Soft pink callouts |
| `brand-orange-light` | #FFE8CC | Orange feature cards |

### Surface
| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | #FFFFFF | Page background, primary cards |
| `surface` | #F8F9FA | Section backgrounds, search-pill rest |
| `surface-soft` | #F1F3F5 | Quieter divisions |
| `surface-yellow` | #FFF9DB | Yellow tag chip surface |
| `surface-pricing-featured` | #EDF2FF | Featured pricing tier (lavender) |
| `hairline` | #DEE2E6 | Primary borders |
| `hairline-soft` | #E9ECEF | Table dividers |
| `hairline-strong` | #CED4DA | Input borders |

### Text
| Token | Hex | Use |
|-------|-----|-----|
| `ink-deep` | #1A1B1E | Headlines on light cards |
| `ink` | #212529 | Primary headlines, body |
| `charcoal` | #343A40 | Body emphasis |
| `slate` | #495057 | Secondary text, metadata |
| `steel` | #868E96 | Tertiary text, footer links |
| `stone` | #ADB5BD | Captions, muted labels |
| `muted` | #CED4DA | Disabled, placeholders |
| `on-dark` | #FFFFFF | White on dark surfaces |
| `on-dark-muted` | rgba(255,255,255,0.6) | Reduced-opacity white |

### Semantic
| Token | Hex | Use |
|-------|-----|-----|
| `success-accent` | #51CF66 | Success indicators |
| `brand-red` | #FF8787 | Error backgrounds |
| `brand-red-dark` | #E03131 | Error borders |

### Color Rules
- **NEVER** use `brand-yellow` as primary CTA or large background
- **ALWAYS** use `primary` (black) for dominant CTAs
- Pastel cards pair with white cards in the same section
- Additional accent colors beyond defined palette are prohibited

---

## Typography

### Font Family
**Primary:** Roobert PRO  
**Fallbacks:** Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif  

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|-----|
| `hero-display` | 80px | 500 | 1.05 | -2px | Marketing hero |
| `display-lg` | 60px | 500 | 1.10 | -1.5px | Major section openers |
| `heading-1` | 48px | 500 | 1.15 | -1px | Page headlines |
| `heading-2` | 36px | 500 | 1.20 | -0.5px | Subsection headlines |
| `heading-3` | 28px | 500 | 1.25 | 0 | Card titles |
| `heading-4` | 22px | 500 | 1.30 | 0 | Feature tile titles |
| `heading-5` | 18px | 500 | 1.40 | 0 | FAQ, smaller cards |
| `subtitle` | 18px | 400 | 1.50 | 0 | Hero subtitle |
| `body-md` | 16px | 400 | 1.50 | 0 | Primary body |
| `body-md-medium` | 16px | 500 | 1.50 | 0 | Logo labels |
| `body-sm` | 14px | 400 | 1.50 | 0 | Secondary body |
| `body-sm-medium` | 14px | 500 | 1.50 | 0 | Filters, buttons |
| `caption` | 13px | 400 | 1.40 | 0 | Helper text |
| `caption-bold` | 13px | 600 | 1.40 | 0 | Badge labels |
| `micro` | 12px | 500 | 1.40 | 0 | Footer microcopy |
| `micro-uppercase` | 11px | 600 | 1.40 | 0.5px | Table dividers |
| `button-md` | 14px | 500 | 1.30 | 0 | Pill buttons |
| `stat-display` | 64px | 500 | 1.10 | -1.5px | Stat callouts |

### Typography Rules
- Tight hero leading (1.05) for magazine-grade headlines
- Negative tracking progression: -2px at 80px → 0 at smaller sizes
- Weights: 400 (body), 500 (medium + headings), 600 (badges/uppercase)
- **NEVER** use weight 700
- Single typeface across ALL surfaces

---

## Layout & Spacing

### Spacing Scale (4px base, 8px increment)
| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro spacing |
| `xs` | 8px | Small gaps |
| `sm` | 12px | Compact padding |
| `md` | 16px | Standard padding |
| `lg` | 20px | Medium gaps |
| `xl` | 24px | Card padding (compact) |
| `xxl` | 32px | Card padding (feature) |
| `xxxl` | 40px | Large section gaps |
| `section-sm` | 48px | Small section spacing |
| `section` | 64px | Standard section spacing |
| `section-lg` | 96px | Marketing section rhythm |
| `hero` | 120px | Hero padding |

### Grid & Container
- **Max-width:** 1280px
- **Gutters:** 32px
- **Marketing vertical rhythm:** 96px
- **Pricing vertical rhythm:** 64px
- **Card internal padding:** 24px (compact) / 32px (feature panels)

### Whitespace Philosophy
Marketing surfaces demand generous breathing room. Hero padding (120px) gives content room to breathe. Pricing tightens for density.

---

## Elevation & Depth

| Level | Shadow | Use |
|-------|--------|-----|
| 0 (flat) | None + hairline-soft border | Default cards, table rows, inputs |
| 1 (subtle) | `rgba(5,0,56,0.04) 0px 1px 2px` | Hover-elevated tiles |
| 2 (card) | `rgba(5,0,56,0.06) 0px 4px 12px` | Feature cards |
| 3 (mockup) | `rgba(5,0,56,0.08) 0px 12px 32px -4px` | Hero mockups |
| 4 (modal) | `rgba(5,0,56,0.12) 0px 16px 48px -8px` | Modals, dropdowns |

### Depth Rules
- Default state: flat with hairline borders
- Pastel cards carry visual weight via saturated background
- Hero mockups get strongest shadow for depth framing
- Flat documentation cards never get heavy shadows

---

## Shape System

### Border Radius Scale
| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Small chips, micro-controls |
| `sm` | 6px | Discount badges |
| `md` | 8px | Inputs, search-pill |
| `lg` | 12px | Standard cards |
| `xl` | 16px | Pricing cards, panels |
| `xxl` | 20px | Larger feature cards |
| `xxxl` | 28px | Pastel feature cards |
| `feature` | 32px | Hero CTA banners |
| `full` | 9999px | ALL buttons, pills, badges |

### Shape Rules
- Every button, pill, badge = `rounded.full` (9999px) — **NO EXCEPTIONS**
- Pastel feature cards = `rounded.xxxl` (28px)
- Pricing cards = `rounded.xl` (16px)
- Hero CTA banner = `rounded.feature` (32px)

---

## Components

### Buttons

#### button-primary
Black pill primary CTA — dominant action
- Background: `primary` (black)
- Text: `on-dark` (white)
- Typography: `button-md`
- Padding: 12px 24px
- Radius: `full`

#### button-yellow
Brand-yellow pill for brand emphasis moments
- Background: `brand-yellow`
- Text: `primary` (black)
- Typography: `button-md`
- Padding: 12px 24px
- Radius: `full`

#### button-blue
Brand-blue pill for inline callouts
- Background: `brand-blue`
- Text: `on-dark` (white)
- Typography: `button-md`
- Padding: 12px 24px
- Radius: `full`

#### button-secondary
Outlined pill for secondary actions
- Background: transparent
- Text: `ink`
- Border: 1px solid `hairline-strong`
- Typography: `button-md`
- Padding: 12px 24px
- Radius: `full`

#### button-on-dark
White pill for dark CTA banners
- Background: `on-dark`
- Text: `primary` (black)
- Typography: `button-md`
- Padding: 12px 24px
- Radius: `full`

#### button-ghost
Quiet rectangular ghost button
- Background: transparent
- Text: `ink`
- Typography: `button-md`
- Padding: 8px 12px
- Radius: `md`

#### button-link
Inline text link
- Background: transparent
- Text: `brand-blue`
- Typography: `body-sm-medium`
- Padding: 0

#### button-icon-circular
36×36px circular utility button
- Background: `canvas`
- Text: `ink`
- Border: 1px solid `hairline`
- Radius: `full`

### Cards & Containers

#### card-base
Standard content card
- Background: `canvas`
- Radius: `xl` (16px)
- Padding: `xl` (24px)
- Border: 1px solid `hairline-soft`

#### card-feature
White feature card with 28px corners
- Background: `canvas`
- Radius: `xxxl` (28px)
- Padding: `xxl` (32px)
- Border: 1px solid `hairline-soft`

#### card-feature-yellow
Pastel-yellow feature card
- Background: `yellow-light`
- Text: `primary`
- Radius: `xxxl` (28px)
- Padding: `xxl` (32px)

#### card-feature-coral
Pastel-coral feature card
- Background: `coral-light`
- Text: `primary`
- Radius: `xxxl` (28px)
- Padding: `xxl` (32px)

#### card-feature-teal
Pastel-teal feature card
- Background: `teal-light`
- Text: `primary`
- Radius: `xxxl` (28px)
- Padding: `xxl` (32px)

#### card-feature-rose
Pastel-rose feature card
- Background: `brand-rose`
- Text: `on-dark`
- Radius: `xxxl` (28px)
- Padding: `xxl` (32px)

#### pricing-card
Standard pricing tier
- Background: `canvas`
- Radius: `xl` (16px)
- Padding: `xxl` (32px)
- Border: 1px solid `hairline`

#### pricing-card-featured
Featured pricing tier (lavender + blue border)
- Background: `surface-pricing-featured`
- Radius: `xl` (16px)
- Padding: `xxl` (32px)
- Border: 2px solid `brand-blue`

#### pricing-card-enterprise
Dark enterprise tier
- Background: `primary` (black)
- Text: `on-dark` (white)
- Radius: `xl` (16px)
- Padding: `xxl` (32px)

### Inputs & Forms

#### text-input
Standard text field
- Background: `canvas`
- Text: `ink`
- Border: 1px solid `hairline-strong`
- Radius: `md` (8px)
- Padding: 12px 16px
- Height: 44px

#### text-input-focused
Activated state
- Border: 2px solid `brand-blue`

#### search-pill
Search bar
- Background: `surface`
- Text: `steel`
- Typography: `body-sm`
- Radius: `md` (8px)
- Height: 40px
- Border: 1px solid `hairline`

#### filter-dropdown
Pill-shaped filter dropdown
- Background: `canvas`
- Text: `ink`
- Typography: `body-sm-medium`
- Radius: `full` (9999px)
- Padding: 8px 16px
- Border: 1px solid `hairline-strong`

### Tabs

#### pill-tab
Inactive pill tab
- Background: `canvas`
- Text: `steel`
- Border: 1px solid `hairline`
- Padding: 8px 16px
- Radius: `full`

#### pill-tab-active
Active pill tab
- Background: `primary` (black)
- Text: `on-dark` (white)
- Padding: 8px 16px
- Radius: `full`

### Badges & Status

#### badge-promo
Yellow promo banner badge
- Background: `brand-yellow`
- Text: `primary`
- Typography: `caption-bold`
- Radius: `full`
- Padding: 4px 10px

#### badge-tag-yellow
Yellow feature tag chip
- Background: `surface-yellow`
- Text: `yellow-dark`
- Typography: `caption-bold`
- Radius: `full`
- Padding: 4px 10px

#### badge-tag-purple
Purple feature tag chip
- Background: `surface-pricing-featured`
- Text: `brand-blue`
- Typography: `caption-bold`
- Radius: `full`
- Padding: 4px 10px

#### badge-tag-coral
Coral feature tag chip
- Background: `coral-light`
- Text: `coral-dark`
- Typography: `caption-bold`
- Radius: `full`
- Padding: 4px 10px

#### badge-success
Green success indicator
- Background: `success-accent`
- Text: `on-dark`
- Typography: `caption-bold`
- Radius: `full`
- Padding: 4px 10px

#### badge-discount
Yellow discount pill
- Background: `brand-yellow`
- Text: `primary`
- Typography: `caption-bold`
- Radius: `sm` (6px)
- Padding: 2px 6px

#### promo-banner
Sticky black promo strip
- Background: `primary` (black)
- Text: `on-dark` (white)
- Typography: `body-sm-medium`
- Padding: 12px 16px

### Tables

#### comparison-table
Feature comparison table
- Background: `canvas`
- Text: `ink`
- Typography: `body-sm`
- Radius: `md` (8px)
- Border: 1px solid `hairline`

#### comparison-row
Individual feature row
- Background: `canvas`
- Text: `ink`
- Padding: 16px 20px
- Border-bottom: 1px solid `hairline-soft`

### Specialized Components

#### whiteboard-mockup
Real property mockup illustration
- Background: `canvas`
- Radius: `xl` (16px)
- Border: 1px solid `hairline-soft`
- Shadow: Level 3 (mockup)

#### hero-band-marketing
Marketing hero band
- Background: `canvas`
- Padding: `hero` (120px)
- Layout: Centered headline + subtitle + CTA row + mockup illustration

#### cta-banner-dark
Dark CTA banner
- Background: `primary` (black)
- Text: `on-dark` (white)
- Radius: `feature` (32px)
- Padding: `section` (64px)

#### footer-region
Multi-column dark footer
- Background: `ink-deep` (dark)
- Padding: `section` (64px) `xxl` (32px)
- Layout: 6-column link grid

### Navigation

#### top-navigation
Sticky white nav bar
- Background: `canvas`
- Height: ~64px
- Left: Brand wordmark + horizontal links
- Right: Login/Pricing/Contact + black-pill CTA

---

## Responsive Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (small) | < 480px | Single column, hero 36px, hamburger nav, 1-up pricing |
| Mobile (large) | 480–767px | 2-up feature tiles, hero 48px |
| Tablet | 768–1023px | 2-column grids, pill-tab nav returns |
| Desktop | 1024–1279px | 4-tier pricing row, hero 64px |
| Wide Desktop | ≥ 1280px | Full hero, 80px display |

### Touch Targets
- Pill buttons: 40–44px height (WCAG AAA)
- Circular icon buttons: 36×36px desktop → 44×44px mobile
- Form inputs: 44px height
- Filter dropdowns: 36px desktop → 44px mobile

### Collapsing Strategy
- **Hero typography:** 80px → 60px → 48px → 36px
- **Pricing:** 4-col → 2-col → 1-col; table scrolls horizontal on mobile
- **Footer:** 6-col → 3-col → 2-col → accordion
- **Top nav:** Collapses to hamburger below 1024px

---

## Rules — DO

1. Reserve `brand-yellow` for wordmark, promo banner, and tag chips ONLY
2. Use `primary` (black) as dominant CTA everywhere
3. Pair pastel feature cards with white cards in same section
4. Apply `rounded.full` to every button, pill, badge — **always**
5. Apply `rounded.xxxl` (28px) to pastel feature cards
6. Use real property mockups, not stock photography
7. Maintain Roobert PRO across every UI surface
8. Give marketing content generous whitespace (120px hero padding)

## Rules — DON'T

1. Don't use `brand-yellow` on standard CTAs or large backgrounds
2. Don't introduce additional accent colors beyond defined palette
3. Don't soften corners on buttons — pill is brand signature
4. Don't reduce hero leading below 1.05
5. Don't apply heavy shadows on flat cards — reserve for mockups
6. Don't use stock photography — show real property UI
7. Don't use weight 700 in typography
8. Don't deviate from token values without updating this document

---

## Development Methodology

### Spec-Driven Development

All new features and components follow **Spec-Driven Development (SDD)**:

1. **Spec First** — Every new page, component, or feature begins with a written specification
2. **Spec Location** — All specs live under `specs/Realestate/spec.md`
3. **No Code Without Spec** — Never implement a feature without a corresponding spec
4. **Spec as Contract** — The spec is the single source of truth for what gets built
5. **Spec Updates** — If requirements change mid-implementation, update the spec FIRST, then implement

### Workflow

```
1. Write spec    → specs/Realestate/spec.md
2. Review spec   → Ensure alignment with AGENTS.md constitution
3. Implement     → Build only what the spec defines
4. Verify        → Check implementation matches spec exactly
5. Iterate       → Update spec if changes needed, re-implement
```

### Spec File Structure

Each spec follows this structure:
- **Page/Feature Name**
- **Purpose** — Why this exists
- **Sections** — Detailed breakdown of each section/component
- **Content** — Exact copy, data, and assets needed
- **Responsive Behavior** — How it collapses at each breakpoint
- **Token Usage** — Which design tokens apply
- **Component Reference** — Which AGENTS.md components to use

---

## Implementation Notes

- All tokens must be defined as CSS custom properties for theming
- Component classes follow BEM naming: `component`, `component--modifier`, `component__element`
- Animations: 150–200ms ease (recommended)
- Form validation success states use `success-accent`
- Dark mode tokens not yet defined — light mode only for MVP
- **Always reference `specs/Realestate/spec.md` before building any new feature**

---

## Page Specifications

### Homepage Sections
1. **Hero Band** — 80px display headline, subtitle, dual CTAs (black + outline), property mockup illustration
2. **Feature Cards** — 3–4 pastel cards (yellow, coral, teal, rose) showcasing platform capabilities
3. **Stats Section** — 3–4 stat callouts (64px stat-display) with supporting labels
4. **Pricing Section** — 4-tier cards (Starter / Professional / Business / Enterprise) with comparison table
5. **Social Proof** — Customer logos, testimonials, or case studies
6. **CTA Banner** — Dark rounded banner with final conversion push
7. **Footer** — 6-column link grid with app store badges

### Pricing Tier Colors
- Starter: White card
- Professional: White card
- Business: Lavender featured (surface-pricing-featured + blue border)
- Enterprise: Dark card (primary bg)

---

*This document is the authoritative reference for all Auraa Estates marketing surfaces. When in doubt, consult this constitution.*
