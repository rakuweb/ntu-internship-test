import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://118.27.25.166:1337/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/types/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
