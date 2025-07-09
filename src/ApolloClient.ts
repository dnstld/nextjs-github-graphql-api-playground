import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '',
      },
      fetchOptions: {
        cache: "no-store",
      },
    }),
  });
});