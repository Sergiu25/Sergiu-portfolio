import { useState, type FormEvent } from 'react';
import { profile } from '../../data/portfolio';
import { Section } from '../layout/Section';
import { ButtonLink } from '../ui/ButtonLink';

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current stroke-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-8.2H5.78v8.2h2.56ZM7.06 9.02a1.48 1.48 0 1 0 0-2.96 1.48 1.48 0 0 0 0 2.96Zm11.28 9.32v-4.49c0-2.4-1.28-3.51-2.98-3.51a2.57 2.57 0 0 0-2.34 1.29h-.04v-1.49h-2.45v8.2h2.56v-4.06c0-1.07.2-2.11 1.53-2.11 1.31 0 1.33 1.23 1.33 2.18v3.99h2.39Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current stroke-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0 4-4m-4 4-4-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

const contactItems = [
  {
    label: 'Email',
    value: 'sergiu.petris25@gmail.com',
    icon: <MailIcon />,
    href: profile.links.email,
  },
  { label: 'GitHub', value: 'Sergiu25', icon: <GitHubIcon />, href: profile.links.github },
  { label: 'LinkedIn', value: 'Sergiu Petris', icon: <LinkedInIcon />, href: profile.links.linkedin },
  { label: 'CV', icon: <DownloadIcon />, href: profile.links.cv },
];

export function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openContactForm() {
    setIsFormOpen(true);
  }

  function handleEmailClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    openContactForm();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Portfolio contact${name ? ` - ${name}` : ''}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, '', message].join('\n'),
    );

    window.location.href = `${profile.links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Contact">
      <div className="rounded-lg border border-line bg-panel/55 p-6 sm:p-7">
        <p className="text-base leading-8 text-muted">{profile.contactText}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href={profile.links.email} onClick={handleEmailClick} variant="primary">
            Contact me
          </ButtonLink>
          <ButtonLink href={profile.links.cv} download>
            Download CV
          </ButtonLink>
        </div>

        {isFormOpen ? (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-steel">
                Name
                <input
                  name="name"
                  type="text"
                  required
                  className="min-h-11 rounded-md border border-line bg-ink/50 px-4 text-sm text-slate-100 outline-none transition-colors placeholder:text-muted focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-steel">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="min-h-11 rounded-md border border-line bg-ink/50 px-4 text-sm text-slate-100 outline-none transition-colors placeholder:text-muted focus:border-accent"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-steel">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-md border border-line bg-ink/50 px-4 py-3 text-sm leading-7 text-slate-100 outline-none transition-colors placeholder:text-muted focus:border-accent"
                placeholder="Write your message"
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#8ff4e6]"
              >
                Send message
              </button>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-panel px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              download={item.label === 'CV' ? true : undefined}
              onClick={item.label === 'Email' ? handleEmailClick : undefined}
              className="rounded-lg border border-line bg-ink/40 p-5 transition-colors hover:border-accent"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {item.label}
              </span>
              <span className="mt-2 flex min-h-6 items-center text-sm font-semibold text-steel">
                {item.icon}
                {'value' in item ? (
                  <span className="ml-3">{item.value}</span>
                ) : (
                  <span className="sr-only">{item.label}</span>
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
