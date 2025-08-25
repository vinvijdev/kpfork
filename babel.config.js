module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        allowUndefined: true,
      },
    ],
    [
      'content-transformer',
      {
        transformers: [
          {
            file: /\.ya?ml$/,
            format: 'string',
          },
        ],
      },
    ],
    'macros',
  ],
};
