import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'store-library';
import { useQuery } from '@apollo/react-hooks';
import { ALL_GAMES } from '~/api/queries';
import GameCardContainer from '~/components/GameCardContainer';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;
  const { data } = useQuery(ALL_GAMES);
  const games: any[] = data?.store?.games?.slice(0, 2) || [];

  return (
    <Wrapper className={className}>
      {/* Тест для GameCardContainer */}
      {games.map(({ id }) => (
        <GameCardWrapper key={id} >
          <GameCardContainer id={id} type="xl" />
        </GameCardWrapper>
      ))}
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

const GameCardWrapper = styled.div`
  height: 200px;
  margin: 16px;
`;
