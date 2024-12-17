import { Demo } from "@/components/demo";

export default function Index() {
  return (
    <section className="craft section">
      <div className="container">
        <h1>Craft Design System</h1>
        <div className="grid gap-12 my-12 border">
          <Demo attribute="article" vertical>
            <article className="spaced">
              <h1>Sample Article Title</h1>
              <p className="lead">
                This is a lead paragraph that introduces the article.
              </p>
              <h2>Section 1: Text Styles</h2>
              <p>
                This is a regular paragraph with <strong>strong text</strong>,{" "}
                <em>emphasized text</em>, and <a href="#">a sample link</a>.
              </p>
              <p className="large">This is large text for emphasis.</p>
              <p className="small muted">
                This is small, muted text for less important information.
              </p>
              <h2>Section 2: Lists</h2>
              <h3>Unordered List</h3>
              <ul>
                <li>First item</li>
                <li>
                  Second item with a <a href="#">link</a>
                </li>
                <li>Third item</li>
              </ul>
              <h3>Ordered List</h3>
              <ol>
                <li>First step</li>
                <li>Second step</li>
                <li>Third step</li>
              </ol>
              <h3>Definition List</h3>
              <dl>
                <dt>Term 1</dt>
                <dd>Definition of term 1</dd>
                <dt>Term 2</dt>
                <dd>Definition of term 2</dd>
              </dl>
              <h2>Section 3: Block Elements</h2>
              <blockquote>
                This is a blockquote. It can be used for quoting other sources.
                <cite>- Author Name</cite>
              </blockquote>
              <pre>
                <code>{`function greet(name) {
  console.log("Hello, " + name + "!");
}`}</code>
              </pre>
              <figure>
                <img
                  src="https://via.placeholder.com/600x300"
                  alt="Placeholder image"
                />
                <figcaption>
                  This is a figure caption for the image above.
                </figcaption>
              </figure>
              <h2>Section 4: Inline Elements</h2>
              <p>
                You can use <code>inline code</code> within a paragraph. Press{" "}
                <kbd>Ctrl</kbd> + <kbd>S</kbd> to save. Here's some{" "}
                <mark>highlighted text</mark> and an{" "}
                <abbr title="Abbreviation">abbr</abbr>. You can also use{" "}
                <sub>subscript</sub> and <sup>superscript</sup> text.
              </p>
              <h2>Section 5: Table</h2>
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
                    <td>Row 1, Cell 1</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 3</td>
                  </tr>
                  <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                    <td>Row 2, Cell 3</td>
                  </tr>
                </tbody>
              </table>
              <h2>Section 6: Additional Elements</h2>
              <details>
                <summary>Click to expand</summary>
                <p>This is hidden content that appears when expanded.</p>
              </details>
              <hr />
              <small>This article was last updated on May 1, 2023.</small>
            </article>
          </Demo>
        </div>
      </div>
    </section>
  );
}
