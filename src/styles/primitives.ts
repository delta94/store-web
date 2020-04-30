import styled from 'styled-components';
import { WHITE_01 } from 'store-library/src/styles';

export const DropdownMenuItem = styled.div`
  display: flex;
  padding: 10px 16px;

  :hover {
    background-color: ${WHITE_01};
  }
`;
