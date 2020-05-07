import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'store-library';
import { SCREEN_SIZE } from 'store-library/src/const';
import { WHITE_01 } from 'store-library/src/styles';

import MenuButton from '../MenuButton';
import MainMenu from './components/MainMenu';
import LanguagesMenu from './components/LanguagesMenu';

interface Props {
  className?: string;
}

type Screen = 'MAIN' | 'LANGUAGES';

const MobileMenu = (props: Props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState<Screen>('MAIN');

  const handleOpenLanguagesMenu = () => {
    setActiveScreen('LANGUAGES');
  };

  const handleOpenMainMenu = () => {
    setActiveScreen('MAIN');
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setActiveScreen('MAIN');
  };

  return (
    <Wrapper className={className}>
      <StyledMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <Modal>
        <ModalWrapper isOpen={isOpen}>
          {activeScreen === 'MAIN' && <MainMenu onOpenLanguagesMenu={handleOpenLanguagesMenu} />}
          {activeScreen === 'LANGUAGES' && <LanguagesMenu onBack={handleOpenMainMenu} />}
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
  left: ${({ isOpen }) => isOpen ? 0 : '100%'};;
  right: 0;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  background-color: ${WHITE_01};
  transition: all .3s ease-in-out;
`;

const StyledMenuButton = styled(MenuButton)`
  margin-left: auto;
`;
