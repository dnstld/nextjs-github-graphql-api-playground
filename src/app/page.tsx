import { query } from "@/ApolloClient";
import {
  GetReposDocument,
  type GetReposQueryVariables,
  type GetReposQuery,
} from "@/gql/graphql";
import Link from "next/link";

export default async function Home() {
  const { data, error } = await query<GetReposQuery, GetReposQueryVariables>({
    query: GetReposDocument,
    variables: { login: "dnstld" },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const repos = (data?.user?.repositories?.nodes ?? []).filter(
    (repo): repo is NonNullable<typeof repo> => repo !== null
  );

  return (
    <main className="container mx-auto max-w-md p-4 text-center space-y-8">
      <header className="mb-6 text-center">
        <h1 className="text-xl font-semibold">JUCR.de Web Builder Challenge</h1>
        <p className="text-sm text-gray-400">
          Next.js 15 • TypeScript • Apollo GraphQL
        </p>
      </header>

      {repos.length ? (
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link
                href={`/${repo.id}`}
                className="flex items-center justify-between rounded-lg border border-gray-800 px-4 py-3 text-sm transition-colors hover:bg-gray-800"
                aria-label={`Open details for ${repo.name}`}
              >
                <span>{repo.name}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-sm text-gray-400">
          No repositories found.
        </div>
      )}
    </main>
  );
}
