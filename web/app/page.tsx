import { Demo } from "@/components/demo";

export default function Index() {
  return (
    <section className="craft section">
      <div className="container">
        <h1>Craft Design System</h1>
        <div className="grid gap-12 my-12">
          <Headings />
          <TextStyles />
          <Lists />
          <BlockElements />
          <InlineElements />
          <Tables />
          <AdditionalElements />
        </div>
      </div>
    </section>
  );
}

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
        <Demo attribute="lead">
          <p className="lead">
            Lead paragraph text that stands out from regular text.
          </p>
        </Demo>
        <Demo attribute="large">
          <p className="large">Large text that's bigger than regular text.</p>
        </Demo>
        <Demo attribute="small">
          <p className="small">Small text that's smaller than regular text.</p>
        </Demo>
        <Demo attribute="muted">
          <p className="muted">Muted text with reduced emphasis.</p>
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
          <ul>
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
          </ul>
        </Demo>
        <Demo attribute="ol">
          <ol>
            <li>Ordered list item 1</li>
            <li>Ordered list item 2</li>
            <li>Ordered list item 3</li>
          </ol>
        </Demo>
        <Demo attribute="dl">
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
            <img src="https://via.placeholder.com/400x200" alt="Example" />
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
