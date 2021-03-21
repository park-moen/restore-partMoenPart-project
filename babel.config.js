/* eslint-disable no-dupe-keys */

const path = require('path');

const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./')],
      alias: { '@': './' },
      alias: { Components: './Components' },
      alias: { Containers: './Containers' },
      alias: { images: './images' },
      alias: { config: './config' },
      alias: { asset: './asset' },
      alias: { lib: './lib' },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...commonPlugins],
};
