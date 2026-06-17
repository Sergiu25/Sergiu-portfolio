import { projects } from '../../data/portfolio';
import { Section } from '../layout/Section';
import { SkillPill } from '../ui/SkillPill';

export function ProjectsSection() {
  return (
    <Section id="projects" title="Personal Projects">
      {projects.length === 0 ? (
        <div className="rounded-lg border border-dashed border-line bg-panel/35 p-6">
          <p className="text-base leading-8 text-muted">
            Selected personal projects will be added here soon. This section is ready for Java
            backend APIs, database-driven apps and other practical work.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-line/70 bg-panel/45 p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                </div>

                {project.links ? (
                  <div className="flex gap-3 text-sm font-semibold text-steel">
                    {project.links.github ? (
                      <a href={project.links.github} className="transition-colors hover:text-accent">
                        GitHub
                      </a>
                    ) : null}
                    {project.links.demo ? (
                      <a href={project.links.demo} className="transition-colors hover:text-accent">
                        Demo
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <SkillPill key={technology} label={technology} />
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
