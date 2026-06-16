import { profile } from '../../data/portfolio';
import { Section } from '../layout/Section';

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="About">
      <div className="space-y-5 text-base leading-8 text-muted">
        <p>{profile.summary}</p>
        <p>{profile.about}</p>
      </div>
    </Section>
  );
}
