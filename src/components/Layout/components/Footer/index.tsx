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

const Footer = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Container>
        <LinksWrapper>
          <StyledLogo />
          <LegalLinks />
          <StyledSocialLinks />
        </LinksWrapper>
        <Copyright />
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 24px 16px;
  background-color:${GRAY_700};
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media only screen and (min-width: ${SCREEN_SIZE.LAUNCHER}) {
    margin-bottom: 28px;
    flex-direction: row;
  }
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 28px;

  @media only screen and (min-width: ${SCREEN_SIZE.LAUNCHER}) {
    margin-bottom: 0;
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin-bottom: 24px;

  @media only screen and (min-width: ${SCREEN_SIZE.LAUNCHER}) {
    margin-bottom: 0;
  }
`;
