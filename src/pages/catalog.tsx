import React, { useState } from 'react';
import { Catalog } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import apolloClient from '~/apolloClient';

const CatalogPage = () => {
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [filterCount, setFilterCount] = useState<number>();

  const handleShowFiltersModal = (show: boolean) => {
    setShowFiltersModal(show);
  };

  const handleFilterCountChange = (count: number) => {
    setFilterCount(count);
  };

  return (
    <>
      <SearchFilter onShowFiltersModal={handleShowFiltersModal} filterCount={filterCount} />
      <Catalog
        client={apolloClient}
        onChangeFilterCount={handleFilterCountChange}
        showFiltersModal={showFiltersModal}
        setShowFiltersModal={setShowFiltersModal}
      />
    </>
  );
};

export default React.memo(CatalogPage);
