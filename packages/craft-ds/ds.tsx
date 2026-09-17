import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Welcome to Craft DS this is the design system file for your project.
 * @file ds.tsx
 * @description Layout primitives, portable typography roles, and a Prose content applicator. Pair with ds.css.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
  isSpaced?: boolean;
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
    className={cn("max-w-5xl mx-auto p-4 sm:p-6", className)}
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
 * Classes for the document <html> element.
 * Next App Router may use <Layout>, which applies these.
 * Vite / React Router: put `root` on the existing <html>. Do not wrap that
 * document in Craft Layout (nested <html>).
 */
export const root = "scroll-smooth antialiased focus:scroll-auto";

/**
 * Next App Router document root. Renders <html>.
 * Not for Vite or React Router — those already own <html>.
 */
export const Layout = ({ children, className, style }: DSProps) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={cn(root, className)}
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
 * Portable type roles for any element. Recipes live in ds.css.
 *
 * UI text → typography.*
 * Markdown / CMS / AI HTML → <Prose>
 * Do not wrap app UI in Prose
 * Do not put typography.* on children inside Prose
 *
 * Named `typography` because `type` is a TypeScript import keyword.
 * `text-lg` will not override `typography.h1` — pick another role instead.
 */
export const typography = {
  h1: "type-h1 sm:type-h1-sm",
  h2: "type-h2 sm:type-h2-sm",
  h3: "type-h3 sm:type-h3-sm",
  h4: "type-h4 sm:type-h4-sm",
  h5: "type-h5 sm:type-h5-sm",
  h6: "type-h6 sm:type-h6-sm",
  body: "type-body",
  lead: "type-lead",
  large: "type-large",
  small: "type-small",
  caption: "type-caption",
  muted: "type-muted",
} as const;

/**
 * Content applicator for markdown, CMS HTML, and articles.
 * Renders as article when isArticle is set.
 */
export const Prose = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
  style,
  isArticle = false,
  isSpaced = false,
}: DSProps) => {
  const Component = isArticle ? "article" : "div";

  return (
    <Component
      className={cn(
        "ds-prose",
        isArticle && "max-w-prose",
        isSpaced && "ds-prose-spaced",
        className
      )}
      id={id}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </Component>
  );
};
