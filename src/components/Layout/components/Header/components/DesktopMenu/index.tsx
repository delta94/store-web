import React, { useContext } from 'react';
import styled from 'styled-components';
import { screenSize, Caps11 } from 'store-library';
import { UserContext } from '~/contexts';
import menuLinks from '../../menuLinks';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface Props {
  className?: string;

}

const DesktopMenu = (props: Props) => {
  const { className } = props;
  const { 
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);
  const { pathname } = useRouter();

  return (
    <Wrapper className={className}>
      <Links>
        {menuLinks.map(({ title, href }) => (
          <Link key={title} href={href}>
            <StyledLink active={pathname === href}>
              <Caps11>{title}</Caps11>
            </StyledLink>
          </Link>
        ))}
      </Links>
      <Side>
        {!user
          ? <span onClick={onLogin}>Log In</span>
          : <span onClick={onLogout}>Log Out</span>
        }
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
