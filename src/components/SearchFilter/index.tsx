import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from 'store-library';
import { SCREEN_SIZE } from 'store-library/src/const';
import apolloClient from '~/apolloClient';

interface Props {
  onResultItemClick: (slig: string) => void;
}

const SearchFilter = (props: Props) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const { onResultItemClick } = props;

  const handleSearchFocus = (isFocused: boolean) => {
    setSearchFocused(isFocused);
  };

  return (
    <Wrapper isActive={searchFocused}>
      <StyledSearch
        isActive={searchFocused}
        client={apolloClient}
        onGameClick={onResultItemClick}
        onFocus={handleSearchFocus}
      />
    </Wrapper>
  );
};

export default SearchFilter;

const Wrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  padding: ${({ isActive }) => isActive ? '12px 0' : '24px 0'};;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    padding: 32px 0;
    margin: 0;
  }
`;

const StyledSearch = styled(Search) <{ isActive: boolean }>`
  width: 300px;

  ${({ isActive }) => isActive && `
    flex-grow: 1;
    width: auto;
  `}

  input {
    border-radius: 100px;
  }

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    width: 300px;
    flex-grow: 0;
    position: relative;
  }
`;
