# Assets Organization

All assets are now organized by page/section for better maintainability.

## Structure

```
src/assets/
├── home/              # Homepage assets
│   ├── hero.png
│   ├── about-large.png
│   ├── about-small-1.png
│   ├── about-small-2.png
│   ├── blog-1.png
│   ├── blog-2.png
│   ├── blog-3.png
│   └── media-bg.png
├── about/             # About page assets
│   ├── ticker-1.png
│   ├── ticker-2.png
│   ├── ticker-3.png
│   ├── ticker-4.png
│   ├── timeline-card.png
│   └── story.png
├── services/          # Services page assets
│   └── placeholder.png
└── shared/            # Shared across multiple pages
    ├── social-1.png
    ├── social-2.png
    ├── social-3.png
    ├── social-4.png
    └── social-5.png
```

## Usage by Page

### Homepage (`/`)
- Hero section: `home/hero.png`
- About preview: `home/about-large.png`, `home/about-small-1.png`, `home/about-small-2.png`
- Blog cards: `home/blog-1.png`, `home/blog-2.png`, `home/blog-3.png`
- Media section background: `home/media-bg.png`

### About Page (`/about`)
- Image ticker: `about/ticker-1.png` through `about/ticker-4.png`
- Timeline card: `about/timeline-card.png`
- Story section: `about/story.png`
- Social media grid: `shared/social-1.png` through `shared/social-5.png`

### Services Page (`/services`)
- All service sections: `services/placeholder.png` (reused for all 5 services)

### Contact Page (`/contact`)
- Social media grid: `shared/social-1.png` through `shared/social-5.png`

### Blogs Page (`/blogs`)
- Blog cards: `home/blog-1.png`, `home/blog-2.png`, `home/blog-3.png`

### Media Speaking Page (`/media-speaking`)
- Background: `home/media-bg.png`
- Speaker image: `home/about-large.png` (reused)

## Import Examples

```typescript
// Home page
import imgHero from "@/assets/home/hero.png";

// About page
import imgTicker1 from "@/assets/about/ticker-1.png";

// Shared assets
import imgSocial1 from "@/assets/shared/social-1.png";
```

## Notes

- All images use Next.js static imports
- Use `.src` property when passing to `<img>` tags: `src={imgHero.src}`
- Images are automatically optimized by Next.js during build
