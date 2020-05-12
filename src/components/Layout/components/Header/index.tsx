import React, { useState } from 'react';
import styled from 'styled-components';
import { WHITE, GRAY_700 } from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';

import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';
import Logo from '../Logo';

interface Props {
  className?: string;
}

const Header = (props: Props) => {
  const { className } = props;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Wrapper fixed={isMobileMenuOpen} className={className}>
      <Logo />
      <Menu>
        <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
        <DesktopMenu />
      </Menu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header<{ fixed: boolean }>`
  position: ${({ fixed }) => fixed ? 'fixed' : 'absolute'};
  display: flex;
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 12px;
  background-color: ${GRAY_700};
  color: ${WHITE};
  z-index: 10;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    padding: 0 20px;
  }
`;

const Menu = styled.nav`
  margin-left: 40px;
  flex-grow: 1;
`;
