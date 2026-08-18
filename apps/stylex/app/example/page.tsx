import * as stylex from "@stylexjs/stylex";

import { Container, Prose, Section } from "@workspace/craft-ds-stylex/ds";
import { colors } from "@workspace/craft-ds-stylex/tokens.stylex";
import { Demo } from "@/components/demo";

const styles = stylex.create({
  examples: {
    display: "grid",
    gap: 48,
    gridTemplateColumns: "minmax(0, 1fr)",
    marginBlock: 48,
  },
  panel: {
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: 0,
  },
  byline: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  contentSection: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  resource: {
    display: "grid",
    gap: 4,
  },
  aside: {
    backgroundColor: colors.muted,
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 16,
  },
  detailsContent: {
    padding: 16,
  },
});

export default function ExamplePage() {
  return (
    <Section>
      <Container>
        <div {...stylex.props(styles.examples)}>
          <SampleArticle />
          <ExtendedArticle />
        </div>
      </Container>
    </Section>
  );
}

function SampleArticle() {
  return (
    <div {...stylex.props(styles.panel)}>
      <Demo attribute="StyleX article primitives" vertical>
        <Prose isArticle isSpaced>
          <Prose.H1>Sample Article Title</Prose.H1>
          <Prose.P variant="lead">
            This lead paragraph introduces an article composed from explicit,
            independently styleable StyleX prose elements.
          </Prose.P>

          <Prose.H2>Section 1: Text Styles</Prose.H2>
          <Prose.P>
            This is a regular paragraph with{" "}
            <Prose.Strong>strong text</Prose.Strong>,{" "}
            <Prose.Em>emphasized text</Prose.Em>, and{" "}
            <Prose.A href="#sample-link">a sample link</Prose.A>.
          </Prose.P>
          <Prose.P variant="large">This is large text for emphasis.</Prose.P>
          <Prose.P variant="muted">
            This is muted text for less important information.
          </Prose.P>

          <Prose.H2>Section 2: Lists</Prose.H2>
          <Prose.H3>Unordered List</Prose.H3>
          <Prose.Ul>
            <Prose.Li>First item</Prose.Li>
            <Prose.Li>
              Second item with a <Prose.A href="#list-link">link</Prose.A>
            </Prose.Li>
            <Prose.Li>Third item</Prose.Li>
          </Prose.Ul>
          <Prose.H3>Ordered List</Prose.H3>
          <Prose.Ol>
            <Prose.Li>First step</Prose.Li>
            <Prose.Li>Second step</Prose.Li>
            <Prose.Li>Third step</Prose.Li>
          </Prose.Ol>
          <Prose.H3>Definition List</Prose.H3>
          <Prose.Dl>
            <Prose.Dt>Local ownership</Prose.Dt>
            <Prose.Dd>Each element explicitly owns its styles.</Prose.Dd>
            <Prose.Dt>Composition</Prose.Dt>
            <Prose.Dd>Callers can pass typed style objects.</Prose.Dd>
          </Prose.Dl>

          <Prose.H2>Section 3: Block Elements</Prose.H2>
          <Prose.Blockquote>
            StyleX trades terse descendant selectors for explicit ownership and
            deterministic composition.
            <Prose.Cite>— Craft comparison notes</Prose.Cite>
          </Prose.Blockquote>
          <Prose.Pre>
            <Prose.Code block>{`const styles = stylex.create({
  greeting: { color: colors.primary },
});`}</Prose.Code>
          </Prose.Pre>
          <Prose.Figure>
            <Prose.Img
              alt="Abstract architecture"
              src="https://images.unsplash.com/photo-1743167150074-4fe3fd1cd2b6?q=80&w=2670&auto=format&fit=crop"
            />
            <Prose.Figcaption>
              A figure rendered with explicit StyleX primitives.
            </Prose.Figcaption>
          </Prose.Figure>

          <Prose.H2>Section 4: Inline Elements</Prose.H2>
          <Prose.P>
            You can use <Prose.Code>inline code</Prose.Code> within a paragraph.
            Press <Prose.Kbd>Ctrl</Prose.Kbd> + <Prose.Kbd>S</Prose.Kbd> to
            save. Here&apos;s some <Prose.Mark>highlighted text</Prose.Mark> and
            an <Prose.Abbr title="Abbreviation">abbr</Prose.Abbr>, plus{" "}
            <Prose.Sub>subscript</Prose.Sub> and{" "}
            <Prose.Sup>superscript</Prose.Sup> text.
          </Prose.P>

          <Prose.H2>Section 5: Table</Prose.H2>
          <ComparisonTable />

          <Prose.H2>Section 6: Additional Elements</Prose.H2>
          <Prose.Details>
            <Prose.Summary>Click to expand</Prose.Summary>
            <Prose.P>
              This content uses the same theme tokens as the page.
            </Prose.P>
          </Prose.Details>
          <Prose.Hr />
          <Prose.Small>This comparison was updated in August 2026.</Prose.Small>
        </Prose>
      </Demo>
    </div>
  );
}

