# Craft Design System Documentation

Craft is a lightweight, flexible design system for building responsive layouts in React and handling prose. It provides a set of foundational components that make it easy to create consistent, maintainable layouts while leveraging the power of Tailwind CSS.

## Installation

```bash
# If using npm
npx init craft-ds

# If using pnpm
pnpx init craft-ds
```

## Core Components

### Layout

The root component that provides base styling and structure.

```tsx
import { Layout } from "@/components/craft";

export default function Page() {
  return <Layout>{/* Your page content */}</Layout>;
}
```

### Main

The primary content area of your page. Applies typography styles without spacing.

```tsx
<Main>
  <h1>Welcome</h1>
  <p>This content will have typography styles applied.</p>
</Main>
```

### Section

A semantic section container for grouping related content.

```tsx
<Section>
  <h2>Features</h2>
  {/* Section content */}
</Section>
```

### Container

Centers content and provides consistent horizontal padding.

```tsx
<Container>{/* Centered content with padding */}</Container>
```

### Article

Applies typography and spacing styles, ideal for long-form content.

```tsx
<Article>
  <h1>Article Title</h1>
  <p>Article content with proper typography and spacing.</p>
</Article>
```

### Prose

Similar to Article but without max-width constraints. Perfect for rich text content.

```tsx
<Prose>{/* Rich text content */}</Prose>
```

### Box

A powerful layout component that supports both Flexbox and Grid layouts with responsive properties.

#### Flex Layout Example:

```tsx
<Box direction={{ base: "col", md: "row" }} wrap="wrap" gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Box>
```

#### Grid Layout Example:

```tsx
<Box cols={{ base: 1, md: 2, lg: 3 }} gap={4}>
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</Box>
```

## Customization

### 1. Component Classes

All components accept a `className` prop for custom styling:

```tsx
<Container className="bg-gray-100 rounded-lg">{/* Content */}</Container>
```

### 2. Typography Styles

Typography styles can be customized by modifying the `styles.typography` object in `craft.tsx`:

```tsx
const styles = {
  typography: {
    base: [
      "font-sans antialiased",
      "[&_h1]:text-4xl [&_h1]:font-medium",
      // Add or modify styles here
    ],
  },
};
```

### 3. Responsive Design

Use Tailwind's responsive prefixes in className props:

```tsx
<Container className="px-4 sm:px-6 lg:px-8">{/* Content */}</Container>
```

### 4. Box Component Properties

The Box component accepts several props for layout customization:

```tsx
interface BoxProps {
  direction?: ResponsiveValue<"row" | "col">;
  wrap?: ResponsiveValue<"wrap" | "nowrap">;
  gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12>;
  cols?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  rows?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
}
```

All properties support responsive values:

```tsx
{
  base: "default value",
  sm: "small screens and up",
  md: "medium screens and up",
  lg: "large screens and up",
  xl: "extra large screens and up",
  "2xl": "2x extra large screens and up"
}
```

## Best Practices

1. **Component Hierarchy**

   - Use `Layout` at the root
   - Place main content in `Main`
   - Use `Section` to group related content
   - Use `Container` for consistent padding
   - Use `Article` or `Prose` for text content

2. **Responsive Design**

   - Start with mobile layouts
   - Use responsive props in Box component
   - Leverage Tailwind's responsive classes

3. **Typography**

   - Use `Article` or `Prose` for text-heavy content
   - Customize typography through the styles object
   - Maintain consistent heading hierarchy

4. **Layout Patterns**
   - Use Box for complex layouts
   - Prefer flex layout for simple arrangements
   - Use grid layout for uniform grid systems

## Examples

### Blog Post Layout

```tsx
<Layout>
  <Main>
    <Container>
      <Article>
        <h1>Blog Post Title</h1>
        <p>Blog post content...</p>
      </Article>
    </Container>
  </Main>
</Layout>
```

### Card Grid

```tsx
<Layout>
  <Main>
    <Section>
      <Container>
        <Box cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {cards.map((card) => (
            <div key={card.id} className="p-4 border rounded">
              {card.content}
            </div>
          ))}
        </Box>
      </Container>
    </Section>
  </Main>
</Layout>
```

### Two-Column Layout

```tsx
<Layout>
  <Main>
    <Container>
      <Box direction={{ base: "col", lg: "row" }} gap={8}>
        <div className="flex-1">
          <Article>
            <h1>Main Content</h1>
            <p>Article content...</p>
          </Article>
        </div>
        <div className="w-full lg:w-1/3">
          <Prose>
            <h2>Sidebar</h2>
            <p>Sidebar content...</p>
          </Prose>
        </div>
      </Box>
    </Container>
  </Main>
</Layout>
```
