# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `cd web && npm run dev` - Start the Next.js demo site in development mode with Turbopack
- `cd web && npm run build` - Build the Next.js demo site for production
- `cd web && npm run lint` - Run ESLint on the demo site code

### Package Distribution

- `pnpx craft-ds init` - CLI command to install craft-ds in a React + Tailwind project (run from target project)

## Architecture

craft-ds is a React + Tailwind design system with two main parts:

1. **NPM Package (craft-ds)**: The core design system distributed via npm

   - `ds.tsx` - Layout primitives, `typography` roles, and the Prose wrapper
   - `ds.css` - `@theme` tokens, `type-*` utilities, and `ds-prose` content styles
   - `lib/utils.ts` - Utility functions including `cn()` for className merging
   - `bin/init.js` - CLI installer that copies `ds.tsx` + `ds.css` and injects the CSS import

2. **Demo Website (/web)**: Next.js 15 app showcasing the design system
   - Uses app router structure
   - Configured with Tailwind CSS v4, TypeScript, and shadcn/ui
   - Serves as both documentation and live examples

### Key Design Principles

- **Zero runtime overhead**: All styles compiled at build time via Tailwind CSS
- **Type-safe**: Full TypeScript support with strict mode
- **Responsive-first**: Mobile-first breakpoints (sm, md, lg, xl, 2xl)
- **Composable**: Components work together to create consistent layouts

### Component Architecture

```tsx
// Next.js App Router document root only
<Layout>
  <Nav>{/* Navigation with optional blur/border */}</Nav>
  <Main>
    <Section>{/* Semantic sections with consistent spacing */}</Section>
  </Main>
</Layout>

// Vite / React Router: put `root` on the existing <html>. Do not wrap that document in Craft Layout.
<html lang="en" className={root}>
```

### Typography

- UI text → `typography.*` (`typography.h1` is `"type-h1 sm:type-h1-sm"`)
- Markdown / CMS / AI HTML → `<Prose>`
- Do not wrap app UI in Prose
- Do not put `typography.*` on children inside Prose

The export is `typography` because `type` is a TypeScript import keyword.

### Installation Process (handled by CLI)

1. Validates Node.js v18+ and a `package.json` (Next.js is not required)
2. Installs required dependencies (clsx, tailwind-merge; Tailwind if missing)
3. Optionally sets up shadcn/ui with base configuration
4. Copies `ds.tsx` and `ds.css` to the target project's components directory
5. Injects `@import ".../ds.css"` after `@import "tailwindcss"` when it finds `app/globals.css`, `src/app/globals.css`, `src/styles/globals.css`, `styles/globals.css`, `app/app.css`, `src/index.css`, or `src/style.css`. Warns and prints the import if none exist.

`Layout` is Next App Router document-root only. Vite / React Router put `root` on the existing `<html>` and must not wrap that document in Craft `Layout`.

### Testing

- `npm test` in this package runs `node --test` (installer helpers and package surface).
