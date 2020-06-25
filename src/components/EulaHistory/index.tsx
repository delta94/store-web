import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileWrapper, ProfileTitle, ProfileSubtitle } from '~/styles/primitives';

import TermsList from './components/TermsList';
import mockTerms from './mockTerms';

interface Props {
  className?: string;
}

const EulaHistory = () => {
  const { t } = useTranslation();

  return (
    <ProfileWrapper>
      <ProfileTitle>
        {t('profile.eula.title')}
      </ProfileTitle>
      <ProfileSubtitle>
        {t('profile.eula.description')}
      </ProfileSubtitle>
      <TermsList terms={mockTerms} />
    </ProfileWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(EulaHistory, areEqual);
