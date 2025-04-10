import { Demo } from "@/components/demo";
import { Container, Section, Prose } from "@/components/ds";

export default function Index() {
  return (
    <Section>
      <Container>
        <div className="grid my-12 border">
          <Demo attribute="Example Article" vertical>
            <Prose isArticle>
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
                <kbd>Ctrl</kbd> + <kbd>S</kbd> to save. Here&apos;s some{" "}
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
            </Prose>
          </Demo>
        </div>

        <div className="border">
          <Demo attribute="Another Example Article" vertical>
            <Prose>
              <header>
                <h1>Learning React in 2025: The Ultimate Guide</h1>
                <div className="flex gap-2 items-center text-muted-foreground">
                  <div>
                    <p className="text-sm">
                      By <span>Web Development Expert</span>
                    </p>
                  </div>
                  <time>January 1, 2025</time>
                </div>
              </header>

              <section>
                <h2>Prerequisites</h2>
                <div>
                  <p>✓ Modern JavaScript (ES2024+)</p>
                  <p>✓ Basic understanding of web development tools</p>
                  <p>✓ HTML & CSS fundamentals</p>
                </div>

                <h2>Modern React Tooling</h2>
                <div>
                  <p>
                    <strong>Vite</strong> - Lightning-fast build tool and dev
                    server
                  </p>
                  <p>
                    <strong>TypeScript</strong> - Essential for type-safe React
                    development
                  </p>
                  <p>
                    <strong>pnpm</strong> - The preferred package manager in
                    2025
                  </p>
                </div>

                <h2>Core Concepts to Master</h2>

                <div>
                  <section>
                    <h3>React Hooks in 2025</h3>
                    <ul>
                      <li>The new &apos;use&apos; hook for data fetching</li>
                      <li>React Signals for state management</li>
                      <li>Server Components and Actions</li>
                    </ul>
                  </section>

                  <section>
                    <h3>Modern Component Patterns</h3>
                    <ul>
                      <li>Server Components as the default</li>
                      <li>Streaming SSR</li>
                      <li>Enhanced Suspense boundaries</li>
                    </ul>
                  </section>
                </div>

                <h2>Recommended Learning Path</h2>
                <div>
                  <ol>
                    <li>
                      <strong>Week 1-2:</strong>{" "}
                      <span>Master React fundamentals and hooks</span>
                    </li>
                    <li>
                      <strong>Week 3-4:</strong>{" "}
                      <span>Deep dive into Server Components</span>
                    </li>
                    <li>
                      <strong>Week 3-4:</strong>{" "}
                      <span>Build real-world applications</span>
                    </li>
                  </ol>
                </div>

                <h2>Essential Resources</h2>
                <div>
                  <div className="resource">
                    <h4>Official Documentation</h4>
                    <p>
                      <a
                        href="https://react.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        react.dev
                      </a>{" "}
                      - Always up-to-date
                    </p>
                  </div>
                  <div className="resource">
                    <h4>Community Resources</h4>
                    <p>React Discord community</p>
                  </div>
                </div>

                <hr />

                <details>
                  <summary>Additional Resources</summary>
                  <div className="p-4">
                    <h4>Recommended Books</h4>
                    <ul>
                      <li>React Design Patterns</li>
                      <li>Server Components in Action</li>
                      <li>Modern React Testing</li>
                    </ul>
                  </div>
                </details>

                <blockquote>
                  The best way to learn React is by building real projects and
                  engaging with the community.
                  <cite>- React Core Team</cite>
                </blockquote>

                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1742593323531-c6c4dcd12351?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="React Development Workflow"
                    width={800}
                    height={400}
                  />
                  <figcaption>
                    A typical React development workflow in 2025
                  </figcaption>
                </figure>
              </section>

              <footer>
                <aside>
                  <p className="text-sm text-muted-foreground">
                    Remember: The React ecosystem evolves rapidly. Always verify
                    the latest best practices!
                  </p>
                </aside>
              </footer>
            </Prose>
          </Demo>
        </div>
      </Container>
    </Section>
  );
}
