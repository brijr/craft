interface Props {
  children: React.ReactNode;
  attribute: string;
}

export const Demo = ({ children, attribute }: Props) => {
  return (
    <section className="grid divide-x grid-cols-[7rem_3fr]">
      <div className="p-3 bg-accent">
        <p className="sr-only">HTML Attribute</p>
        <p className="!text-sm">{attribute}</p>
      </div>

      <div className="p-9 relative bg-background">
        <p className="text-muted-foreground !text-xs absolute top-2 right-2">
          Preview
        </p>
        {children}
      </div>
    </section>
  );
};
