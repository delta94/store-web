import React from 'react';

import styled from 'styled-components';
import { BACKGROUND_DARK } from '~/styles/colors';

interface Props {
  className?: string;
}

const Footer = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      Footer
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
    padding: 80px 45px;
    background-color:${BACKGROUND_DARK};
    margin-top: auto;
    color: white;
`;
