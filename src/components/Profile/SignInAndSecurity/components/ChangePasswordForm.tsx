import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import { Grid, Button } from 'store-library';
import { CHANGE_PASSWORD } from 'store-library/src/api';
import { useHideableError } from 'store-library/src/hooks';
import { PURPLE_500, RED_500, WHITE, ORANGE_500 } from 'store-library/src/styles';
import { getTranslationTitleFromError } from 'store-library/src/helpers';

import PasswordInput from '../components/PasswordInput';
import validate from './validate';
import { ProfileInput, ProfileLabel } from '../../styles';

const { Col, Row } = Grid;

interface Props {
  className?: string;
}

const ChangePasswordForm = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [formError, setFormError] = useHideableError(3000);
  const [updatePasswort, { error, loading }] = useMutation(CHANGE_PASSWORD);

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordAgain: '',
    },
    onSubmit: async values => {
      const { currentPassword, newPassword } = values;

      updatePasswort({
        variables: {
          old: currentPassword,
          new: newPassword,
        },
      });
    },
    validate,
  });

  useEffect(() => {
    if (!error) return;

    const errorTitle = getTranslationTitleFromError(error.message) || 'errors.unknown_error';
    setFormError(t(errorTitle));
  }, [error]);

  return (
    <Wrapper className={className} onSubmit={formik.handleSubmit}>
      {!!formError && (
        <FormError>{formError}</FormError>
      )}
      <Row gap="16px">
        <Col xs={12} sm={6}>
          <ProfileLabel>
            {t('profile.change_password.current_password')}
            {' '}
            <PyrpleText>*</PyrpleText>
          </ProfileLabel>
          <StyledInput
            type="password"
            name="currentPassword"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.currentPassword && !!formik.errors.currentPassword}
          />
          <ErrorMessage>
            {
              formik.touched.currentPassword && 
              !!formik.errors.currentPassword && 
              t(formik.errors.currentPassword)
            }
          </ErrorMessage>
        </Col>
        <Col xs={12} sm={6}></Col>
      </Row>
      <Row gap="16px">
        <Col xs={12} sm={6}>
          <ProfileLabel>
            {t('profile.change_password.new_password')}
            {' '}
            <PyrpleText>*</PyrpleText>
          </ProfileLabel>
          <PasswordInput
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newPassword && !!formik.errors.newPassword}
          />
          <ErrorMessage>
            {
              formik.touched.newPassword &&
              !!formik.errors.newPassword &&
              t(formik.errors.newPassword)
            }
          </ErrorMessage>
        </Col>
        <Col xs={12} sm={6}></Col>
      </Row>
      <Row gap="16px">
        <Col xs={12} sm={6}>
          <ProfileLabel>
            {t('profile.change_password.new_password_again')}
            {' '}
            <PyrpleText>*</PyrpleText>
          </ProfileLabel>
          <PasswordInput
            name="newPasswordAgain"
            value={formik.values.newPasswordAgain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              (formik.touched.newPasswordAgain || formik.touched.newPassword) && 
              !!formik.errors.newPasswordAgain
            }
          />
          <ErrorMessage>
            {
              (formik.touched.newPasswordAgain || formik.touched.newPassword) &&
              !!formik.errors.newPasswordAgain &&
              t(formik.errors.newPasswordAgain)
            }
          </ErrorMessage>
        </Col>
        <Col xs={12} sm={6}></Col>
      </Row>
      <Button
        type="submit"
        disabled={!formik.isValid || !formik.touched.currentPassword}
        loading={loading}
      >
        {t('profile.change_password.button_text')}
      </Button>
    </Wrapper>
  );
};

export default React.memo(ChangePasswordForm);

const Wrapper = styled.form``;

const StyledInput = styled(ProfileInput)`
  margin-bottom: 0;
`;

const PyrpleText = styled.span`
  color: ${PURPLE_500};
`;

const ErrorMessage = styled.div`
  height: 24px;
  color: ${RED_500};
  font-size: 12.5px;
  line-height: 18px;
  letter-spacing: 0.01em;
`;

const FormError = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: ${ORANGE_500};
  color: ${WHITE};
  margin-bottom: 24px;
`;
