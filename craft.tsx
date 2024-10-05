// craft-ds, v0.2.2

// How to use craft-ds:
// 1. Install craft-ds in your Next.js project:
//    npx craft-ds@latest init
//    or
//    pnpm dlx craft-ds@latest init
//
// 2. Import the components you need in your React components:
//    import { Layout, Main, Section, Container, Article, Flex, Grid } from "@/components/craft";
//
// 3. Use the components to build your layout:
//    export default function Page() {
//      return (
//        <Main>
//          <Section>
//            <Container>
//              <h1>Heading</h1>
//              <p>Content</p>
//            </Container>
//          </Section>
//        </Main>
//      );
//    }
//
// 4. Customize the components using the className prop:
//    <Container className="custom-container">
//      {/* Your content here */}
//    </Container>
//
// 5. Use the Flex and Grid components for more complex layouts:
//    <Flex direction={{ sm: "column", md: "row" }} gap={4}>
//      <div>Item 1</div>
//      <div>Item 2</div>
//    </Flex>
//
//    <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
//      <div>Item 1</div>
//      <div>Item 2</div>
//      <div>Item 3</div>
//    </Grid>

import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names using clsx and tailwind-merge

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Types for component props

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

type ArticleProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
};

type Responsive<T> = T | { sm?: T; md?: T; lg?: T; xl?: T };

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Responsive<"row" | "column">;
  gap?: Responsive<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
  padding?: Responsive<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
};

type GridProps = {
  children: React.ReactNode;
  className?: string;
  cols?: Responsive<1 | 2 | 3 | 4 | 5 | 6>;
  gap?: Responsive<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
};

// Layout Component
// This component sets up the basic HTML structure and applies global styles

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
    >
      {children}
    </html>
  );
};

// Usage example for Layout component in README.md
// <Layout className="custom-class">{/* content here */}</Layout>

// Main Component
// This component is used for the main content area of the page

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main
      className={cn(
        // `Main` Specific Styles
        "max-w-none prose-p:m-0",
        // General Prose
        "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:font-normal",
        // Prose Strong
        "prose-strong:font-semibold",
        // Inline Links
        "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
        // Inline Link Hover
        "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
        // Blockquotes
        "prose-blockquote:not-italic",
        // Pre and Code Blocks
        "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
        className
      )}
      id={id}
    >
      {children}
    </main>
  );
};

// Usage example for Main component in README.md
// <Main className="custom-class" id="main-content">
//   {/* main content here */}
// </Main>

// Section Component
// This component is used for defining sections within the page

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-8 md:py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Usage example for Section component in README.md
// <Section className="custom-section" id="unique-section">
//   {/* section content here */}
// </Section>

// Container Component
// This component is used for containing content with a maximum width and padding

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
      {children}
    </div>
  );
};

// Usage example for Container component in README.md
// <Container className="custom-container" id="container-id">
//   {/* contained content here */}
// </Container>

// Article Component
// This component is used for rendering articles with optional dangerouslySetInnerHTML

const Article = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
}: ArticleProps) => {
  return (
    <article
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={cn(
        // General Prose
        "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:font-normal",
        // Prose Paragraphs
        "prose-p:mb-0",
        // Prose Strong
        "prose-strong:font-semibold",
        // Inline Links
        "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
        // Inline Link Hover
        "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
        // Blockquotes
        "prose-blockquote:not-italic",
        // Pre and Code Blocks
        "prose-pre:border prose-pre:bg-muted/25",
        className
      )}
      id={id}
    >
      {children}
    </article>
  );
};

// Usage example for Article component in README.md
// <Article className="custom-article" id="article-id">
//   {/* article content here */}
// </Article>

// Flex Component (formerly Stack)
// This component is used for creating flexible layouts with direction, gap, and padding

const Flex = React.memo(
  ({
    children,
    className,
    direction = "column",
    gap = 0,
    padding = 0,
  }: FlexProps) => {
    const directionClasses = (d: "row" | "column") =>
      d === "row" ? "flex-row" : "flex-col";
    const gapClasses = (g: number) => `gap-${g}`;
    const paddingClasses = (p: number) => `p-${p}`;

    const responsiveClasses = (
      prop: Responsive<any>,
      classFn: (value: any) => string
    ) => {
      if (typeof prop !== "object") return classFn(prop);
      return Object.entries(prop)
        .map(([breakpoint, value]) =>
          breakpoint === "sm"
            ? classFn(value)
            : `${breakpoint}:${classFn(value)}`
        )
        .join(" ");
    };

    return (
      <div
        className={cn(
          "flex",
          responsiveClasses(direction, directionClasses),
          responsiveClasses(gap, gapClasses),
          responsiveClasses(padding, paddingClasses),
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

// Usage example for Flex component in README.md
// <Flex
//   direction={{ sm: "column", md: "row" }}
//   gap={{ sm: 2, md: 4 }}
//   padding={{ sm: 2, md: 4 }}
//   className="custom-flex"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </Flex>

// Grid Component
// This component is used for creating responsive grid layouts

/**
 * Grid component for creating responsive grid layouts.
 * @param {GridProps} props - The props for the Grid component.
 * @returns {JSX.Element} A grid container with the specified properties.
 */

const Grid = React.memo(
  ({ children, className, cols = 3, gap = 4 }: GridProps) => {
    const colClasses = (c: number) =>
      ({
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      }[c] || "grid-cols-3");

    const gapClasses = (g: number) => `gap-${g}`;

    const responsiveClasses = (
      prop: Responsive<number>,
      classFn: (n: number) => string
    ) => {
      if (typeof prop === "number") return classFn(prop);
      return Object.entries(prop)
        .map(([breakpoint, value]) =>
          breakpoint === "sm"
            ? classFn(value)
            : `${breakpoint}:${classFn(value)}`
        )
        .join(" ");
    };

    return (
      <div
        className={cn(
          "grid",
          responsiveClasses(cols, colClasses),
          responsiveClasses(gap, gapClasses),
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

// Usage example for Grid component in README.md
// <Grid
//   columns={{ sm: 1, md: 2, lg: 3 }}
//   rows={{ sm: 1, md: 2 }}
//   gap={{ sm: 2, md: 4 }}
//   className="custom-grid"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </Grid>

// Exporting all components for use in other parts of the application

export { Layout, Main, Section, Container, Article, Flex, Grid };
