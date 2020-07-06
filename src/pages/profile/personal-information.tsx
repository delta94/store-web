import React from 'react';
import ProfileLayout from '~/components/Profile/ProfileLayout';
import PersonalInformation from '~/components/Profile/PersonalInformation';
import useProtectedPage from '~/hooks/useProtectedPage';

interface Props {
  className?: string;
}

const PersonalInformationPage = () => {
  useProtectedPage();

  return (
    <ProfileLayout>
      <PersonalInformation />
    </ProfileLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PersonalInformationPage, areEqual);
