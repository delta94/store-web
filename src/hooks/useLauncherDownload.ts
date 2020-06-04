import { useState, useEffect } from 'react';
// import { uncapitalize } from '~/helpers';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_LAUNCHER_LINK } from 'store-library/src/api';
import { parse } from 'bowser';

export default () => {
  const [metaLoading, setLoadingMeta] = useState(true);
  const [browserName, setBrowserName] = useState('');
  const [platform, setPlatform] = useState('');
  const [getLink, { called, data, loading: linkLoading }] = useLazyQuery(GET_LAUNCHER_LINK, {
    variables: { platform },
  });
  const launcher = data?.getLauncherSrc || {};
  const loading = metaLoading || linkLoading;

  useEffect(() => {
    const meta = parse(window.navigator.userAgent);
    const { browser, os } = meta || {};

    // const parsedPlatform = uncapitalize(os.name || ''); // now available only windows
    const parsedPlatform = 'windows';

    setBrowserName(browser.name || '');
    setPlatform(parsedPlatform);
    setLoadingMeta(false);
  }, []);

  useEffect(() => {
    if (!called && platform) getLink();
  }, [platform]);

  return { launcher, browserName, loading };
};
