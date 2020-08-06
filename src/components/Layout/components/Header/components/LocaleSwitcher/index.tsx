import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Caps11, GRAY_100, WHITE } from 'store-library/src/styles';
import { LANGUAGES } from 'store-library/src/const';
import { Dropdown } from 'store-library';
import { DropdownMenuItem } from '~/styles/primitives';

interface Props {
  className?: string;
}

const LocaleSwitcher = (props: Props) => {
  const { className } = props;
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const displayedLang = activeLang.slice(0, 2);
  const toggleOpen = () => setIsOpen(!isOpen);
  const handleBlur = () => setIsOpen(false);

  const handleChangeLocale = (value: string) => () => {
    setActiveLang(value);
    i18n.changeLanguage(value);
  };

  const langTitle = (
    <ActiveLang>
      {displayedLang}
    </ActiveLang>
  );

  useEffect(() => {
    setActiveLang(i18n.language);
  }, []);

  return (
    <Wrapper
      className={className}
      onClick={toggleOpen}
      onBlur={handleBlur}
      tabIndex={1}
    >
      <Dropdown title={langTitle}>
        {Object.entries(LANGUAGES).map(([value, title]) => (
          <Language
            key={value}
            active={activeLang === value}
            onClick={handleChangeLocale(value)}
          >
            <DropdownMenuItem>
              {title}
            </DropdownMenuItem>
          </Language>
        ))}
      </Dropdown>
    </Wrapper>
  );
};

const areEqual = () => true;

export default React.memo(LocaleSwitcher, areEqual);

const Wrapper = styled.div`
  position: relative;
  color: ${GRAY_100};
  outline: none;
  cursor: pointer;
  z-index: 5;
`;

const ActiveLang = styled(Caps11)`
  display: flex;
  align-items: center;
`;

const Language = styled(Caps11) <{ active: boolean }>`
  color: ${({ active }) => active ? WHITE : 'inherit'};
`;
