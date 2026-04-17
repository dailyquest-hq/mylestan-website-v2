# Myles Yeo Tan — Official Website

Professional portfolio website for Myles Yeo Tan: crypto trader, certified financial planner, Christian entrepreneur, and public speaker.

**Live site:** [mylesyeotan.com](https://mylesyeotan.com)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, SSR) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| UI Components | Radix UI, shadcn/ui |
| Icons | Lucide React |
| Fonts | Google Fonts (Darker Grotesque, Inter, Poppins) |
| Email | Resend |
| Analytics | Google Analytics 4 |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for transactional email |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Tests

```bash
npm test
npm run test:watch   # watch mode
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/        # POST /api/contact — contact form handler
│   │   └── newsletter/     # POST /api/newsletter — newsletter signup handler
│   ├── about/
│   ├── blogs/
│   ├── contact/
│   ├── faqs/
│   ├── jci-manila/
│   ├── media-speaking/
│   ├── myles-tan-ministries/
│   ├── services/
│   ├── layout.tsx          # Root layout (Navbar, Footer, GA)
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Shared UI components
├── lib/
│   ├── schemas.ts          # JSON-LD structured data schemas
│   └── utils.ts            # Utility functions
└── assets/                 # Static images
public/
├── sitemap.xml
└── robots.txt
```

## API Endpoints

### POST /api/contact

Sends a contact form submission via Resend.

**Request body:**
```json
{
  "name": "string (1–100 chars, required)",
  "email": "string (valid email, max 254 chars, required)",
  "message": "string (1–10000 chars, required)"
}
```

**Responses:** `200 { success: true }` · `400 { error: "Invalid input" }` · `500 { error: "Failed to send" }`

### POST /api/newsletter

Records a newsletter subscriber email via Resend.

**Request body:**
```json
{
  "email": "string (valid email, max 254 chars, required)"
}
```

**Responses:** `200 { success: true }` · `400 { error: "Invalid email" }` · `500 { error: "Failed to subscribe" }`

## Security

- **Input validation** — all API inputs are validated server-side (type, format, length limits)
- **No error detail exposure** — internal errors are logged server-side; generic messages are returned to clients
- **HTTP security headers** — HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Credentials in environment variables** — no secrets committed to version control (`.env.local` is git-ignored)
- **TypeScript strict mode** — type safety enforced throughout

## SEO

- Server-side rendering on all pages
- Structured data (JSON-LD) for Person, WebSite, and ProfessionalService
- Open Graph and Twitter Card metadata on all pages
- Sitemap and robots.txt
- AI-discoverable (ChatGPT, Claude, Perplexity)

## Deployment

### Vercel (recommended)

```bash
vercel --prod
```

Set environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Other platforms

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `.next` |
| Install command | `npm install` |
| Dev command | `npm run dev` |

## License

© 2026 Myles Yeo Tan. All rights reserved.
