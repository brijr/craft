import { Main, Section, Container, Box } from "@/components/craft";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>craft-ds</h1>
          <p>A lightweight, customizable design system for React and Next.js</p>
          <Box gap={2} className="not-prose mt-4">
            <Button asChild>
              <a
                href="https://github.com/brijr/craft"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.npmjs.com/package/craft-ds"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm
              </a>
            </Button>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Components</h2>

          <Box cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
            <ComponentCard
              title="Layout"
              description="Sets up the basic HTML structure and applies global styles"
            />
            <ComponentCard
              title="Main"
              description="Used for the main content area of the page"
            />
            <ComponentCard
              title="Section"
              description="Defines sections within the page"
            />
            <ComponentCard
              title="Container"
              description="Contains content with a maximum width and padding"
            />
            <ComponentCard
              title="Article"
              description="Renders articles with optional dangerouslySetInnerHTML"
            />
            <ComponentCard
              title="Box"
              description="Creates Boxible box layouts"
            />
            <ComponentCard title="Box" description="Creates Box layouts" />
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Example Usage</h2>

          <pre>
            {`import { Layout, Main, Section, Container } from "craft-ds";

export default function Page() {
  return (
      <Main>
        <Section>
          <Container>
            <h1>Welcome to my page</h1>
            <p>This is an example of how to use craft-ds components.</p>
          </Container>
        </Section>
      </Main>
    );
  }`}
          </pre>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Responsive Layouts</h2>
          <Box gap={4}>
            <div>Box Item 1</div>
            <div>Box Item 2</div>
            <div>Box Item 3</div>
          </Box>
          <Box cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
            <div>Box Item 1</div>
            <div>Box Item 2</div>
            <div>Box Item 3</div>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Get Started</h2>
          <ol>
            <li>
              Install the package: <code>npm install craft-ds</code>
            </li>
            <li>Import the components you need</li>
            <li>Use the components to build your layout</li>
            <li>Customize using className prop and Tailwind CSS</li>
          </ol>
          <p>
            For more detailed instructions and API documentation, visit our{" "}
            <a
              href="https://github.com/brijr/craft"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </p>
        </Container>
      </Section>
    </Main>
  );
}

function ComponentCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
