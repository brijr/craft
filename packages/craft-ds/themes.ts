import * as stylex from "@stylexjs/stylex";

import { colors } from "./tokens.stylex";

export const darkTheme = stylex.createTheme(colors, {
  background: "oklch(0.145 0 0)",
  foreground: "oklch(0.985 0 0)",
  primary: "oklch(0.985 0 0)",
  primaryMuted: "oklch(0.985 0 0 / 0.56)",
  muted: "oklch(0.269 0 0)",
  mutedForeground: "oklch(0.708 0 0)",
  accent: "oklch(0.269 0 0)",
  border: "oklch(0.269 0 0)",
  input: "oklch(0.269 0 0)",
  ring: "oklch(0.439 0 0)",
  mark: "oklch(0.769 0.188 70.08)",
});
