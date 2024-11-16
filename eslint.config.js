import pluginJs from '@eslint/js';
export default [
  { files: ['/*.js'], ...pluginJs.configs.recommended },
  {
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      //'no-multiple-empty-lines': ['error', { max: 1 }],
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
    },
  }];
