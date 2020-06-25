import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GRAY_100, WHITE_01, Caps10, WHITE, Caption13, Grid, DownloadIcon, PURPLE_500 } from 'store-library';

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

  return (
    <Wrapper className={className}>
      <StyledRow gap="16px" heading>
        <StyledCol xs={7}>
          <Caps10>{t('profile.eula.name')}</Caps10>
        </StyledCol>
        <StyledCol xs={5}>
          <Row>
            <StyledCol xs={4}>
              <Caps10>{t('profile.eula.language')}</Caps10>
            </StyledCol>
            <StyledCol xs={4}>
              <Caps10>{t('profile.eula.date')}</Caps10>
            </StyledCol>
            <StyledCol xs={4}>
              <Caps10>{t('profile.eula.download')}</Caps10>
            </StyledCol>
          </Row>
        </StyledCol>
      </StyledRow>
      {terms.map(({ name, language, date, url, id }) => (
        <StyledRow key={id} gap="16px">
          <StyledCol xs={7}>
            <Caption13>{name}</Caption13>
          </StyledCol>
          <StyledCol xs={5}>
            <Row>
              <StyledCol xs={4}>
                <Caption13>{language}</Caption13>
              </StyledCol>
              <StyledCol xs={4}>
                <Caption13>{formatDate(date)}</Caption13>
              </StyledCol>
              <StyledCol xs={4}>
                <Caption13>
                  <IconWrapper href={url} download>
                    <DownloadIcon />
                  </IconWrapper>
                </Caption13>
              </StyledCol>
            </Row>
          </StyledCol>
        </StyledRow>
      ))}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TermsList, areEqual);

const Wrapper = styled.div`
  min-height: 656px;
`;

const StyledRow = styled(Row) <{ heading?: boolean }>`
  color: ${({ heading }) => heading ? GRAY_100 : WHITE};
  padding: 12px 0;

  ${({ heading }) => !heading && `border-bottom: 1px solid ${WHITE_01};`}
`;

const StyledCol = styled(Col)`
  word-wrap: break-word;
`;

const IconWrapper = styled.a`
  display: block;
  width: 11px;
  margin: 0 auto;

  path {
    stroke: ${PURPLE_500}
  }
`;
