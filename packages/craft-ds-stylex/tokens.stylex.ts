import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  background: "oklch(1 0 0)",
  foreground: "oklch(0.145 0 0)",
  primary: "oklch(0.205 0 0)",
  primaryMuted: "oklch(0.205 0 0 / 0.56)",
  muted: "oklch(0.97 0 0)",
  mutedForeground: "oklch(0.556 0 0)",
  accent: "oklch(0.97 0 0)",
  border: "oklch(0.922 0 0)",
  input: "oklch(0.922 0 0)",
  ring: "oklch(0.708 0 0)",
  mark: "oklch(0.905 0.182 98.111)",
});

export const fonts = stylex.defineVars({
  sans: '"Geist", ui-sans-serif, system-ui, sans-serif',
  mono: '"Geist Mono", ui-monospace, monospace',
});

export const radii = stylex.defineVars({
  small: "0.125rem",
  medium: "0.375rem",
});
