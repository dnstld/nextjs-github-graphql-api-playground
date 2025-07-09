import { query } from "@/ApolloClient";
import {
  GetReposDocument,
  type GetReposQueryVariables,
  type GetReposQuery,
} from "@/gql/graphql";

export default async function Home() {
  const { data, loading, error } = await query<
    GetReposQuery,
    GetReposQueryVariables
  >({
    query: GetReposDocument,
    variables: { login: "dnstld" },
  });

  const repos = (data?.user?.repositories?.nodes ?? []).filter(
    (repo): repo is NonNullable<typeof repo> => repo !== null
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4 text-center space-y-8">
      <div>
        <h1 className="font-bold text-2xl">JUCR.de Web Builder Challenge</h1>
        <p className="text-sm">Next.js 15 + TypeScript + Apollo GraphQL</p>
      </div>

      {repos ? (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} className="p-2">
              {repo.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>No repositories found.</div>
      )}
    </div>
  );
}
