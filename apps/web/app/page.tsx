import * as stylex from "@stylexjs/stylex";

import { Container, Prose, Section } from "@workspace/craft-ds/ds";
import { colors, fonts, radii } from "@workspace/craft-ds/tokens.stylex";
import { Demo } from "@/components/demo";

const styles = stylex.create({
  panel: {
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 24,
  },
  intro: {
    backgroundColor: colors.accent,
    marginBlockEnd: 48,
  },
  layoutExample: {
    marginBlockEnd: 48,
  },
  showcase: {
    display: "grid",
    gap: 48,
    marginBlock: 48,
  },
  group: {
    display: "grid",
    gap: 16,
  },
  demoList: {
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
  },
  input: {
    backgroundColor: colors.background,
    borderColor: colors.input,
    borderRadius: radii.medium,
    borderStyle: "solid",
    borderWidth: 1,
    color: colors.foreground,
    fontFamily: fonts.sans,
    maxWidth: 384,
    paddingBlock: 8,
    paddingInline: 12,
    width: "100%",
  },
  checkRow: {
    alignItems: "center",
    display: "flex",
    gap: 8,
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  sampleBlock: {
    display: "grid",
    gap: 16,
  },
  taskCheckbox: {
    accentColor: colors.primary,
    marginInlineEnd: 8,
  },
});

export default function Index() {
  return (
    <Section>
      <Container>
        <Intro />
        <LayoutExample />
        <ProseShowcase />
      </Container>
    </Section>
  );
}

function Intro() {
  return (
    <Prose style={[styles.panel, styles.intro]}>
      <Prose.P>
        This comparison rebuilds Craft&apos;s layout and prose primitives with{" "}
        <Prose.A
          href="https://stylexjs.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          StyleX
        </Prose.A>
        . It keeps the same semantic HTML and visual goals while replacing
        Tailwind utilities and descendant selectors with compiled, explicit
        component styles.
      </Prose.P>
    </Prose>
  );
}

function LayoutExample() {
  return (
    <Prose isSpaced style={[styles.panel, styles.layoutExample]}>
      <Prose.H2>Layout Setup</Prose.H2>
      <Prose.P>
        The layout component names stay the same. Customization moves from
        string class names to typed StyleX style objects.
      </Prose.P>

      <Prose.H3>Basic Layout Structure</Prose.H3>
      <Prose.Pre>
        <Prose.Code block>{`// In your layout.tsx
import { Layout } from "@workspace/craft-ds/ds";

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}`}</Prose.Code>
      </Prose.Pre>

      <Prose.H3>Explicit Prose Structure</Prose.H3>
      <Prose.P>
        StyleX does not style arbitrary descendants. Each semantic element owns
        its styles explicitly:
      </Prose.P>
      <Prose.Pre>
        <Prose.Code block>{`import { Prose } from "@workspace/craft-ds/ds";

export default function Article() {
  return (
    <Prose isArticle isSpaced>
      <Prose.H1>Page Title</Prose.H1>
      <Prose.P>Your content here...</Prose.P>
    </Prose>
  );
}`}</Prose.Code>
      </Prose.Pre>

      <Prose.H3>Style Composition</Prose.H3>
      <Prose.Pre>
        <Prose.Code block>{`const styles = stylex.create({
  section: { paddingBlock: 48 },
});

<Section style={styles.section}>
  <Container>Content</Container>
</Section>`}</Prose.Code>
      </Prose.Pre>
    </Prose>
  );
}

function ProseShowcase() {
  return (
    <Prose>
      <div {...stylex.props(styles.showcase)}>
        <Headings />
        <TextStyles />
        <Lists />
        <BlockElements />
        <InlineElements />
        <Tables />
        <FormElements />
        <AdditionalElements />
      </div>
    </Prose>
  );
}

function Headings() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Headings</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="h1">
          <Prose.H1>Heading 1</Prose.H1>
        </Demo>
        <Demo attribute="h2">
          <Prose.H2>Heading 2</Prose.H2>
        </Demo>
        <Demo attribute="h3">
          <Prose.H3>Heading 3</Prose.H3>
        </Demo>
        <Demo attribute="h4">
          <Prose.H4>Heading 4</Prose.H4>
        </Demo>
        <Demo attribute="h5">
          <Prose.H5>Heading 5</Prose.H5>
        </Demo>
        <Demo attribute="h6">
          <Prose.H6>Heading 6</Prose.H6>
        </Demo>
      </div>
    </section>
  );
}

