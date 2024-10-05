// craft-ds, v0.2.48

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

type Responsive<T> = T | { sm?: T; md?: T; lg?: T; xl?: T; "2xl"?: T };

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Responsive<"row" | "col">;
  wrap?: Responsive<boolean>;
  gap?: Responsive<number>;
};

type GridProps = {
  children: React.ReactNode;
  className?: string;
  cols?: Responsive<number>;
  rows?: Responsive<number>;
  gap?: Responsive<number>;
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

// Section Component
// This component is used for defining sections within the page

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-8 md:py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
// This component is used for containing content with a maximum width and padding

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
      {children}
    </div>
  );
};

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

const responsiveClasses = (prop: Responsive<any>, prefix: string): string => {
  if (typeof prop !== "object") return `${prefix}-${prop}`;
  return Object.entries(prop)
    .map(([breakpoint, value]) =>
      breakpoint === "sm"
        ? `${prefix}-${value}`
        : `${breakpoint}:${prefix}-${value}`
    )
    .join(" ");
};

const Flex = ({
  children,
  className,
  direction = "row",
  wrap = false,
  gap = 0,
}: FlexProps) => {
  return (
    <div
      className={cn(
        "flex",
        responsiveClasses(direction, "flex"),
        wrap && responsiveClasses(wrap, "flex-wrap"),
        responsiveClasses(gap, "gap"),
        className
      )}
    >
      {children}
    </div>
  );
};

const Grid = ({ children, className, cols = 1, rows, gap = 0 }: GridProps) => {
  return (
    <div
      className={cn(
        "grid",
        responsiveClasses(cols, "grid-cols"),
        rows && responsiveClasses(rows, "grid-rows"),
        responsiveClasses(gap, "gap"),
        className
      )}
    >
      {children}
    </div>
  );
};

// Exporting all components for use in other parts of the application

export { Layout, Main, Section, Container, Article, Flex, Grid };

// Instructions for AI

// How to use craft-ds:
// 1. Import the components you need in your React components:
//    import { Layout, Main, Section, Container, Article, Flex, Grid } from "@/components/craft";

// 2. Use the components to build your layout:
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

// 3. Customize the components using the className prop:
//    <Container className="custom-container">
//      {/* Your content here */}
//    </Container>

// 4. Use the Flex and Grid components for more complex layouts:
//    <Flex direction={{ sm: "col", md: "row" }} wrap={true} gap={4}>
//      <div>Item 1</div>
//      <div>Item 2</div>
//    </Flex>

//    <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
//      <div>Item 1</div>
//      <div>Item 2</div>
//      <div>Item 3</div>
//    </Grid>

// Component Usage Examples:

// Layout
// <Layout className="custom-class">{/* content here */}</Layout>

// Main
// <Main className="custom-class" id="main-content">
//   {/* main content here */}
// </Main>

// Section
// <Section className="custom-section" id="unique-section">
//   {/* section content here */}
// </Section>

// Container
// <Container className="custom-container" id="container-id">
//   {/* contained content here */}
// </Container>

// Article
// <Article className="custom-article" id="article-id">
//   {/* article content here */}
// </Article>

// Flex
// <Flex
//   direction={{ sm: "col", md: "row" }}
//   wrap={true}
//   gap={{ sm: 2, md: 4 }}
//   className="justify-between items-center"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
// </Flex>

// Grid
// <Grid
//   cols={{ sm: 1, md: 2, lg: 3 }}
//   gap={{ sm: 2, md: 4 }}
//   className="justify-items-center items-start"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </Grid>
