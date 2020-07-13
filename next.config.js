/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withTM = require('next-transpile-modules')(['store-library']);
const withPWA = require('next-pwa');
const withImages = require('next-images');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA(withTM(withImages({
  env: {
    API_URL: 'https://store.tst.qilin.super.com/api',
    STORE_NAME: 'Qilin',
    STORE_DESCRIPTION: `A curated digital storefront for PC and Mac, 
    designed with both players and creators in mind.`,
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'NetworkFirst',
      },
      {
        urlPattern: new RegExp('^/api'),
        handler: 'NetworkOnly',
      },
    ],
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
})));
