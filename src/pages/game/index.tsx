import React from 'react';
import Game from '~/components/Game';
import { GET_GAME } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Container, Skeleton } from 'store-library';
import { Game as GameType } from 'store-library/src/types';
import { GetStaticProps } from 'next';

interface Props {
  staticGame?: GameType;
}

const GamePage = (props: Props) => {
  const { staticGame } = props;
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, loading } = useQuery(GET_GAME, { variables: { slug } });

  console.log(data); // TODO delett console.log

  if (loading) return (
    <Container>
      <Skeleton width="100%" height="80vh" />
    </Container>
  );

  const game: GameType = data?.store?.gameBySlug;

  if (error || !game) {
    router.push('/404');
    // return null;
  }

  return <Game game={game} />;
};

export default React.memo(GamePage);

// /bot|crawler|spider|crawling/i

// export const getStaticProps: GetStaticProps = async (context) => {

// }
