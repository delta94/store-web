/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withTM = require('next-transpile-modules')(['store-library']);

module.exports = withTM({
  env: {
    API_URL: 'https://store.tst.qilin.super.com/api',
  },
  webpack: (config, options) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules', 'react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules', 'react-dom');
    config.resolve.alias['styled-component'] = path.resolve(__dirname, 'node_modules', 'styled-components');

    if (options.isServer) {
      config.externals = ['react', 'react-dom', 'styled-components', ...config.externals];
    }

    return config;
  },
});
