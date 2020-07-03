import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import {
  WHITE,
  PURPLE_500,
  buttonStyles,
  Caption13,
  WHITE_05,
  H3,
  GRAY_100,
  Caps14Bold,
} from 'store-library/src/styles';
import { DownloadFullIcon } from 'store-library/src/icons';
import { DownloadLauncherWrapper, DownloadLauncherContent } from '~/styles/primitives';

interface Props {
  className?: string;
}

const Download = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const storeName = process.env.STORE_NAME;

  return (
    <DownloadLauncherWrapper className={className}>
      <DownloadLauncherContent>
        <Title>
          {t('titles.play_with_launcher', { storeName })}
        </Title>
        <Subtitle>
          Subtitle text
        </Subtitle>
        <Link href="/how-to-download">
          <DownloadLink color={PURPLE_500}>
            <DownloadFullIcon />
            <Caps14Bold>{t('labels.download_for_free')}</Caps14Bold>
          </DownloadLink>
        </Link>
        <Available>
          {t('labels.downloads_available')}
        </Available>
      </DownloadLauncherContent>
    </DownloadLauncherWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Download, areEqual);

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 52px;
  color: ${WHITE};
  margin: 0 0 16px;
`;

const Subtitle = styled(H3)`
  margin-bottom: 32px;
  color: ${GRAY_100};
`;

const DownloadLink = styled.a`
  ${buttonStyles}
  display: flex;
  align-items: center;
  padding: 20px 36px;
  margin-bottom: 12px;

  svg {
    margin-right: 8px;
  }
`;

const Available = styled(Caption13)`
  color: ${WHITE_05};
`;
