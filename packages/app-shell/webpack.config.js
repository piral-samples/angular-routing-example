const CopyPlugin = require('copy-webpack-plugin');

module.exports = function (config) {
  config.plugins.push(
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: '.' }],
    })
  );
  return config;
};
