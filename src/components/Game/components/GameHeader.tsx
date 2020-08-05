import React from 'react';
import styled from 'styled-components';
import { Breadcrumbs, Scroller } from 'store-library';
import { SCREEN_SIZE } from 'store-library/src/const';
import SearchFilter from '~/components/SearchFilter';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Game } from 'store-library/src/types';

import GameLink from './GameLink';

interface Props {
  className?: string;
  gameTitle: string;
  editions: Game[];
}

const GameHeader = (props: Props) => {
  const { className, gameTitle, editions } = props;
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
      <StyledScroller>
        <ScrollContent>
          <Breadcrumbs>
            <GameLink
              url="/"
              title={t('routes.store')}
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
            {editions.map(({ slug: editionSlug, title }) => (
              <GameLink
                title={title}
                active={queryEdition === editionSlug}
                key={editionSlug}
                url={`${url}&edition=${editionSlug}`}
                as={`${as}${restQuerySring ? '&' : '?'}edition=${editionSlug}`}
                onClick={handleRouteChange}
              />
            ))}
          </Breadcrumbs>
        </ScrollContent>
      </StyledScroller>
    </Wrapper>
  );
};

export default React.memo(GameHeader);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    flex-direction: row-reverse;
    margin-bottom: 0;
    align-items: center;
  }
`;

const StyledScroller = styled(Scroller)`
  margin: 0 -16px;
  
  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    margin-right: 0 ;
  }
`;

const ScrollContent = styled.div`
  padding: 0 16px;
  display: inline-block;
`;
