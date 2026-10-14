import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { RichText } from "@/components/rich-text";
import { profile } from "@/content/profile";

export function SelectedWork() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Products built to feel inevitable."
          description="A few pieces of work that show how I think about systems, interfaces, and delivery — not just tickets."
        />
      </Reveal>
      <ul className="mt-16 grid gap-4 sm:grid-cols-2">
        {profile.work.map((item, index) => (
          <li key={item.id}>
            <Reveal delayMs={index * 80}>
              <article className="flex h-full flex-col rounded-[28px] border border-line bg-surface p-7 transition-colors duration-300 hover:border-foreground/18 sm:p-8">
                <p className="text-[13px] tracking-[0.16em] text-faint">
                  {item.index}
                </p>
                <h3 className="mt-8 text-[1.85rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[2.1rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] text-muted">{item.kicker}</p>
                <p className="mt-5 flex-1 text-[15px] leading-7 text-muted">
                  <RichText text={item.description} />
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-[12px] text-faint"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
