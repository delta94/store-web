import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'store-library';

interface Props {
  className?: string;
}

const PageLoading = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Spinner size={60} />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PageLoading, areEqual);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20%;
`;
