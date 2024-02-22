import * as React from "react";
import { cn } from "../lib/utils";
import "../../dist/styles.css";

// LAYOUT
// Layout Component
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning className={className}>
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
        "prose prose:font-sans dark:prose-invert md:prose-lg lg:prose-xl max-w-none",
        // Prose Headings
        "prose-headings:font-normal",
        // Inline Links
        "prose-a:border-b prose-a:font-normal hover:prose-a:opacity-75 prose-a:no-underline prose-a:transition-all",
        // Blockquotes
        "prose-blockquote:not-italic",
        className
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
    <div className={cn("max-w-5xl mx-auto", "p-6 sm:p-8", className)} id={id}>
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
        "prose dark:prose-invert md:prose-lg lg:prose-xl",
        "prose-headings:font-normal prose-main dark:prose-invert",
        className
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