function TextStyles() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Text Styles</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="p">
          <Prose.P>Regular paragraph text.</Prose.P>
        </Demo>
        <Demo attribute="lead">
          <Prose.P variant="lead">
            Lead text for an article introduction.
          </Prose.P>
        </Demo>
        <Demo attribute="large">
          <Prose.P variant="large">Large text for added emphasis.</Prose.P>
        </Demo>
        <Demo attribute="small">
          <Prose.P variant="small">Small text for supporting details.</Prose.P>
        </Demo>
      </div>
    </section>
  );
}

function Lists() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Lists</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="ul">
          <Prose.P>This is an example of an unordered list.</Prose.P>
          <Prose.Ul>
            <Prose.Li>Unordered list item 1</Prose.Li>
            <Prose.Li>Unordered list item 2</Prose.Li>
            <Prose.Li>Unordered list item 3</Prose.Li>
          </Prose.Ul>
        </Demo>
        <Demo attribute="ol">
          <Prose.P>This is an example of an ordered list.</Prose.P>
          <Prose.Ol>
            <Prose.Li>Ordered list item 1</Prose.Li>
            <Prose.Li>Ordered list item 2</Prose.Li>
            <Prose.Li>Ordered list item 3</Prose.Li>
          </Prose.Ol>
        </Demo>
        <Demo attribute="dl">
          <Prose.Dl>
            <Prose.Dt>Definition Term</Prose.Dt>
            <Prose.Dd>
              Definition description explaining the term above.
            </Prose.Dd>
            <Prose.Dt>Another Term</Prose.Dt>
            <Prose.Dd>Another description for the second term.</Prose.Dd>
          </Prose.Dl>
        </Demo>
      </div>
    </section>
  );
}

function BlockElements() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Block Elements</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="blockquote">
          <Prose.Blockquote>
            A well-known quote, contained in a blockquote element.
            <Prose.Cite>— Source Attribution</Prose.Cite>
          </Prose.Blockquote>
        </Demo>
        <Demo attribute="pre">
          <Prose.Pre data-filename="example.js">
            <Prose.Code block>{`function example() {
  console.log("Hello StyleX");
}`}</Prose.Code>
          </Prose.Pre>
        </Demo>
        <Demo attribute="details">
          <Prose.Details>
            <Prose.Summary>Click to expand</Prose.Summary>
            <Prose.P>Hidden content that appears when expanded.</Prose.P>
          </Prose.Details>
        </Demo>
        <Demo attribute="figure">
          <Prose.Figure>
            <Prose.Img
              alt="Colorful aurora"
              src="https://images.unsplash.com/photo-1742593323531-c6c4dcd12351?q=80&w=2670&auto=format&fit=crop"
            />
            <Prose.Figcaption>A sample image with a caption</Prose.Figcaption>
          </Prose.Figure>
        </Demo>
      </div>
    </section>
  );
}

function InlineElements() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Inline Elements</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="a">
          <Prose.A href="#inline-elements">
            Sample link with hover state
          </Prose.A>
        </Demo>
        <Demo attribute="strong">
          <Prose.Strong>Strong text for emphasis</Prose.Strong>
        </Demo>
        <Demo attribute="code">
          <Prose.Code>Inline code element</Prose.Code>
        </Demo>
        <Demo attribute="kbd">
          <Prose.Kbd>Ctrl</Prose.Kbd> + <Prose.Kbd>C</Prose.Kbd>
        </Demo>
        <Demo attribute="mark">
          <Prose.Mark>Highlighted text</Prose.Mark>
        </Demo>
        <Demo attribute="abbr">
          <Prose.Abbr title="HyperText Markup Language">HTML</Prose.Abbr>
        </Demo>
        <Demo attribute="sub,sup">
          <Prose.P>
            Text with <Prose.Sub>subscript</Prose.Sub> and{" "}
            <Prose.Sup>superscript</Prose.Sup>
          </Prose.P>
        </Demo>
      </div>
    </section>
  );
}

