import { useEffect, useContext } from 'react';
import { UserContext } from '~/contexts';
import { useRouter } from 'next/router';

export default () => {
  const { user, loading, onLogin } = useContext(UserContext);
  const router = useRouter();

  const checkPermissions = () => {
    if (loading || user) return;

    if (onLogin) {
      onLogin();
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    checkPermissions();
  }, [loading, user]);
};
