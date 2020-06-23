import React, { useState } from 'react';
import { Catalog } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import apolloClient from '~/apolloClient';
import { useRouter } from 'next/router';

const GamesPage = () => {
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [filterCount, setFilterCount] = useState<number>();
  const router = useRouter();

  const handleShowFiltersModal = (show: boolean) => {
    setShowFiltersModal(show);
  };

  const handleFilterCountChange = (count: number) => {
    setFilterCount(count);
  };

  const handleCardClick = (slug: string) => {
    router.push(
      `/game?slug=${slug}`,
      `/game/${slug}`,
      { shallow: true },
    );
  };

  return (
    <>
      <SearchFilter onShowFiltersModal={handleShowFiltersModal} filterCount={filterCount} />
      <Catalog
        onCardClick={handleCardClick}
        client={apolloClient}
        onChangeFilterCount={handleFilterCountChange}
        showFiltersModal={showFiltersModal}
        setShowFiltersModal={setShowFiltersModal}
      />
    </>
  );
};

export default React.memo(GamesPage);
