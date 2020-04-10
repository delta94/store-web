import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { screenSize, Caps11, Button } from 'store-library';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      <Side>
        <UserButton />
        <LocaleSwitcher />
      </Side>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DesktopMenu, areEqual);

const Wrapper = styled.div`
  display: none;
  justify-content: space-between;
  flex-grow: 1;

  @media only screen and (min-width: ${screenSize.WIDE_TABLET}) {
    display: flex;
  }
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`; 

const Side = styled.div`
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
  cursor: pointer;
`;
