interface Props {
  children: React.ReactNode;
  attribute: string;
  vertical?: boolean;
}

export const Demo = ({ children, attribute, vertical }: Props) => {
  return (
    <section
      className={`grid ${
        vertical ? "divide-y" : "sm:divide-x sm:grid-cols-[8rem_3fr]"
      }`}
    >
      <div className="p-2 sm:p-4 bg-accent/50 border-b sm:border-b-0">
        <p className="sr-only">HTML Attribute</p>
        <p className="text-sm!">{attribute}</p>
      </div>

      <div className="p-6 relative bg-background">
        <p className="text-muted-foreground hidden sm:block text-xs! absolute top-2 right-2">
          Preview
        </p>
        {children}
      </div>
    </section>
  );
};
