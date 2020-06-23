import React from 'react';
import styled from 'styled-components';

import Personal from './components/Personal';
import AccountInformation from './components/AccountInformation';
import DeleteAccount from './components/DeleteAccount';

interface Props {
  className?: string;
}

const PersonalInformation = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Personal />
      <AccountInformation />
      <DeleteAccount />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PersonalInformation, areEqual);

const Wrapper = styled.div``;
