import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import PageLoading from '~/components/PageLoading';
import { GET_USER_DOCUMENTS } from 'store-library/src/api';

import { ProfileWrapper, ProfileTitle, ProfileSubtitle } from '../styles';
import LegalDocumentsList from './components/LegalDocumentsList';

interface Props {
  className?: string;
}

const EulaHistory = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_USER_DOCUMENTS, {
    variables: {
      input: {
        offset: 0,
        limit: 30,
      },
    },
  });
  console.log(data);

  if (loading) return <PageLoading />;

  if (error || !data) return null;

  return (
    <ProfileWrapper>
      <ProfileTitle>
        {t('profile.eula.title')}
      </ProfileTitle>
      <ProfileSubtitle>
        {t('profile.eula.description')}
      </ProfileSubtitle>
      <LegalDocumentsList legalDocuments={data?.documentsByUser || []} />
    </ProfileWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(EulaHistory, areEqual);
