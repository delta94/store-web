import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GRAY_100, Caps10 } from 'store-library/src/styles';
import { LegalDocument } from 'store-library/src/types';

import EmptyList from './EmptyList';
import ListItem from './ListItem';

interface Props {
  className?: string;
  legalDocuments?: LegalDocument[];
}

const LegalDocumentsList = (props: Props) => {
  const { className, legalDocuments = [] } = props;
  const { t } = useTranslation();

  if (!legalDocuments.length) {
    return (
      <Wrapper>
        <EmptyList />
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <Table>
        <thead>
          <tr>
            <TH>
              <Caps10>{t('profile.eula.name')}</Caps10>
            </TH>
            <TH>
              <Caps10>{t('profile.eula.language')}</Caps10>
            </TH>
            <TH>
              <Caps10>{t('profile.eula.date')}</Caps10>
            </TH>
            <TH>
              <Caps10>{t('profile.eula.download')}</Caps10>
            </TH>
          </tr>
        </thead>
        <tbody>
          {legalDocuments.map(legalDocument => (
            <ListItem legalDocument={legalDocument} key={legalDocument.id} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(LegalDocumentsList, areEqual);

const Wrapper = styled.div`
  min-height: 50vh;
  position: relative;
`;

const Table = styled.table`
  width: 100%;
`;

const TH = styled.th`
  padding: 12px 16px 12px 0;
  text-align: start;
  color: ${GRAY_100};

  &:not(:first-child) {
    width: 10%;
  }

  &:last-child {
    text-align: center;
  }
`;
