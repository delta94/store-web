import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { SCREEN_SIZE, GRAY_700, Modal, BLACK, WHITE_05, WHITE_01, GRAY_500, WHITE, GRAY_100, Caps11 } from 'store-library';
import { UserContext } from '~/contexts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import MenuButton from '../MenuButton';
import menuLinks from '../../menuLinks';

interface Props {
  className?: string;
}

const MobileMenu = (props: Props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const {
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  return (
    <Wrapper className={className}>
      <StyledMenuButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      <Modal>
        <MenuWrapper isOpen={isOpen}>
          <Menu>
          {menuLinks.map(({ title, href }) => (
            <Link key={title} href={href}>
              <StyledLink active={pathname === href}>
                <Caps11>{t(`routes.${title}`)}</Caps11>
              </StyledLink>
            </Link>
          ))}
          </Menu>
        </MenuWrapper>
      </Modal>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MobileMenu, areEqual);

const Wrapper = styled.div`
  @media only screen and (min-width: ${SCREEN_SIZE.LAUNCHER}) {
    display: none;
  }
`;

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  top: 48px;
  bottom: 0;
  left: ${({ isOpen }) => isOpen ? 0 : '100%'};;
  right: 0;
  background-color: ${GRAY_700};
  position: absolute;
  z-index: 10;
  overflow: hidden;
  transition: all .3s ease-in-out;
  padding: 0 12px;
`;

const Menu = styled.div`
  padding: 20px 0 ;
  border-bottom: 1px solid ${GRAY_500};
`;

const Links = styled.nav`

`;

const StyledMenuButton = styled(MenuButton)`
  margin-left: auto;
`;

const StyledLink = styled.a<{ active?: boolean }>`
  margin-right: 14px;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.1em;
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  color: ${({ active }) => active ? WHITE : GRAY_100};
  cursor: pointer;
`;
