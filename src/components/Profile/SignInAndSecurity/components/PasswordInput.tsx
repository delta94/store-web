import React, { HTMLProps, useState } from 'react';
import styled from 'styled-components';
import { EyeThroughIcon, EyeIcon } from 'store-library/src/icons';

import { profileInputStyles } from '../../styles';

interface Props extends HTMLProps<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

const PasswordInput = (props: Props) => {
  const { className, error, ...rest } = props;
  const [type, setType] = useState<'text' | 'password'>('password');
  const toggleType = () => setType(type => type === 'password' ? 'text' : 'password');

  return (
    <Wrapper className={className} error={error}>
      <input
        {...rest}
        type={type}
      />
      <ToggleType onClick={toggleType}>
        {type === 'password' ? <EyeThroughIcon /> : <EyeIcon />}
      </ToggleType>
    </Wrapper>
  );
};

export default React.memo(PasswordInput);

const Wrapper = styled.div<{ error?: boolean }>`
  position: relative;

  input {
    ${profileInputStyles}
    padding-right: 28px;
    margin-bottom: 0;
  }
`;

const ToggleType = styled.span`
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  display: flex;

  svg {
    margin: auto;
    width: 16px;
  }
`;
