# Next.js 15 + TypeScript + Apollo GraphQL

- [GitHub GraphQL API](https://docs.github.com/en/graphql)
- [GitHub GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)
- [@apollo/client-integration-nextjs](https://www.apollographql.com/blog/apollo-client-integration-nextjs-officially-released)

## Public schema

```bash
export GITHUB_TOKEN=your_github_token

npx -y @apollo/rover graph introspect https://api.github.com/graphql \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  > schema.graphql
```

Create `.env.local` and include the required variables:

```json
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
NEXT_PUBLIC_GITHUB_USER=your_github_user
```

Install the packages and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
