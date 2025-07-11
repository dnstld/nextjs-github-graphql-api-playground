import { query } from "@/ApolloClient";
import GoBackButton from "@/components/GoBackButton";
import {
  GetReposDocument,
  type GetReposQueryVariables,
  type GetReposQuery,
} from "@/gql/graphql";
import Link from "next/link";

const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USER || "";

export default async function Home() {
  const { data, error } = await query<GetReposQuery, GetReposQueryVariables>({
    query: GetReposDocument,
    variables: { login: GITHUB_USER },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const repos = (data?.user?.repositories?.nodes ?? []).filter(
    (repo): repo is NonNullable<typeof repo> => repo !== null
  );

  return (
    <main className="container mx-auto max-w-md p-4 space-y-8">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Repositories</h1>
          <p className="text-sm text-gray-400">List</p>
        </div>

        <GoBackButton />
      </header>

      {repos.length ? (
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link
                href={`/server-only/${repo.id}`}
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
