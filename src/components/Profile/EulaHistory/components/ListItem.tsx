import React from 'react';
import styled from 'styled-components';
import { WHITE_01, PURPLE_500, Caption13 } from 'store-library/src/styles';
import { DownloadIcon } from 'store-library/src/icons';
import { LegalDocument } from 'store-library/src/types';
import { useTranslation } from 'react-i18next';

const formatDate = (isoString = '') => {
  const date = new Date(isoString.slice(0, 10));

  return date.toLocaleString(undefined, {
    year: 'numeric', month: 'numeric', day: 'numeric',
  });
};

interface Props {
  className?: string;
  legalDocument: LegalDocument;
}

const ListItem = (props: Props) => {
  const { className, legalDocument } = props;
  const { language, title, signedAt } = legalDocument;
  const { t } = useTranslation();

  const downloadDocument = async () => {
    console.log('Download', title);
  };

  return (
    <Wrapper className={className}>
      <TD>
        <Caption13>{title}</Caption13>
      </TD>
      <TD>
        <Caption13>{t(`locales.${language}`)}</Caption13>
      </TD>
      <TD>
        <Caption13>{formatDate(signedAt)}</Caption13>
      </TD>
      <TD>
        <Caption13>
          <IconWrapper onClick={downloadDocument}>
            <DownloadIcon />
          </IconWrapper>
        </Caption13>
      </TD>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ListItem, areEqual);

const Wrapper = styled.tr``;

const TD = styled.td`
  padding: 12px 16px 12px 0;
  vertical-align: top;
  text-align: start;
  border-bottom: 1px solid ${WHITE_01};
`;

const IconWrapper = styled.div`
  display: flex;
  height: 18px;
  cursor: pointer;

  svg {
    margin: auto;
  }
  
  path {
    stroke: ${PURPLE_500}
  }
`;
