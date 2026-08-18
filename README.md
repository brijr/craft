# Craft DS: Tailwind vs. StyleX

This monorepo contains two independent Next.js 16 implementations of the same Craft catalog, routes, content, and visual design. Keeping them as separate applications makes the styling approaches easy to compare without mixing their compiler output or CSS.

The measured results live in [COMPARISON.md](./COMPARISON.md).

## Run both apps

```bash
pnpm install
pnpm dev
```

- StyleX: [http://localhost:3100](http://localhost:3100)
- Tailwind: [http://localhost:3101](http://localhost:3101)

Both apps also expose `/example` for the long-form article example.

Run either implementation by itself with `pnpm dev:stylex` or `pnpm dev:tailwind`.

## Repository layout

```text
apps/
  stylex/                 Next.js catalog using StyleX
  tailwind/               Next.js catalog using Tailwind CSS
packages/
  craft-ds-stylex/        Typed StyleX layout and prose primitives
  craft-ds-tailwind/      Original Tailwind layout and prose primitives
  ui/                     Tailwind app utilities
  eslint-config/          Shared lint configuration
  typescript-config/      Shared TypeScript configuration
```

The main verification commands run against both applications:

```bash
pnpm check-types
pnpm lint
pnpm build
```

## StyleX package API

```tsx
import * as stylex from "@stylexjs/stylex";
import { Container, Prose, Section } from "@workspace/craft-ds-stylex";

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

Every StyleX primitive accepts its native element props plus a typed `style` prop. Its prose API exposes headings, paragraphs, links, lists, tables, media, code, and other rich-text elements as properties on `Prose`.

## Compiler setup

The StyleX app uses the Babel plugin to transform StyleX calls and the PostCSS plugin to place extracted styles at `@stylex` in `globals.css`. Both development and production use the default Turbopack pipeline in Next.js 16.3.1.

See [apps/stylex/babel.config.js](./apps/stylex/babel.config.js), [apps/stylex/postcss.config.js](./apps/stylex/postcss.config.js), and the [official StyleX Next.js setup](https://stylexjs.com/docs/learn/installation/nextjs).
