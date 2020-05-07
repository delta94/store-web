import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar, Button } from 'store-library';
import { LanguagesIcon, SettingsIcon, LogoutIcon } from 'store-library/src/icons';
import { LANGUAGES } from 'store-library/src/const';
import { UserContext } from '~/contexts';

import { MenuWrapper, MenuItem, Divider, IconWrapper } from '../../styles';
import menuLinks from '../../../../menuLinks';

interface Props {
  className?: string;
  onOpenLanguagesMenu: () => void;
}

const MainMenu = (props: Props) => {
  const { className, onOpenLanguagesMenu } = props;
  const { t, i18n } = useTranslation();
  const { pathname } = useRouter();
  const currentLanguage = LANGUAGES[i18n.language];

  const {
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);

  const isUserSignedIn = !!user;

  return (
    <MenuWrapper className={className}>
      {isUserSignedIn && (
        <>
          <StyledAvatar src={user?.photoURL} />
          <MenuItem>
            {user?.email || 'anonymous'}
          </MenuItem>
          <Divider />
        </>
      )}
      {menuLinks.map(({ title, href, icon: Icon }) => (
        <Link key={title} href={href}>
          <StyledLink >
            <MenuItem active={pathname === href}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
              {t(`routes.${title}`)}
            </MenuItem>
          </StyledLink>
        </Link>
      ))}
      <MenuItem onClick={onOpenLanguagesMenu} >
        <IconWrapper>
          <LanguagesIcon />
        </IconWrapper>
        {`${t('labels.language')}: ${currentLanguage}`}
      </MenuItem>
      <Divider />
      {isUserSignedIn && (
        <>
          <Link href="/settings">
            <StyledLink >
              <MenuItem>
                <IconWrapper>
                  <SettingsIcon />
                </IconWrapper>
                {t('labels.settings')}
              </MenuItem>
            </StyledLink>
          </Link>
          <Divider />
          <MenuItem onClick={onLogout}>
            <IconWrapper>
              <LogoutIcon />
            </IconWrapper>
            {t('labels.logout')}
          </MenuItem>
        </>
      )}
      {!isUserSignedIn && (
        <SignInButton onClick={onLogin} loading={loading}>
          {t('labels.signin')}
        </SignInButton>
      )}
    </MenuWrapper>
  );
};

const areEqual = () => true;

export default React.memo(MainMenu, areEqual);

const StyledLink = styled.a``;

const StyledAvatar = styled(Avatar)`
  margin-right: 6px;
`;

const SignInButton = styled(Button)`
  width: 100%;
`;
