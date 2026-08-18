# Craft package notes

Craft is a typed React layout and prose package styled with StyleX.

## Files

- `ds.tsx` contains the layout primitives and explicit `Prose.*` element API.
- `tokens.stylex.ts` defines shared color, font, and radius variables.
- `themes.ts` defines the dark theme override.
- `bin/init.js` copies those three source files into an existing Next.js app and installs the StyleX dependencies. It deliberately leaves Babel and PostCSS configuration to the app.

## Commands

Run `pnpm check-types` from this directory, or `pnpm check-types`, `pnpm lint`, and `pnpm build` from the repository root.

Keep styles statically analyzable by StyleX. Extend prose with explicit elements or typed variants; do not add broad descendant selectors or class-merging utilities.
