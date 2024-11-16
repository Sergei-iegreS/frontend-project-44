
import pluginJs from '@eslint/js';

export default [
  { files: ['/*.js'], ...pluginJs.configs.recommended },
  {
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],
      'padded-blocks': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'indent': ['error', 2],
      'semi': ['error', 'always'],
    },
  }];
