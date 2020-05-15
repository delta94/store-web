import React from 'react';
import styled from 'styled-components';
import { GRAY_700, Container } from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';

import Logo from '../Logo';
import LegalLinks from './conponents/LegalLinks';
import Copyright from './conponents/Copyright';
import SocialLinks from './conponents/SocialLinks';

interface Props {
  className?: string;
}

const { LAUNCHER } = SCREEN_SIZE;

const Footer = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Container>
        <LinksWrapper>
          <StyledLogo />
          <StyledLegalLinks />
          <SocialLinks />
        </LinksWrapper>
        <Copyright />
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 24px 0;
  background-color:${GRAY_700};
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  @media only screen and (min-width: ${LAUNCHER}) {
    margin-bottom: 28px;
    flex-direction: row;
  }
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 16px;

  @media only screen and (min-width: ${LAUNCHER}) {
    margin-bottom: 0;
  }
`;

const StyledLegalLinks = styled(LegalLinks)`
  margin-bottom: 20px;

  @media only screen and (min-width: ${LAUNCHER}) {
    margin-bottom: 0;
  }
`;
