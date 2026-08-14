export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-ink text-paper">
        <span className="font-display text-[15px] font-extrabold tracking-tight">
          RR
        </span>
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-copper" />
      </span>
      {compact ? null : (
        <span className="leading-tight">
          <span className="block font-display text-[15px] font-bold tracking-tight">
            RR Design
          </span>
          <span className="block text-[11px] text-mute">Bakı · Studio</span>
        </span>
      )}
    </a>
  );
}
