import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from 'store-library';
import { useQuery } from '@apollo/react-hooks';
import { ALL_GAMES } from '~/api/queries';
import GameCardContainer from '~/components/GameCardContainer';

interface Props {
  className?: string;
}

const cardTypes = ['xs', 's', 'm', 'l', 'xl'];

const Home = (props: Props) => {
  const { className } = props;
  const { data } = useQuery(ALL_GAMES);
  const games: any[] = data?.store?.games?.slice(0, 18) || [];

  return (
    <Wrapper className={className}>
      <Container>
        {/* Тест для GameCardContainer */}
        <Grid.Row gap="12px">
          {games.map(({ id }, index) => (
            <Grid.Col 
              key={id}
              xs={index < 4 ? 12 : 6}
              sm={index < 4 ? 12 : index < 12 ? 3 : 12}
              lg={index < 4 ? 6 : undefined}
            >
              <GameCardWrapper type={cardTypes[Math.floor((index / 4) % cardTypes.length)]}>
                <GameCardContainer id={id} type={cardTypes[Math.floor((index / 4) % cardTypes.length)]} />
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

const GameCardWrapper = styled.div<{ type?: string }>`
  height: ${({ type }) => {
    if (type === 'xs') return 'unset';
    if (type === 'xl' || type === 'l') return '400px';
    return '200px';
  }};
`;
