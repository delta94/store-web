import React, { useEffect } from 'react';
import Game from '~/components/Game';
import { GET_GAME } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Game as GameType } from 'store-library/src/types';
import PageLoading from '~/components/PageLoading';
import SearchFilter from '~/components/SearchFilter';
import { qu } from '~/helpers';

const GamePage = () => {
  const router = useRouter();
  const { slug, fromSearch } = router.query;
  const { data, error, loading } = useQuery(GET_GAME, { variables: { slug } });

  useEffect(() => {
    if (fromSearch) {
      qu('myevent', {
        key: 'GAME_PAGE_VIEW_FROM_SEARCH',
        data: { slug },
      });
    }
  }, []);

  if (loading) return <PageLoading />;

  const game: GameType = data?.gameBySlug;

  if (error) {
    const { graphQLErrors, networkError } = error;

    if (!game) {
      router.push('/404');
    }

    if (networkError) {
      console.log(networkError);
      router.push('/_error');
    }

    if (graphQLErrors) {
      console.log(graphQLErrors);
    }

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
