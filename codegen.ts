import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://management.nottheuniversity.com/gql',
  documents: 'src/lib/graphql/**',
  generates: {
    'src/types/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
