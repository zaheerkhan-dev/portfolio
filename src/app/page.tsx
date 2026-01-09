import { ObsidianShell } from "@/components/layout/shell/ObsidianShell";
import { GlitchHero } from "@/components/sections/hero/GlitchHero";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { Footer } from "@/components/layout/footer/Footer"; // <--- Import
import Starfield from "@/components/layout/backgrounds/Starfield";

export default function Home() {
  return (
    <main>
      <Starfield />
      <ObsidianShell>
        <GlitchHero />
        <AboutSection />
        <ProjectsSection />
        
        {/* Footer sits at the bottom */}
        <Footer />
      </ObsidianShell>
    </main>
  );
}