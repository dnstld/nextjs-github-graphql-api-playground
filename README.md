Create a Next.js 15 application that uses the GitHub GraphQL API to display a repository list and a repository detail page.

## Getting Started

Download the public GitHub GraphQL schema with Apollo Rover

```bash
export GITHUB_TOKEN=ghp_your_token_here

npx -y @apollo/rover graph introspect https://api.github.com/graphql \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  > schema.graphql
```
