import React, { useContext, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { DownloadLauncherWrapper, DownloadLauncherContent } from '~/styles/primitives';
import { WHITE, H3, GRAY_100, PURPLE_500 } from 'store-library/src/styles';
import { parse } from 'bowser';
import { UserContext } from 'store-library/src/contexts';

import Instructions from './components/Instructions';
import DownloadHint from './components/DownloadHint';

interface Props {
  className?: string;
}

const DOWNLOAD_LINK = '/launcher.txt';

const HowToDownload = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { user } = useContext(UserContext);
  const isUserSigned = !!user;
  const [meta, setMeta] = useState<Bowser.Parser.ParsedResult>();
  const { browser } = meta || {};

  useEffect(() => {
    const newMeta = parse(window.navigator.userAgent);
    setMeta(newMeta);
    linkRef?.current?.click();
  }, []);

  return (
    <DownloadLauncherWrapper className={className}>
      <DownloadLauncherContent>
        <Title>
          {t('titles.downloads_thanks')}
        </Title>
        <NotStarted>
          <ClickHere ref={linkRef} href={DOWNLOAD_LINK} download>
            {t('labels.click_here')}
          </ClickHere>
          {' '}
          {t('labels.downloading_not_started')}
        </NotStarted>
        <Instructions authorized={isUserSigned} />
      </DownloadLauncherContent>
      <DownloadHint browser={browser?.name} />
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
