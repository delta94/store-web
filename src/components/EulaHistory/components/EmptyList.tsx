import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { NotFoundIcon } from 'store-library/src/icons';
import { Caption12, GRAY_100 } from 'store-library/src/styles';

interface Props {
  className?: string;
}

const EmptyList = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <NotFoundIcon />
      <Title>{t('labels.not_eula_found')}</Title>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(EmptyList, areEqual);

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Caption12)`
  color: ${GRAY_100};
  margin-left: 8px;
`;
