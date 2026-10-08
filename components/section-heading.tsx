import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <p className="text-[12px] font-medium tracking-[0.22em] text-faint uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[clamp(2rem,4.6vw,3.25rem)] font-semibold tracking-[-0.04em] text-foreground leading-[1.08]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[17px] leading-7 text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
