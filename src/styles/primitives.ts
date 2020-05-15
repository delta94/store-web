import styled from 'styled-components';
import { WHITE_01 } from 'store-library/src/styles';

export const DropdownMenuItem = styled.div`
  display: flex;
  padding: 10px 16px;

  :hover {
    background-color: ${WHITE_01};
  }
`;

export const DownloadLauncherWrapper = styled.div`
  position: relative;
  background-image: url('/images/download-background-full.png');
  background-size: cover;
  background-position: top center;
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
