import * as React from "react";
import * as stylex from "@stylexjs/stylex";

import { colors } from "@workspace/craft-ds-stylex/tokens.stylex";

const styles = stylex.create({
  root: {
    display: "grid",
    gridTemplateColumns: {
      default: "1fr",
      "@media (min-width: 640px)": "8rem minmax(0, 3fr)",
    },
    minWidth: 0,
  },
  vertical: {
    gridTemplateColumns: "1fr",
  },
  label: {
    backgroundColor: colors.accent,
    borderBlockEndColor: colors.border,
    borderBlockEndStyle: "solid",
    borderBlockEndWidth: {
      default: 1,
      "@media (min-width: 640px)": 0,
    },
    borderInlineEndColor: colors.border,
    borderInlineEndStyle: "solid",
    borderInlineEndWidth: {
      default: 0,
      "@media (min-width: 640px)": 1,
    },
    padding: {
      default: 8,
      "@media (min-width: 640px)": 16,
    },
  },
  verticalLabel: {
    borderBlockEndWidth: 1,
    borderInlineEndWidth: 0,
  },
  labelText: {
    fontSize: 14,
    margin: 0,
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
  preview: {
    backgroundColor: colors.background,
    minWidth: 0,
    padding: 24,
    position: "relative",
  },
  previewLabel: {
    color: colors.mutedForeground,
    display: {
      default: "none",
      "@media (min-width: 640px)": "block",
    },
    fontSize: 12,
    margin: 0,
    position: "absolute",
    right: 8,
    top: 8,
  },
});

export function Demo({
  children,
  attribute,
  vertical = false,
}: {
  children: React.ReactNode;
  attribute: string;
  vertical?: boolean;
}) {
  return (
    <section {...stylex.props(styles.root, vertical && styles.vertical)}>
      <div {...stylex.props(styles.label, vertical && styles.verticalLabel)}>
        <p {...stylex.props(styles.visuallyHidden)}>HTML element</p>
        <p {...stylex.props(styles.labelText)}>{attribute}</p>
      </div>
      <div {...stylex.props(styles.preview)}>
        <p {...stylex.props(styles.previewLabel)}>Preview</p>
        {children}
      </div>
    </section>
  );
}
