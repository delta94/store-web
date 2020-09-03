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
      content="width=device-width, initial-scale=1, user-scalable=0"
    />

    <title>{storeName}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/icons/favicon.ico" />
    <script src="https://cdn.pay.super.com/paysdk/dev/paysuper.js"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        if (!window.qu) {
          window.qu = function () {
            qu.q.push(arguments);
          };
          qu.q = qu.q || [];
          script = document.createElement('script');
          script.async = 1;
          script.src = 'https://uttu.tst.qilin.super.com/qilin-uttu.js';
          firstScript = document.scripts[0];
          firstScript.parentNode.insertBefore(script, firstScript);
        }

        qu('init', {
          collectorUrl: 'https://uttu.tst.qilin.super.com/track',
          siteId: '${storeName}'
        });
      ` }}
    />
  </Head>
);

export default CustomHead;
