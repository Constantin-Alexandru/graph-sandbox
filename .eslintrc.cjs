module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  ignorePatterns: ['!.prettierrc.cjs', '!.prettierrc.js'],
};
