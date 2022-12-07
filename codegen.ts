import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:1337/gql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/types/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
