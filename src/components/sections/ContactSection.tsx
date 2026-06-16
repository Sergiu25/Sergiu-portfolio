import { profile } from '../../data/portfolio';
import { Section } from '../layout/Section';
import { ButtonLink } from '../ui/ButtonLink';

const contactItems = [
  { label: 'Email', value: 'your.email@example.com', href: profile.links.email },
  { label: 'GitHub', value: 'GitHub profile placeholder', href: profile.links.github },
  { label: 'LinkedIn', value: 'LinkedIn profile placeholder', href: profile.links.linkedin },
  { label: 'CV', value: 'CV download placeholder', href: profile.links.cv },
];

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Contact">
      <div className="rounded-lg border border-line bg-panel/55 p-6 sm:p-7">
        <p className="text-base leading-8 text-muted">{profile.contactText}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href={profile.links.email} variant="primary">
            Contact me
          </ButtonLink>
          <ButtonLink href={profile.links.cv}>Download CV</ButtonLink>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg border border-line bg-ink/40 p-5 transition-colors hover:border-accent"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {item.label}
              </span>
              <span className="mt-2 block text-sm font-semibold text-steel">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
