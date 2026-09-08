/*
 * ESLint flat configuration (eslint.config.js)
 * Uses typescript-eslint's recommended rules for .ts files.
 */
const tseslint = require('typescript-eslint');

module.exports = [
  {
    ignores: ['dist/', 'node_modules/', '*.log'],
  },
  ...tseslint.configs.recommended,
  {
    // The ESLint config file itself must use require() under CommonJS,
    // so exempt it from the no-require-imports rule.
    files: ['eslint.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
