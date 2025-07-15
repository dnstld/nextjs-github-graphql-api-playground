import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="container mx-auto max-w-md p-4 space-y-8">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">Web Builder</h1>
        <p className="text-sm text-gray-400">
          Next.js 15 • TypeScript • Apollo GraphQL
        </p>
      </header>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link href={"/server-only"}>
              <span className="flex items-center justify-between gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm transition-colors hover:bg-gray-800">
                Server Only
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/client-streaming"}>
              <span className="flex items-center justify-between gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm transition-colors hover:bg-gray-800">
                Client Streaming
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
