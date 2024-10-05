import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "@/components/craft";

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
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              craft-ds
            </a>
            <div className="space-x-4">
              <a
                href="https://github.com/brijr/craft"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/craft-ds"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                npm
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
          <div className="container mx-auto px-4 py-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} craft-ds. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </Layout>
  );
}
