import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { H2Bold, H3, GRAY_100, PURPLE_500, buttonStyles, WHITE, Caps10Bold } from 'store-library';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Image src="/images/500.png" />
      <H2Bold>{t('titles.server_error')}</H2Bold>
      <Description>{t('titles.try_going_back')}</Description>
      <Link href="/">
        <GoToMainLink color={PURPLE_500}>
          <Caps10Bold>{t('labels.go_to_main')}</Caps10Bold>
        </GoToMainLink>
      </Link>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 48px);
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${WHITE};
`;

const Image = styled.img`
  max-width: 540px;
  width: 80%;
  margin-bottom: 32px;
`;

const Description = styled(H3)`
  color: ${GRAY_100};
  margin: 16px 0 32px;
  text-align: center;
`;

const GoToMainLink = styled.a`
  ${buttonStyles};
`;
