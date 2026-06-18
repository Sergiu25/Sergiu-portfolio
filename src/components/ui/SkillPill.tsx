type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent shadow-sm shadow-accent/5">
      {label}
    </span>
  );
}
