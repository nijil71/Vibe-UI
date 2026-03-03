# Contributing to VibeUI

We love pull requests from everyone! Here's how to contribute.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Vibe-UI.git
   cd Vibe-UI
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── components/        # Component listing & detail pages
│   ├── docs/              # Documentation pages
│   └── preview/           # Isolated preview routes for iframes
├── components/
│   ├── sections/          # All UI section components (the library)
│   ├── ui/                # Shared utility components (Button, Toast, etc.)
│   └── ...                # Layout components (Navbar, Footer, etc.)
├── data/
│   └── components.tsx     # Component registry (lazy-loaded)
└── lib/
    └── utils.ts           # Utility functions
```

## Adding a New Component

1. **Create the component** in `src/components/sections/YourComponent.tsx`:
   - Export a named function component
   - Use `"use client"` directive if it contains interactivity
   - Use Tailwind CSS for styling and Framer Motion for animations

2. **Register it** in three files:
   - `src/data/components.tsx` — Add a `next/dynamic` import and entry in the `COMPONENTS` object
   - `src/components/ComponentGrid.tsx` — Add a card entry with icon and tags
   - `src/app/components/[slug]/page.tsx` — Add a file mapping in `COMPONENT_FILE_MAP`

3. **Test** by running `npm run dev` and visiting `/components/your-slug`

## Coding Standards

- **TypeScript** — All code must be TypeScript
- **Tailwind CSS** — Use Tailwind utilities; avoid inline styles
- **Framer Motion** — Use for animations; keep them subtle and performant
- **Accessibility** — All interactive elements must have `aria-label` attributes
- **Naming** — Use PascalCase for components, kebab-case for slugs

## Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-component-name
   ```
2. Make your changes and commit with clear messages
3. Run `npm run build` to ensure there are no errors
4. Push to your fork and open a Pull Request
5. Describe what your PR does and include screenshots if applicable

## Code of Conduct

Be respectful and considerate.
