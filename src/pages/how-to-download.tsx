import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { DownloadLauncherWrapper } from '~/styles/primitives';

interface Props {
  className?: string;
}

const HowToDownload = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DownloadLauncherWrapper className={className}>
        
    </DownloadLauncherWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(HowToDownload, areEqual);

const Wrapper = styled.div`
  
`;
