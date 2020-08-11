import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Grid } from 'store-library';
import { UserContext } from '~/contexts';

import {
  ProfileWrapper,
  ProfileTitle,
  ProfileSubtitle,
  ProfileLabel,
} from '../styles';
import ChangePasswordForm from './components/ChangePasswordForm';

const { Col, Row } = Grid;

interface Props {
  className?: string;
}

const SignInAndSecurity = (props: Props) => {
  const { className } = props;
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  
  return (
    <Wrapper className={className}>
      <ProfileWrapper>
        <ProfileTitle>
          {t('profile.sign_in_security.title')}
        </ProfileTitle>
        <ProfileSubtitle>
          {t('profile.sign_in_security.description')}
        </ProfileSubtitle>
        <Row gap="16px">
          <Col xs={12} sm={6}>
            <ProfileLabel>
              {t('profile.sign_in_security.username')}
            </ProfileLabel>
            <ProfileSubtitle>
              {user?.username}
            </ProfileSubtitle>
          </Col>
          <Col xs={12} md={6}>
            <ProfileLabel>
              {t('profile.sign_in_security.email')}
            </ProfileLabel>
            <ProfileSubtitle>
              {user?.email}
            </ProfileSubtitle>
          </Col>
        </Row>
        <ProfileTitle>
          {t('profile.change_password.title')}
        </ProfileTitle>
        <ProfileSubtitle>
          {t('profile.change_password.description')}
        </ProfileSubtitle>
        <ChangePasswordForm />
      </ProfileWrapper>
      <ProfileWrapper>
        <ProfileTitle>
          {t('profile.two_factor_authorization.title')}
        </ProfileTitle>
        <ProfileSubtitle>
          {t('profile.two_factor_authorization.description')}
        </ProfileSubtitle>
      </ProfileWrapper>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(SignInAndSecurity, areEqual);

const Wrapper = styled.div``;
