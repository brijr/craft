import * as React from "react";

// cn util
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Layout Component
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

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
type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main
      className={cn(
        // General Prose
        "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg max-w-none",
        // Prose Headings
        "prose-headings:font-normal",
        // Inline Links
        "prose-a:border-b prose-a:border-b-primary dark:prose-a:border-b-primary prose-a:font-normal prose-a:text-primary dark:prose-a:text-primary hover:prose-a:border-b-primary hover:prose-a:opacity-60 dark:hover:prose-a:border-b-primary prose-a:no-underline prose-a:transition-all",
        // Blockquotes
        "prose-blockquote:not-italic",
        className,
      )}
      id={id}
    >
      {children}
    </main>
  );
};

// Section Component
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
      {children}
    </div>
  );
};

// Article Component
type ArticleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Article = ({ children, className, id }: ArticleProps) => {
  return (
    <article
      className={cn(
        // General Prose
        "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:font-normal",
        // Inline Links
        "prose-a:border-b prose-a:border-b-primary dark:prose-a:border-b-primary prose-a:font-normal prose-a:text-primary dark:prose-a:text-primary hover:prose-a:border-b-primary hover:prose-a:opacity-60 dark:hover:prose-a:border-b-primary prose-a:no-underline prose-a:transition-all",
        // Blockquotes
        "prose-blockquote:not-italic",
        className,
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
