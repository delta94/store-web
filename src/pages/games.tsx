import React, { useState } from 'react';
import { Catalog } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import apolloClient from '~/apolloClient';
import { useRouter } from 'next/router';
import { Filter } from 'store-library/src/components/Catalog/types';
import { getUrlParameter } from '~/helpers';

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

  const handleChangeFilter = ({ sortType, platforms, features, genres, offset, limit }: Filter) => {
    const query: Record<string, string | number> = {
      sortType,
      offset,
      limit,
    };

    if (platforms.length) {
      query.platforms = platforms.map(({ id }) => id).join(',');
    }

    if (features.length) {
      query.features = features.map(({ id }) => id).join(',');
    }

    if (genres.length) {
      query.genres = genres.map(({ id }) => id).join(',');
    }

    router.push(
      '/games',
      { query },
    );
  };

  const genresParam = getUrlParameter('genres');
  const featuresParam = getUrlParameter('features');
  const platformsParam = getUrlParameter('platforms');
  const limitParam = getUrlParameter('limit');
  const offsetParam = getUrlParameter('offset');

  const initialFilter = {
    genres: genresParam?.length ? genresParam.split(',') : [],
    features: featuresParam?.length ? featuresParam.split(',') : [],
    platforms: platformsParam?.length ? platformsParam.split(',') : [],
    limit: limitParam ? Number(limitParam) : 50,
    offset: offsetParam ? Number(offsetParam) : 0,
    sortType: getUrlParameter('sortType') || 'releaseDate',
  };

  return (
    <>
      <SearchFilter onShowFiltersModal={handleShowFiltersModal} filterCount={filterCount} />
      <Catalog
        initialFilter={initialFilter}
        onChangeFilter={handleChangeFilter}
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
