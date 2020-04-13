import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { screenSize, Caps11, COLORS, DownloadIcon } from 'store-library';
import Link from 'next/link';
import { useRouter } from 'next/router';

import menuLinks from '../../menuLinks';
import LocaleSwitcher from '../LocaleSwitcher';
import UserButton from '../UserButton';

interface Props {
  className?: string;
}

const { WHITE, GRAY_100 } = COLORS;

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
        <Link href="/download">
          <DownloadLink>
            <DownloadIcon />
            {t('routes.download')}
          </DownloadLink>
        </Link>
        <UserButton />
        <LocaleSwitcher />
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

  @media only screen and (min-width: ${screenSize.LAUNCHER}) {
    display: flex;
  }
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`; 

const OtherMenu = styled.div`
  display: flex;
  align-items: center;
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

const DownloadLink = styled(StyledLink)`
  margin-right: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${WHITE};

  svg {
    margin-right: 4px;
  }
`;
