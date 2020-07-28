import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Search } from 'store-library';
import { FilterIcon } from 'store-library/src/icons';
import {
  Caption13,
  GRAY_100,
  GRAY_700,
  Container,
  GRAY_900,
  PURPLE_500,
  WHITE,
} from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';
import apolloClient from '~/apolloClient';

interface Props {
  onShowFiltersModal?: (show: boolean) => void;
  className?: string;
  filterCount?: number;
}

const SearchFilter = (props: Props) => {
  const { onShowFiltersModal, className, filterCount } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const isCatalogPage = router.pathname === '/games';

  const handleSearchItemClick = (slug: string) => {
    router.push(
      `/game?slug=${slug}&fromSearch=true`,
      `/game/${slug}`,
      { shallow: true },
    );
  };

  const handleFilterClick = () => {
    if (isCatalogPage && onShowFiltersModal) {
      onShowFiltersModal(true);
      return;
    }

    router.push('/games');
  };

  return (
    <Wrapper className={className}>
      <Container>
        <Row>
          <StyledSearch
            client={apolloClient}
            onGameClick={handleSearchItemClick}
          />
          <FilterButton onClick={handleFilterClick} isCatalogPage={isCatalogPage}>
            {!!filterCount && <Bage>{filterCount}</Bage>}
            <FilterIcon />
            <Caption13>{t('titles.all_games')}</Caption13>
          </FilterButton>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default SearchFilter;

const Wrapper = styled.div`
  background: ${GRAY_900};
`;

const Row = styled.div`
  position: relative;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    padding: 32px 0;
    margin: 0;
  }
`;

const StyledSearch = styled(Search)`
  flex-grow: 1;

  input {
    border-radius: 100px;
  }

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    width: 212px;
    flex-grow: 0;
    position: relative;
  }
`;

const FilterButton = styled.div<{ isCatalogPage: boolean }>`
  position: relative;
  cursor: pointer;
  color: ${GRAY_100};
  min-width: 34px;
  margin-left: 16px;
  height: 34px;
  background: ${GRAY_700};
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  display: flex;

  ${Caption13} {
    display: none;
  }

  @media only screen and (min-width: ${SCREEN_SIZE.LAUNCHER}) {
    ${({ isCatalogPage }) => isCatalogPage && 'display: none;'}
    background: none;
    width: auto;
    height: auto;
    align-items: baseline;

    ${Caption13} {
      margin-left: 5px;
      display: inline;
    }
  }
`;

const Bage = styled.div`
  position: absolute;
  top: -5px;
  right: -3px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  background: ${PURPLE_500};
  border-radius: 50%;
  border: 2px solid ${GRAY_900};
  color: ${WHITE};
  text-align: center;
  line-height: 16px;
`;
