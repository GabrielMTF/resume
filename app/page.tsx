import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { SelectedWork } from "@/components/selected-work";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Highlights />
      <About />
      <SelectedWork />
      <Experience />
      <Stack />
      <Contact />
    </main>
  );
}
