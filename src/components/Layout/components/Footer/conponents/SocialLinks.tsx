import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SCREEN_SIZE } from 'store-library/src/const';

import socialLinks from '../socialLinks';

interface Props {
  className?: string;
}

const SocialLinks = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      {socialLinks.map(({ Icon, href, title }) => (
        <Link key={title} href={href}>
          <StyledLink>
            <Icon />
          </StyledLink>
        </Link>
      ))}
    </Wrapper>
  );
};

const areEqual = () => true;

export default React.memo(SocialLinks, areEqual);

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  cursor: pointer;
  display: flex;
  opacity: 1;
  transition: opacity .3s ease-in-out;
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }

  :hover {
    opacity: .6;
  }

  @media only screen and (min-width: ${SCREEN_SIZE.LAUNCHER}) {
    margin-right: 16px;
  }
`;
