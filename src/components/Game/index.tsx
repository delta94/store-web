import React from 'react';
import styled from 'styled-components';
import {
  AboutGame,
  Requirements,
  GameMedia,
  Container,
  Grid,
  BasicInfoBlock,
} from 'store-library';
import { Game as GameType } from 'store-library/src/types';

const { Row, Col } = Grid;

interface Props {
  game: GameType;
}

const Game = (props: Props) => {
  const { game } = props;
  const { description, requirements } = game;

  return (
    <Container>
      <BlockWrapper>
        <GameMedia game={game} />
      </BlockWrapper>
      <Row gap="40px">
        <Col xs={12} sm={7} lg={8}>
          <BlockWrapper>
            <AboutGame description={description} />
          </BlockWrapper>
          <BlockWrapper>
            <Requirements requirements={requirements} />
          </BlockWrapper>
        </Col>
        <Col xs={12} sm={5} lg={4}>
          <BasicInfoBlock game={game} />
        </Col>
      </Row>
    </Container>
  );
};

export default Game;

const BlockWrapper = styled.div`
  margin-bottom: 30px;
`;
