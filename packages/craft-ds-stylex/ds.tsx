import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, fonts, radii } from "./tokens.stylex";

type ElementProps<Tag extends keyof React.JSX.IntrinsicElements> = Omit<
  React.ComponentPropsWithoutRef<Tag>,
  "className" | "style"
> & {
  style?: StyleXStyles;
};

type RootProps = ElementProps<"div"> & {
  isArticle?: boolean;
  isSpaced?: boolean;
};

type NavProps = ElementProps<"nav"> & {
  containerStyle?: StyleXStyles;
};

type TextProps = ElementProps<"p"> & {
  variant?: "body" | "lead" | "large" | "small" | "muted";
};

type CodeProps = ElementProps<"code"> & {
  block?: boolean;
};

const layoutStyles = stylex.create({
  section: {
    paddingBlock: {
      default: 8,
      "@media (min-width: 640px)": 16,
    },
  },
  container: {
    marginInline: "auto",
    maxWidth: 1024,
    padding: {
      default: 16,
      "@media (min-width: 640px)": 24,
    },
  },
  navContainer: {
    marginInline: "auto",
    maxWidth: 1024,
    paddingBlock: 8,
    paddingInline: {
      default: 16,
      "@media (min-width: 640px)": 24,
    },
  },
  layout: {
    scrollBehavior: "smooth",
  },
});

export function Section({ style, ...props }: ElementProps<"section">) {
  return <section {...props} {...stylex.props(layoutStyles.section, style)} />;
}

export function Container({ style, ...props }: ElementProps<"div">) {
  return <div {...props} {...stylex.props(layoutStyles.container, style)} />;
}

export function Nav({ children, containerStyle, style, ...props }: NavProps) {
  return (
    <nav {...props} {...stylex.props(style)}>
      <div
        id="nav-container"
        {...stylex.props(layoutStyles.navContainer, containerStyle)}
      >
        {children}
      </div>
    </nav>
  );
}

export function Layout({ style, ...props }: ElementProps<"html">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      {...props}
      {...stylex.props(layoutStyles.layout, style)}
    />
  );
}

export function Main({ style, ...props }: ElementProps<"main">) {
  return <main {...props} {...stylex.props(style)} />;
}

