import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary: 'border-accent bg-accent text-ink hover:bg-[#8ff4e6]',
  secondary: 'border-line bg-panel text-slate-100 hover:border-accent hover:text-accent',
  ghost: 'border-transparent bg-transparent text-steel hover:text-accent',
};

export function ButtonLink({ children, variant = 'secondary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
