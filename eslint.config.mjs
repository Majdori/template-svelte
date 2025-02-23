import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.svelte'],
    plugins: { svelte },
    languageOptions: {
      parser: 'svelte-eslint-parser',
    },
    rules: {
      ...svelte.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{js,ts}'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  prettier,
  pluginPrettier.configs.recommended,
  {
    ignores: ['node_modules', 'static', '.husky', '.prettierignore'],
  },
];
