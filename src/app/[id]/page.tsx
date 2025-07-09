import { query } from "@/ApolloClient";
import RepoForm from "@/components/RepoForm";
import {
  GetRepoDocument,
  type GetRepoQueryVariables,
  type GetRepoQuery,
} from "@/gql/graphql";

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
    return <div>Repository not found.</div>;
  }

  return (
    <div className="container mx-auto max-w-md p-4 text-center space-y-8">
      <h1 className="font-bold text-2xl border-b-2 border-gray-800">
        {repo.name}
      </h1>

      <RepoForm repo={repo} />
    </div>
  );
}
