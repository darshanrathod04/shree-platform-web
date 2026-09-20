import Link from "next/link";

export default function NotFound() {
  return (
    <main className="docs-page min-h-[70vh] flex items-center justify-center">
      <div className="docs-container text-center py-20">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <img src="/brand/shree-logo.png" alt="Shree AI OS" className="h-12 w-12 object-contain" />
        </div>

        <div className="docs-hero-label inline-flex mx-auto mb-4">
          <span />
          404 · PAGE NOT FOUND
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Lost in the Cognitive Space.
        </h1>

        <p className="mt-4 max-w-md mx-auto text-base text-[var(--muted)]">
          The requested route does not exist in Shree AI OS v1.0.6. Explore the platform foundations or return to safety.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            ← Return Home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
          >
            Documentation
          </Link>
        </div>
      </div>
    </main>
  );
}
