import React, { useEffect, useContext } from 'react';
import Game from '~/components/Game';
import { GET_GAME } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Game as GameType } from 'store-library/src/types';
import { PageLoading } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import { qu } from '~/helpers';
import { ErrorContext } from '~/components/ErrorBoundary';

const ERROR_MESSAGE = 'Get Game Error by Slug';

const GamePage = () => {
  const router = useRouter();
  const { slug, fromSearch } = router.query;
  const { data, error, loading } = useQuery(GET_GAME, { variables: { slug }, errorPolicy: 'all' });
  const { throwAsyncError } = useContext(ErrorContext);
  const game: GameType = data?.gameBySlug;

  useEffect(() => {
    if (fromSearch && game) {
      qu('myevent', {
        key: 'GAME_PAGE_VIEW_FROM_SEARCH',
        data: { slug },
      });
    }
  }, [game]);

  if (loading) return <PageLoading />;

  if (error?.graphQLErrors.map(({ message }) => message).includes('ST-1006 errors.qilin.store.not_found')) {
    router.push('/404');
    return null;
  }

  if (error?.graphQLErrors && !game) {
    throwAsyncError(new Error(`${ERROR_MESSAGE}: ${slug}`));
    return null;
  }

  if (!game) return null;

  return (
    <>
      <SearchFilter />
      <Game game={game} />
    </>
  );
};

export default React.memo(GamePage);
