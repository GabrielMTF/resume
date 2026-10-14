import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";

export function Stack() {
  return (
    <Section id="stack">
      <Reveal>
        <SectionHeading
          eyebrow="Stack"
          title="Tools in service of the product."
          description="Frontend first, with enough systems range to design the right solution — not only the next component."
        />
      </Reveal>
      <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8">
        {profile.stack.map((group, index) => (
          <Reveal key={group.title} delayMs={index * 70}>
            <h3 className="text-[13px] tracking-[0.18em] text-faint uppercase">
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 sm:flex-col sm:gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[17px] tracking-[-0.02em] text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <h3 className="text-[13px] tracking-[0.18em] text-faint uppercase">
              Education
            </h3>
            <p className="mt-5 text-[17px] tracking-[-0.02em] text-foreground">
              {profile.education.title}
            </p>
            <p className="mt-2 text-[14px] text-muted">
              {profile.education.school}
              <span className="mx-2 text-faint" aria-hidden>
                ·
              </span>
              {profile.education.period}
            </p>
          </div>
          <div>
            <h3 className="text-[13px] tracking-[0.18em] text-faint uppercase">
              Languages
            </h3>
            <ul className="mt-5 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-x-8">
              {profile.languages.map((language) => (
                <li key={language.name} className="text-[17px] text-foreground">
                  {language.name}
                  <span className="ml-2 text-[14px] text-muted">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-[13px] tracking-[0.18em] text-faint uppercase">
              Certifications
            </h3>
            <ul className="mt-5 space-y-2">
              {profile.certifications.map((item) => (
                <li key={item} className="text-[15px] leading-7 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
