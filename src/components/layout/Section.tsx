import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 py-10 lg:py-12 ${className}`}>
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
