# Tailwind Craft vs. StyleX Craft

This comparison was captured on August 17, 2026 from the same Craft checkout. Next.js 15.3.5, React 19, the routes, the content coverage, and the visual intent were held constant. The StyleX version is a pure port rather than a compatibility layer.

## Results

| Measure                           | Tailwind baseline | StyleX port |  Change |
| --------------------------------- | ----------------: | ----------: | ------: |
| Generated production CSS, raw     |          42,864 B |     6,974 B |  −83.7% |
| Shared first-load JavaScript      |            101 kB |      184 kB |  +82.2% |
| `className=` authoring sites      |                80 |           0 |   −100% |
| Core design-system styling source |         263 lines |   708 lines | +169.2% |
| Selected parity source            |       1,095 lines | 1,573 lines |  +43.7% |

The StyleX CSS is 2,693 bytes after gzip. “Core design-system styling source” compares the original `ds.tsx` with the StyleX `ds.tsx`, tokens, and theme files. “Selected parity source” also includes the catalog page, example page, and global stylesheet.

Build timing is intentionally omitted because repeat builds reused local caches. The final StyleX build passes type-checking, ESLint, static generation, and production browser verification. The baseline compiled and prerendered, but its monorepo build reported a missing `@eslint/js` package declaration; that repository configuration issue was fixed during the port.

## API difference

The Tailwind version offered concise descendant styling:

```tsx
<Prose isArticle isSpaced>
  <h1>Article title</h1>
  <p>Article content</p>
</Prose>
```

The StyleX version makes ownership explicit:

```tsx
<Prose isArticle isSpaced>
  <Prose.H1>Article title</Prose.H1>
  <Prose.P>Article content</Prose.P>
</Prose>
```

That is the central tradeoff. StyleX avoids broad descendant selectors and gives every element a typed style extension point, but the author writes more component syntax and the package owns a larger surface.

## What improved

- Production CSS dropped from 42.9 kB to 7.0 kB while preserving the catalog and article designs.
- Style props, tokens, responsive values, and theme overrides are statically typed.
- Component composition is deterministic; callers do not need a class-merging utility.
- Dark mode is a token theme rather than a second set of utility classes.
- Tailwind, shadcn, `clsx`, `tailwind-merge`, animation helpers, and the unused UI workspace package are gone.
- The output contains no authored `className=` sites.

## What regressed

- Shared first-load JavaScript increased by 83 kB in this Next.js 15 build.
- The core package source grew substantially because rich prose now exposes an explicit primitive for each styled element.
- StyleX requires coordinated Babel and PostCSS configuration. On this fixed Next.js 15 baseline, the custom Babel path disables SWC.
- Arbitrary CMS or Markdown HTML cannot inherit the full prose treatment automatically. It must be mapped to `Prose.*` elements or handled by a deliberately scoped compatibility layer.

The [current StyleX Next.js guide](https://stylexjs.com/docs/learn/installation/nextjs) documents a Turbopack path for Next.js 16.0.3 and newer. This comparison does not upgrade Next because changing the framework version would muddy the result.

## Verification

- `pnpm check-types`
- `pnpm lint`
- `pnpm build`
- Production browser checks at desktop and 390 px widths
- Light/dark theme switching and persistence
- `/` and `/example` navigation
- Copy-to-clipboard feedback
- Semantic headings, links, forms, lists, tables, details, media, and footnotes
- Zero horizontal overflow at 390 px

The only browser console message is the expected local warning that Vercel Web Analytics is not available until deployment.

## Verdict

For Craft as a small copy-paste typography layer, Tailwind remains terser and currently produces much less first-load JavaScript in this Next.js 15 app. StyleX produces dramatically less CSS and a stronger typed component contract, but it asks the library to own explicit prose elements and compiler setup.

StyleX is the more interesting direction if Craft is meant to become a durable, themeable component API. Tailwind is the pragmatic choice if Craft should remain a minimal wrapper around arbitrary HTML. Before choosing StyleX for production, repeat the bundle comparison on Next.js 16 with its supported Turbopack integration; the 83 kB JavaScript regression is too large to wave away.
