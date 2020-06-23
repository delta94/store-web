import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ProfileWrapper,
  ProfileTitle,
  ProfileSubtitle,
  ProfileLabel,
  ProfileInput,
  ProfileSelect,
  ProfileDivider,
  ProfileButton,
} from '~/styles/primitives';
import { GET_PERSONAL_INFORMATION, UPDATE_PERSONAL_INFORMATION } from 'store-library/src/api';
import { Grid } from 'store-library';
import DateSelect from '~/components/DateSelect';
import { useQuery, useMutation } from '@apollo/react-hooks';

const { Col, Row } = Grid;
const formFields = [
  'firstName',
  'lastName',
  'phone',
  'language',
  'currency',
  'address1',
  'address2',
  'city',
  'zip',
  'country',
];

const userLanguages = ['English', 'Spanish', 'Russian'];
const currencies = ['USD', 'EUR', 'RUB', 'BTC'];

interface Props {
  className?: string;
}

const Personal = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [birthdate, setBirrthdate] = useState(new Date());
  const { data, loading, error, refetch } = useQuery(GET_PERSONAL_INFORMATION);
  const [updateProfile] = useMutation(UPDATE_PERSONAL_INFORMATION);
  console.log(data);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const variables: Record<string, any> = { date: birthdate };

    formFields.forEach(field => {
      const value = event.currentTarget[field]?.value;

      if (!value) return;

      variables[field] = value;
    });

    console.log(variables);
  };

  return (
    <ProfileWrapper className={className}>
      <ProfileTitle>
        {t('profile.personal.title')}
      </ProfileTitle>
      <ProfileSubtitle>
        {t('profile.personal.description')}
      </ProfileSubtitle>
      <form onSubmit={handleFormSubmit}>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.first_name')}</ProfileLabel>
            <ProfileInput name="firstName" required />
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.last_name')}</ProfileLabel>
            <ProfileInput name="lastName" required />
          </Col>
        </Row>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.phone_number')}</ProfileLabel>
            <ProfileInput name="phone" />
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.birthday')}</ProfileLabel>
            <DateSelect value={birthdate} onChange={setBirrthdate} />
          </Col>
        </Row>
        <ProfileDivider />
        <ProfileTitle>
          {t('profile.personal.language_and_currency')}
        </ProfileTitle>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.preferred_language')}</ProfileLabel>
            <ProfileSelect name="language">
              {userLanguages.map(lang => (
                <option key={lang}>{lang}</option>
              ))}
            </ProfileSelect>
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.preferred_currency')}</ProfileLabel>
            <ProfileSelect name="currency">
              {currencies.map(currency => (
                <option key={currency}>{currency}</option>
              ))}
            </ProfileSelect>
          </Col>
        </Row>
        <ProfileDivider />
        <ProfileTitle>
          {t('profile.personal.address')}
        </ProfileTitle>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.address_line_1')}</ProfileLabel>
            <ProfileInput name="address1" />
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.address_line_2')}</ProfileLabel>
            <ProfileInput name="address2" />
          </Col>
        </Row>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.city')}</ProfileLabel>
            <ProfileInput name="city" />
          </Col>
          <Col xs={6} sm={3}>
            <ProfileLabel>{t('profile.personal.region')}</ProfileLabel>
            <ProfileInput name="state" />
          </Col>
          <Col xs={6} sm={3}>
            <ProfileLabel>{t('profile.personal.postal_code')}</ProfileLabel>
            <ProfileInput name="zip" />
          </Col>
        </Row>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.country')}</ProfileLabel>
            <ProfileInput name="country" />
          </Col>
        </Row>
        <ProfileButton>
          {t('profile.personal.save_changes')}
        </ProfileButton>
      </form>
    </ProfileWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Personal, areEqual);
