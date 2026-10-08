import { Container } from "@/components/container";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

export function Highlights() {
  return (
    <section aria-label="Highlights" className="border-y border-line">
      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {profile.highlights.map((item, index) => (
            <li
              key={item.label}
              className={cn(
                "py-8 md:py-10",
                index % 2 === 1 && "pl-6 md:pl-8",
                index > 0 && "md:border-l md:border-line md:pl-8",
                index > 1 && "border-t border-line md:border-t-0",
              )}
            >
              <p className="text-[28px] font-semibold tracking-[-0.04em] text-foreground sm:text-[32px]">
                {item.value}
              </p>
              <p className="mt-2 max-w-[16ch] text-[13px] leading-5 text-muted">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
