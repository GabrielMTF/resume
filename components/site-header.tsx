import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { profile } from "@/content/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/75 backdrop-blur-xl">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-medium tracking-[-0.02em] text-foreground transition-opacity hover:opacity-70"
        >
          {profile.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {profile.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="#contact" size="sm">
            Contact
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
