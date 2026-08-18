# Tailwind Craft vs. StyleX Craft

This comparison was refreshed on August 17, 2026 with both variants running Next.js 16.3.1, React 19.2.8, and the default Turbopack development and production builds.

- StyleX: `apps/stylex` with `packages/craft-ds-stylex`
- Tailwind: `apps/tailwind` with `packages/craft-ds-tailwind`
- Shared Tailwind starting point: commit `1333d16811c605abb252aaa34578803664bca0b8`

The routes, content coverage, layout intent, viewport, browser, and production server configuration were held constant. The StyleX implementation remains a pure port rather than a compatibility layer.

## Results

| Measure                                   |    Tailwind |      StyleX |  Change |
| ----------------------------------------- | ----------: | ----------: | ------: |
| Generated production CSS, raw             |    46,038 B |     7,726 B |  −83.2% |
| Initial `/` CSS, encoded over HTTP        |     8,237 B |     2,930 B |  −64.4% |
| Initial `/` JavaScript, encoded over HTTP |   151,920 B |   143,066 B |   −5.8% |
| Initial `/` HTML, encoded over HTTP       |    14,394 B |    12,546 B |  −12.8% |
| `className=` authoring sites              |          82 |           0 |   −100% |
| Core design-system styling source         |   263 lines |   708 lines | +169.2% |
| Selected parity source                    | 1,095 lines | 1,575 lines |  +43.8% |

Next.js 16 removed the old `Size` and `First Load JS` build output because it was unreliable for React Server Components. The HTTP figures above instead use a fresh Chromium session and `PerformanceResourceTiming.encodedBodySize` for the six initial JavaScript resources, stylesheet, and document. Browser cache was empty for each origin.

“Core design-system styling source” compares the Tailwind `ds.tsx` with the StyleX `ds.tsx`, tokens, and theme files. “Selected parity source” also includes the catalog page, example page, and global stylesheet.

## API difference

Tailwind offers concise descendant styling:

```tsx
<Prose isArticle isSpaced>
  <h1>Article title</h1>
  <p>Article content</p>
</Prose>
```

StyleX makes ownership explicit:

```tsx
<Prose isArticle isSpaced>
  <Prose.H1>Article title</Prose.H1>
  <Prose.P>Article content</Prose.P>
</Prose>
```

That is still the central authoring tradeoff. StyleX avoids broad descendant selectors and gives every element a typed extension point, but the package owns more components and the caller writes more syntax.

## What improved with StyleX

- Raw generated CSS is 83% smaller and the CSS downloaded for `/` is 64% smaller.
- Initial JavaScript is now slightly smaller under the shared Next.js 16 Turbopack build, reversing the misleading Next.js 15 build-metric result.
- Style props, tokens, responsive values, and theme overrides are statically typed.
- Composition is deterministic; callers do not need a class-merging utility.
- Dark mode is a token theme rather than a second set of utility classes.
- Tailwind, shadcn, `clsx`, `tailwind-merge`, animation helpers, and the UI workspace package are absent from the StyleX application's dependency graph.

## What remains more expensive

- The core StyleX package source is 169% larger because rich prose exposes an explicit primitive for each styled element.
- StyleX requires coordinated Babel and PostCSS configuration even though Next.js 16 now runs that integration through Turbopack successfully.
- Arbitrary CMS or Markdown HTML cannot inherit the full prose treatment automatically. It must be mapped to `Prose.*` elements or handled by a deliberately scoped compatibility layer.
- Tailwind remains faster to improvise with when a design is primarily utility composition inside one application.

The [StyleX Next.js guide](https://stylexjs.com/docs/learn/installation/nextjs) documents Webpack and Turbopack compatibility starting with Next.js 16.0.3. Both `next dev` and `next build` use Turbopack here without `--webpack`.

## Verification

Both applications pass from the shared workspace:

- `pnpm check-types`
- `pnpm lint`
- `pnpm build`
- Static generation of `/` and `/example`
- Desktop and 390 px production-browser checks
- Light/dark theme switching and persistence
- Zero horizontal overflow at 390 px
- Zero hydration or runtime errors

The Tailwind lint run retains three existing `@next/next/no-img-element` warnings. The only browser console message in either app is the expected local warning that Vercel Web Analytics is unavailable until deployment.

## Verdict

On the shared Next.js 16.3.1 baseline, StyleX has the better delivered output: much less CSS, slightly less JavaScript, and a smaller document. The old 83 kB JavaScript regression was an artifact of comparing different Next.js 15 compiler paths and no longer appears.

Tailwind is still substantially terser and better suited to Craft as a minimal wrapper around arbitrary HTML. StyleX is the stronger direction if Craft should become a durable, themeable, typed component API. The decision is now about authoring model and ownership—not a runtime payload penalty.
