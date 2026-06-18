import { skills } from '../../data/portfolio';
import { Section } from '../layout/Section';
import { SkillPill } from '../ui/SkillPill';

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills">
      <div className="grid gap-4">
        {skills.map((skillGroup) => (
          <article
            key={skillGroup.group}
            className="surface-glow rounded-lg border border-line/70 bg-panel/45 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-panel/65"
          >
            <div className="relative">
              <h3 className="text-base font-semibold text-slate-100">{skillGroup.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
