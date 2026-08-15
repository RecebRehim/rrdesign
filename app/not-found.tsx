import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Image src="/logo.png" alt="RR DESIGN" width={64} height={64} className="mb-6" />
      <p className="text-6xl font-bold">404</p>
      <p className="mt-3 text-mute">Bu səhifə yoxdur.</p>
      <a href="/" className="btn-primary mt-6">
        Ana səhifə
      </a>
    </main>
  );
}
