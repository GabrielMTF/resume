import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function Section({
  id,
  children,
  className,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("scroll-mt-20 py-24 md:py-32", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
