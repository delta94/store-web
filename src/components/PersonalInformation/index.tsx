import React from 'react';
import styled from 'styled-components';
import { GET_PERSONAL_INFORMATION, UPDATE_PERSONAL_INFORMATION } from 'store-library/src/api';
import { useQuery, useMutation } from '@apollo/react-hooks';
import PageLoading from '~/components/PageLoading';

import Personal from './components/Personal';
import AccountInformation from './components/AccountInformation';
import DeleteAccount from './components/DeleteAccount';

interface Props {
  className?: string;
}

const PersonalInformation = (props: Props) => {
  const { className } = props;
  const { data, loading, error, refetch } = useQuery(GET_PERSONAL_INFORMATION);
  const [updateProfile] = useMutation(UPDATE_PERSONAL_INFORMATION, {
    onCompleted: refetch,
  });

  if (loading) return <PageLoading />;

  if (error || !data) return null;

  const handleUpdateProfile = (user: Record<string, any>) => {
    updateProfile({ variables: { user } });
  };

  return (
    <Wrapper className={className}>
      <Personal
        profile={data.profile}
        onUpdateProfile={handleUpdateProfile}
      />
      <AccountInformation />
      <DeleteAccount />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PersonalInformation, areEqual);

const Wrapper = styled.div``;
