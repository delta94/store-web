import React from 'react';
import styled from 'styled-components';
import { WHITE, GRAY_700, Caps11Bold, LogoIcon, SCREEN_SIZE } from 'store-library';
import Link from 'next/link';

import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';

interface Props {
  className?: string;
}

const Header = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Link href="/">
        <LogoContainer>
          <LogoIcon />
          <LogoText>Qilin</LogoText>
        </LogoContainer>
      </Link>
      <Menu>
        <MobileMenu />
        <DesktopMenu />
      </Menu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  min-height: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 12px;
  background-color: ${GRAY_700};
  color: ${WHITE};

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoText = styled(Caps11Bold)`
  color: ${WHITE};
  margin-left: 5px;
`;

const Menu = styled.nav`
  margin-left: 40px;
  flex-grow: 1;
`;
