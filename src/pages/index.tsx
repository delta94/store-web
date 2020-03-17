import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      Hello next
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;
