
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  documents: ['src/**/*.graphql','src/**/*.tsx'],
  generates: {
    "src/gql/__generated__/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
      plugins: []
    }
  }
};

export default config;
