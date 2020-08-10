import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '~/components/Profile/ProfileLayout';
import SignInAndSecurity from '~/components/Profile/SignInAndSecurity';
import useProtectedPage from '~/hooks/useProtectedPage';

interface Props {
  className?: string;
}

const PersonalInformation = (props: Props) => {
  useProtectedPage();

  return (
    <ProfileLayout>
      <SignInAndSecurity />
    </ProfileLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PersonalInformation, areEqual);
