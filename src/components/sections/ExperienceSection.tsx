import { experience } from '../../data/portfolio';
import { Section } from '../layout/Section';
import { SkillPill } from '../ui/SkillPill';

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work Experience">
      <article className="group rounded-lg border border-transparent p-0 transition-colors hover:border-line hover:bg-panel/70 sm:p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-accent">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm font-semibold text-steel">{experience.company}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{experience.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <SkillPill key={technology} label={technology} />
            ))}
          </div>
        </div>
      </article>
    </Section>
  );
}
