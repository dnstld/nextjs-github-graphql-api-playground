# Next.js 15 + TypeScript + Apollo GraphQL

Next.js 15 application that uses the GitHub GraphQL API

## How to test

Download the public GitHub GraphQL schema with Apollo Rover:

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

## Featured commits

- [Setup GraphQl Codegen](https://github.com/dnstld/web-builder-challenge/commit/7bba202c1b868f7358b5b5e1ce3b1e4f2c3d19c5)
  - Set up [GraphQL Code Generator](https://the-guild.dev/graphql/codegen#graphql-codegen) as per the docs
- [Integrate apollo client](https://github.com/dnstld/web-builder-challenge/commit/58e82b237c7632c08c686a419bf3fb31f6a6739a)
  - Set up [@apollo/client-integration-nextjs](https://www.apollographql.com/blog/apollo-client-integration-nextjs-officially-released) as per the docs
  - Display list of repositories
- [Create dynamic route (repo details screen)](https://github.com/dnstld/web-builder-challenge/commit/77be3391212a5b0b3f6545b32565ef4265f63218)
- [Create form and dynamic fields](https://github.com/dnstld/web-builder-challenge/commit/326ef31f925f75daeb13024b318846bfc57f70b9)
  - create `renderField` function to manage the form UI and fields types
