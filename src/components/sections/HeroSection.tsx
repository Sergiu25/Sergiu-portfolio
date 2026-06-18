import { profile } from '../../data/portfolio';
import { ButtonLink } from '../ui/ButtonLink';

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-8.2H5.78v8.2h2.56ZM7.06 9.02a1.48 1.48 0 1 0 0-2.96 1.48 1.48 0 0 0 0 2.96Zm11.28 9.32v-4.49c0-2.4-1.28-3.51-2.98-3.51a2.57 2.57 0 0 0-2.34 1.29h-.04v-1.49h-2.45v8.2h2.56v-4.06c0-1.07.2-2.11 1.53-2.11 1.31 0 1.33 1.23 1.33 2.18v3.99h2.39Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0 4-4m-4 4-4-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

const socialLinks = [
  { label: 'GitHub', href: profile.links.github, icon: <GitHubIcon /> },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: <LinkedInIcon /> },
  { label: 'CV', href: profile.links.cv, icon: <DownloadIcon /> },
];

export function HeroSection() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
          Portfolio
        </a>
        <h1
          id="top"
          className="mt-8 bg-gradient-to-r from-slate-50 via-accent to-amber-200 bg-clip-text text-4xl font-bold tracking-normal text-transparent sm:text-5xl"
        >
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-semibold text-slate-200">{profile.title}</p>
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-accent via-sky-300 to-amber-200" />

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#contact" variant="primary">
            Contact me
          </ButtonLink>
          <ButtonLink href={profile.links.cv} download>
            Download CV
          </ButtonLink>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-steel lg:mt-0">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            download={link.label === 'CV' ? true : undefined}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
