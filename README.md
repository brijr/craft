![craft](https://github.com/brijr/craft/assets/57158102/33af93c2-fd11-41c6-b4cb-30e5e5c9bc35)

# craft-ds

```bash
npx craft-ds@latest init
```

> **Note:** If you are using pnpm, you can use the `pnpm dlx` command to install the package.

```bash
pnpm dlx craft-ds@latest init
```


Or use the Starter template at [starter.bridger.to](https://starter.bridger.to)

> Watch the [Demo video](https://youtu.be/YKkGNZK8En8)

## Handle Layout, Typography, and Colors

> brijr/craft is a Design System developed using **one component file** paired with the best design tools for Next.js. Craft was put together by [Bridger Tower](https://bridger.to) at [9d8](https://9d8.dev) to build websites with NextJS, Tailwind, shadcn/ui, and TypeScript faster 🚀
>
> Try it out using [brijr/components](https://github.com/brijr/components) 👀

### Layout

Layout and Spacing is handled by the components provided in `craft.tsx`. You can use these components to build your layout. Here is an example of how to use the components:

```jsx
import { Main, Section, Container } from "@/components/craft";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>Heading</h1>
          <p>Content</p>
        </Container>
      </Section>
    </Main>
  );
}
```

This will handling the vertical and horizontal spacing, the max-width of the container, and the padding of the container and typography spacing. You can also use the `Article` component to handle the layout of an article as the max-width is a bit smaller for readability.

Check out the `craft.tsx` file to see how the components are styled and make changes accordingly.

### Typography

The Typography System is a modified version of [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography). You can find how it is styled in the `<Main />` and `<Article />` component of the `craft.tsx` file.

To manage fonts in your website/software I use [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts). I prefer to use a variable font. Here is a [video about how this works](https://www.youtube.com/watch?v=L8_98i_bMMA).

### Colors

To manage the colors of your website brijr/craft uses the [system by shadcn](https://ui.shadcn.com/docs/theming). You can see this in the `app/globals.css` and you can make color changes accordingly. In order for this to work you use custom Tailwind styles such as `text-primary` or `bg-accent` etc. as defined in `globals.css`. Example below:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9;
  }
}
```

By using this system it will also take care of dark mode coloring/styling. To add darkmode to your application add a [theme provider and theme toggle](https://ui.shadcn.com/docs/dark-mode/next).

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

- Add craft components to build you layout

  ```jsx
  import {
    Layout,
    Main,
    Section,
    Container,
    Article,
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

> There are currently seven components
>
> - Layout
> - Main
> - Section
> - Container
> - Article
> - Flex
> - Grid

### Layout

The `Layout` component serves as the foundational element that wraps around your application's structure. It sets up the basic layout and applies global styles.

**Props:**

- `children: React.ReactNode` - The content to be displayed within the layout.
- `className?: string` - Optional CSS classes to customize the appearance.

**Usage:**

```jsx
<Layout className="custom-class">{/* content here */}</Layout>
```

### Main

The `Main` component is designed to be used as the primary content container within your application.

**Props:**

- `children: React.ReactNode` - The main content of your application.
- `className?: string` - Optional CSS classes for styling.
- `id?: string` - An optional ID for targeting or referencing the element.

**Usage:**

```jsx
<Main className="custom-class" id="main-content">
  {/* main content here */}
</Main>
```

### Section

The `Section` component is intended for wrapping different sections of your application, providing a way to organize your content semantically.

**Props:**

- `children: React.ReactNode` - The content within this section.
- `className?: string` - Optional CSS classes for styling.
- `id?: string` - An optional ID for the section.

**Usage:**

```jsx
<Section className="custom-section" id="unique-section">
  {/* section content here */}
</Section>
```

### Container

The `Container` component acts as a wrapper for your content, constraining its width and centering it within the layout.

**Props:**

- `children: React.ReactNode` - The content to be contained.
- `className?: string` - Optional CSS classes for styling.
- `id?: string` - An optional ID for the container.

**Usage:**

```jsx
<Container className="custom-container" id="container-id">
  {/* contained content here */}
</Container>
```

### Article

The `Article` component is specifically designed for wrapping article or blog post content, ensuring it's properly styled and accessible.

**Props:**

- `children: React.ReactNode` - The article content.
- `className?: string` - Optional CSS classes for styling.
- `id?: string` - An optional ID for the article.

**Usage:**

```jsx
<Article className="custom-article" id="article-id">
  {/* article content here */}
</Article>
```

### Flex

The `Flex` component (formerly Stack) is designed to create flexible vertical or horizontal layouts with customizable gap and padding, supporting responsive breakpoints.

**Props:**

- `children: React.ReactNode` - The content to be arranged in a flex layout.
- `className?: string` - Optional CSS classes for additional styling.
- `direction?: Responsive<"row" | "column">` - The flex direction (default is "column"). Can be responsive.
- `gap?: Responsive<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>` - The gap between flex items (default is 0). Can be responsive.
- `padding?: Responsive<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>` - The padding around the flex container (default is 0). Can be responsive.

**Usage:**

```jsx
<Flex
  direction={{ sm: "column", md: "row" }}
  gap={{ sm: 2, md: 4 }}
  padding={{ sm: 2, md: 4 }}
  className="custom-flex"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

### Grid

The `Grid` component is designed to create a responsive grid layout with customizable columns, rows, and gap, supporting responsive breakpoints.

**Props:**

- `children: React.ReactNode` - The content to be arranged in a grid layout.
- `className?: string` - Optional CSS classes for additional styling.
- `columns?: Responsive<number>` - The number of columns in the grid (default is 1). Can be responsive.
- `rows?: Responsive<number>` - The number of rows in the grid (default is 1). Can be responsive.
- `gap?: Responsive<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>` - The gap between grid items (default is 0). Can be responsive.

**Usage:**

```jsx
<Grid
  columns={{ sm: 1, md: 2, lg: 3 }}
  rows={{ sm: 1, md: 2 }}
  gap={{ sm: 2, md: 4 }}
  className="custom-grid"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```
