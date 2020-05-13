import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { WHITE, PURPLE_500, buttonStyles, Caption13, WHITE_05, H3, GRAY_100 } from 'store-library/src/styles';
import { DownloadFullIcon } from 'store-library/src/icons';
import { DownloadLauncherWrapper } from '~/styles/primitives';

interface Props {
  className?: string;
}

const Download = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const storeName = process.env.STORE_NAME;

  return (
    <DownloadLauncherWrapper className={className}>
      <Content>
        <Title>
          {t('titles.play_with_launcher', { storeName })}
        </Title>
        <Subtitle>
          Subtitle text
        </Subtitle>
        <Link href="/how-to-download">
          <DownloadLink color={PURPLE_500}>
            <DownloadFullIcon />
            {t('labels.download_for_free')}
          </DownloadLink>
        </Link>
        <Available>
          {t('labels.downloads_available')}
        </Available>
      </Content>
    </DownloadLauncherWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Download, areEqual);

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

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