const proseStyles = stylex.create({
  root: {
    color: colors.foreground,
    fontFamily: fonts.sans,
    fontSize: 16,
    lineHeight: 1.75,
    minWidth: 0,
  },
  article: {
    maxWidth: "65ch",
  },
  spaced: {
    display: "flex",
    flexDirection: "column",
    rowGap: 24,
  },
  h1: {
    fontSize: {
      default: 36,
      "@media (min-width: 640px)": 48,
    },
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1,
    margin: 0,
    textWrap: "balance",
  },
  h2: {
    fontSize: {
      default: 30,
      "@media (min-width: 640px)": 36,
    },
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    margin: 0,
    textWrap: "balance",
  },
  h3: {
    fontSize: {
      default: 24,
      "@media (min-width: 640px)": 30,
    },
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
    margin: 0,
    textWrap: "balance",
  },
  h4: {
    fontSize: {
      default: 20,
      "@media (min-width: 640px)": 24,
    },
    letterSpacing: "-0.025em",
    lineHeight: 1.25,
    margin: 0,
    textWrap: "balance",
  },
  h5: {
    fontSize: {
      default: 18,
      "@media (min-width: 640px)": 20,
    },
    letterSpacing: "-0.025em",
    lineHeight: 1.3,
    margin: 0,
    textWrap: "balance",
  },
  h6: {
    fontSize: {
      default: 16,
      "@media (min-width: 640px)": 18,
    },
    letterSpacing: "-0.025em",
    lineHeight: 1.4,
    margin: 0,
    textWrap: "balance",
  },
  text: {
    fontSize: 16,
    margin: 0,
    textWrap: "pretty",
  },
  lead: {
    fontSize: 20,
    lineHeight: 1.6,
  },
  large: {
    fontSize: 18,
  },
  small: {
    fontSize: 14,
    lineHeight: 1.4,
  },
  muted: {
    color: colors.mutedForeground,
  },
  link: {
    color: colors.primaryMuted,
    textDecorationColor: colors.primaryMuted,
    textDecorationLine: {
      default: "none",
      ":hover": "underline",
    },
    textUnderlineOffset: 2,
    transitionDuration: "150ms",
    transitionProperty: "color",
    transitionTimingFunction: "ease",
    outline: {
      default: "none",
      ":focus-visible": `2px solid ${colors.ring}`,
    },
    outlineOffset: 2,
  },
  strong: {
    fontWeight: 600,
  },
  em: {
    fontStyle: "italic",
  },
  del: {
    textDecorationLine: "line-through",
  },
  inlineCode: {
    backgroundColor: colors.muted,
    borderColor: colors.border,
    borderRadius: radii.medium,
    borderStyle: "solid",
    borderWidth: 1,
    fontFamily: fonts.mono,
    fontSize: 14,
    fontWeight: 500,
    paddingBlock: 1,
    paddingInline: 4,
  },
  blockCode: {
    backgroundColor: "transparent",
    borderWidth: 0,
    fontFamily: fonts.mono,
    fontSize: 14,
    fontWeight: 400,
    padding: 0,
  },
  pre: {
    backgroundColor: colors.muted,
    borderColor: colors.border,
    borderRadius: radii.small,
    borderStyle: "solid",
    borderWidth: 1,
    fontFamily: fonts.mono,
    marginBlock: 16,
    overflowX: "auto",
    padding: 16,
    whiteSpace: "pre",
  },
  ul: {
    listStyleType: "disc",
    margin: 0,
    paddingBlock: 12,
    paddingInlineStart: 24,
  },
  ol: {
    listStyleType: "decimal",
    margin: 0,
    paddingBlock: 12,
    paddingInlineStart: 24,
  },
  li: {
    paddingInlineStart: 8,
  },
  dl: {
    margin: 0,
    paddingBlock: 12,
  },
  dt: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.4,
    marginBlockStart: 12,
  },
  dd: {
    color: colors.mutedForeground,
    fontSize: 14,
    lineHeight: 1.4,
    marginInlineStart: 0,
  },
  blockquote: {
    backgroundColor: colors.muted,
    borderInlineStartColor: colors.border,
    borderInlineStartStyle: "solid",
    borderInlineStartWidth: 4,
    color: colors.mutedForeground,
    marginBlock: 16,
    marginInline: 0,
    paddingBlock: 8,
    paddingInline: 16,
  },
  cite: {
    display: "block",
    fontSize: 14,
    fontStyle: "normal",
    marginBlockStart: 4,
  },
  table: {
    borderCollapse: "collapse",
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    marginBlock: 16,
    tableLayout: "fixed",
    width: "100%",
  },
  thead: {
    backgroundColor: colors.muted,
  },
  tr: {
    backgroundColor: {
      default: "transparent",
      ":nth-child(even)": colors.muted,
    },
    borderBlockEndColor: colors.border,
    borderBlockEndStyle: "solid",
    borderBlockEndWidth: 1,
  },
  th: {
    borderInlineEndColor: colors.border,
    borderInlineEndStyle: "solid",
    borderInlineEndWidth: 1,
    fontWeight: 600,
    overflowWrap: "anywhere",
    paddingBlock: 12,
    paddingInline: 16,
    textAlign: "start",
  },
  td: {
    borderInlineEndColor: colors.border,
    borderInlineEndStyle: "solid",
    borderInlineEndWidth: 1,
    overflowWrap: "anywhere",
    paddingBlock: 8,
    paddingInline: 16,
  },
  image: {
    borderColor: colors.border,
    borderRadius: radii.small,
    borderStyle: "solid",
    borderWidth: 1,
    display: "block",
    height: "auto",
    marginBlock: 16,
    maxWidth: "100%",
  },
  figure: {
    marginBlock: 16,
    marginInline: 0,
  },
  figcaption: {
    color: colors.mutedForeground,
    fontSize: 14,
    marginBlockEnd: 24,
  },
  details: {
    borderColor: colors.border,
    borderRadius: radii.small,
    borderStyle: "solid",
    borderWidth: 1,
    marginBlock: 16,
    paddingBlock: 8,
    paddingInline: 16,
  },
  summary: {
    cursor: "pointer",
    fontWeight: 600,
    outline: {
      default: "none",
      ":focus-visible": `2px solid ${colors.ring}`,
    },
  },
  hr: {
    borderBlockStartColor: colors.border,
    borderBlockStartStyle: "solid",
    borderBlockStartWidth: 2,
    borderBottomWidth: 0,
    marginBlock: 32,
  },
  kbd: {
    backgroundColor: colors.muted,
    borderColor: colors.border,
    borderRadius: radii.small,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: "0 1px 2px oklch(0 0 0 / 0.08)",
    fontFamily: fonts.mono,
    fontSize: 14,
    paddingBlock: 2,
    paddingInline: 6,
  },
  mark: {
    backgroundColor: colors.mark,
    color: "inherit",
  },
  abbr: {
    borderBlockEndColor: colors.mutedForeground,
    borderBlockEndStyle: "dotted",
    borderBlockEndWidth: 1,
    cursor: "help",
    textDecorationLine: "none",
  },
  subSup: {
    fontSize: 14,
    verticalAlign: "baseline",
  },
  video: {
    borderColor: colors.border,
    borderRadius: radii.small,
    borderStyle: "solid",
    borderWidth: 1,
    height: "auto",
    marginBlock: 16,
    maxWidth: "100%",
  },
});

