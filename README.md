![craft](https://github.com/brijr/craft/assets/57158102/33af93c2-fd11-41c6-b4cb-30e5e5c9bc35)

# brijr/craft

```bash
npx brijr-craft@latest init
```

Or use the Starter template at [starter.bridger.to](https://starter.bridger.to)

## Handle Typography, Colors, and Layout all with one file.

> brijr/craft is a Design System developed using **one component file** added to teh root folder of a Tailwind/Next.js application. Created by [Bridger Tower](https://bridger.to) to build websites with NextJS, Tailwind, shadcn/ui, and TypeScript faster 🚀
>
> Try it out using [brijr/components](https://github.com/brijr/components) 👀

## Getting Started

- [Create a Next.js application](https://nextjs.org/docs/getting-started/installation) and use Tailwind and Typescript

  ```bash
  npx create-next-app@latest my-app --typescript --tailwind --eslint
  ```

- Run this command to Install brijr/craft (this will also install shadcn/ui and all other dependencies)

  ```bash
  npx brijr-craft@latest init
  ```

- Add craft components to build you layout

  ```jsx
  import { Layout, Main, Section, Container, Article } from '@/components/craft.tsx';
  ```


## Components

> There are currently five components
>
> - Layout
> - Main
> - Section
> - Container
> - Article

### Layout

The `Layout` component serves as the foundational element that wraps around your application's structure. It sets up the basic layout and applies global styles.

**Props:**

- `children: React.ReactNode` - The content to be displayed within the layout.
- `className?: string` - Optional CSS classes to customize the appearance.

**Usage:**

```jsx
<Layout className="custom-class">
  {/* content here */}
</Layout>
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

## Installation

To use these components in your project, install the package via npm:

```
npx brijr-craft@latest init
```

## Importing Components

You can import the components you need at the top of your React component file like so:

```jsx
import { Layout, Main, Section, Container, Article } from '@/components/craft.tsx';
```

This documentation provides a quick start guide for integrating and utilizing the layout components in your web applications. Customize the components with additional styles or functionality as needed to fit your project's requirements.
