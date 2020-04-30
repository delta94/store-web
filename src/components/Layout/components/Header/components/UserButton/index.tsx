import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { UserContext } from '~/contexts';
import { Button, Avatar, Dropdown } from 'store-library';
import { Caps10Bold, GRAY_700, WHITE } from 'store-library/src/styles';
import { UserIcon, LogoutIcon, SettingsIcon } from 'store-library/src/icons';
import { DropdownMenuItem } from '~/styles/primitives';

interface Props {
  className?: string;
}

const UserButton = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const {
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  const handleClickSettings = () => router.push('/settings'); 

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
        <DropdownMenuItem onClick={handleClickSettings}>
          <IconWrapper>
            <SettingsIcon />
          </IconWrapper>
          <Caps10Bold >
            {t('labels.settings')}
          </Caps10Bold>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout}>
          <IconWrapper>
            <LogoutIcon />
          </IconWrapper>
          <Caps10Bold >
            {t('labels.logout')}
          </Caps10Bold>
        </DropdownMenuItem>
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

  path {
    fill: ${WHITE};
    fill-opacity: 1;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 8px;
`;
