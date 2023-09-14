import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://118.27.25.166:1337/graphql',
  documents: [
    'src/lib/offers-graphql/offer/index.graphql',
    'src/lib/offers-graphql/offers/index.graphql',
    'src/lib/offers-graphql/point/index.graphql',
    'src/lib/offers-graphql/points/index.graphql',
  ],
  generates: {
    'src/types/offers-gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
