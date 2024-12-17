interface Props {
  children: React.ReactNode;
  attribute: string;
}

export const Demo = ({ children, attribute }: Props) => {
  return (
    <section className="grid divide-x grid-cols-[1fr_3fr]">
      <div className="p-4 bg-accent">
        <p className="sr-only">HTML Attribute</p>
        <p># {attribute}</p>
      </div>

      <div className="p-4 relative bg-background">
        <p className="text-muted-foreground text-xs absolute top-0 right-2">
          Examle {attribute}
        </p>
        {children}
      </div>
    </section>
  );
};
