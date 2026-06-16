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
            className="rounded-lg border border-line/70 bg-panel/45 p-5 transition-colors hover:border-accent/40"
          >
            <h3 className="text-base font-semibold text-slate-100">{skillGroup.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
