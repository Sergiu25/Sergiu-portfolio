import { profile } from '../../data/portfolio';
import { Section } from '../layout/Section';

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="About">
      <div className="space-y-5 text-base leading-8 text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
