type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
      {label}
    </span>
  );
}
