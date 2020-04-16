import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Carousel, Container, Grid, COLORS, QUERIES, GameCardContainer } from 'store-library';
import styled from 'styled-components';

const { Row, Col } = Grid;

const MainPage = () => {
  const { data: gameData } = useQuery(QUERIES.CARD_GAME, {
    variables: {
      id: '252e540f-210b-4f09-9c7c-6b079a6acf85',
    },
  });
  const { data } = useQuery(QUERIES.ALL_GAMES);
  const game = gameData?.store?.game;
  const games: any[] = data?.store?.games?.slice(0, 2) || [];

  if (!games.length || !game) return null;

  const gameIds = games.map(({ id }) => id);

  const mainSlides = gameIds.map(id => (
    <GameCardWrapper key={id} type="xl">
      <GameCardContainer id={id} type="xl" />
    </GameCardWrapper>
  ));

  const specialOffersSlides = [
    <Row key={0} gap="16px">
      <Col md={6}>
        <GameCardWrapper type="s">
          <GameCardContainer id={gameIds[1]} type="s" />
        </GameCardWrapper>
      </Col>
      <Col md={6}>
        <GameCardWrapper type="s">
          <GameCardContainer id={gameIds[1]} type="s" />
        </GameCardWrapper>
      </Col>
    </Row>,
    <Row key={1} gap="16px">
      <Col md={6}>
        <GameCardWrapper type="s">
          <GameCardContainer id={gameIds[1]} type="s" />
        </GameCardWrapper>
      </Col>
      <Col md={6}>
        <GameCardWrapper type="s">
          <GameCardContainer id={gameIds[1]} type="s" />
        </GameCardWrapper>
      </Col>
    </Row>,
  ];

  const gameScreenshots = game.media.screenshots.map(({ url }: any) => (
    <StyledScreenshotImg key={url} src={url} alt="alt" />
  ));

  const gameFooter = <StyledGameFooter>{game.title}</StyledGameFooter>;

  return (
    <Container>
      <StyledMainCarousel>{mainSlides}</StyledMainCarousel>
      <StyledSpecialOffersCarousel>
        {specialOffersSlides}
      </StyledSpecialOffersCarousel>
      <StyledGameCarousel overflow="visible" footer={gameFooter}>
        {gameScreenshots}
      </StyledGameCarousel>
    </Container>
  );
};

export default MainPage;

const GameCardWrapper = styled.div<{ type?: string }>`
  height: ${({ type }) => {
    if (type === 'xs') return 'unset';
    if (type === 'xl' || type === 'l') return '400px';
    return '232px';
  }};
`;

const StyledMainCarousel = styled(Carousel)`
  margin-bottom: 50px;
`;

const StyledSpecialOffersCarousel = styled(Carousel)`
  margin-bottom: 50px;
  & .wrapper-controls {
    height: 137px;
  }
`;

const StyledScreenshotImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const StyledGameCarousel = styled(Carousel)`
  margin-bottom: 50px;
`;

const StyledGameFooter = styled.div`
  margin-top: 15px;
  height: 60px;
  background: ${COLORS.BLACK};
  display: flex;
  color: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;
