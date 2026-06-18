import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';

function App() {
  return (
    <main className="min-h-screen text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 sm:px-10 md:py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10 lg:px-8 lg:py-0 xl:px-6">
        <HeroSection />
        <div className="space-y-4 pb-16 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

export default App;
