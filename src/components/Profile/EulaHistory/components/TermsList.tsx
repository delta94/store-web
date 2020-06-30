import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GRAY_100, WHITE_01, Caps10, WHITE, Caption13, Grid, DownloadIcon, PURPLE_500 } from 'store-library';
import EmptyList from './EmptyList';

const { Row, Col } = Grid;

const formatDate = (isoString: string) => {
  const date = new Date(isoString.slice(0, 10));

  return date.toLocaleString(undefined, {
    year: 'numeric', month: 'numeric', day: 'numeric',
  });
};

interface Term {
  id: number;
  name: string;
  language: string;
  date: string;
  url: string;
}

interface Props {
  className?: string;
  terms: Term[];
}

const TermsList = (props: Props) => {
  const { className, terms } = props;
  const { t } = useTranslation();

  if (!terms.length) {
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
          <TR>
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
          </TR>

        </thead>
        <tbody>
          {terms.map(({ name, language, date, url, id }) => (
            <TR key={id}>
              <TD>
                <Caption13>{name}</Caption13>
              </TD>
              <TD>
                <Caption13>{language}</Caption13>
              </TD>
              <TD>
                <Caption13>{formatDate(date)}</Caption13>
              </TD>
              <TD>
                <Caption13>
                  <IconWrapper href={url} download>
                    <DownloadIcon />
                  </IconWrapper>
                </Caption13>
              </TD>
            </TR>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TermsList, areEqual);

const Wrapper = styled.div`
  min-height: 50vh;
  position: relative;
`;

const Table = styled.table`
  width: 100%;
`;
const TR = styled.tr`
`;
const TH = styled.th`
  padding: 12px 16px 12px 0;
  text-align: start;
  color: ${GRAY_100};
`;

const TD = styled.td`
  padding: 12px 16px 12px 0;
  vertical-align: top;
  text-align: start;
  border-bottom: 1px solid ${WHITE_01};
`;

const IconWrapper = styled.a`
  display: flex;
  height: 18px;

  svg {
    margin: auto;
  }
  
  path {
    stroke: ${PURPLE_500}
  }
`;
