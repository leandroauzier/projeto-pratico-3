export function Logo({ className, withTagline = false }: { className?: string; withTagline?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="11" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="24.5" cy="15.5" r="2.6" fill="#1d4ed8" />
      </svg>
      <span className="leading-none">
        <span className="block text-xl font-bold tracking-wide text-slate-900">
          LENS
        </span>
        {withTagline && (
          <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Materiais de Escritório
          </span>
        )}
      </span>
    </span>
  );
}
