import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'store-library';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      {/* Тест цветов и шрифтов */}
      {Object.keys(COLORS).map(name => (
        <StyledColor key={name} name={name}>{name}</StyledColor>
      ))}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;

const StyledColor = styled.div<{ name: string }>`
  height: 20px;
  background-color: ${({ name }) => COLORS[name]};
`;
