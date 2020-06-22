import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { WHITE, GRAY_100, GRAY_700, PURPLE_500 } from 'store-library/src/styles';
import { ArrowDownIcon } from 'store-library/src/icons';
import { SCREEN_SIZE } from 'store-library/src/const';
import { useRouter } from 'next/router';
import Link from 'next/link';

import profileLinks from '../profileLinks';

interface Props {
  className?: string;
}

const Links = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleOpen = () => setMobileOpen(!mobileOpen);
  const closeLinks = () => setMobileOpen(false);

  return (
    <Wrapper
      className={className}
      onClick={toggleOpen}
      tabIndex={-1}
      onBlur={closeLinks}
    >
      {profileLinks.map(({ title, href, icon: Icon }) => {
        const active = href === pathname;

        return (
          <Link key={title} href={href}>
            <LinkWrapper active={active} open={mobileOpen}>
              <StyledLink>
                <IconWrapper active={active}>
                  <Icon />
                </IconWrapper>
                <h3>
                  {t(`routes.profile.${title}`)}
                </h3>
              </StyledLink>
              {active && <StyledArrowIcon open={mobileOpen} />}
            </LinkWrapper>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Links, areEqual);

const Wrapper = styled.div`
  width: 100%;
  padding: 8px 16px;
  outline: 0;

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    width: 224px;
    padding: 0;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  max-width: 224px;
  margin: 0 auto;
`;

const LinkWrapper = styled.div<{ active: boolean; open: boolean }>`
  display: ${({ open, active }) => open || active ? 'block' : 'none'};
  position: relative;
  color: ${({ active }) => active ? WHITE : GRAY_100};
  background-color: ${({ active }) => active ? GRAY_700 : 'transparent'};
  padding: 10px 12px;
  cursor: pointer;

  h3 {
    margin-left: 4px;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
  }

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    display: block;
    border-radius: 4px;
  
    h3 {
      margin-left: 8px;
      font-size: 15px;
      line-height: 22px;
    }
  }
`;

const IconWrapper = styled.span<{ active: boolean }>`
  display: inline-flex;

  path {
    ${({ active }) => active && `fill: ${PURPLE_500};`}
  }
`;

const StyledArrowIcon = styled(ArrowDownIcon) <{ open: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: transform .1s ease-in-out;
  margin: 4px;

  ${({ open }) => open && 'transform: rotateX(180deg);'}

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    display: none;
  }
`;
