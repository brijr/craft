"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { Toaster } from "sonner";

import { colors, fonts } from "@workspace/craft-ds-stylex/tokens.stylex";
import { darkTheme } from "@workspace/craft-ds-stylex/themes";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);
const storageKey = "craft-stylex-theme";

const styles = stylex.create({
  root: {
    backgroundColor: colors.background,
    color: colors.foreground,
    fontFamily: fonts.sans,
    minHeight: "100vh",
  },
  light: {
    colorScheme: "light",
  },
  dark: {
    colorScheme: "dark",
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const syncSystemTheme = () => setTheme(media.matches ? "dark" : "light");
    syncSystemTheme();
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      window.localStorage.setItem(storageKey, nextTheme);
      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        {...stylex.props(
          styles.root,
          theme === "dark" && darkTheme,
          theme === "dark" ? styles.dark : styles.light,
        )}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useCraftTheme() {
  const value = React.useContext(ThemeContext);
  if (!value) {
    throw new Error("useCraftTheme must be used within ThemeProvider");
  }
  return value;
}

export function ThemedToaster() {
  const { theme } = useCraftTheme();
  return <Toaster position="top-center" theme={theme} />;
}
