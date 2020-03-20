/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  env: {
    REACT_APP_API_URL: 'https://store.tst.qilin.super.com/api',
    REACT_APP_QILIN_SDK_INIT_URL: 'sdk/v1',
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    return config;
  },
};
