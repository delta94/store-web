import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { PURPLE_500, GRAY_100 } from 'store-library/src/styles';
import { LANGUAGES } from 'store-library/src/const';
import { ArrowLeftIcon } from 'store-library/src/icons';

import { MenuWrapper, MenuItem, IconWrapper, Divider } from '../../styles';

interface Props {
  className?: string;
  onBack: () => void;
}

const LanguagesMenu = (props: Props) => {
  const { className, onBack } = props;
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const handleChangeLocale = (value: string) => () => {
    setActiveLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <MenuWrapper className={className}>
      <MenuItem onClick={onBack}>
        <IconWrapper>
          <ArrowLeftIcon />
        </IconWrapper>
        {t('labels.back')}
      </MenuItem>

      <Divider />
      {Object.entries(LANGUAGES).map(([value, title]) => (
        <MenuItem
          key={value}
          active={value === activeLang}
          onClick={handleChangeLocale(value)}
        >
          <Indicator active={value === activeLang} />
          {title}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

const areEqual = () => true;

export default React.memo(LanguagesMenu, areEqual);

const Indicator = styled.span<{ active: boolean }>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ active }) => active ? PURPLE_500 : GRAY_100};
  border-radius: 8px;
  margin-right: 10px;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${({ active }) => active ? PURPLE_500 : 'transparent'};
    border-radius: 4px;
  }
`;
