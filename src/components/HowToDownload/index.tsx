import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { DownloadLauncherWrapper, DownloadLauncherContent } from '~/styles/primitives';
import { WHITE, H3, GRAY_100, PURPLE_500 } from 'store-library/src/styles';
import { UserContext } from '~/contexts';
import useLauncherDownload from '~/hooks/useLauncherDownload';

import Instructions from './components/Instructions';
import DownloadHint from './components/DownloadHint';
import PageLoading from '../PageLoading';

interface Props {
  className?: string;
}

const HowToDownload = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { user } = useContext(UserContext);
  const isUserSigned = !!user;
  const { loading, launcher, browserName } = useLauncherDownload();

  useEffect(() => {
    if (!linkRef || !launcher?.url) return;

    linkRef?.current?.click();
  }, [loading]);

  if (loading) return <PageLoading />;

  return (
    <DownloadLauncherWrapper className={className}>
      <DownloadLauncherContent>
        <Title>
          {t('titles.downloads_thanks')}
        </Title>
        <NotStarted>
          <ClickHere ref={linkRef} href={launcher.url} download>
            {t('labels.click_here')}
          </ClickHere>
          {' '}
          {t('labels.downloading_not_started')}
        </NotStarted>
        <Instructions authorized={isUserSigned} />
      </DownloadLauncherContent>
      <DownloadHint browser={browserName} />
    </DownloadLauncherWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(HowToDownload, areEqual);

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${WHITE};
  margin: 0 0 16px;
`;

const NotStarted = styled(H3)`
  color: ${GRAY_100};
  margin-bottom: 48px;
`;

const ClickHere = styled.a`
  color: ${PURPLE_500};
  cursor: pointer;
  text-decoration: none;
`;
