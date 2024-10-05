import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout, Main, Section, Container } from "@/components/craft";

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
        <Main>
          <Section>
            <Container>{children}</Container>
          </Section>
        </Main>
      </body>
    </Layout>
  );
}
