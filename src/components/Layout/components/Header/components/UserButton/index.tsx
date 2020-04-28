import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { UserContext } from '~/contexts';
import { Button, WHITE, GRAY_800, Caps10Bold } from 'store-library';

interface Props {
  className?: string;
}

const UserButton = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    loading,
    onLogin,
    onLogout,
  } = useContext(UserContext);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  if (!user) return <StyledButton loading={loading} onClick={onLogin}>{t('labels.signin')}</StyledButton>;

  return (
    <Wrapper
      className={className}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Caps10Bold>
        {user?.email || 'anonymous'}
      </Caps10Bold>
      <UserMenu isOpen={isOpen}>
        <Caps10Bold onClick={onLogout}>
          {t('labels.logout')}
        </Caps10Bold>
      </UserMenu>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(UserButton, areEqual);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${WHITE};
  outline: none;
  cursor: pointer;
  margin-right: 20px;
`;

const StyledButton = styled(Button)`
  margin: 0 20px;
`;

const UserMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0px;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  padding: 16px;
  background-color: ${GRAY_800};
  border-radius: 6px;
  transition: all .3s ease-in-out;
  z-index: 10;
`;
