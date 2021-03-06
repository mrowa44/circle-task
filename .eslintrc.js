module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-for': [2, {
      required: {
        every: ['id'],
      },
    }],
  },
};
