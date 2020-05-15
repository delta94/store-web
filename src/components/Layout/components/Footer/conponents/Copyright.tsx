import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Caption12, WHITE_05 } from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';

interface Props {
  className?: string;
}

const Copyright = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const storeName = process.env.STORE_NAME;

  return (
    <Wrapper className={className}>
      <Text>
        {t('labels.copyright_description')}
      </Text>
      <Text>
        {t('labels.copyright_title', { year, storeName })}
      </Text>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Copyright, areEqual);

const Wrapper = styled.div`
  text-align: center;
`;

const Text = styled(Caption12)`
  color: ${WHITE_05};

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    display: block;
  }
`;
