import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';

export default [
  { files: ['/*.js'], ...pluginJs.configs.recommended },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      // 'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],
      'padded-blocks': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 0, maxBOF: 0 }],
      'import/prefer-default-export': 'off',
      'no-plusplus': 'off',
      'no-extra-semi': 'error',
      'prefer-const': 'error',
      'radix': ['error', 'always'],
      'default-case': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'func-call-spacing': ['error', 'never'],
      'import/newline-after-import': ['error', { 'count': 1 }],
      'no-shadow': 'error',
      'consistent-return': 'error',
      'space-before-blocks': 'error',
      'no-multi-spaces': 'error',
      'spaced-comment': ['error', 'always'],
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      'no-else-return': 'error',
    },
  }];
