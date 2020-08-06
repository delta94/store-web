import React from 'react';
import styled from 'styled-components';
import { Container } from 'store-library';
import { Game as GameType } from 'store-library/src/types';
import { useRouter } from 'next/router';
import {
  AboutGame,
  Requirements,
  GameMedia,
  Grid,
  BasicInfoBlock,
  Editions,
} from 'store-library';

import GameHeader from './components/GameHeader';

const { Row, Col } = Grid;

interface Props {
  game: GameType;
  editions: GameType[];
}

const GamePage = (props: Props) => {
  const { query } = useRouter();
  const { game, editions } = props;
  const activeEdition = editions.find(({ slug }) => query.edition === slug);
  const renderedGame = activeEdition || game;
  const { description, requirements } = renderedGame;

  return (
    <Container>
      <GameHeader gameTitle={game.title} editions={editions} />
      <BlockWrapper>
        <GameMedia game={renderedGame} />
      </BlockWrapper>
      <Row gap="40px">
        <Col xs={12} sm={7} lg={8}>
          {!activeEdition && !!editions.length && (
            <BlockWrapper>
              <Editions editions={editions} />
            </BlockWrapper>
          )}
          <BlockWrapper>
            <AboutGame description={description} />
          </BlockWrapper>
          <BlockWrapper>
            <Requirements requirements={requirements} />
          </BlockWrapper>
        </Col>
        <Col xs={12} sm={5} lg={4}>
          <BasicInfoBlock game={renderedGame} />
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(GamePage);

const BlockWrapper = styled.div`
  margin-bottom: 30px;
`;
