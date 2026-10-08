import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" className="md:py-36">
      <Reveal>
        <div className="text-center">
          <p className="text-[12px] font-medium tracking-[0.22em] text-faint uppercase">
            Contact
          </p>
          <h2 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] font-semibold tracking-tighter text-foreground leading-[0.98]">
            Let’s work together.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[17px] leading-7 text-muted">
            {profile.availability}. {profile.contactNote}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block text-[clamp(1.15rem,3vw,2rem)] tracking-[-0.03em] text-foreground transition-opacity hover:opacity-70"
          >
            {profile.email}
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={profile.links.linkedin} size="sm" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.github} size="sm" external>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.phoneHref} size="sm">
              {profile.phone}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
