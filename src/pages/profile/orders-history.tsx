import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '~/components/Profile/ProfileLayout';

interface Props {
  className?: string;
}

const OrdersHistory = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <ProfileLayout>
      PersonalInformation
    </ProfileLayout>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(OrdersHistory, areEqual);
