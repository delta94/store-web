import React from 'react';
import ProfileLayout from '~/components/ProfileLayout';
import PersonalInformation from '~/components/PersonalInformation';

interface Props {
  className?: string;
}

const PersonalInformationPage = () => {
  return (
    <ProfileLayout>
      <PersonalInformation />
    </ProfileLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PersonalInformationPage, areEqual);
