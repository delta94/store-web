import React, { useState } from 'react';
import { Catalog, Container } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import apolloClient from '~/apolloClient';
import { useRouter } from 'next/router';
import { ActiveFilter } from 'store-library/src/components/Catalog/types';
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

  const handleChangeFilter = ({ sortType, platforms, features, languages, genres, offset, limit }: ActiveFilter) => {
    const query: Record<string, string | number> = {
      sortType,
      offset,
      limit,
    };

    if (platforms.length) {
      query.platforms = platforms.join(',');
    }

    if (features.length) {
      query.features = features.join(',');
    }

    if (genres.length) {
      query.genres = genres.join(',');
    }

    if (languages.length) {
      query.languages = languages.join(',');
    }

    router.push(
      '/games',
      { query },
    );
  };

  const genresParam = getUrlParameter('genres');
  const featuresParam = getUrlParameter('features');
  const platformsParam = getUrlParameter('platforms');
  const languagesParam = getUrlParameter('languages');
  const limitParam = getUrlParameter('limit');
  const offsetParam = getUrlParameter('offset');

  const initialFilter = {
    genres: genresParam?.length ? genresParam.split(',') : [],
    features: featuresParam?.length ? featuresParam.split(',') : [],
    platforms: platformsParam?.length ? platformsParam.split(',') : [],
    languages: languagesParam?.length ? languagesParam.split(',') : [],
    limit: limitParam ? Number(limitParam) : 50,
    offset: offsetParam ? Number(offsetParam) : 0,
    sortType: getUrlParameter('sortType') || 'releaseDate',
  };

  return (
    <>
      <Container>
        <SearchFilter onShowFiltersModal={handleShowFiltersModal} filterCount={filterCount} />
      </Container>
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
