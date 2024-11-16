import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['/*.js'], ...pluginJs.configs.recommended },
  {
    rules: {
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always']
    }
  }];
