import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Game as GameType } from 'store-library/src/types';
import { apolloClient, GET_GAME } from 'store-library/src/api';
import Game from '~/components/Game';
import { detectBot } from '~/helpers';

interface Props {
  game: GameType | null;
  error: boolean;
}

const GamePage = (props: Props) => {
  const { game, error } = props;
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    if (game) return;

    if (!slug) {
      router.push('/404');
      return;
    }

    if (error) {
      router.push('/_error');
      return;
    }

    router.push(`/game?slug=${slug}`, `/game/${slug}`);
  }, []);

  if (!game) return null;

  return <Game game={game} />;
};

export default React.memo(GamePage);

export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.params?.slug;
  const userAgent = context.req.headers['user-agent'];
  const isBot = detectBot(userAgent);
  let error = false;

  let game: GameType | null = null;

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
  }

  return { props: { game, error } };
};
