# Craft Design System

Craft is a Design System developed using a single component file paired with the best design tools for Next.js. It was created by [Bridger Tower](https://bridger.to) to build websites with Next.js, Tailwind, shadcn/ui, and TypeScript faster 🚀

## Quick Start

To install Craft in your Next.js project, run:

```bash
npx craft-ds@latest init
```

Or use the Starter template at [starter.bridger.to](https://starter.bridger.to)

> Watch the [Demo video](https://youtu.be/YKkGNZK8En8)

## Handle Layout, Typography, and Colors

> brijr/craft is a Design System developed using **one component file** paired with the best design tools for Next.js. Craft was put together by [Bridger Tower](https://bridger.to) to build websites with NextJS, Tailwind, shadcn/ui, and TypeScript faster 🚀
>
> Try it out using [brijr/components](https://github.com/brijr/components) 👀

### Layout

Layout and Spacing is handled by the components provided in `craft.tsx`. You can use these components to build your layout. Here is an example of how to use the components:

```jsx
import { Main, Section, Container, Box } from "@/components/craft";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>Heading</h1>
          <p>Content</p>
          <Box direction="row" wrap={true} gap={4}>
            <div>Item 1</div>
            <div>Item 2</div>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
```

This will handle the vertical and horizontal spacing, the max-width of the container, and the padding of the container and typography spacing. You can also use the `Article` component to handle the layout of an article as the max-width is a bit smaller for readability.

The new `Box` component provides a flexible way to create both flex and grid layouts. Use it for responsive designs and complex layouts.

Check out the `craft.tsx` file to see how the components are styled and make changes accordingly.

### Typography

The Typography System is a modified version of [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography). You can find how it is styled in the `<Main />` and `<Article />` component of the `craft.tsx` file.

To manage fonts in your website/software I use [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts). I prefer to use a variable font. Here is a [video about how this works](https://www.youtube.com/watch?v=L8_98i_bMMA).

### Colors

To manage the colors of your website brijr/craft uses the [system by shadcn](https://ui.shadcn.com/docs/theming). You can see this in the `app/globals.css` and you can make color changes accordingly. In order for this to work you use custom Tailwind styles such as `text-primary` or `bg-accent` etc. as defined in `globals.css`.

To find color schemes check out this tool provided by shadcn: [ui.shadcn.com/themes](https://ui.shadcn.com/themes) or [ui.jln.dev](https://ui.jln.dev/).

## Setup and Getting Started

- [Create a Next.js application](https://nextjs.org/docs/getting-started/installation) and use Tailwind and Typescript

  ```bash
  npx create-next-app@latest my-app --typescript --tailwind --eslint
  ```

- Run this command to Install brijr/craft (this will also install shadcn/ui and all other dependencies)

  ```bash
  npx craft-ds@latest init
  ```

- Add craft components to build your layout

  ```jsx
  import {
    Layout,
    Main,
    Section,
    Container,
    Article,
    Box
  } from "@/components/craft.tsx";
  ```

## Packages and Libraries

### [shadcn/ui](https://ui.shadcn.com)

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. Built with Radix UI by [shadcn](https://shadcn.com). This handles the colors and the base components of brijr/craft.

### [React Wrap Balancer](https://react-wrap-balancer.vercel.app/)

Simple React Component That Makes Titles More Readable. React Wrap Balancer reduces the width of the content wrapper as much as it could, before causing an extra line break. When reaching the minimum width, each line will approximately have the same width, and look more compact and balanced.

### [Tailwind Merge](https://tailwind-merge.vercel.app/)

A utility library for merging Tailwind CSS classes with support for responsive design. It helps in dynamically applying Tailwind classes based on different screen sizes.

### [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

A plugin that provides a set of prose classes to style text content using Tailwind CSS. It automatically styles paragraphs, headings, lists, and more, making it easy to create a consistent typography style for your website.

## Components

> There are currently six components
>
> - Layout
> - Main
> - Section
> - Container
> - Article
> - Box

For detailed usage of each component, refer to the `craft.tsx` file or [craft-ds.com](https://craft-ds.com).
