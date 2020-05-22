import React from 'react';
import { useRouter } from 'next/router';

const GamePage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  if (slug) router.push(`/game?slug=${slug}`, `/game/${slug}`);

  return null;
};

export default React.memo(GamePage);
