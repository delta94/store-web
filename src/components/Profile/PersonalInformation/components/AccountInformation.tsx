import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileWrapper, ProfileTitle, ProfileSubtitle, ProfileButton, Line } from '../../styles';

interface Props {
  className?: string;
}

const AccountInformation = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <ProfileWrapper className={className}>
      <ProfileTitle>
        {t('profile.account_information.title')}
      </ProfileTitle>
      <Line>
        <ProfileSubtitle>
          {t('profile.account_information.description')}
        </ProfileSubtitle>
        <ProfileButton color="transparent">
          {t('profile.account_information.download_data')}
        </ProfileButton>
      </Line>
    </ProfileWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(AccountInformation, areEqual);
