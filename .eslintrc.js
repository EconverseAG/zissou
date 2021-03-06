module.exports = {
  extends: ['plugin:hydrogen/recommended'],
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'hydrogen/server-component-banned-hooks': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
