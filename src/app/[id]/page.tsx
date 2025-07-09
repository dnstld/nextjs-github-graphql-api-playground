import { query } from "@/ApolloClient";
import {
  GetRepoDocument,
  type GetRepoQueryVariables,
  type GetRepoQuery,
} from "@/gql/graphql";
import Link from "next/link";

export default async function Details({ params }: { params: { id: string } }) {
  const { data, error } = await query<GetRepoQuery, GetRepoQueryVariables>({
    query: GetRepoDocument,
    variables: { id: params.id },
  });

  const repo = data?.node;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!repo || repo.__typename !== "Repository") {
    return <div className="text-gray-500">Repository not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 text-center space-y-8">
      <h1 className="font-bold text-2xl">{repo.name}</h1>
      <p>description: {repo.description || "No description."}</p>
      <p>owner: {repo.owner.login || "No description."}</p>
      <p>stargazerCount: {repo.stargazerCount || "No description."}</p>
      <p>forkCount: {repo.forkCount || "No description."}</p>
      <p>primaryLanguage: {repo.primaryLanguage?.name || "No description."}</p>

      <Link href={repo.url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </Link>
    </div>
  );
}