function ExtendedArticle() {
  return (
    <div {...stylex.props(styles.panel)}>
      <Demo attribute="Extended article composition" vertical>
        <Prose isSpaced>
          <header>
            <Prose.H1>Building a Design System with StyleX</Prose.H1>
            <div {...stylex.props(styles.byline)}>
              <Prose.P variant="small">By Craft Design Systems</Prose.P>
              <time dateTime="2026-08-17">August 17, 2026</time>
            </div>
          </header>

          <section {...stylex.props(styles.contentSection)}>
            <Prose.H2>Prerequisites</Prose.H2>
            <Prose.Ul>
              <Prose.Li>React component composition</Prose.Li>
              <Prose.Li>Modern CSS properties and media queries</Prose.Li>
              <Prose.Li>A compiler-aware application build</Prose.Li>
            </Prose.Ul>

            <Prose.H2>StyleX Tooling</Prose.H2>
            <Prose.P>
              <Prose.Strong>Babel plugin</Prose.Strong> — transforms StyleX
              calls into atomic class names.
            </Prose.P>
            <Prose.P>
              <Prose.Strong>PostCSS plugin</Prose.Strong> — extracts those
              styles into the application stylesheet.
            </Prose.P>
            <Prose.P>
              <Prose.Strong>TypeScript</Prose.Strong> — validates properties,
              values, variables, and component style contracts.
            </Prose.P>

            <Prose.H2>Core Concepts</Prose.H2>
            <Prose.H3>Explicit element ownership</Prose.H3>
            <Prose.Ul>
              <Prose.Li>
                Every styled element receives a generated class.
              </Prose.Li>
              <Prose.Li>
                Parent wrappers do not reach into arbitrary children.
              </Prose.Li>
              <Prose.Li>
                Theme variables still inherit through the tree.
              </Prose.Li>
            </Prose.Ul>

            <Prose.H3>Deterministic composition</Prose.H3>
            <Prose.Ul>
              <Prose.Li>
                Later style arguments override earlier arguments.
              </Prose.Li>
              <Prose.Li>
                Shorthand and longhand properties resolve predictably.
              </Prose.Li>
              <Prose.Li>
                Style props stay typed across package boundaries.
              </Prose.Li>
            </Prose.Ul>

            <Prose.H2>Recommended Evaluation Path</Prose.H2>
            <Prose.Ol>
              <Prose.Li>
                <Prose.Strong>Parity:</Prose.Strong> compare desktop, mobile,
                and dark theme screenshots.
              </Prose.Li>
              <Prose.Li>
                <Prose.Strong>Output:</Prose.Strong> compare generated CSS and
                JavaScript sizes.
              </Prose.Li>
              <Prose.Li>
                <Prose.Strong>API:</Prose.Strong> compare authoring effort and
                extension points.
              </Prose.Li>
            </Prose.Ol>

            <Prose.H2>Resources</Prose.H2>
            <div {...stylex.props(styles.resource)}>
              <Prose.H4>Official Documentation</Prose.H4>
              <Prose.P>
                <Prose.A
                  href="https://stylexjs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  stylexjs.com
                </Prose.A>{" "}
                — current installation and API guidance.
              </Prose.P>
            </div>

            <Prose.Hr />
            <Prose.Details>
              <Prose.Summary>Implementation note</Prose.Summary>
              <div {...stylex.props(styles.detailsContent)}>
                <Prose.P>
                  This port intentionally avoids a compatibility CSS layer so
                  the comparison exposes StyleX&apos;s actual component model.
                </Prose.P>
              </div>
            </Prose.Details>

            <Prose.Blockquote>
              A fair comparison preserves the product while allowing each
              styling system&apos;s constraints to remain visible.
              <Prose.Cite>— Craft StyleX evaluation</Prose.Cite>
            </Prose.Blockquote>

            <Prose.Figure>
              <Prose.Img
                alt="Colorful night sky"
                height={400}
                src="https://images.unsplash.com/photo-1742593323531-c6c4dcd12351?q=80&w=2670&auto=format&fit=crop"
                width={800}
              />
              <Prose.Figcaption>
                The same media primitive responds to both themes.
              </Prose.Figcaption>
            </Prose.Figure>
          </section>

          <footer>
            <aside {...stylex.props(styles.aside)}>
              <Prose.P variant="small">
                The comparison report records measured output separately from
                subjective authoring tradeoffs.
              </Prose.P>
            </aside>
          </footer>
        </Prose>
      </Demo>
    </div>
  );
}

function ComparisonTable() {
  return (
    <Prose.Table>
      <Prose.Thead>
        <Prose.Tr>
          <Prose.Th>Concern</Prose.Th>
          <Prose.Th>Tailwind Craft</Prose.Th>
          <Prose.Th>StyleX Craft</Prose.Th>
        </Prose.Tr>
      </Prose.Thead>
      <Prose.Tbody>
        <Prose.Tr>
          <Prose.Td>Composition</Prose.Td>
          <Prose.Td>Class strings</Prose.Td>
          <Prose.Td>Typed style objects</Prose.Td>
        </Prose.Tr>
        <Prose.Tr>
          <Prose.Td>Prose</Prose.Td>
          <Prose.Td>Descendant selectors</Prose.Td>
          <Prose.Td>Explicit elements</Prose.Td>
        </Prose.Tr>
      </Prose.Tbody>
    </Prose.Table>
  );
}
