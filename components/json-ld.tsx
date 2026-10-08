import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.description,
    email: profile.email,
    telephone: profile.phone,
    url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressCountry: "BR",
    },
    sameAs: [profile.links.linkedin, profile.links.github],
    knowsLanguage: ["en", "pt"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
