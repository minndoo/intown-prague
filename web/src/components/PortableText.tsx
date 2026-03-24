type Span = {
  _type: "span";
  _key: string;
  text?: string;
  marks?: Array<string>;
};

type MarkDef = {
  _type: "link";
  _key: string;
  href?: string;
};

type Block = {
  _type: "block";
  _key: string;
  style?: string;
  children?: Array<Span>;
  markDefs?: Array<MarkDef>;
};

function renderSpan(span: Span, markDefs: MarkDef[]) {
  let content: React.ReactNode = span.text ?? "";

  for (const mark of span.marks ?? []) {
    if (mark === "strong") {
      content = <strong key={`${span._key}-strong`}>{content}</strong>;
    } else if (mark === "em") {
      content = <em key={`${span._key}-em`}>{content}</em>;
    } else {
      const def = markDefs.find((d) => d._key === mark);
      if (def?.href) {
        content = (
          <a key={`${span._key}-link`} href={def.href} className="text-gold underline">
            {content}
          </a>
        );
      }
    }
  }

  return <span key={span._key}>{content}</span>;
}

type Props = {
  value: Array<Block> | null | undefined;
  className?: string;
};

export function PortableText({ value, className }: Props) {
  if (!value) return null;

  return (
    <div className={className}>
      {value.map((block) => (
        <p key={block._key}>
          {block.children?.map((span) => renderSpan(span, block.markDefs ?? []))}
        </p>
      ))}
    </div>
  );
}
