# Craft with StyleX

This branch is an in-place StyleX port of [Craft](https://craft-ds.com). It keeps the original demo's routes, content, layout primitives, and visual intent so the styling approaches can be compared without changing the product at the same time.

The measured before-and-after results live in [COMPARISON.md](./COMPARISON.md).

## Run the comparison

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the component catalog and [http://localhost:3000/example](http://localhost:3000/example) for the long-form article examples.

The main verification commands are:

```bash
pnpm check-types
pnpm lint
pnpm build
```

## What changed

- Tailwind CSS, shadcn utilities, and class-merging dependencies were removed.
- `@stylexjs/stylex` now owns component styles, responsive variants, tokens, and the dark theme.
- Geist is self-hosted because this Next.js version uses Babel for StyleX compilation, while `next/font` requires the SWC transform.
- Prose uses explicit typed elements instead of descendant selectors, matching StyleX's encapsulation model.
- The demo remains a Next.js app and the design-system package remains framework-light React.

## Package API

```tsx
import * as stylex from "@stylexjs/stylex";
import { Container, Prose, Section } from "@workspace/craft-ds";

const styles = stylex.create({
  article: { maxWidth: 720 },
});

export function Article() {
  return (
    <Section>
      <Container style={styles.article}>
        <Prose isArticle isSpaced>
          <Prose.H1>Article title</Prose.H1>
          <Prose.P>
            Content with a <Prose.A href="/example">typed link</Prose.A>.
          </Prose.P>
        </Prose>
      </Container>
    </Section>
  );
}
```

Every primitive accepts its native element props plus a typed StyleX `style` prop. The prose API exposes `H1`–`H6`, `P`, `A`, lists, tables, media, code, and other rich-text elements as properties on `Prose`.

## Compiler setup

The demo follows StyleX's Next.js integration: the Babel plugin extracts styles and the PostCSS plugin places them at `@stylex` in `globals.css`. Next 15 is intentionally held constant for this comparison, so development uses webpack rather than Turbopack.

See [apps/web/babel.config.js](./apps/web/babel.config.js), [apps/web/postcss.config.js](./apps/web/postcss.config.js), and the [official StyleX Next.js setup](https://stylexjs.com/docs/learn/installation/nextjs).
