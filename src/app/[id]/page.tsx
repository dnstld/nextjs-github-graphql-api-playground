import { query } from "@/ApolloClient";
import {
  GetRepoDocument,
  type GetRepoQueryVariables,
  type GetRepoQuery,
} from "@/gql/graphql";
import Link from "next/link";

export default async function Details({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);

  const { data, error } = await query<GetRepoQuery, GetRepoQueryVariables>({
    query: GetRepoDocument,
    variables: { id },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const repo = data?.node;

  if (!repo || repo.__typename !== "Repository") {
    return <div className="text-gray-500">Repository not found.</div>;
  }

  return (
    <div className="container mx-auto max-w-md p-4 text-center space-y-8">
      <h1 className="font-bold text-2xl">{repo.name}</h1>

      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-500">Owner</dt>
          <dd>{repo.owner.login}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-500">Stars</dt>
          <dd>{repo.stargazerCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-500">Forks</dt>
          <dd>{repo.forkCount}</dd>
        </div>
        {repo.primaryLanguage?.name && (
          <div className="flex justify-between">
            <dt className="text-gray-500">Primary language</dt>
            <dd>{repo.primaryLanguage.name}</dd>
          </div>
        )}
      </dl>

      <Link
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${repo.name} on GitHub`}
        className="flex items-center justify-between rounded-lg border border-gray-800 p-4 transition-colors hover:bg-gray-800"
      >
        <span>View on GitHub</span>
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
