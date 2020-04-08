import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { screenSize } from 'store-library';

import MenuButton from '../MenuButton';
import { UserContext } from '~/contexts';

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
      <MenuButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MobileMenu, areEqual);

const Wrapper = styled.div`
  @media only screen and (min-width: ${screenSize.WIDE_TABLET}) {
    display: none;
  }
`;
