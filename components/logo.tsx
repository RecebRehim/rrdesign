import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="RR Design"
        width={40}
        height={40}
        priority
        className="h-10 w-10 object-contain"
      />
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
