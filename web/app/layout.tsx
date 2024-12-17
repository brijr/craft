import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Balancer from "react-wrap-balancer";

import Link from "next/link";

import "./globals.css";
import "@/components/craft/craft.css";
import { Container, Section } from "@/components/craft";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craft Design System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <Section>
      <Container>
        <Link href="/" className="text-4xl block mb-8">
          ✴︎
        </Link>
        <h1 className="text-xl font-medium mb-2">Craft Design System</h1>
        <p className="craft text-muted-foreground max-w-prose">
          <Balancer>
            Craft is an open-source design system for building content sites and
            user interfaces. It was created by{" "}
            <a target="_blank" href="https://x.com/bridgertower">
              Bridger Tower
            </a>
            .
          </Balancer>
        </p>
        <div className="my-8 grid gap-2 craft">
          <Link href="/start">+ Get Started with Craft</Link>
          <a href="https://github.com/brijr/craft">+ View on GitHub</a>
          <Link href="/example">+ View an Article Example</Link>
        </div>
      </Container>
    </Section>
  );
};

const Footer = () => {
  return (
    <Section>
      <Container>
        <p>
          &copy; 2024 <a href="https://bridger.to">Bridger Tower</a>
        </p>
      </Container>
    </Section>
  );
};
