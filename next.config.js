/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  env: {
    API_URL: 'https://store.tst.qilin.super.com/api',
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    config.resolve.alias['styled-components'] = path.resolve(__dirname, 'node_modules', 'styled-components');
    return config;
  },
};
