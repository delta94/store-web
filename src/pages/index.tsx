/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import { Grid, Container, GameCard } from 'store-library';
import { useQuery } from '@apollo/react-hooks';
import { ALL_GAMES } from '~/api/queries';
import GameCardContainer from '~/components/GameCardContainer';
import mockGame from '~/mocks/game';

interface Props {
  className?: string;
}

const cardTypes = ['xs', 's', 'm', 'l', 'xl'];

const Home = (props: Props) => {
  const { className } = props;
  const { data } = useQuery(ALL_GAMES);
  const games: any[] = data?.store?.games?.slice(0, 18) || Array(18).fill(mockGame);

  return (
    <Wrapper className={className}>
      <Container>
        {/* Тест для GameCardContainer */}
        <Grid.Row gap="12px">
          {games.map((game, index) => (
            <Grid.Col 
              key={game.id + index}
              xs={index < 4 ? 12 : 6}
              sm={index < 4 ? 12 : index < 8 ? 3 : index < 12 ? 6 : 12}
              lg={index < 4 ? 6 : undefined}
            >
              <GameCardWrapper type={cardTypes[Math.floor((index / 4) % cardTypes.length)]}>
                <GameCardContainer id={game.id} type={cardTypes[Math.floor((index / 4) % cardTypes.length)]} />
                {/* <GameCard 
                  game={game}
                  onBuyNow={() => {}}
                  onCardClick={() => {}}
                  onWishList={() => {}}
                  type={cardTypes[Math.floor((index / 4) % cardTypes.length)]} 
                /> */}
              </GameCardWrapper>
            </Grid.Col>
          ))}
        </Grid.Row>
        
      </Container>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;

// const StyledColor = styled.div<{ name: string }>`
//   height: 20px;
//   background-color: ${({ name }) => COLORS[name]};
// `;

const GameCardWrapper = styled.div<{ type?: string }>`
  height: ${({ type }) => {
    if (type === 'xs') return 'unset';
    if (type === 'xl' || type === 'l') return '400px';
    return '200px';
  }};
`;
