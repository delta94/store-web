import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GRAY_800, H2Bold, WHITE } from 'store-library';
import { InstallLauncherIcon, CreateAccountIcon, StartUseLauncherIcon } from 'store-library/src/icons';

interface Props {
  className?: string;
  authorized: boolean;
}

const allInstructions = [
  {
    title: 'install_launcher',
    Icon: InstallLauncherIcon,
  },
  {
    title: 'create_account',
    Icon: CreateAccountIcon,
  },
  {
    title: 'start_use_launcher',
    Icon: StartUseLauncherIcon,
  },
];

const Insructions = (props: Props) => {
  const { className, authorized } = props;
  const { t } = useTranslation();
  const instructions = !authorized
    ? allInstructions
    : allInstructions.filter(({ title }) => title !== 'create_account');

  return (
    <Wrapper className={className}>
      {instructions.map(({ title, Icon }) => (
        <Instruction key={title}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Title>
            {t(`labels.${title}`)}
          </Title>
        </Instruction>
      ))}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Insructions, areEqual);

const Wrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  background: ${GRAY_800};
  width: 80px;
  height: 80px;
  border-radius: 24px;
  margin-bottom: 16px;

  svg {
    margin: auto;
  }
`;

const Title = styled(H2Bold)`
  color: ${WHITE};
`;

const Instruction = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 224px;

  :last-child {
    margin-right: 0;
  }
`;
