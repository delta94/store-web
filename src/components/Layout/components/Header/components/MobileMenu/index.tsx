import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from 'store-library';
import { SCREEN_SIZE } from 'store-library/src/const';

import MenuButton from '../MenuButton';
import MainMenu from './components/MainMenu';
import LanguagesMenu from './components/LanguagesMenu';

interface Props {
  className?: string;
  toggleMenu: () => void;
  isOpen: boolean;
}

type Screen = 'MAIN' | 'LANGUAGES';

const MobileMenu = (props: Props) => {
  const { className, isOpen, toggleMenu } = props;
  const [activeScreen, setActiveScreen] = useState<Screen>('MAIN');

  const handleOpenLanguagesMenu = () => {
    setActiveScreen('LANGUAGES');
  };

  const handleOpenMainMenu = () => {
    setActiveScreen('MAIN');
  };

  useEffect(() => {
    handleOpenMainMenu();
  }, [isOpen]);

  return (
    <Wrapper className={className}>
      <StyledMenuButton isOpen={isOpen} toggleOpen={toggleMenu} />
      <Modal>
        <ModalWrapper isOpen={isOpen} onClick={toggleMenu}>
          <Overlay isOpen={isOpen} />
          <ModalContent isOpen={isOpen}>
            {activeScreen === 'MAIN' && <MainMenu onOpenLanguagesMenu={handleOpenLanguagesMenu} />}
            {activeScreen === 'LANGUAGES' && <LanguagesMenu onBack={handleOpenMainMenu} />}
          </ModalContent>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MobileMenu, areEqual);

const Wrapper = styled.div`
  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    display: none;
  }
`;

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  top: 48px;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: ${({ isOpen }) => isOpen ? 10 : -1};
  overflow-y: auto;
  transition: all .3s ease-in-out;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  background-color: rgba(1, 1, 1, .6);
  transition: all .3s ease-in-out;
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 48px;
  bottom: 0;
  left: 0;
  right: 0;
  transform: ${({ isOpen }) => isOpen ? 'translate(0, 0)' : 'translate(110%, 0)'};
  transition: all .3s ease-in-out;
`;

const StyledMenuButton = styled(MenuButton)`
  margin-left: auto;
`;
