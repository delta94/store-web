import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { UserContext } from '~/contexts';
import { Button, Avatar, Dropdown } from 'store-library';
import { Caps10Bold, GRAY_700, WHITE, Caps11Bold, PURPLE_500 } from 'store-library/src/styles';
import { LogoutIcon, SettingsIcon } from 'store-library/src/icons';
import { DropdownMenuItem } from '~/styles/primitives';

interface Props {
  className?: string;
}

const UserButton = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  const handleClickSettings = () => router.push('/settings');

  const handleToggleDropdown = (open: boolean) => {
    setDropdownOpen(open);
  };

  if (!user) return (
    <StyledButton
      color={GRAY_700}
      loading={loading}
      onClick={onLogin}
    >
      <ButtonWrapper>
        <StyledAvatar />
        <Caps11Bold>{t('labels.signin')}</Caps11Bold>
      </ButtonWrapper>
    </StyledButton>
  );

  const userTitle = (
    <TitleWrapper isOpen={dropdownOpen}>
      <StyledAvatar src={user?.photoURL} backgroundColor={PURPLE_500} />
      <Caps11Bold>
        {user?.email || 'anonymous'}
      </Caps11Bold>
    </TitleWrapper>
  );

  return (
    <Wrapper className={className}>
      <Dropdown title={userTitle} onToggleDropdown={handleToggleDropdown}>
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

const TitleWrapper = styled.div<{ isOpen: boolean }>`
  opacity: ${({ isOpen }) => isOpen ? 0.5 : 1};
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 0 20px;
  border: none;

  && {
    padding: 0;
  }
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

const StyledAvatar = styled(Avatar).attrs({ width: '24px', height: '24px' })`
  margin-right: 8px;
`;
