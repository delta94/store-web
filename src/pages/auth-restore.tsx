import { useEffect } from 'react';
import { getUrlParameter } from '~/helpers';
import { useRouter } from 'next/router';

const AuthRestore = () => {
  const router = useRouter();
  useEffect(() => {
    const isIframe = window.parent;

    if (!isIframe) {
      router.push('/404');
      return;
    }

    const error = getUrlParameter('error');

    const message = {
      restorePassed: true,
      error,
    };

    window.parent.postMessage(message, '*');
  }, []);

  return null;
};

export default AuthRestore;
