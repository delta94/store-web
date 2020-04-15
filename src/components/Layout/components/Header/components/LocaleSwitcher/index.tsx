import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Caps11, COLORS, ArrowDownIcon, LANGUAGES } from 'store-library';

interface Props {
  className?: string;
}

const { GRAY_100, GRAY_800, WHITE } = COLORS;

const LocaleSwitcher = (props: Props) => {
  const { className } = props;
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);
  const displayedLang = activeLang.slice(0, 2);
  const toggleOpen = () => setIsOpen(!isOpen);
  const handleBlur = () => setIsOpen(false);

  const handleChangeLocale = (value: string) => () => {
    setActiveLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <Wrapper 
      className={className}
      onClick={toggleOpen}
      onBlur={handleBlur}
      tabIndex={1}  
    >
      <ActiveLang>
        {displayedLang}
        <StyledIcon open={isOpen} />  
      </ActiveLang>
      <Languages isOpen={isOpen}>
        {Object.entries(LANGUAGES).map(([value, title]) => (
          <Language 
            key={value}
            active={activeLang === value}
            onClick={handleChangeLocale(value)}
          >
            {title}
          </Language>
        ))}
      </Languages>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(LocaleSwitcher, areEqual);

const Wrapper = styled.div`
  position: relative;
  color: ${GRAY_100};
  outline: none;
  cursor: pointer;
`;

const ActiveLang = styled(Caps11)`
  display: flex;
  align-items: center;
`;

const Languages = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 50%;
  padding: 8px;
  background-color: ${GRAY_800};
  border-radius: 6px;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  transition: all .3s ease-in-out;
`;

const Language = styled(Caps11)<{ active: boolean }>`
  display: block;
  color: ${({ active }) => active ? WHITE : 'inherit'};
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledIcon = styled(ArrowDownIcon)<{ open: boolean }>`
  transition: transform .3s ease-in-out;
  margin: 4px;
  ${({ isOpen }) => isOpen && 'transform: rotateX(180deg);'}
`;
