import React from 'react';
import styled from 'styled-components';
import { Caption13, WHITE, GRAY_100 } from 'store-library/src/styles';

interface Props {
  className?: string;
  active: boolean;
  title: string;
  url: string;
  as?: string;
  onClick: (url: string, as?: string) => void;
}

const GameLink = (props: Props) => {
  const { className, title, active, as, url, onClick } = props;

  const handleClick = () => {
    onClick(url, as);
  };

  return (
    <Wrapper className={className} active={active} onClick={handleClick}>
      {title}
    </Wrapper>
  );
};

export default React.memo(GameLink);

const Wrapper = styled(Caption13)<{ active: boolean }>`
  color: ${({ active }) => active ? WHITE : GRAY_100};
  ${({ active }) => !active && 'cursor: pointer;'}
  text-decoration: none;
`;
