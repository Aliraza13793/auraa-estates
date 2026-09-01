# AURAA ESTATES — Homepage Ring Gallery Spec

## Purpose

Build a premium, interactive 3D elliptical ring gallery homepage for Auraa Estates — a luxury real estate developer. The ring gallery is the hero experience: property images arranged around a large horizontal ellipse with depth, perspective, smooth mouse interaction, hover previews, click selection, and center content updates.

**Reference:** CLOU Architects ring-style project gallery (https://www.clouarchitects.com/projects/?view=ring)

---

## Deployment Constraint

This is a **static website** for shared hosting (cPanel/public_html). No server-side code.

### Allowed
- HTML, CSS, client-side JavaScript
- CDN libraries (GSAP, etc.) with graceful fallback
- Relative paths only

### Prohibited
- Node.js, Express, Next.js, backend runtime
- Database, server-side rendering, API keys
- localhost paths, npm runtime dependencies
- Build steps for production output

### File Structure
```
/index.html
/style.css
/script.js
/properties.js
/assets/
  fallback.jpg
```

---

## Brand

| Field | Value |
|-------|-------|
| Brand Name | Auraa Estates |
| Industry | Real Estate (Luxury) |
| Target Audience | Investors, home buyers, NRIs, luxury apartment/commercial buyers |
| Tone | Premium, editorial, architectural, minimal, futuristic |

---

## Design System Reference

All typography, spacing, colors, buttons, layout rhythm follow the constitution in `AGENTS.md`.

### Key Tokens to Use

**Colors:**
- `canvas` (#FFFFFF) — page background
- `ink` (#212529) — headlines, body
- `steel` (#868E96) — muted text
- `brand-yellow` (#FFD43B) — wordmark only, NOT for CTAs
- `primary` (black) — dominant CTAs
- `hairline` (#DEE2E6) — borders

**Typography:**
- Font: Roobert PRO (fallback: Noto Sans, Inter, sans-serif)
- Hero Display: 80px / 500 / 1.05 / -2px (desktop)
- Subtitle: 18px / 400 / 1.50
- Body SM: 14px / 400 / 1.50
- Micro Uppercase: 11px / 600 / 1.40 / 0.5px
- Button MD: 14px / 500 / 1.30

**Spacing:**
- Hero padding: 120px
- Section rhythm: 96px
- Base unit: 4px / 8px increment

**Shape:**
- All buttons/pills/badges: `rounded.full` (9999px)
- Cards: `rounded.xl` (16px) to `rounded.xxxl` (28px)

---

## Sections (Top to Bottom)

### 1. Top Navigation
- Left: "AURAA ESTATES" wordmark (bold, minimal, black text)
- Center-left links: Properties, Developments, Investment, About, Contact
  - "Contact" links to `mailto:inquiries@auraaestates.com` with subject pre-filled "Inquiry from Website"
- Right: Language toggle (En / हिंदी) — visual placeholder only, no translation logic in v1
- Underline hover animation on links
- Sticky, white background, ~64px height
- Collapses to hamburger below 1024px

### 2. Hero Ring Gallery (Main Feature)
- Full-screen hero (min-height: 100vh)
- Background: #fafafa or #f7f7f4
- Contains: center headline, subheading, 3D ring gallery, category labels, bottom instruction text

### 3. (Future sections — not in this spec)

---

## Hero Ring Gallery — Detailed Spec

### Center Copy (Default State)

**Headline:**
> "Find Your Next Landmark Property."

- Desktop: 68px–86px, weight 500, line-height 0.95–1.05, letter-spacing -2px to -4px
- Max-width: 720px
- Position: top 24%–30% of viewport, centered
- Color: `ink`

**Subheading:**
> "Explore 300+ curated luxury residences, commercial spaces, villas, and investment-ready developments."

- 18px–22px, line-height 1.45, color #1a1a1a
- Max-width: 620px, centered
- Placed below headline

### Center Copy (Hover/Active Property State)
- Property title (large bold)
- Rectangular preview image below title
- Category/location below image
- "View Property +" CTA (only on click/active, not hover)
- Smooth crossfade transition, no flicker

### Category Labels Around Ring

Positioned around the ellipse edges, editorial style:

| Category | Count |
|----------|-------|
| Luxury Apartments | 48 |
| Villas | 32 |
| Commercial | 26 |
| Waterfront | 22 |
| Sky Residences | 18 |
| Plots | 15 |
| Retail Spaces | 12 |
| Farmhouses | 10 |
| Smart Homes | 14 |
| Penthouses | 8 |
| Affordable Luxury | 20 |
| Upcoming Projects | 6 |

**Styling:**
- Black bold text, small muted count (superscript style)
- Underline below label
- Editorial/premium typography
- Absolute positioned on desktop
- Horizontal scroll row on mobile

### Bottom Instruction Text
```
MOVE TO EXPLORE · CLICK TO LOCK A PROPERTY
```
- letter-spacing: 4px
- font-size: 11px
- color: rgba(0,0,0,0.35)
- uppercase
- position: bottom 24px, centered

---

## Ring Gallery — Geometry & Physics

### Ring Shape
- **Horizontal ellipse**, not a circle
- Desktop dimensions: 70–78vw wide, 55–62vh tall
- Center-aligned, sitting in lower half of hero

### Ellipse Math
For each panel:
```
angle = itemIndex / totalItems * Math.PI * 2 + rotationOffset
x = Math.cos(angle) * radiusX
y = Math.sin(angle) * radiusY
zDepth = Math.sin(angle)
```

### Desktop Values
| Parameter | Value |
|-----------|-------|
| Rendered panels | 120–180 (from 300+ data source) |
| radiusX | 620px–760px |
| radiusY | 145px–210px |
| centerX | 50% |
| centerY | 68%–74% of viewport |
| perspective | 900px–1400px |

### Panel Size (Desktop)
| Property | Value |
|----------|-------|
| Width | 38px–52px (front visible) |
| Height | 95px–130px |
| Border-radius | 2px |
| Gap | 5px–8px visual |
| Back/edge panels | Smaller due to perspective |

### Panel Scale Logic
| Position | Scale |
|----------|-------|
| Front | 1.0–1.12 |
| Side | 0.72–0.88 |
| Back | 0.48–0.68 |

### Panel Opacity Logic
| Position | Opacity |
|----------|---------|
| Front | 1.0 |
| Side | 0.75–0.9 |
| Back | 0.25–0.45 |

### Panel Blur Logic
| Position | Blur |
|----------|------|
| Front | 0px |
| Back | 0.6px–1.4px max |

### Z-Index
- Based on zDepth — front panels layer above back panels

### 3D Transforms
Each panel uses:
- `translate3d(x, y, z)`
- `scale(scaleValue)`
- `rotateY(rotationAngle)` — left panels slightly positive, right slightly negative
- Optional `rotateZ(smallAngle)`

Container:
```css
perspective: 1000px;
transform-style: preserve-3d;
```

---

## Panel Styling

```css
.panel {
  width: 42px;          /* desktop base */
  height: 112px;        /* desktop base */
  border-radius: 2px;
  overflow: hidden;
  background: #ddd;
  border: 1px solid rgba(0,0,0,0.18);
  box-shadow: 0 8px 18px rgba(0,0,0,0.10);
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
}

.panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## Motion & Interaction

### 1. Auto Rotation
- Ring rotates slowly by default
- Speed: subtle, premium feel (not fast carousel)

### 2. Mouse Follow
- Mouse X → horizontal rotation/offset
- Mouse Y → slight vertical tilt/perspective
- Use easing/lerp, not instant movement

### 3. Inertia
- When mouse stops, motion slows gradually
- Velocity damping, no sudden stop

### 4. Drag Support
- Click and drag horizontally → rotates ring
- Release → momentum continues, gradually slows

### 5. Hover Behavior
- Hovered panel: slight scale up, brighter, stronger border/shadow
- Bring hovered panel forward subtly
- Nearby panels remain stable
- Cursor: pointer on panels

### 6. Click Behavior
- Lock selected panel softly
- Selected panel stays brighter
- Show minimal property info label:
  - Property name
  - Category
  - "View Property +" CTA → opens `mailto:inquiries@auraaestates.com` with subject "Inquiry: [Property Name]" and body pre-filled with property details
- Label: minimal, luxury-style, bottom center or near panel
- No popup unless necessary

### Animation Performance
- Use `requestAnimationFrame`
- Transform-only animations
- `will-change: transform, opacity`
- Avoid layout thrashing
- Avoid animating top/left directly
- Lazy load images
- 60fps target on modern desktop

---

## Property Data

### Data Structure
```javascript
// properties.js
const properties = [
  {
    id: 1,
    title: "Aurora Skyline Residences",
    category: "Luxury Apartments",
    location: "Dubai",
    priceRange: "$1.2M – $3.5M",
    image: "assets/property-01.jpg",
    thumbnail: "assets/thumb-01.jpg",
    status: "Ready to Move"
  },
  // ... 300 items
];
```

### Required Fields
| Field | Description |
|-------|-------------|
| id | Unique identifier |
| title | Property/project name |
| category | One of the 12 categories |
| location | City name |
| priceRange | Price display string |
| image | Full preview image path |
| thumbnail | Small ring thumbnail path |
| status | Ready to Move / Under Construction / New Launch / Sold Out |

### Sample Property Names
- Aurora Skyline Residences
- The Palm Court Villas
- Marina Glass Towers
- Celeste Business Park
- Emerald Heights
- The Horizon Penthouses
- One Boulevard Residences
- The Whitefield Estate
- Azure Bay Villas
- Capital Square Commercial
- Lakefront Signature Homes
- Solaris Smart Residences

### Locations
Dubai, Mumbai, Gurugram, Bangalore, Pune, Hyderabad, Noida, Goa, Abu Dhabi, Delhi NCR, Chennai, Ahmedabad

### Image Strategy
- Use Unsplash real estate/architecture images (curated set of ~50 photo IDs, repeated across properties in v1)
- Small thumbnails for ring (optimized, ~100×140px)
- Larger images for center preview only (~600×400px)
- Lazy loading on all images
- Fallback: `assets/fallback.jpg` shown if image fails to load
- On hover/center preview, load larger image with 200ms debounce
- 300+ entries in data, 120–180 rendered in DOM
- Replace Unsplash IDs with real property photos before production launch

---

## Filter Overlay

### Trigger
"Filter Properties +" text button (left side, underlined, bold)

### Behavior
- Opens minimal full-screen or side overlay
- Matches luxury minimal style
- Front-end only, no backend
- On apply: ring re-renders with filtered properties, center resets to default headline
- On clear: ring restores all 300+ properties
- Filter state visible in pill badges below category labels

### Filter Options
| Filter | Options |
|--------|---------|
| Property Type | Luxury Apartments, Villas, Commercial, etc. |
| Location | Dubai, Mumbai, Gurugram, etc. |
| Budget | Under $500K, $500K–$1M, $1M–$3M, $3M+ |
| Status | Ready to Move, Under Construction, New Launch, Sold Out |
| Bedrooms | 1 BHK, 2 BHK, 3 BHK, 4+ BHK |

### Styling
- White/off-white background
- Black text
- Pill-shaped filter dropdowns (per AGENTS.md `filter-dropdown`)
- Close button (X) top right
- Smooth open/close animation

---

## Grid View

### Trigger
"Grid view +" text button (right side, underlined, bold)

### Behavior
- Switches from ring to clean grid layout
- Same property data
- Button changes to "Ring view +" to return

### Grid Styling
- Premium, editorial grid (not basic cards)
- 3–4 columns on desktop
- Card: property image, title, category, location, price
- Cards use `card-base` or `card-feature` from AGENTS.md
- Hover: subtle elevation
- Smooth transition between views

---

## Responsive Behavior

### Desktop (≥1280px)
- Full ring gallery experience
- radiusX: 620–760px, radiusY: 145–210px
- 120–180 rendered panels
- Full mouse interaction
- Hero: 80px display

### Desktop (1024–1279px)
- Ring scales down slightly
- Hero: 64px
- All interactions preserved

### Tablet (768–1023px)
- Ring scales: radiusX 400–520px, radiusY 110–160px
- 80–120 rendered panels
- Labels: 2-column layout
- Nav: pill-tab returns

### Mobile Large (480–767px)
- Ring stays elliptical but compressed: radiusX: 300–420px, radiusY: 90–130px
- Panel size: 28–34px wide, 76–92px tall
- 70–100 rendered panels
- Headline: 42–52px
- Category labels: horizontal scroll row
- Touch: swipe left/right to rotate ring (not separate carousel component)
- Mouse-follow disabled on touch devices

### Mobile Small (<480px)
- Further reduced panels
- Ring smaller and centered
- Minimal labels
- Hamburger nav
- Headline: 36px

---

## Accessibility

- Buttons are real `<button>` or `<a>` elements
- Alt text on all images
- Keyboard navigable: open filter, switch views, select properties
- Good contrast ratios
- Focus states visible

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Rendered panels | 120–180 (from 300+ data) |
| Frame rate | 60fps |
| Layout calculations | Avoid on every mouse move |
| Animation method | transform + opacity only |
| Image loading | Lazy, compressed thumbnails |
| DOM updates | Minimal, only what changes |

---

## Custom Cursor

- Small black dot cursor/follower inside gallery area
- Follows mouse smoothly (JS-driven)
- Scales slightly on hover over panels
- Native cursor hidden only inside gallery area
- Premium, subtle feel

---

## Visual Rules

### DO
- Use smaller image panels (38–52px wide)
- Use many panels (120–180 rendered)
- Keep ring thin and elegant
- Make ring feel like a 3D orbit
- Use premium spacing
- Use bold typography
- Use smooth physics-style movement
- Use black/white/minimal luxury styling
- Make hover/click interactions refined

### DON'T
- Don't make a flat semi-circle
- Don't create oversized property cards
- Don't make thick image blocks
- Don't use a basic carousel
- Don't make it colorful
- Don't add heavy gradients
- Don't use playful animations
- Don't use big rounded corners
- Don't make labels messy
- Don't make the page look like a template

---

## CDN Dependencies

Include via CDN with fallback:
- GSAP (for smooth animations + physics)
- No Three.js — use CSS 3D transforms only
- Fallback: If GSAP fails to load, degrade to CSS-only transitions (no inertia/drag, static ring with manual rotation only)

---

## SEO & Meta

Required in `<head>`:
```html
<title>Auraa Estates | Luxury Real Estate & Investment Properties</title>
<meta name="description" content="Explore 300+ curated luxury residences, commercial spaces, villas, and investment-ready developments across Dubai, Mumbai, and 10+ cities.">
<meta property="og:title" content="Auraa Estates — Premium Real Estate">
<meta property="og:description" content="Luxury residences, commercial spaces, and investment properties in prime locations.">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/og-image.jpg">
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## Analytics

- Google Analytics 4 via gtag.js (placeholder measurement ID: `G-XXXXXXXXXX` — replace before deploy)
- Track: page view, filter applied, property click, view toggle (ring ↔ grid)
- No third-party cookies or tracking pixels in v1

---

## Deployment Steps

1. Compress all files (index.html, style.css, script.js, properties.js, assets/)
2. Upload to public_html via cPanel File Manager or FTP
3. Extract if zipped
4. Open domain in browser
5. Verify ring gallery loads and interactions work

---

## Implementation Phases

### Phase 1 — MVP (Current Sprint)
- Top navigation with sticky behavior
- Hero ring gallery with 3D elliptical ring
- Mouse follow, drag, inertia, auto-rotation
- Center headline + subheading (default state)
- Center property details on hover/click
- Category labels around ring
- Bottom instruction text
- Responsive breakpoints (5 tiers)
- SEO meta tags + favicon
- Fallback image for broken loads

### Phase 2 — Next Iteration
- Filter overlay (type, location, budget, status, bedrooms)
- Grid view toggle
- Custom cursor (black dot follower)
- Google Analytics integration
- Language toggle (En/Hindi translations)

### Phase 3 — Future
- Individual property pages
- Contact form
- WhatsApp inquiry integration
- Real property photography (replace Unsplash)
- 300+ unique images

---

*This spec is the contract for the Auraa Estates homepage ring gallery. Build only what is defined here. Update this spec first if requirements change.*
