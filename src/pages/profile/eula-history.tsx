import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '~/components/Profile/ProfileLayout';

interface Props {
  className?: string;
}

const EulaHistoryPage = (props: Props) => {
  return (
    <ProfileLayout>
      <EulaHistory />
    </ProfileLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(EulaHistoryPage, areEqual);
