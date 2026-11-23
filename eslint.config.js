import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

const eslintConfig = [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            ['@babel/preset-react', { runtime: 'automatic' }],
            ['@babel/preset-typescript', { ignoreExtensions: true }],
          ],
        },
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-constant-condition': 'warn',
      'no-debugger': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.git/**'],
  },
];

export default eslintConfig;
