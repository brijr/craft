import * as stylex from "@stylexjs/stylex";
import { Analytics } from "@vercel/analytics/next";
import { Github } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Container, Section } from "@workspace/craft-ds/ds";
import { colors } from "@workspace/craft-ds/tokens.stylex";
import { Copy } from "@/components/copy";
import { ThemedToaster, ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://craft-ds.com"),
  title: "Craft StyleX Comparison",
  description:
    "A StyleX implementation of the Craft design system for comparing authoring models, output, and performance.",
};

const styles = stylex.create({
  headerRow: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
  },
  logo: {
    color: colors.foreground,
    display: "block",
    fontSize: 36,
    lineHeight: 1,
    marginBlockEnd: 32,
    textDecorationLine: "none",
  },
  actions: {
    display: "flex",
    gap: 8,
  },
  iconButton: {
    alignItems: "center",
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    color: colors.foreground,
    display: "flex",
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  icon: {
    height: 19,
    width: 19,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    marginBlock: 0,
  },
  subtitle: {
    color: colors.mutedForeground,
    marginBlockEnd: 0,
    marginBlockStart: 8,
    maxWidth: "65ch",
  },
  links: {
    display: "grid",
    gap: 8,
    marginBlock: 32,
  },
  link: {
    color: colors.foreground,
    textDecorationLine: {
      default: "none",
      ":hover": "underline",
    },
    textUnderlineOffset: 4,
  },
  footer: {
    display: "grid",
    gap: 8,
  },
  footerText: {
    margin: 0,
  },
  muted: {
    color: colors.mutedForeground,
  },
  inlineLink: {
    color: colors.foreground,
    textDecorationLine: "underline",
    textUnderlineOffset: 2,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ThemedToaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <Section>
      <Container>
        <div {...stylex.props(styles.headerRow)}>
          <Link href="/" {...stylex.props(styles.logo)}>
            ✴︎
          </Link>
          <div {...stylex.props(styles.actions)}>
            <a
              aria-label="View Craft on GitHub"
              href="https://github.com/brijr/craft"
              {...stylex.props(styles.iconButton)}
            >
              <Github aria-hidden="true" {...stylex.props(styles.icon)} />
            </a>
            <ThemeToggle />
          </div>
        </div>
        <h1 {...stylex.props(styles.title)}>Craft StyleX Comparison</h1>
        <p {...stylex.props(styles.subtitle)}>
          <Balancer>
            The same lightweight layout and prose system, rebuilt with StyleX to
            compare its component API, generated output, and ergonomics.
          </Balancer>
        </p>
        <Copy text="pnpm add @stylexjs/stylex" />
        <div {...stylex.props(styles.links)}>
          <a href="https://stylexjs.com" {...stylex.props(styles.link)}>
            + Read the StyleX documentation
          </a>
          <a
            href="https://github.com/brijr/craft/blob/main/packages/craft-ds/ds.tsx"
            {...stylex.props(styles.link)}
          >
            + View the original Tailwind source
          </a>
          <Link href="/example" {...stylex.props(styles.link)}>
            + View the StyleX article example
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <Section>
      <Container style={styles.footer}>
        <p {...stylex.props(styles.footerText)}>
          Follow on{" "}
          <a
            href="https://x.com/bridgertower"
            {...stylex.props(styles.inlineLink)}
          >
            x.com
          </a>{" "}
          for updates.
        </p>
        <p {...stylex.props(styles.footerText, styles.muted)}>
          &copy; 2026 <a href="https://bridger.to">brijr</a>
        </p>
      </Container>
    </Section>
  );
}
