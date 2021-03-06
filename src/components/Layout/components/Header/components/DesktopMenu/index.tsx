import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SCREEN_SIZE } from 'store-library/src/const';
import { Caps11, WHITE, GRAY_100, buttonStyles, PURPLE_500, Caps10Bold } from 'store-library/src/styles';
import { DownloadSmallIcon } from 'store-library/src/icons';

import menuLinks from '../../menuLinks';
import LocaleSwitcher from '../LocaleSwitcher';
import UserButton from '../UserButton';

interface Props {
  className?: string;
}

const DesktopMenu = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <Wrapper className={className}>
      <Links>
        {menuLinks.map(({ title, href }) => (
          <Link key={title} href={href}>
            <StyledLink active={pathname === href}>
              <Caps11>{t(`routes.${title}`)}</Caps11>
            </StyledLink>
          </Link>
        ))}
      </Links>
      <OtherMenu>
        <LocaleSwitcher />
        <StyledUserButton />
        <Link href="/download">
          <DownloadLink color={PURPLE_500}>
            <DownloadSmallIcon />
            <Caps10Bold>{t('routes.download')}</Caps10Bold>
          </DownloadLink>
        </Link>
      </OtherMenu>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DesktopMenu, areEqual);

const Wrapper = styled.div`
  display: none;
  justify-content: space-between;
  flex-grow: 1;

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    display: flex;
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
`;

const OtherMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserButton = styled(UserButton)`
  margin: 0 24px;
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

const DownloadLink = styled.a`
  ${buttonStyles as any}
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 34px;

  svg {
    margin-right: 4px;
  }
`;
