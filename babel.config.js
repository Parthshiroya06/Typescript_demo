module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screen': './src/screen',
          '@navigator': './src/navigator',
          '@types': './src/types',
          '@components': './src/components',
          '@utils': './src/utils',
          '@storage': './src/storage',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
