/**
 * Welcome to Craft Design System this is the design system file for your project.
 * Learn more about it and how to use as https://github.com/brijr/craft
 * @file ds.tsx
 * @description Provides layout components for structuring pages and a design system for prose content.
 */

import { cn } from "@/lib/utils";

/**
 * Props for layout components.
 *
 * @typedef {Object} DSProps
 * @property {string} [className] - Additional class names.
 * @property {React.ReactNode} [children] - Child elements to render.
 * @property {string} [id] - HTML id attribute.
 * @property {React.CSSProperties} [style] - Inline styles for the element.
 * @property {{ __html: string }} [dangerouslySetInnerHTML] - HTML content to set dangerously.
 * @property {string} [containerClassName] - Additional class names for inner container elements.
 * @property {boolean} [isArticle] - If true, renders the element as an article.
 */

type DSProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
  containerClassName?: string;
  isArticle?: boolean;
};

/**
 * Section component to wrap content in a section element.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} A section element.
 */
export const Section = ({ children, className, id, style }: DSProps) => (
  <section className={cn("py-2 sm:py-4", className)} id={id} style={style}>
    {children}
  </section>
);

/**
 * Container component to wrap content within a centered div with padding.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} A div element acting as a container.
 */
export const Container = ({ children, className, id, style }: DSProps) => (
  <div
    className={cn("max-w-7xl mx-auto p-4 sm:p-6", className)}
    id={id}
    style={style}
  >
    {children}
  </div>
);

/**
 * Nav component to render a navigation container with an inner div.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names for the nav element.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @param {string} [props.containerClassName] - Additional class names for the inner container.
 * @returns {JSX.Element} A nav element with a centered inner container.
 */

export const Nav = ({
  children,
  className,
  id,
  style,
  containerClassName,
}: DSProps) => (
  <nav className={cn(className)} id={id} style={style}>
    <div
      id="nav-container"
      className={cn("max-w-5xl mx-auto px-4 sm:px-6 py-2", containerClassName)}
    >
      {children}
    </div>
  </nav>
);

/**
 * Layout component that renders the root HTML element with global settings.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} An HTML element wrapping the entire document.
 */

export const Layout = ({ children, className, style }: DSProps) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
    style={style}
  >
    {children}
  </html>
);

/**
 * Main component to wrap the primary content of the page.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} A main element.
 */
export const Main = ({ children, className, id, style }: DSProps) => (
  <main className={cn("", className)} id={id} style={style}>
    {children}
  </main>
);

/**
 * Prose component to render formatted rich text content.
 * Can render as an article or a div based on the isArticle prop.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {{ __html: string }} [props.dangerouslySetInnerHTML] - HTML content to be dangerously set.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @param {boolean} [props.isArticle=false] - If true, renders as an article element.
 * @returns {JSX.Element} A div or article element containing styled rich text.
 */

