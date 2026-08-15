import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Image src="/logo.png" alt="RR Design" width={64} height={64} className="mb-6" />
      <p className="font-display text-6xl font-extrabold">404</p>
      <p className="mt-3 text-mute">Bu səhifə yoxdur.</p>
      <a
        href="/"
        className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
      >
        Ana səhifə
      </a>
    </main>
  );
}
