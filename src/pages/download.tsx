import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const Download = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Download, areEqual);

const Wrapper = styled.div`
  
`;
