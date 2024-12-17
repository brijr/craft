# Craft Design System v0.3

Craft is a minimalist Design System developed using a single component file paired with the best design tools for Next.js. It was created by [Bridger Tower](https://bridger.to) to build websites with Next.js, Tailwind, shadcn/ui, and TypeScript faster

## Quick Start

To install Craft in your Next.js project, run:

```bash
npx craft-ds@latest init
```

Or use the Starter template at [starter.bridger.to](https://starter.bridger.to)

## Core Components

Craft provides several core components for building responsive layouts:

### Layout Components

- `Layout`: Sets up the basic HTML structure and applies global styles
- `Main`: Main content area of the page
- `Section`: Defines sections within the page
- `Container`: Contains content with a maximum width and padding
- `Article`: Renders articles with appropriate typography styles
- `Box`: Flexible component for creating responsive layouts

### Box Component

The `Box` component is the heart of Craft's layout system. It provides a flexible way to create both flex and grid layouts with responsive controls:

```jsx
import { Box } from "@/components/craft";

// Basic Flex Layout
<Box direction="row" wrap={true} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Box>

// Responsive Layout
<Box
  direction={{
    base: "col",
    md: "row"
  }}
  wrap={{
    base: true,
    md: false
  }}
  gap={{
    base: 2,
    md: 4
  }}
>
  <div>Item 1</div>
  <div>Item 2</div>
</Box>

// Grid Layout
<Box cols={{
  base: 1,
  md: 2,
  lg: 3
}} gap={4}>
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</Box>
```

#### Box Props

- `direction`: Control flex direction ("row" | "col")
- `wrap`: Enable/disable flex wrap
- `gap`: Set spacing between items
- `cols`: Define grid columns
- `rows`: Define grid rows

All props support responsive objects with breakpoints: base, sm, md, lg, xl, 2xl

### Typography

Typography is handled through a modified version of [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography). The styling is applied through the `Main` and `Article` components.

For font management, we recommend using [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with variable fonts.

### Colors

Colors are managed using [shadcn's theming system](https://ui.shadcn.com/docs/theming). Custom Tailwind classes like `text-primary` or `bg-accent` are defined in `globals.css`.

Find color schemes at:

- [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
- [ui.jln.dev](https://ui.jln.dev/)

## Setup Guide

1. Create a Next.js application:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

2. Install Craft (this will also install shadcn/ui and dependencies):

```bash
npx craft-ds@latest init
```

3. Import and use Craft components:

```jsx
import {
  Layout,
  Main,
  Section,
  Container,
  Article,
  Box,
} from "@/components/craft";
```

## Dependencies

- [shadcn/ui](https://ui.shadcn.com): Beautifully designed, accessible components
- [React Wrap Balancer](https://react-wrap-balancer.vercel.app/): Improves title readability

For detailed documentation and examples, visit [craft-ds.com](https://craft-ds.com)
