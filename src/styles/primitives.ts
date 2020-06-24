import styled from 'styled-components';
import { WHITE_01, GRAY_700, WHITE, H2Bold, Caption13, Caps10, GRAY_100, PURPLE_500 } from 'store-library/src/styles';
import { SCREEN_SIZE, Button } from 'store-library';

export const DropdownMenuItem = styled.div`
  display: flex;
  padding: 10px 16px;

  :hover {
    background-color: ${WHITE_01};
  }
`;

export const DownloadLauncherWrapper = styled.div`
  position: relative;
  background-image: url('/images/download-background.png');
  background-size: cover;
  background-position: center -48px;
  min-height: 720px;
  height: 100%;
`;

export const DownloadLauncherContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
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

export const ProfileInput = styled.input`
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
