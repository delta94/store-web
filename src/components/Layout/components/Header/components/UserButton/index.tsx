import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { UserContext } from '~/contexts';
import { Button, WHITE, GRAY_500, Caps10Bold, GRAY_700, UserIcon, Avatar, Dropdown } from 'store-library';

interface Props {
  className?: string;
}

const UserButton = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const {
    // user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  const user = {
    email: 'john@mail.com',
    photoURL: undefined,
  };

  if (!user) return (
    <StyledButton
      color={GRAY_700}
      loading={loading}
      onClick={onLogin}
    >
      <ButtonWrapper>
        <IconWrapper>
          <UserIcon />
        </IconWrapper>
        {t('labels.signin')}
      </ButtonWrapper>
    </StyledButton>
  );

  const usetTitle = (
    <>
      <StyledAvatar src={user?.photoURL} />
      <Caps10Bold>
        {user?.email || 'anonymous'}
      </Caps10Bold>
    </>
  );

  return (
    <Wrapper className={className}>
      <Dropdown title={usetTitle}>
        <Caps10Bold onClick={onLogout}>
          {t('labels.logout')}
        </Caps10Bold>
      </Dropdown>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(UserButton, areEqual);

const Wrapper = styled.div``;

const StyledButton = styled(Button)`
  margin: 0 20px;
  border: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 6px;
  width: 16px;
  height: 16px;

  svg {
    margin: auto;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 8px;
`;
