import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Skeleton, GameCard } from 'store-library';
import { CARD_GAME } from '~/api/queries';
import styled from 'styled-components';

interface Props {
  id: string;
  type: string;
}

const GameCardContainer = (props: Props) => {
  const { id, type } = props;
  const { data, error, loading } = useQuery(CARD_GAME, {
    variables: { id },
  });

  const game = data?.store?.game;

  if (loading || !game) return <StyledSkeleton />;

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

  const handleCardClick = () => {
    // Later will be logic opening game page
    console.log('Card Clicked', id);
  };

  return (
    <GameCard
      type={type}
      game={game}
      onCardClick={() => { }}
      onBuyNow={handleBuyNow}
      onWishList={handleWishList}
      onCardClick={handleCardClick}
    />
  );
};

const areEqual = (prev: Props, next: Props) => (
  prev.id === next.id &&
  prev.type === next.type
);

export default React.memo(GameCardContainer, areEqual);

const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
