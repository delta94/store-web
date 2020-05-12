import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Caption13, WHITE } from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';

import legalLinks from '../legalLinks';

const { LAUNCHER } = SCREEN_SIZE;

interface Props {
  className?: string;
}

const LegalLinks = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      {legalLinks.map(({ title, href }) => (
        <Link key={title} href={href}>
          <StyledLink>
            <Caption13>{t(`links.${title}`)}</Caption13>
          </StyledLink>
        </Link>
      ))}
    </Wrapper>
  );
};

const areEqual = () => true;

export default React.memo(LegalLinks, areEqual);

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;

  @media only screen and (min-width: ${LAUNCHER}) {
    flex-direction: row;
    order: 0;
  }
`;

const StyledLink = styled.a`
  color: ${WHITE};
  margin-bottom: 20px;
  cursor: pointer;
  opacity: 1;
  transition: opacity .3s ease-in-out;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    opacity: .6;
  }

  @media only screen and (min-width: ${LAUNCHER}) {
    margin-bottom: 0;
    margin-right: 32px;

    :last-child {
      margin-right: 0;
    }
  }
`;
