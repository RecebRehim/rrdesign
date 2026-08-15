import type { ReactNode } from "react";

function BrowserChrome({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-[0_18px_50px_-24px_rgba(20,18,16,0.45)] ${
        dark ? "border-white/10 bg-[#0d0f12]" : "border-black/10 bg-white"
      }`}
    >
      <div
        className={`flex items-center gap-2 border-b px-3 py-2 ${
          dark ? "border-white/10 bg-[#16181c]" : "border-black/8 bg-[#f4f1ea]"
        }`}
      >
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e2554a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#e6c04a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#5fbf6b]" />
        </span>
        <span
          className={`ml-1 truncate rounded-md px-2 py-0.5 text-[9px] ${
            dark ? "bg-white/8 text-white/50" : "bg-white text-black/40"
          }`}
        >
          {label}
        </span>
      </div>
      <div className="preview-screen aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

export function PreviewDriveAZ() {
  return (
    <BrowserChrome label="rentacar.az" dark>
      <div className="flex h-full flex-col bg-[#0b1220] p-4 text-white">
        <div className="flex items-center justify-between text-[8px] tracking-wide text-white/50">
          <span className="font-semibold text-white">DriveAZ</span>
          <span>AZ · EN</span>
        </div>
        <p className="mt-4 max-w-[70%] text-[15px] font-semibold leading-tight">
          Bakıda etibarlı avtomobil icarəsi
        </p>
        <p className="mt-1 text-[8px] text-white/45">Hava limanı təhvili · şəffaf qiymət</p>
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          {[
            ["Polo", "45₼"],
            ["Corolla", "65₼"],
            ["Tucson", "95₼"],
          ].map(([name, price]) => (
            <div key={name} className="rounded-md bg-white/8 p-2">
              <div className="h-6 rounded bg-gradient-to-br from-slate-400 to-slate-700" />
              <p className="mt-1.5 text-[8px] font-medium">{name}</p>
              <p className="text-[7px] text-emerald-300">{price}/gün</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

export function PreviewSah() {
  return (
    <BrowserChrome label="avtotelim.az" dark>
      <div className="flex h-full flex-col bg-[#10140f] p-4 text-[#f3ead4]">
        <p className="text-[8px] tracking-[0.22em] text-[#d4a84b]">SÜRÜCÜLÜK TƏLİMİ</p>
        <p className="mt-3 font-display text-[16px] font-extrabold leading-none">
          ŞAH AVTO
        </p>
        <p className="mt-2 max-w-[80%] text-[8px] text-[#f3ead4]/60">
          Sükan arxasında özünə inam qazan.
        </p>
        <div className="mt-auto grid grid-cols-2 gap-1.5">
          {["JEEP · 30₼", "AQUA · 25₼", "SONATA · 25₼", "MEXANİKA · 30₼"].map(
            (row) => (
              <div
                key={row}
                className="rounded border border-[#d4a84b]/25 bg-[#d4a84b]/8 px-2 py-1.5 text-[8px]"
              >
                {row}
              </div>
            ),
          )}
        </div>
      </div>
    </BrowserChrome>
  );
}

export function PreviewMindcraft() {
  return (
    <BrowserChrome label="akademiya.az">
      <div className="flex h-full flex-col bg-gradient-to-br from-[#0b1f4a] via-[#123a7a] to-[#1d6cff] p-4 text-white">
        <p className="text-[8px] font-semibold tracking-wide text-sky-200">
          MINDCRAFT ACADEMY
        </p>
        <p className="mt-3 text-[15px] font-bold leading-tight">
          Shape Your Mind.
          <br />
          Build The Future.
        </p>
        <div className="mt-auto flex gap-1.5">
          {["AI", "Backend", "Cyber"].map((p) => (
            <span
              key={p}
              className="rounded-full bg-white/15 px-2 py-1 text-[7px] backdrop-blur"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

export function PreviewSafira() {
  return (
    <BrowserChrome label="klinika.az">
      <div className="flex h-full bg-[#f7f1ea]">
        <div className="flex w-[58%] flex-col justify-between p-4">
          <p className="text-[8px] tracking-[0.18em] text-[#9a6b55]">STOMATOLOGİYA</p>
          <div>
            <p className="font-display text-[16px] font-semibold leading-none text-[#3a2a24]">
              Safira Dental
            </p>
            <p className="mt-2 text-[8px] text-[#3a2a24]/55">
              Gülüşünüzə peşəkar qayğı
            </p>
          </div>
          <span className="w-fit rounded-full bg-[#3a2a24] px-2 py-1 text-[7px] text-white">
            WhatsApp
          </span>
        </div>
        <div className="w-[42%] bg-gradient-to-b from-[#e8cfc0] to-[#c9957d]" />
      </div>
    </BrowserChrome>
  );
}

export function PreviewVetCare() {
  return (
    <BrowserChrome label="vetklinika.az">
      <div className="flex h-full flex-col bg-[#f4f7f2] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-[#1f3d2a]">VetCare</span>
          <span className="rounded-full bg-[#1f3d2a] px-2 py-0.5 text-[7px] text-white">
            Randevu
          </span>
        </div>
        <p className="mt-4 max-w-[90%] font-display text-[14px] font-semibold leading-tight text-[#1f3d2a]">
          Heyvanınız üçün müstəsna baytar qayğısı
        </p>
        <div className="mt-auto grid grid-cols-4 gap-1">
          {["15+ il", "25k+", "4.9★", "AZ EN RU"].map((s) => (
            <div
              key={s}
              className="rounded bg-white px-1 py-1.5 text-center text-[7px] text-[#1f3d2a]/70 shadow-sm"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

export function PreviewIelts() {
  return (
    <BrowserChrome label="muellim.az">
      <div className="flex h-full bg-[#faf6ef]">
        <div className="flex w-[62%] flex-col justify-between p-4">
          <p className="text-[8px] text-[#6b5a3c]">IELTS Instructor</p>
          <div>
            <p className="font-display text-[16px] font-semibold leading-none">
              Ad Soyad
            </p>
            <p className="mt-2 text-[8px] leading-snug text-black/50">
              IELTS və General English — öz tempi, aydın plan.
            </p>
          </div>
          <div className="flex gap-1">
            {["Self-study", "Teacher Training"].map((t) => (
              <span
                key={t}
                className="rounded border border-black/10 px-1.5 py-0.5 text-[7px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="w-[38%] bg-gradient-to-b from-[#2c3a4a] to-[#121820]" />
      </div>
    </BrowserChrome>
  );
}

export const previews = {
  driveaz: PreviewDriveAZ,
  sah: PreviewSah,
  mindcraft: PreviewMindcraft,
  safira: PreviewSafira,
  vetcare: PreviewVetCare,
  ielts: PreviewIelts,
} as const;
