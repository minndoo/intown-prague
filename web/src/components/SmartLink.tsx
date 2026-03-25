import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  linkType?: "internal" | "external" | null;
  href?: string | null;
  path?: string | null;
  fragment?: string | null;
  className?: string;
  children: ReactNode;
};

export function SmartLink({ linkType, href, path, fragment, className, children }: Props) {
  if (linkType === "external" && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  const internalHref = `${path ?? ""}${fragment ? `#${fragment}` : ""}` || "/";

  return (
    <Link href={internalHref} className={className}>
      {children}
    </Link>
  );
}