function Tables() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Tables</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="table">
          <Prose.Table>
            <Prose.Thead>
              <Prose.Tr>
                <Prose.Th>Header 1</Prose.Th>
                <Prose.Th>Header 2</Prose.Th>
                <Prose.Th>Header 3</Prose.Th>
              </Prose.Tr>
            </Prose.Thead>
            <Prose.Tbody>
              <Prose.Tr>
                <Prose.Td>Cell 1</Prose.Td>
                <Prose.Td>Cell 2</Prose.Td>
                <Prose.Td>Cell 3</Prose.Td>
              </Prose.Tr>
              <Prose.Tr>
                <Prose.Td>Cell 4</Prose.Td>
                <Prose.Td>Cell 5</Prose.Td>
                <Prose.Td>Cell 6</Prose.Td>
              </Prose.Tr>
            </Prose.Tbody>
          </Prose.Table>
        </Demo>
      </div>
    </section>
  );
}

function FormElements() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Form Elements</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="input">
          <label>
            <span>Text input</span>
            <input
              placeholder="Text input"
              type="text"
              {...stylex.props(styles.input)}
            />
          </label>
        </Demo>
        <Demo attribute="textarea">
          <label>
            <span>Textarea</span>
            <textarea placeholder="Textarea" {...stylex.props(styles.input)} />
          </label>
        </Demo>
        <Demo attribute="select">
          <select aria-label="Select an option" {...stylex.props(styles.input)}>
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </Demo>
        <Demo attribute="checkbox">
          <div {...stylex.props(styles.checkRow)}>
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">Checkbox</label>
          </div>
        </Demo>
        <Demo attribute="radio">
          <div {...stylex.props(styles.radioGroup)}>
            <div {...stylex.props(styles.checkRow)}>
              <input id="radio1" name="radio-group" type="radio" />
              <label htmlFor="radio1">Radio 1</label>
            </div>
            <div {...stylex.props(styles.checkRow)}>
              <input id="radio2" name="radio-group" type="radio" />
              <label htmlFor="radio2">Radio 2</label>
            </div>
          </div>
        </Demo>
      </div>
    </section>
  );
}

function AdditionalElements() {
  return (
    <section {...stylex.props(styles.group)}>
      <Prose.H3>Additional Elements</Prose.H3>
      <div {...stylex.props(styles.demoList)}>
        <Demo attribute="hr">
          <div>
            <Prose.P>Text before horizontal rule</Prose.P>
            <Prose.Hr />
            <Prose.P>Text after horizontal rule</Prose.P>
          </div>
        </Demo>
        <Demo attribute="small">
          <Prose.Small>Small text element</Prose.Small>
        </Demo>
        <Demo attribute="video">
          <Prose.Video controls>
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </Prose.Video>
        </Demo>
        <Demo attribute="nested-lists">
          <Prose.Ul>
            <Prose.Li>Parent item 1</Prose.Li>
            <Prose.Li>
              Parent item 2
              <Prose.Ul>
                <Prose.Li>Child item 1</Prose.Li>
                <Prose.Li>Child item 2</Prose.Li>
              </Prose.Ul>
            </Prose.Li>
            <Prose.Li>Parent item 3</Prose.Li>
          </Prose.Ul>
        </Demo>
        <Demo attribute="task-list">
          <Prose.Ul>
            <Prose.Li>
              <input
                checked
                readOnly
                type="checkbox"
                {...stylex.props(styles.taskCheckbox)}
              />
              Completed task
            </Prose.Li>
            <Prose.Li>
              <input
                readOnly
                type="checkbox"
                {...stylex.props(styles.taskCheckbox)}
              />
              Pending task
            </Prose.Li>
          </Prose.Ul>
        </Demo>
        <Demo attribute="table-of-contents">
          <nav aria-label="Table of contents">
            <Prose.Ol>
              <Prose.Li>
                <Prose.A href="#headings">Headings</Prose.A>
              </Prose.Li>
              <Prose.Li>
                <Prose.A href="#lists">Lists</Prose.A>
              </Prose.Li>
              <Prose.Li>
                <Prose.A href="#tables">Tables</Prose.A>
              </Prose.Li>
            </Prose.Ol>
          </nav>
        </Demo>
        <Demo attribute="footnotes">
          <Prose.Ol>
            <Prose.Li>First footnote reference</Prose.Li>
            <Prose.Li>Second footnote reference</Prose.Li>
          </Prose.Ol>
        </Demo>
      </div>
    </section>
  );
}
