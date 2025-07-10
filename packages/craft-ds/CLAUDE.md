# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `cd web && npm run dev` - Start the Next.js demo site in development mode with Turbopack
- `cd web && npm run build` - Build the Next.js demo site for production
- `cd web && npm run lint` - Run ESLint on the demo site code

### Package Distribution

- `pnpx craft-ds init` - CLI command to install craft-ds in a Next.js project (run from target project)

## Architecture

craft-ds is a minimalist design system for Next.js applications with two main parts:

1. **NPM Package (craft-ds)**: The core design system distributed via npm

   - `ds.tsx` - Main component file containing Layout, Main, Section, Container, Nav, and Prose components
   - `lib/utils.ts` - Utility functions including `cn()` for className merging
   - `bin/init.js` - CLI installer that sets up the design system in target projects

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
// Standard layout pattern
<Layout>
  <Nav>{/* Navigation with optional blur/border */}</Nav>
  <Main>
    <Section>{/* Semantic sections with consistent spacing */}</Section>
  </Main>
</Layout>
```

### Installation Process (handled by CLI)

1. Validates Node.js v18+ and Next.js project structure
2. Installs required dependencies (tailwindcss-animate, clsx, tailwind-merge)
3. Optionally sets up shadcn/ui with base configuration
4. Copies ds.tsx to target project's components directory
5. Updates import paths automatically

### Testing

Currently no test framework is implemented. The `test` script is a placeholder.
