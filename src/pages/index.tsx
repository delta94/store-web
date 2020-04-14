import React from 'react';
import styled from 'styled-components';
import { Grid, Container, QUERIES, GameCardContainer } from 'store-library';
import { useQuery } from '@apollo/react-hooks';

interface Props {
  className?: string;
}

const cardTypes = ['xs', 's', 'm', 'l', 'xl'];

const Home = (props: Props) => {
  const { className } = props;
  const { data } = useQuery(QUERIES.ALL_GAMES);
  const games: any[] = data?.store?.games?.slice(0, 18) || [];

  return (
    <Wrapper className={className}>
      <Container>
        {/* Тест для GameCardContainer */}
        <Grid.Row gap="12px">
          {games.map(({ id }, index) => {
            const type = cardTypes[Math.floor((index / 4) % cardTypes.length)];
            
            return (
              <Grid.Col 
                key={id}
                xs={type !== 's' ? 12 : 6}
                sm={type === 's' ? 3 : type === 'm' ? 6 : 12}
                lg={type === 'xs' ? 6 : undefined}
              >
                <GameCardWrapper type={type}>
                  <GameCardContainer id={id} type={type} />
                </GameCardWrapper>
              </Grid.Col>
            )
          })}
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
    if (type === 'm') return '320px';
    if (type === 'xl' || type === 'l') return '400px';
    return '200px';
  }};
  margin-bottom: 12px;
`;
