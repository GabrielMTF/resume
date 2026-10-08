import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <p className="text-[12px] font-medium tracking-[0.22em] text-faint uppercase">
            About
          </p>
          <div className="space-y-6">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[19px] leading-8 tracking-[-0.015em] text-pretty text-muted sm:text-[22px] sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
