import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'border-accent/80 bg-gradient-to-r from-accent to-amber-200 text-ink shadow-lg shadow-accent/15 hover:border-amber-200 hover:shadow-accent/25',
  secondary:
    'border-line/80 bg-panel/75 text-slate-100 hover:border-accent/80 hover:bg-panel hover:text-accent',
  ghost: 'border-transparent bg-transparent text-steel hover:text-accent',
};

export function ButtonLink({ children, variant = 'secondary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
