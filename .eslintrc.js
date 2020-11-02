module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended', 'plugin:jest/recommended'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  globals: {},
  plugins: ['react', 'jsx-a11y', 'prettier', 'jest'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    /**
     * We get false positives from instances where react is used  to customize
     * Strapi admin UI
     */
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
  },
};