export const Prose = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
  style,
  isArticle = false,
}: DSProps) => {
  const Component = isArticle ? "article" : "div";

  return (
    <Component
      className={cn(
        // Base classes
        "antialiased text-base leading-7",
        // Space between children
        "[&>*+*]:mt-3",
        // Heading spacing
        "[&>h1:not(:first-child)]:mt-8 [&>h1]:mb-2",
        "[&>h2:not(:first-child)]:mt-8 [&>h2]:mb-2",
        "[&>h3:not(:first-child)]:mt-6 [&>h3]:mb-2",
        "[&>h4:not(:first-child)]:mt-6 [&>h4]:mb-2",
        "[&>h5:not(:first-child)]:mt-4 [&>h5]:mb-2",
        "[&>h6:not(:first-child)]:mt-4 [&>h6]:mb-2",
        // Heading styles
        "[&>h1]:text-4xl [&>h1]:sm:text-5xl [&>h1]:font-medium [&>h1]:tracking-tight [&>h1]:text-balance",
        "[&>h2]:text-3xl [&>h2]:sm:text-4xl [&>h2]:font-medium [&>h2]:tracking-tight [&>h2]:text-balance",
        "[&>h3]:text-2xl [&>h3]:sm:text-3xl [&>h3]:font-medium [&>h3]:tracking-tight [&>h3]:text-balance",
        "[&>h4]:text-xl [&>h4]:sm:text-2xl [&>h4]:tracking-tight [&>h4]:text-balance",
        "[&>h5]:text-lg [&>h5]:sm:text-xl [&>h5]:tracking-tight [&>h5]:text-balance",
        "[&>h6]:text-base [&>h6]:sm:text-lg [&>h6]:tracking-tight [&>h6]:text-balance",
        // Paragraph styles
        "[&>p]:text-pretty [&>p]:text-base",
        // Inline text styles
        "[&>strong]:font-semibold",
        "[&>em]:italic",
        "[&>del]:line-through",
        "[&>small]:text-sm [&>small]:sm:text-base [&>small]:font-medium [&>small]:leading-snug",
        "[&>sub]:text-sm [&>sub]:align-baseline [&>sup]:text-sm [&>sup]:align-baseline",
        // Links (except in headings)
        "[&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:text-primary [&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:dark:text-primary/50 [&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:transition-all [&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:no-underline hover:[&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:underline [&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:underline-offset-2 [&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:decoration-primary/50 focus-visible:[&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:outline-none focus-visible:[&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:ring-2 focus-visible:[&>a:not(h1_a,h2_a,h3_a,h4_a,h5_a,h6_a)]:ring-primary/50",
        // Lists
        "[&>ul]:pl-0 [&>ul]:list-none [&>ul]:space-y-2",
        "[&>ul>li]:relative [&>ul>li]:pl-6",
        "[&>ul>li]:before:absolute [&>ul>li]:before:left-1 [&>ul>li]:before:top-[0.6875em] [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-foreground/80 [&>ul>li]:before:content-['']",
        "[&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2",
        "[&>ol>ol]:list-[lower-alpha]",
        "[&>ol>ol>ol]:list-[lower-roman]",
        // List item base styling
        "[&>li]:pl-2 [&>li]:marker:text-foreground/80",
        "[&>li>ul]:mt-2 [&>li>ul]:mb-0 [&>li>ol]:mt-2 [&>li>ol]:mb-0",
        "[&>ul>ul>li]:before:bg-foreground/60",
        "[&>ul>ul>ul>li]:before:bg-foreground/40",
        // Code blocks
        "[&>code:not(pre_code)]:rounded [&>code:not(pre_code)]:border [&>code:not(pre_code)]:bg-muted/50 [&>code:not(pre_code)]:px-1 [&>code:not(pre_code)]:py-px [&>code:not(pre_code)]:font-mono [&>code:not(pre_code)]:text-sm [&>code:not(pre_code)]:font-medium",
        // Title code blocks
        "[&>h1>code:not(pre_code)]:text-inherit [&>h1>code:not(pre_code)]:tracking-tight",
        "[&>h2>code:not(pre_code)]:text-inherit [&>h2>code:not(pre_code)]:tracking-tight",
        "[&>h3>code:not(pre_code)]:text-inherit [&>h3>code:not(pre_code)]:tracking-tight",
        "[&>h4>code:not(pre_code)]:text-inherit [&>h4>code:not(pre_code)]:tracking-tight",
        "[&>h5>code:not(pre_code)]:text-inherit [&>h5>code:not(pre_code)]:tracking-tight",
        "[&>h6>code:not(pre_code)]:text-inherit [&>h6>code:not(pre_code)]:tracking-tight",
        // Specific heading code block sizes
        "[&>h1>code:not(pre_code)]:text-4xl [&>h1>code:not(pre_code)]:sm:text-5xl",
        "[&>h2>code:not(pre_code)]:text-3xl [&>h2>code:not(pre_code)]:sm:text-4xl",
        "[&>h3>code:not(pre_code)]:text-2xl [&>h3>code:not(pre_code)]:sm:text-3xl",
        "[&>h4>code:not(pre_code)]:text-xl [&>h4>code:not(pre_code)]:sm:text-2xl",
        "[&>h5>code:not(pre_code)]:text-lg [&>h5>code:not(pre_code)]:sm:text-xl",
        "[&>h6>code:not(pre_code)]:text-base [&>h6>code:not(pre_code)]:sm:text-lg",
        // Pre blocks
        "[&>pre]:overflow-x-auto [&>pre]:rounded-lg [&>pre]:border [&>pre]:bg-muted/50 [&>pre]:p-4 [&>pre]:my-4",
        "[&>pre>code]:bg-transparent [&>pre>code]:p-0",
        // Tables
        "[&>table]:w-full [&>table]:my-4 [&>table]:overflow-hidden [&>table]:rounded-lg [&>table]:border",
        "[&>thead]:bg-muted/50",
        "[&>tr]:border-b [&>tr:nth-child(even)]:bg-muted/20",
        "[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-semibold [&>th]:border-r",
        "[&>td]:px-4 [&>td]:py-2 [&>td]:border-r",
        // Media
        "[&>img]:border [&>img]:my-4 [&>img]:max-w-full [&>img]:h-auto",
        "[&>video]:border [&>video]:my-4 [&>video]:max-w-full [&>video]:h-auto",
        "[&>figure]:my-4",
        "[&>figcaption]:text-sm [&>figcaption]:!mb-6 [&>figcaption]:text-muted-foreground",
        // Block elements
        "[&>blockquote]:border-l-4 [&>blockquote]:border-border [&>blockquote]:!pl-4 [&>blockquote]:py-2 [&>blockquote]:my-4 [&>blockquote]:text-muted-foreground [&>blockquote]:bg-muted/30",
        "[&>hr]:!my-8 [&>hr]:border-t-2 [&>hr]:border-border/50",
        "[&>p:has(>hr)]:!my-8 [&>p:has(>hr)]:border-t-2 [&>p:has(>hr)]:border-border/50",
        "[&>details]:rounded-lg [&>details]:border [&>details]:px-4 [&>details]:py-2 [&>details]:my-4",
        "[&>summary]:cursor-pointer [&>summary]:font-semibold [&>summary]:focus-visible:outline-none",
        // Interactive elements
        "[&>kbd]:rounded-md [&>kbd]:border [&>kbd]:bg-muted [&>kbd]:px-1.5 [&>kbd]:py-0.5 [&>kbd]:text-sm [&>kbd]:font-mono [&>kbd]:shadow-sm [&>kbd]:align-middle",
        isArticle && "max-w-prose",
        className,
      )}
      id={id}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </Component>
  );
};
