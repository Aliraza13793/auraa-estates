# Auraa Estates

A premium luxury real estate marketing website featuring an interactive 3D elliptical ring gallery, designed for high-end property listings and investment opportunities.

## Live Demo

[View Live Site](#) (https://your-domain.com)

## Features

- **3D Ring Gallery** - Interactive elliptical carousel showcasing 300+ properties with auto-rotation, mouse follow, and drag navigation
- **Property Categories** - Luxury Apartments, Villas, Commercial, Waterfront, Sky Residences, Plots, Retail Spaces, Farmhouses, Smart Homes, Penthouses, Affordable Luxury, Upcoming Projects
- **Multi-Page Navigation** - Separate pages for Properties, Developments, Investment, and About
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Elegant Theme** - Light brown background with gold accents and premium typography
- **Filter System** - Category-based property filtering with animated transitions

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with 3D ring gallery, hero section, and navigation |
| `properties.html` | Full property grid with category filters |
| `developments.html` | Featured developments showcase |
| `investment.html` | Investment opportunities and consultation CTA |
| `about.html` | Company information and values |

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **JavaScript** - Vanilla ES6+ with GSAP animations
- **CDN Libraries** - GSAP for smooth animations
- **Images** - Pexels (royalty-free real estate photography)

## Design System

### Color Palette
- **Primary**: Deep Navy (#1B2838)
- **Accent**: Warm Gold (#C9A96E)
- **Background**: Light Brown (#F5EDE4)
- **Text**: Dark (#2D3139)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600

### Key Features
- Pill-shaped buttons (9999px border-radius)
- Gold gradient accents
- Subtle backdrop blur effects
- Smooth hover transitions

## Project Structure

```
Real-estate/
├── index.html          # Homepage
├── properties.html     # Property listings
├── developments.html   # Featured developments
├── investment.html     # Investment opportunities
├── about.html          # About page
├── style.css           # Main styles
├── script.js           # Ring gallery & interactions
├── properties.js       # Property data (300+ entries)
├── favicon.svg         # Brand favicon
├── assets/
│   └── fallback.svg    # Image fallback
└── specs/
    └── Realestate/
        └── spec.md     # Development specifications
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/auraa-estates.git
   ```

2. Open `index.html` in a browser
   ```bash
   # No build step required - pure static site
   ```

## Deployment

This is a static site optimized for shared hosting (cPanel/public_html):

1. Upload all files to your hosting provider
2. Ensure `index.html` is in the root directory
3. All paths are relative - no configuration needed

## Performance

- **Images**: Lazy loading with Pexels CDN
- **Fonts**: Preconnected Google Fonts
- **Animations**: Hardware-accelerated with GSAP
- **Bundle**: Zero dependencies, no build process

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2026 Auraa Estates. All rights reserved.

## Contact

- **Email**: inquiries@auraaestates.com
- **Locations**: Dubai, Islamabad, Lahore, Karachi, Abu Dhabi, Ahmedabad, Noida, Peshawar, Faisalabad, Hyderabad
