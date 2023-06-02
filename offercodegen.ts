import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:1337/graphql',
  documents: [
    'src/lib/graphql/offer/index.graphql',
    'src/lib/graphql/offers/index.graphql',
  ],
  generates: {
    'src/types/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
