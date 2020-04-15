/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { NextPageContext, NextPage } from 'next';
import {
  AboutGame,
  Requirements,
  QUERIES,
  apolloClient,
  GameMedia,
  Container,
  GameType,
  Grid,
  BasicInfoBlock,
} from 'store-library';
import { game as mockGame } from '~/mocks';

const { Row, Col } = Grid;

interface Props {
  game: any;
}

const Game: NextPage<Props> = props => {
  const { game } = props;
  const { description, requirements } = game;
  const { t } = useTranslation();

  return (
    <Wrapper>
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
              <Requirements requirements={requirements} isSuitable />
            </BlockWrapper>
          </Col>
          <Col xs={12} sm={5} lg={4}>
            <BasicInfoBlock game={game} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

Game.getInitialProps = async ({ query }: NextPageContext) => {
  const { slug } = query;
  let game: GameType = mockGame;

  try {
    const data = await apolloClient.query({
      query: QUERIES.GET_GAME,
      variables: { slug },
    });

    console.log(data);
    game = data;
  } catch (err) {
    console.log(err.message);
  }

  return { game };
};

export default Game;

const Wrapper = styled.div`
  padding: 24px 0;
`;

const BlockWrapper = styled.div`
  margin-bottom: 30px;
`;
