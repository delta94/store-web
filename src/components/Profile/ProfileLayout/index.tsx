import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { SCREEN_SIZE } from 'store-library/src/const';

import Links from './components/Links';

interface Props {
  className?: string;
  children: ReactNode;
}

const ProfileLayout = (props: Props) => {
  const { className, children } = props;

  return (
    <Wrapper className={className}>
      <Links />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ProfileLayout, areEqual);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 938px;
  margin: 0 auto;

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    padding: 32px 0;
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  
  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    margin-left: 16px;
  }
`;
