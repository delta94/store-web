import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { SCREEN_SIZE } from 'store-library';
import { UserContext } from '~/contexts';

import MenuButton from '../MenuButton';

interface Props {
  className?: string;
}

const MobileMenu = (props: Props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  return (
    <Wrapper className={className}>
      <StyledMenuButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
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

const StyledMenuButton = styled(MenuButton)`
  margin-left: auto;
`;
