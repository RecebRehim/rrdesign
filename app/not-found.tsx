export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
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
