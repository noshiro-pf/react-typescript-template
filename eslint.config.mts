import {
  defineKnownRules,
  eslintConfigForNodeJs,
  eslintConfigForReact,
  eslintConfigForTypeScript,
  eslintConfigForVitest,
  type FlatConfig,
  withDefaultOption,
} from 'eslint-config-typed';

const thisDir = import.meta.dirname;

export default [
  {
    ignores: ['.eslintrc.cjs', 'agents/**', 'dist'],
  },
  ...eslintConfigForTypeScript({
    tsconfigRootDir: thisDir,
    tsconfigFileName: './tsconfig.json',
    packageDirs: [thisDir],
  }),

  eslintConfigForVitest(),
  ...eslintConfigForReact(['src/**']),

  {
    files: ['src/**'],
    rules: defineKnownRules({
      'react-coding-style/ban-use-imperative-handle-hook': 'error',
      'react-coding-style/component-name': withDefaultOption('error'),
      'react-coding-style/component-var-type-annotation': 'error',
      'react-coding-style/import-style': withDefaultOption('error'),
      'react-coding-style/props-type-annotation-style': 'error',
      'react-coding-style/react-memo-props-argument-name': 'error',
      'react-coding-style/react-memo-type-parameter': 'error',
      'react-coding-style/use-memo-hook-style': 'error',
    }),
  },

  {
    files: ['**/*.test.mts', '**/*.test.tsx'],
    rules: defineKnownRules({
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-duplicate-type-constituents': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/no-restricted-types': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      'unicorn/consistent-function-scoping': 'off',
    }),
  },

  eslintConfigForNodeJs(['scripts/**', 'configs/**']),
  {
    files: ['scripts/**', 'configs/**'],
    rules: defineKnownRules({
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-await-in-loop': 'off',
      'import-x/no-unassigned-import': 'off',
      'import-x/no-internal-modules': 'off',
      'import-x/no-default-export': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    }),
  },
  {
    files: ['configs/**/*', '.markdownlint-cli2.mjs'],
    rules: defineKnownRules({
      'import-x/no-default-export': 'off',
      'import-x/no-anonymous-default-export': 'off',
    }),
  },

  {
    files: ['src/**'],
    rules: defineKnownRules({
      'import-x/no-unused-modules': ['error', { unusedExports: true }],
    }),
  },
] satisfies readonly FlatConfig[];
