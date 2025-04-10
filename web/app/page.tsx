import { GitHubButton } from "@/components/github-button";
import { Container, Section, Prose } from "@/components/ds";
import { Demo } from "@/components/demo";

export default function Index() {
  return (
    <Section>
      <Container>
        <Intro />
        <LayoutExample />
        <ProseExample />
      </Container>
    </Section>
  );
}

const Intro = () => {
  return (
    <Prose className="border bg-accent/50 p-6 mb-12">
      Craft is a minimalist Design System that combines a single component file
      and a single CSS file with Next.js best practices for building websites
      quickly. It leverages{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        Next.js
      </a>
      ,{" "}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tailwind
      </a>
      ,{" "}
      <a
        href="https://ui.shadcn.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        shadcn/ui
      </a>
      , and{" "}
      <a
        href="https://typescript.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TypeScript
      </a>{" "}
      to provide a streamlined development experience while maintaining a clean,
      modern aesthetic.
      <GitHubButton />
    </Prose>
  );
};

const LayoutExample = () => {
  return (
    <Prose isSpaced className="border p-6 mb-12">
      <h2>Layout Setup</h2>
      <p>
        Craft provides a set of layout components that make it easy to structure
        your pages. Here is how to use them:
      </p>

      <h3>Basic Layout Structure</h3>
      <pre>
        <code>{`// In your layout.tsx
import { Layout } from "@/components/ds";

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}`}</code>
      </pre>

      <h3>Page Structure</h3>
      <p>
        For individual pages, use the <code>Section</code>,{" "}
        <code>Container</code>, and <code>Prose</code> components:
      </p>
      <pre>
        <code>{`// In your page.tsx
import { Section, Container, Prose } from "@/components/ds";

export default function Page() {
  return (
    <Section>
      <Container>
        <Prose>
          <h1>Page Title</h1>
          <p>Your content here...</p>
        </Prose>
      </Container>
    </Section>
  );
}`}</code>
      </pre>

      <h3>Navigation</h3>
      <p>
        For navigation elements, use the <code>Nav</code> component:
      </p>
      <pre>
        <code>{`import { Nav } from "@/components/ds";

export function Navigation() {
  return (
    <Nav>
      <div className="flex justify-between items-center">
        <div>Logo</div>
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </Nav>
  );
}`}</code>
      </pre>
    </Prose>
  );
};

const ProseExample = () => {
  return (
    <Prose>
      <div className="grid gap-12 my-12">
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
};

const Headings = () => {
  return (
    <div className="grid gap-4">
      <h3>Headings</h3>
      <div className="flex flex-col border divide-y">
        <Demo attribute="h1">
          <h1>Heading 1</h1>
        </Demo>
        <Demo attribute="h2">
          <h2>Heading 2</h2>
        </Demo>
        <Demo attribute="h3">
          <h3>Heading 3</h3>
        </Demo>
        <Demo attribute="h4">
          <h4>Heading 4</h4>
        </Demo>
        <Demo attribute="h5">
          <h5>Heading 5</h5>
        </Demo>
        <Demo attribute="h6">
          <h6>Heading 6</h6>
        </Demo>
      </div>
    </div>
  );
};

const TextStyles = () => {
  return (
    <div className="grid gap-4">
      <h3>Text Styles</h3>
      <div className="grid border divide-y">
        <Demo attribute="p">
          <p>Regular paragraph text.</p>
        </Demo>
        <Demo attribute="large">
          <p className="large">
            Large text that&apos;s bigger than regular text.
          </p>
        </Demo>
        <Demo attribute="small">
          <small className="small">
            Small text that&apos;s smaller than regular text.
          </small>
        </Demo>
      </div>
    </div>
  );
};

const Lists = () => {
  return (
    <div className="grid gap-4">
      <h3>Lists</h3>
      <div className="grid border divide-y">
        <Demo attribute="ul">
          <p>This is an example of an unordered list</p>
          <ul>
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
          </ul>
        </Demo>
        <Demo attribute="ol">
          <p>This is an example of an ordered list</p>
          <ol>
            <li>Ordered list item 1</li>
            <li>Ordered list item 2</li>
            <li>Ordered list item 3</li>
          </ol>
        </Demo>
        <Demo attribute="dl">
          <p>This is an example of a description list</p>
          <dl>
            <dt>Definition Term</dt>
            <dd>Definition description explaining the term above.</dd>
            <dt>Another Term</dt>
            <dd>Another description for the term above.</dd>
          </dl>
        </Demo>
      </div>
    </div>
  );
};

const BlockElements = () => {
  return (
    <div className="grid gap-4">
      <h3>Block Elements</h3>
      <div className="grid border divide-y">
        <Demo attribute="blockquote">
          <blockquote>
            A well-known quote, contained in a blockquote element.
            <cite>- Source Attribution</cite>
          </blockquote>
        </Demo>
        <Demo attribute="pre">
          <pre data-filename="example.js">
            <code>
              {`function example() {
  console.log("Hello World");
}`}
            </code>
          </pre>
        </Demo>
        <Demo attribute="details">
          <details>
            <summary>Click to expand</summary>
            <p>Hidden content that appears when expanded.</p>
          </details>
        </Demo>
        <Demo attribute="figure">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1742593323531-c6c4dcd12351?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Example"
            />
            <figcaption>A sample image with a caption</figcaption>
          </figure>
        </Demo>
      </div>
    </div>
  );
};

const InlineElements = () => {
  return (
    <div className="grid gap-4">
      <h3>Inline Elements</h3>
      <div className="grid border divide-y">
        <Demo attribute="a">
          <a href="#">Sample link with hover state</a>
        </Demo>
        <Demo attribute="strong">
          <strong>Strong text for emphasis</strong>
        </Demo>
        <Demo attribute="code">
          <code>Inline code element</code>
        </Demo>
        <Demo attribute="kbd">
          <kbd>Ctrl</kbd> + <kbd>C</kbd>
        </Demo>
        <Demo attribute="mark">
          <mark>Highlighted text</mark>
        </Demo>
        <Demo attribute="abbr">
          <abbr title="HyperText Markup Language">HTML</abbr>
        </Demo>
        <Demo attribute="sub,sup">
          <p>
            Text with <sub>subscript</sub> and <sup>superscript</sup>
          </p>
        </Demo>
      </div>
    </div>
  );
};

const Tables = () => {
  return (
    <div className="grid gap-4">
      <h3>Tables</h3>
      <div className="grid border divide-y">
        <Demo attribute="table">
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
              </tr>
              <tr>
                <td>Cell 4</td>
                <td>Cell 5</td>
                <td>Cell 6</td>
              </tr>
            </tbody>
          </table>
        </Demo>
      </div>
    </div>
  );
};

const FormElements = () => {
  return (
    <div className="grid gap-4">
      <h3>Form Elements</h3>
      <div className="flex flex-col border divide-y">
        <Demo attribute="input">
          <input
            type="text"
            placeholder="Text input"
            className="w-full max-w-sm px-3 py-2 border rounded-md"
          />
        </Demo>
        <Demo attribute="textarea">
          <textarea
            placeholder="Textarea"
            className="w-full max-w-sm px-3 py-2 border rounded-md"
          />
        </Demo>
        <Demo attribute="select">
          <select className="w-full max-w-sm px-3 py-2 border rounded-md">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </Demo>
        <Demo attribute="checkbox">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Checkbox</label>
          </div>
        </Demo>
        <Demo attribute="radio">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="radio" id="radio1" name="radio-group" />
              <label htmlFor="radio1">Radio 1</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="radio2" name="radio-group" />
              <label htmlFor="radio2">Radio 2</label>
            </div>
          </div>
        </Demo>
      </div>
    </div>
  );
};

const AdditionalElements = () => {
  return (
    <div className="grid gap-4">
      <h3>Additional Elements</h3>
      <div className="grid border divide-y">
        <Demo attribute="hr">
          <div>
            <p>Text before horizontal rule</p>
            <hr />
            <p>Text after horizontal rule</p>
          </div>
        </Demo>
        <Demo attribute="small">
          <small>Small text element</small>
        </Demo>
        <Demo attribute="video">
          <video controls>
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </Demo>
        <Demo attribute="nested-lists">
          <ul>
            <li>Parent item 1</li>
            <li>
              Parent item 2
              <ul>
                <li>Child item 1</li>
                <li>Child item 2</li>
              </ul>
            </li>
            <li>Parent item 3</li>
          </ul>
        </Demo>
        <Demo attribute="task-list">
          <ul className="task-list">
            <li className="task-list-item">
              <input type="checkbox" checked readOnly /> Completed task
            </li>
            <li className="task-list-item">
              <input type="checkbox" readOnly /> Pending task
            </li>
          </ul>
        </Demo>
        <Demo attribute="table-of-contents">
          <nav className="table-of-contents">
            <ol>
              <li>
                <a href="#section1">Section 1</a>
              </li>
              <li>
                <a href="#section2">Section 2</a>
              </li>
              <li>
                <a href="#section3">Section 3</a>
              </li>
            </ol>
          </nav>
        </Demo>
        <Demo attribute="footnotes">
          <div className="footnotes">
            <ol>
              <li>First footnote reference</li>
              <li>Second footnote reference</li>
            </ol>
          </div>
        </Demo>
      </div>
    </div>
  );
};
