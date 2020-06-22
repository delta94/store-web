import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    router.push('/profile/personal-information');
  }

  return null;
};

export default Profile;
