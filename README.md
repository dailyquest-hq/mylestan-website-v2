# Generate Next.js Component

This is a **Vite + React** application exported from Figma. The original Figma design is available at https://www.figma.com/design/NBMsYN1jB2oMXa1rbTriC5/Generate-Next.js-Component.

**Note:** Despite the name, this is **not a Next.js project**. It's a Vite-based React application using React Router for navigation.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Radix UI** - Accessible component primitives
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── app/              # Page components (using Next.js-style naming)
│   ├── page.tsx      # Homepage
│   ├── about/
│   ├── services/
│   ├── contact/
│   ├── blogs/
│   ├── media-speaking/
│   └── faqs/
├── components/       # Reusable components
│   ├── ui/          # shadcn/ui components
│   ├── layout/      # Layout components (Navbar, Footer)
│   └── figma/       # Figma-specific components
├── assets/          # Images and static assets
├── lib/             # Utility functions
└── styles/          # Global styles
```

## Routes

- `/` - Homepage
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page
- `/blogs` - Blog listing
- `/media-speaking` - Media & Speaking page
- `/faqs` - FAQs page

## Development Notes

- The project uses Vite aliases configured in `vite.config.ts`
- `@/` alias points to the `src/` directory
- Figma assets are imported using `figma:asset/` prefix (configured in vite.config.ts)
- The `"use client"` directives in some files are remnants from the Figma export and can be ignored (they have no effect in Vite)

## Building for Production

```bash
npm run build
```

The built files will be in the `build/` directory.

To preview the production build:

```bash
npm run preview
```

## Troubleshooting

If you encounter any issues:

1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```

3. Ensure you're using Node.js 18 or higher:
   ```bash
   node --version
   ```
