module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': ['off'],
    'react/prop-types': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'no-console': ['off'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-underscore-dangle': ['off'],
    camelcase: ['off'],
    'no-alert': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'no-use-before-define': ['off'],
    'arrow-body-style': ['off'],
  },
};