function ProseRoot({
  isArticle = false,
  isSpaced = false,
  style,
  ...props
}: RootProps) {
  const Component = isArticle ? "article" : "div";
  return (
    <Component
      {...props}
      {...stylex.props(
        proseStyles.root,
        isArticle && proseStyles.article,
        isSpaced && proseStyles.spaced,
        style,
      )}
    />
  );
}

function H1({ style, ...props }: ElementProps<"h1">) {
  return <h1 {...props} {...stylex.props(proseStyles.h1, style)} />;
}

function H2({ style, ...props }: ElementProps<"h2">) {
  return <h2 {...props} {...stylex.props(proseStyles.h2, style)} />;
}

function H3({ style, ...props }: ElementProps<"h3">) {
  return <h3 {...props} {...stylex.props(proseStyles.h3, style)} />;
}

function H4({ style, ...props }: ElementProps<"h4">) {
  return <h4 {...props} {...stylex.props(proseStyles.h4, style)} />;
}

function H5({ style, ...props }: ElementProps<"h5">) {
  return <h5 {...props} {...stylex.props(proseStyles.h5, style)} />;
}

function H6({ style, ...props }: ElementProps<"h6">) {
  return <h6 {...props} {...stylex.props(proseStyles.h6, style)} />;
}

const textVariants = {
  body: null,
  lead: proseStyles.lead,
  large: proseStyles.large,
  small: proseStyles.small,
  muted: proseStyles.muted,
} as const;

function P({ variant = "body", style, ...props }: TextProps) {
  return (
    <p
      {...props}
      {...stylex.props(proseStyles.text, textVariants[variant], style)}
    />
  );
}

function A({ style, ...props }: ElementProps<"a">) {
  return <a {...props} {...stylex.props(proseStyles.link, style)} />;
}

function Strong({ style, ...props }: ElementProps<"strong">) {
  return <strong {...props} {...stylex.props(proseStyles.strong, style)} />;
}

function Em({ style, ...props }: ElementProps<"em">) {
  return <em {...props} {...stylex.props(proseStyles.em, style)} />;
}

function Del({ style, ...props }: ElementProps<"del">) {
  return <del {...props} {...stylex.props(proseStyles.del, style)} />;
}

function Code({ block = false, style, ...props }: CodeProps) {
  return (
    <code
      {...props}
      {...stylex.props(
        block ? proseStyles.blockCode : proseStyles.inlineCode,
        style,
      )}
    />
  );
}

function Pre({ style, ...props }: ElementProps<"pre">) {
  return <pre {...props} {...stylex.props(proseStyles.pre, style)} />;
}

function Ul({ style, ...props }: ElementProps<"ul">) {
  return <ul {...props} {...stylex.props(proseStyles.ul, style)} />;
}

function Ol({ style, ...props }: ElementProps<"ol">) {
  return <ol {...props} {...stylex.props(proseStyles.ol, style)} />;
}

