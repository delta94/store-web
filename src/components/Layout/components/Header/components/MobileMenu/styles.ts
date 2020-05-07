import styled from 'styled-components';
import { GRAY_500, GRAY_100, PURPLE_500, WHITE, H3, GRAY_700 } from 'store-library/src/styles';
import { SCREEN_SIZE } from 'store-library/src/const';

export const Divider = styled.div`
  height: 1px;
  background-color: ${GRAY_500};
  margin-bottom: 17px;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  margin-right: 6px;

  & > * {
    margin: auto;
  }
`;

export const MenuItem = styled(H3) <{ active?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 0 18px 0;
  color: ${({ active }) => active ? WHITE : GRAY_100};
  text-transform: capitalize;
  cursor: pointer;

  ${IconWrapper} {
    ${({ active }) => active && `background-color: ${PURPLE_500};`}
  }

  path {
    fill: ${({ active }) => active ? WHITE : GRAY_100}
  }
`;

export const MenuWrapper = styled.div`
  background-color: ${GRAY_700};
  padding: 20px 12px;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    max-width: 320px;
    margin-left: auto;
  }
`;
