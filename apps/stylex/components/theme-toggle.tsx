"use client";

import * as stylex from "@stylexjs/stylex";
import { Moon, Sun } from "lucide-react";

import { colors } from "@workspace/craft-ds-stylex/tokens.stylex";
import { useCraftTheme } from "@/components/theme-provider";

const styles = stylex.create({
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    color: colors.foreground,
    cursor: "pointer",
    display: "flex",
    height: 36,
    justifyContent: "center",
    padding: 0,
    position: "relative",
    width: 36,
  },
  icon: {
    height: 19,
    width: 19,
  },
  visuallyHidden: {
    clip: "rect(0, 0, 0, 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
  },
});

export function ThemeToggle() {
  const { theme, toggleTheme } = useCraftTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      onClick={toggleTheme}
      type="button"
      {...stylex.props(styles.button)}
    >
      {theme === "light" ? (
        <Sun {...stylex.props(styles.icon)} />
      ) : (
        <Moon {...stylex.props(styles.icon)} />
      )}
      <span {...stylex.props(styles.visuallyHidden)}>Toggle theme</span>
    </button>
  );
}
