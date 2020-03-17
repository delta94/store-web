import React, { useContext } from 'react';

import styled from 'styled-components';
import { BACKGROUND_LOGO, BACKGROUND_DARK } from '~/styles/colors';
import { UserContext } from '~/contexts';

interface Props {
  className?: string;
}

const Header = (props: Props) => {
  const { className } = props;
  const { 
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  return (
    <Wrapper className={className}>
      <LogoContainer>
        <LogoText>Рамблер/ ИГРЫ</LogoText>
      </LogoContainer>
      {!user
        ? <span onClick={onLogin}>Log In</span>
        : <span onClick={onLogout}>Log Out</span>
      }
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 45px;
  background-color: ${BACKGROUND_DARK};
  color: white;
`;

const LogoContainer = styled.div`
  display: inline-block;
  padding: 15px;
  background-color: ${BACKGROUND_LOGO};
  border-radius: 4px;
`;

const LogoText = styled.span`
  color: white;
`;
