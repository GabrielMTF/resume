import { Container } from "@/components/container";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-3 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
