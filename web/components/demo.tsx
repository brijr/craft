interface Props {
  children: React.ReactNode;
  attribute: string;
  vertical?: boolean;
}

export const Demo = ({ children, attribute, vertical }: Props) => {
  return (
    <section
      className={`grid ${
        vertical ? "divide-y" : "divide-x grid-cols-[8rem_3fr]"
      }`}
    >
      <div className="p-4 bg-accent/50">
        <p className="sr-only">HTML Attribute</p>
        <p className="!text-sm">{attribute}</p>
      </div>

      <div className="p-6 relative bg-background">
        <p className="text-muted-foreground !text-xs absolute top-2 right-2">
          Preview
        </p>
        {children}
      </div>
    </section>
  );
};
