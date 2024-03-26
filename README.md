# brijr/craft

> brijr/craft is a Design System is a group of `npm` packages and **one component file** created by [Bridger Tower](https://bridger.to) to build websites with NextJS, Tailwind, shadcn/ui, and TypeScript faster 🚀

## Getting Started 

- [Create a Next.js application](https://nextjs.org/docs/getting-started/installation) and use Tailwind and Typescript
  ```bash
  npx create-next-app@latest my-app --typescript --tailwind --eslint
  ```
- [Install shadcn/ui](https://ui.shadcn.com/docs/installation/next) in your Next.js Applcation
- Run this command to install the dependencies for Craft
  ```bash
  npm install @tailwindcss/typography clsx@latest tailwind-merge@latest
  ```
- Create a `craft.tsx` component in your `/components` folder in Next.js
- Copy and paste [the code](https://github.com/brijr/craft-ds/blob/main/craft.tsx) into your new component
- You are ready to import the Components into your project!


## Components

> There are currently five components
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
npm install your-package-name
```

## Importing Components

You can import the components you need at the top of your React component file like so:

```jsx
import { Layout, Main, Section, Container, Article } from 'your-package-name';
```

This documentation provides a quick start guide for integrating and utilizing the layout components in your web applications. Customize the components with additional styles or functionality as needed to fit your project's requirements.
