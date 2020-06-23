import styled from 'styled-components';
import { SCREEN_SIZE } from 'store-library/src/const';

export const Line = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    flex-direction: row;

    span {
      margin-right: 24px;
    }
  }
`;
