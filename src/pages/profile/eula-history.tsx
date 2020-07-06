import React from 'react';
import ProfileLayout from '~/components/Profile/ProfileLayout';
import EulaHistory from '~/components/Profile/EulaHistory';
import useProtectedPage from '~/hooks/useProtectedPage';

interface Props {
  className?: string;
}

const EulaHistoryPage = () => {
  useProtectedPage();

  return (
    <ProfileLayout>
      <EulaHistory />
    </ProfileLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(EulaHistoryPage, areEqual);
