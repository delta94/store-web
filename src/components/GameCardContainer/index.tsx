import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Skeleton, GameCard, COLORS } from 'store-library';
import { CARD_GAME } from '~/api/queries';

interface Props {
  id: string;
  type: string;
}

const { GRAY_900, GRAY_700 } = COLORS;

const GameCardContainer = (props: Props) => {
  const { id, type } = props;
  const { data, error, loading } = useQuery(CARD_GAME, {
    variables: { id },
  });

  const game = data?.store?.game;

  if (loading || !game) return <Skeleton from={GRAY_900} to={GRAY_700} />;

  if (error) {
    console.log(error);
    return null;
  }

  const handleBuyNow = () => {
    // Later will be logic buy now
    console.log('Buy now', id);
  };

  const handleWishList = () => {
    // Later will be logic toggle wish list
    console.log('WishList', id);
  };

  return (
    <GameCard 
      type={type}
      game={game}
      onBuyNow={handleBuyNow}
      onWishList={handleWishList}
    />
  );
};

const areEqual = (prev: Props, next: Props) => (
  prev.id === next.id &&
  prev.type === next.type
);

export default React.memo(GameCardContainer, areEqual);
