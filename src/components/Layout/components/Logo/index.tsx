import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LogoIcon } from 'store-library/src/icons';
import { Caps11Bold, WHITE } from 'store-library/src/styles';

interface Props {
  className?: string;
}

const Logo = (props: Props) => {
  const { className } = props;
  const name = process.env.STORE_NAME || '';

  return (
    <Link href="/">
      <Wrapper className={className}>
        <LogoIcon />
        <Name>{name}</Name>
      </Wrapper>
    </Link>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Logo, areEqual);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Name = styled(Caps11Bold)`
  color: ${WHITE};
  margin-left: 5px;
`;
