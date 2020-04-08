import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'store-library';

interface Props {
  className?: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuButton = (props: Props) => {
  const { className, isOpen, toggleOpen } = props;

  return (
    <Wrapper className={className} onClick={toggleOpen} isOpen={isOpen}>
      <Line/>
      <Line/>
      <Line/>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev.isOpen === next.isOpen;

export default React.memo(MenuButton, areEqual);

const Line = styled.div`
  width: 16px;
  height: 1.5px;
  margin-bottom: 4.5px;
  background: ${COLORS.WHITE};
  border-radius: 1px;
  transition: all .3s ease-in-out;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:last-child {
    transform-origin: 0% 100%;
    margin-bottom: 0;
  }

  &:nth-child(2) {
    transform-origin: center;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${COLORS.WHITE};
      border-radius: 1px;
      transition: all .3s ease-in-out;
    }
  }
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  ${Line} {
    ${({ isOpen }) => isOpen && `
      &:first-child {
        transform: translateY(0.6px) translateX(2.75px) rotate(45deg);
      }

      &:last-child {
        transform: translateY(-0.6px) translateX(2.75px) rotate(-45deg);
      }

      &:nth-child(2) {
        transform: rotate(135deg);

        &:after {
          transform: rotate(90deg);
        }
      }
      `
    }
  }
`;
