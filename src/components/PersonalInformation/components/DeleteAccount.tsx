import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileWrapper, ProfileTitle, ProfileSubtitle, ProfileButton } from '~/styles/primitives';
import { RED_500 } from 'store-library/src/styles';

import { Line } from '../common';

interface Props {
  className?: string;
}

const DeleteAccount = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <ProfileWrapper className={className}>
      <ProfileTitle>
        {t('profile.delete_account.title')}
      </ProfileTitle>
      <Line>
        <ProfileSubtitle>
          {t('profile.delete_account.description')}
        </ProfileSubtitle>
        <ProfileButton color={RED_500}>
          {t('profile.delete_account.delete_account')}
        </ProfileButton>
      </Line>
    </ProfileWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DeleteAccount, areEqual);
