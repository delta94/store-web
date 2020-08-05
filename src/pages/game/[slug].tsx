import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Game as GameType } from 'store-library/src/types';
import { apolloClient, GET_GAME } from 'store-library/src/api';
import Game from '~/components/Game';
import { detectBot } from '~/helpers';
import { ErrorContext } from '~/components/ErrorBoundary';

const ERROR_MESSAGE = 'Get Game Error by Slug';

interface Props {
  game: GameType | null;
  editions: GameType[];
  error: boolean;
}

const GameSlugPage = (props: Props) => {
  const { game, editions, error } = props;
  const router = useRouter();
  const { throwAsyncError } = useContext(ErrorContext);
  const { slug, ...restQuery } = router.query;
  const restQuerySring = Object.keys(restQuery)
    .map(key => `${key}=${restQuery[key]}`)
    .join('&');

  useEffect(() => {
    if (game) return;

    if (!slug) {
      router.push('/404');
      return;
    }

    if (error) {
      throwAsyncError(new Error(`${ERROR_MESSAGE}: ${slug}`));
      return;
    }

    router.push(
      `/game?slug=${slug}${restQuerySring && `&${restQuerySring}`}`,
      `/game/${slug}${restQuerySring && `?${restQuerySring}`}`,
    );
  }, []);

  if (!game) return null;

  return <Game game={game} editions={editions} />;
};

export default React.memo(GameSlugPage);

export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.params?.slug;
  const userAgent = context.req.headers['user-agent'];
  const isBot = detectBot(userAgent);
  let error = false;

  let game: GameType | null = null;
  let editions: GameType[] = [];

  if (isBot) {
    const { data, errors } = await apolloClient.query({
      query: GET_GAME,
      variables: { slug },
      errorPolicy: 'all',
    });

    if (errors) {
      error = true;
    }

    game = data?.gameBySlug || null;
    editions = data?.editions || [];
  }

  return { props: { game, editions, error } };
};
