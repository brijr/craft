# Craft Design System

[View Demo Site](https://craft-ds.com)

Craft is a lightweight, flexible design system for building responsive layouts in React and handling prose. It provides a set of foundational components that make it easy to create consistent, maintainable layouts while leveraging the power of Tailwind CSS.

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
- Next.js 13 or higher (recommended 15+)
- shadcn/ui (for the color system)
- Tailwind CSS
- TypeScript (recommended)

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

The root component that provides base styling and structure for the HTML document.

```tsx
import { Layout } from "@/components/craft";

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}
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

### Prose

A powerful component for rich text content with extensive typography styling. Can be rendered as an article element when needed.

```tsx
// As a div (default)
<Prose>
  <h1>Rich Text Content</h1>
  <p>Content with proper typography styling.</p>
</Prose>

// As an article with spacing
<Prose isArticle={true} isSpaced={true}>
  <h1>Article Title</h1>
  <p>Article content with proper typography and spacing.</p>
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

The Prose component provides a comprehensive typography system that handles:

- **Headings (h1-h6)**: Responsive sizing, proper tracking, and text balance
- **Paragraphs**: Text prettifying and proper base sizing
- **Inline Text**: Styling for strong, em, del, small, sub, and sup elements
- **Links**: Special styling with hover and focus states
- **Lists**: Styled ordered, unordered, and nested lists
- **Definition Lists**: Styled dt and dd elements
- **Code Blocks**: Different styling for inline code vs. code blocks
- **Tables**: Fully styled tables with alternating row colors
- **Media**: Styling for images, videos, figures, and captions
- **Block Elements**: Styling for blockquotes, horizontal rules, and details/summary
- **Interactive Elements**: Styling for keyboard shortcuts and abbreviations

### Typography Example

```tsx
<Prose isSpaced={true}>
  <h1>Main Heading</h1>
  <p>Introduction paragraph with <a href="#">links</a> and <code>inline code</code>.</p>

  <h2>Section Heading</h2>
  <p>More content with <strong>strong text</strong> and <em>emphasis</em>.</p>

  <ul>
    <li>List item one</li>
    <li>List item two
      <ul>
        <li>Nested list item</li>

      </ul>
    </li>
  </ul>

  <blockquote>
    <p>This is a blockquote with styled borders and background.</p>
  </blockquote>

  <pre><code>// This is a code block
function example() {
  return true;
}</code></pre>
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

```tsx
<Layout>
  <Nav>{/* Navigation content */}</Nav>
  <Main>
    <Section>
      <Container>
        <h1>Page Title</h1>
        {/* Content */}
      </Container>
    </Section>
  </Main>
</Layout>
```

### Content Structure

```tsx
<Prose isArticle={true} isSpaced={true}>
  <h1>Article Title</h1>
  <p>Introduction paragraph...</p>

  <h2>Section Title</h2>
  <p>Section content...</p>

  {/* Rich content with full typography styling */}
</Prose>
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT Bridger Tower 2025
