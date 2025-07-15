import { query } from "@/ApolloClient";
import GoBackButton from "@/components/GoBackButton";
import RepoForm from "@/components/RepoForm";
import {
  GetRepoDocument,
  type GetRepoQueryVariables,
  type GetRepoQuery,
} from "@/gql/__generated__/graphql";

type Repo = Extract<GetRepoQuery["node"], { __typename?: "Repository" }>;

const dictionary: Partial<Record<keyof Repo, string>> = {
  name: "First Name",
  description: "Description",
  createdAt: "Created At",
  url: "URL",
  stargazerCount: "Stars",
  forkCount: "Forks",
  owner: "Owner",
  primaryLanguage: "Primary Language",
};

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  const { data, error } = await query<GetRepoQuery, GetRepoQueryVariables>({
    query: GetRepoDocument,
    variables: { id: decodedId },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const repo = data?.node;

  if (!repo || repo.__typename !== "Repository") {
    return <div>Repository not found.</div>;
  }

  return (
    <main className="container mx-auto max-w-md p-4 space-y-8">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">{repo.name}</h1>
          <p className="text-sm text-gray-400">Repository</p>
        </div>

        <GoBackButton />
      </header>

      <RepoForm repo={repo} dictionary={dictionary} />
    </main>
  );
}
