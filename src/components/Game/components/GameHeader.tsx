import React from 'react';
import styled from 'styled-components';
import { Breadcrumbs } from 'store-library';
import { SCREEN_SIZE } from 'store-library/src/const';
import SearchFilter from '~/components/SearchFilter';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import GameLink from './GameLink';

const mockEditions = [
  {
    edition: 'deluxe-edition',
    title: 'Deluxe Edition',
  },
  {
    edition: 'super-deluxe-edition',
    title: 'Super Deluxe Edition',
  },
  {
    edition: 'psycho-edition',
    title: 'Psycho Edition',
  },
];

interface Props {
  className?: string;
  gameTitle: string;
}

const GameHeader = (props: Props) => {
  const { className, gameTitle } = props;
  const { t } = useTranslation();
  const { query, push } = useRouter();
  const { slug, edition: queryEdition, ...restQuery } = query;
  const restQuerySring = Object.keys(restQuery)
    .map(key => `${key}=${restQuery[key]}`)
    .join('&');

  const url = `/game?slug=${slug}${restQuerySring && `&${restQuerySring}`}`;
  const as = `/game/${slug}${restQuerySring && `?${restQuerySring}`}`;

  const handleRouteChange = (url: string, as?: string) => {
    push(url, as, { shallow: true });
  };

  return (
    <Wrapper className={className}>
      <SearchFilter />
      <StyledBreadcrumbs>
        <GameLink
          url="/"
          title={t('store')}
          active={false}
          onClick={handleRouteChange}
        />
        <GameLink
          title={gameTitle}
          active={!queryEdition}
          url={url}
          as={as}
          onClick={handleRouteChange}
        />
        {mockEditions.map(({ edition, title }) => (
          <GameLink
            title={title}
            active={queryEdition === edition}
            key={edition}
            url={`${url}&edition=${edition}`}
            as={`${as}${restQuerySring ? '&' : '?'}edition=${edition}`}
            onClick={handleRouteChange}
          />
        ))}
      </StyledBreadcrumbs>
    </Wrapper>
  );
};

export default GameHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    flex-direction: row-reverse;
    margin-bottom: 0;
  }
`;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    margin-right: 16px;
  }
`;
