import { useEffect, useContext } from 'react';
import { UserContext } from '~/contexts';
import { useRouter } from 'next/router';

export default () => {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();

  const checkPermissions = () => {
    if (loading || user) return;

    router.push('/');
  };

  useEffect(() => {
    checkPermissions();
  }, [loading, user]);
};
