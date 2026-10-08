import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Shipped with teams in Brazil and the US."
          description="Concurrent remote roles, US-based clients, and products across events, marketplaces, and internal platforms."
        />
      </Reveal>
      <ol className="mt-16">
        {profile.experience.map((job) => (
          <li key={`${job.company}-${job.startIso}`} className="border-t border-line">
            <Reveal>
              <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-12 md:py-12">
                <header>
                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-[15px] text-muted">{job.role}</p>
                  <p className="mt-4 text-[13px] text-faint">
                    <time dateTime={job.startIso}>{job.start}</time>
                    {" — "}
                    {job.endIso ? (
                      <time dateTime={job.endIso}>{job.end}</time>
                    ) : (
                      job.end
                    )}
                  </p>
                  <p className="mt-1 text-[13px] text-faint">{job.location}</p>
                </header>
                <div>
                  <ul className="space-y-3">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] leading-7 text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-3 py-1 text-[12px] text-faint"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
