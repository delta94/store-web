import React from 'react';
import Game from '~/components/Game';
import { GET_GAME } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Game as GameType } from 'store-library/src/types';
import PageLoading from '~/components/PageLoading';
import SearchFilter from '~/components/SearchFilter';

const GamePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, loading } = useQuery(GET_GAME, { variables: { slug } });

  if (loading) return <PageLoading />;

  const game: GameType = data?.gameBySlug;

  if (error || !game) {
    router.push('/404');
    return null;
  }

  return (
    <>
      <SearchFilter />
      <Game game={game} />
    </>
  );
};

export default React.memo(GamePage);
