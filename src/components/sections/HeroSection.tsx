import { profile } from '../../data/portfolio';
import { ButtonLink } from '../ui/ButtonLink';

const socialLinks = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'CV', href: profile.links.cv },
];

export function HeroSection() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
          Portfolio
        </a>
        <h1 id="top" className="mt-8 text-4xl font-bold tracking-normal text-slate-50 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-semibold text-slate-200">{profile.title}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#contact" variant="primary">
            Contact me
          </ButtonLink>
          <ButtonLink href={profile.links.cv}>Download CV</ButtonLink>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-steel lg:mt-0">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} className="transition-colors hover:text-accent">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