function Li({ style, ...props }: ElementProps<"li">) {
  return <li {...props} {...stylex.props(proseStyles.li, style)} />;
}

function Dl({ style, ...props }: ElementProps<"dl">) {
  return <dl {...props} {...stylex.props(proseStyles.dl, style)} />;
}

function Dt({ style, ...props }: ElementProps<"dt">) {
  return <dt {...props} {...stylex.props(proseStyles.dt, style)} />;
}

function Dd({ style, ...props }: ElementProps<"dd">) {
  return <dd {...props} {...stylex.props(proseStyles.dd, style)} />;
}

function Blockquote({ style, ...props }: ElementProps<"blockquote">) {
  return (
    <blockquote {...props} {...stylex.props(proseStyles.blockquote, style)} />
  );
}

function Cite({ style, ...props }: ElementProps<"cite">) {
  return <cite {...props} {...stylex.props(proseStyles.cite, style)} />;
}

function Table({ style, ...props }: ElementProps<"table">) {
  return <table {...props} {...stylex.props(proseStyles.table, style)} />;
}

function Thead({ style, ...props }: ElementProps<"thead">) {
  return <thead {...props} {...stylex.props(proseStyles.thead, style)} />;
}

function Tbody({ style, ...props }: ElementProps<"tbody">) {
  return <tbody {...props} {...stylex.props(style)} />;
}

function Tr({ style, ...props }: ElementProps<"tr">) {
  return <tr {...props} {...stylex.props(proseStyles.tr, style)} />;
}

function Th({ style, ...props }: ElementProps<"th">) {
  return <th {...props} {...stylex.props(proseStyles.th, style)} />;
}

function Td({ style, ...props }: ElementProps<"td">) {
  return <td {...props} {...stylex.props(proseStyles.td, style)} />;
}

function Figure({ style, ...props }: ElementProps<"figure">) {
  return <figure {...props} {...stylex.props(proseStyles.figure, style)} />;
}

function Img({ style, ...props }: ElementProps<"img">) {
  return <img {...props} {...stylex.props(proseStyles.image, style)} />;
}

function Figcaption({ style, ...props }: ElementProps<"figcaption">) {
  return (
    <figcaption {...props} {...stylex.props(proseStyles.figcaption, style)} />
  );
}

function Details({ style, ...props }: ElementProps<"details">) {
  return <details {...props} {...stylex.props(proseStyles.details, style)} />;
}

function Summary({ style, ...props }: ElementProps<"summary">) {
  return <summary {...props} {...stylex.props(proseStyles.summary, style)} />;
}

function Hr({ style, ...props }: ElementProps<"hr">) {
  return <hr {...props} {...stylex.props(proseStyles.hr, style)} />;
}

function Small({ style, ...props }: ElementProps<"small">) {
  return <small {...props} {...stylex.props(proseStyles.small, style)} />;
}

function Kbd({ style, ...props }: ElementProps<"kbd">) {
  return <kbd {...props} {...stylex.props(proseStyles.kbd, style)} />;
}

function Mark({ style, ...props }: ElementProps<"mark">) {
  return <mark {...props} {...stylex.props(proseStyles.mark, style)} />;
}

function Abbr({ style, ...props }: ElementProps<"abbr">) {
  return <abbr {...props} {...stylex.props(proseStyles.abbr, style)} />;
}

function Sub({ style, ...props }: ElementProps<"sub">) {
  return <sub {...props} {...stylex.props(proseStyles.subSup, style)} />;
}

function Sup({ style, ...props }: ElementProps<"sup">) {
  return <sup {...props} {...stylex.props(proseStyles.subSup, style)} />;
}

function Video({ style, ...props }: ElementProps<"video">) {
  return <video {...props} {...stylex.props(proseStyles.video, style)} />;
}

export const Prose = Object.assign(ProseRoot, {
  Abbr,
  A,
  Blockquote,
  Cite,
  Code,
  Dd,
  Del,
  Details,
  Dl,
  Dt,
  Em,
  Figcaption,
  Figure,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Img,
  Kbd,
  Li,
  Mark,
  Ol,
  P,
  Pre,
  Small,
  Strong,
  Sub,
  Summary,
  Sup,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Ul,
  Video,
});
