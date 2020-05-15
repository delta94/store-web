import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Modal } from 'store-library';
import { WHITE, PURPLE_500 } from 'store-library/src/styles';
import { DownloadFullIcon } from 'store-library/src/icons';

import { isFirefox, isOpera, isEdge, isYandex } from '../helpers';

interface Props {
  className?: string;
  browser?: string;
}

const DownloadHint = (props: Props) => {
  const { className, browser } = props;
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(true);

  const handleModalClose = () => setModalOpen(false);

  return (
    <Modal>
      {isModalOpen && (
        <Overlay onClick={handleModalClose} className={className}>
          <Hint browser={browser}>
            <Title>
              {t('labels.download_hint')}
            </Title>
            <IconWrapper>
              <DownloadFullIcon />
            </IconWrapper>
          </Hint>
        </Overlay>
      )}
    </Modal>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DownloadHint, areEqual);

const pulse = keyframes`
  0 {
    transform: scale(1);
  }

  50% {
    transform: scale(1.6);
  }

  100% {
    transform: scale(1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(32, 32, 35, 0.7);
  backdrop-filter: blur(4px);
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${PURPLE_500};
  border-radius: 50%;
  display: flex;
  overflow: hidden;

  svg {
    animation: ${pulse} 2s ease-in-out infinite;
    margin: auto;
  }
`;

const Hint = styled.div<{ browser?: string }>`
  position: absolute;
  display: flex;
  align-items: center;
  left: 32px;
  right: 32px;

  ${({ browser }) => isEdge(browser) && `
    bottom: 112px;
    justify-content: center;
  `}

  ${({ browser }) => (isFirefox(browser) || isOpera(browser) || isYandex(browser)) && `
    top: 32px;
    justify-content: flex-end;
    ${IconWrapper} {
      transform: rotate(180deg);
    }
  `}

  ${({ browser }) => !isFirefox(browser) && !isOpera(browser) && !isEdge(browser) && !isYandex(browser) && `
    bottom: 16px;

    ${IconWrapper} {
      order: -1;
    }
  `}

`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${WHITE};
  margin: 0 16px;
`;
