# Craft Design System

[View Demo Site](https://craft-ds.com)

Craft is a React + Tailwind design system for building responsive layouts and handling prose. It is one component file (`ds.tsx`) and one CSS file (`ds.css`): layout primitives, portable type roles, and a Prose applicator for markdown. It is not Next-only — Vite and React Router work the same way.

### Quick Start

To quickly get up and building with shadcn and craft use this command:

```bash
pnpx shadcn init my-app
cd my-app
pnpx craft-ds inits
```

To add to an existing project, use:

```bash
pnpx craft-ds init
```

## Features

- **Modern Styling**: Built with Tailwind CSS and compatible with shadcn/ui
- **Responsive Design**: First-class support for responsive layouts
- **Type-Safe**: Written in TypeScript with strong type inference
- **Performance**: Zero runtime overhead, all styles are compiled
- **Accessible**: Built with WCAG guidelines in mind
- **Lightweight**: No external dependencies beyond Tailwind CSS
- **Inline Styles Support**: Easily apply custom styles directly to components

## Requirements

- Node.js 18 or higher (recommended 20+)
- React
- Tailwind CSS v4
- TypeScript (recommended)
- shadcn/ui is optional (Craft ships color fallbacks; shadcn tokens still win when present)

## Quick Start

```bash
# Using npm
npx init craft-ds

# Using pnpm (recommended)
pnpx init craft-ds

# Using yarn
yarn create craft-ds
```

The installer will:

1. Check your environment and dependencies
2. Install and configure required packages
3. Set up the Craft component in your project
4. Optionally install and configure shadcn/ui

## Core Components

### Layout

`Layout` renders the document `<html>` element. Use it only as the Next.js App Router document root. Vite and React Router already own `<html>` — put the exported `root` classes on that element and do not wrap the document in Craft `Layout`.

```tsx
import { Layout, root } from "@/components/ds";

// Next.js App Router only
export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}

// Vite or React Router: existing document <html>
<html lang="en" className={root}>
```

### Main

The primary content area of your page.

```tsx
<Main>
  <h1>Welcome</h1>
  <p>This content will be in the main section.</p>
</Main>
```

### Section

A semantic section container for grouping related content with vertical padding.

```tsx
<Section>
  <h2>Features</h2>
  {/* Section content */}
</Section>
```

### Container

Centers content with a maximum width and provides consistent padding.

```tsx
<Container>{/* Centered content with padding */}</Container>
```

### Nav

Creates a navigation container with an inner div for navigation elements.

```tsx
<Nav>
  <div>Logo</div>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</Nav>
```

### Typography

Portable type roles for UI. Content HTML still uses Prose.

```tsx
import { typography, Prose, cn } from "@/components/ds";

<h1 className={typography.h1}>Settings</h1>
<p className={cn(typography.lead, typography.muted)}>
  Manage your workspace.
</p>

<Prose isArticle isSpaced>
  <h1>Article title</h1>
  <p className="lead">Intro for markdown or CMS HTML.</p>
</Prose>
```

- UI text → `typography.*`
- Markdown / CMS / AI HTML → `<Prose>`
- Do not wrap app UI in Prose
- Do not put `typography.*` on children inside Prose

`typography.h1` is `"type-h1 sm:type-h1-sm"`. Import `ds.css` after Tailwind or the classes will not exist.

### Prose

Styles descendant HTML for articles, markdown, and CMS output. Renders as an article when `isArticle` is set. Inside Prose, `lead`, `large`, `small`, and `muted` work as class names on the HTML.

```tsx
<Prose>
  <h1>Rich Text Content</h1>
  <p>Content with proper typography styling.</p>
</Prose>

<Prose isArticle isSpaced>
  <h1>Article Title</h1>
  <p className="lead">Article intro.</p>
</Prose>
```

## Component Props

All components share a common props interface:

```typescript
type DSProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
  containerClassName?: string; // Used in Nav component
  isArticle?: boolean; // Used in Prose component
  isSpaced?: boolean; // Used in Prose component
};
```

## Typography System

`typography` covers headings, body, lead, large, small, caption, and muted. Prose maps those recipes onto descendant tags and adds content chrome:

- **Headings (h1-h6)**: Responsive sizing, tight tracking, text balance, heading line-heights
- **Paragraphs**: Pretty wrapping and body size
- **Inline Text**: strong, em, del, small, sub, and sup
- **Links**: Hover and focus, skipped inside headings
- **Lists**: Ordered, unordered, nested, and definition lists
- **Code**: Inline code vs. code blocks
- **Tables, media, blockquotes, rules, details, kbd, abbr**

### Content example

```tsx
<Prose isSpaced>
  <h1>Main Heading</h1>
  <p className="lead">Introduction with <a href="#">links</a> and <code>inline code</code>.</p>

  <h2>Section Heading</h2>
  <p>More content with <strong>strong text</strong> and <em>emphasis</em>.</p>

  <ul>
    <li>List item one</li>
    <li>
      List item two
      <ul>
        <li>Nested list item</li>
      </ul>
    </li>
  </ul>
</Prose>
```

## Customization

### Tailwind Configuration

Craft works seamlessly with your Tailwind configuration. You can customize:

- Colors through your color palette
- Spacing through your spacing scale
- Typography through your font settings
- Breakpoints through your screen configurations

### Component Styling

All components accept a `className` prop for custom styling:

```tsx
<Container className="bg-gray-100 dark:bg-gray-900">
  <Section className="py-12">
    <h1>Custom Styled Section</h1>
  </Section>
</Container>
```

## Best Practices

### Layout Structure

Next.js App Router document root:

```tsx
<Layout>
  <Nav>{/* Navigation content */}</Nav>
  <Main>
    <Section>
      <Container>
        <h1 className={typography.h1}>Page Title</h1>
      </Container>
    </Section>
  </Main>
</Layout>
```

Vite / React Router — do not wrap `<html>` in Craft `Layout`:

```tsx
<html lang="en" className={root}>
  <body>
    <Nav>{/* Navigation content */}</Nav>
    <Main>
      <Section>
        <Container>
          <h1 className={typography.h1}>Page Title</h1>
        </Container>
      </Section>
    </Main>
  </body>
</html>
```

### Content Structure

```tsx
<h1 className={typography.h1}>Page Title</h1>
<p className={cn(typography.lead, typography.muted)}>Short description.</p>

<Prose isArticle isSpaced>
  <h1>Article Title</h1>
  <p>Introduction paragraph...</p>
</Prose>
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT Bridger Tower 2025
