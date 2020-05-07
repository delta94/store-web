import React, { ReactNode, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { GRAY_700 } from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';

interface Props {
  className?: string;
  children: ReactNode;
}

const MenuWrapper = (props: Props) => {
  const { className, children } = props;

  const stopClickPropagation = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Wrapper className={className} onClick={stopClickPropagation}>
      {children}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MenuWrapper, areEqual);

const Wrapper = styled.div`
  background-color: ${GRAY_700};
  padding: 20px 12px;
  width: 100%;
  min-height: 100%;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    max-width: 320px;
    margin-left: auto;
  }
`;
