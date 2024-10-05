import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout, Main, Section, Container } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "craft-ds | Lightweight Design System for React and Next.js",
  description:
    "A lightweight, customizable design system for React and Next.js applications. Created by Bridger Tower.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main>
            <Section>
              <Container>{children}</Container>
            </Section>
          </Main>
        </ThemeProvider>
        <Analytics />
      </body>
    </Layout>
  );
}
