import styled, { css } from 'styled-components';
import {
  WHITE_01,
  GRAY_700,
  WHITE,
  H2Bold,
  Caption13,
  Caps10,
  GRAY_100,
  PURPLE_500,
  RED_500,
} from 'store-library/src/styles';
import { Button } from 'store-library';
import { SCREEN_SIZE } from 'store-library/src/const';

export const profileInputStyles = css<{ error?: boolean }>`
  width: 100%;
  border: 1px solid ${WHITE_01};
  border-radius: 4px;
  background-color: transparent;
  padding: 9px 12px;
  outline: none;
  color: ${WHITE};
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 16px;

  :focus {
    border-color: ${PURPLE_500};
  }

  ${({ error }) => error && `
    border-color: ${RED_500};
  `}
`;

export const ProfileWrapper = styled.section`
  background: ${GRAY_700};
  border-radius: 4px;
  padding: 24px 16px 32px;
  margin-bottom: 8px;
  color: ${WHITE};

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    padding: 24px;
  }
`;

export const ProfileTitle = styled(H2Bold)`
  margin-bottom: 6px;

  @media only screen and (min-width: ${SCREEN_SIZE.LAPTOP}) {
    margin-bottom: 8px;
  }
`;

export const ProfileSubtitle = styled(Caption13)`
  display: block;
  margin-bottom: 24px;
`;

export const ProfileLabel = styled(Caps10)`
  display: block;
  color: ${GRAY_100};
  margin-bottom: 6px;
`;

export const ProfileInput = styled.input<{ error?: boolean }>`
  ${profileInputStyles}
`;

export const ProfileSelect = styled.select`
  width: 100%;
  border: 1px solid ${WHITE_01};
  border-radius: 4px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${GRAY_700};
  background-image: url('/images/select-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 16px top 50%;
  padding: 9px 12px;
  outline: none;
  color: ${WHITE};
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 16px;

  :focus {
    border-color: ${PURPLE_500};
  }
`;

export const ProfileDivider = styled.div`
  flex-basis: 100%;
  height: 16px;

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    height: 32px;
  }
`;

export const ProfileButton = styled(Button)`
  margin: 0 auto;
  display: block;
  flex-shrink: 0;

  && {
    padding: 10px 18px;
  }

  @media only screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    margin-right: 0;
  }
`;

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
