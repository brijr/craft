import { Main, Section, Container, Flex, Grid } from "@/components/craft";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>craft-ds</h1>
          <p>A lightweight, customizable design system for React and Next.js</p>
          <Flex gap={4}>
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
          </Flex>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Components</h2>

          <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
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
              title="Flex"
              description="Creates flexible box layouts"
            />
            <ComponentCard title="Grid" description="Creates grid layouts" />
          </Grid>
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
          <Flex direction={{ sm: "col", md: "row" }} gap={4}>
            <div>Flex Item 1</div>
            <div>Flex Item 2</div>
            <div>Flex Item 3</div>
          </Flex>
          <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
            <div>Grid Item 1</div>
            <div>Grid Item 2</div>
            <div>Grid Item 3</div>
          </Grid>
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
