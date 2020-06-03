import React from 'react';
import Head from 'next/head';

const storeName = process.env.STORE_NAME;
const storeDescription = process.env.STORE_DESCRIPTION;

const CustomHead = () => (
  <Head>
    <meta name="application-name" content={storeName} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content={storeName} />
    <meta name="description" content={storeDescription} />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#FFFFFF" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />

    <title>{storeName}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/icons/favicon.ico" />
  </Head>
);

export default CustomHead;
