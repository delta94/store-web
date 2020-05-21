/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {
  AboutGame,
  Requirements,
  GameMedia,
  Container,
  Grid,
  BasicInfoBlock,
  Skeleton,
} from 'store-library';
import { GET_GAME } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

const { Row, Col } = Grid;

const Game = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, loading } = useQuery(GET_GAME, { variables: { slug } });

  if (error) console.log(error); // router.push('/404');

  if (loading) return (
    <Container>
      <Skeleton width="100%" height="80vh" />
    </Container>
  );

  const game: any = data?.store?.gameBySlug;

  if (!game) router.push('/');
  const { description, requirements } = game;

  console.log(data);

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
              <Requirements requirements={requirements} />
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

// Game.getInitialProps = async ({ query }: NextPageContext) => {
//   const { slug } = query;
//   let game: GameType = mockGame;

//   try {
//     const data: any = await apolloClient.query({
//       query: GET_GAME,
//       variables: { slug },
//     });

//     console.log(data);
//     game = data;
//   } catch (err) {
//     console.log(err.message);
//   }

//   return { game };
// };

export default Game;

const Wrapper = styled.div`
  padding: 24px 0;
`;

const BlockWrapper = styled.div`
  margin-bottom: 30px;
`;
