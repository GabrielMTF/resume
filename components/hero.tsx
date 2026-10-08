import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center overflow-hidden py-20"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative flex flex-col items-center text-center">
        <p className="hero-enter text-[13px] tracking-[0.18em] text-muted uppercase">
          {profile.role}
        </p>
        <h1 className="hero-enter hero-enter-delay-1 mt-6 max-w-[14ch] text-[clamp(3.4rem,11vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-balance text-foreground">
          {profile.name}
        </h1>
        <p className="hero-enter hero-enter-delay-2 mt-8 max-w-136 text-[18px] leading-8 text-pretty text-muted sm:text-[20px] sm:leading-9">
          {profile.headline}
        </p>
        <p className="hero-enter hero-enter-delay-3 mt-5 text-[14px] text-faint">
          {profile.location}
          <span className="mx-2 text-line" aria-hidden>
            ·
          </span>
          {profile.availability}
        </p>
        <div className="hero-enter hero-enter-delay-4 mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`} variant="primary">
            Get in touch
          </ButtonLink>
          <ButtonLink href="#work">See my work</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
