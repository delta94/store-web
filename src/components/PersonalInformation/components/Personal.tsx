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
import { Grid } from 'store-library';
import DateSelect from '~/components/DateSelect';

const { Col, Row } = Grid;
const formFields = [
  'firstName',
  'lastName',
  // 'phone',
  'language',
  'currency',
  'address1',
  'address2',
  'city',
  'zip',
  'country',
  'state',
];

const userLanguages = ['English', 'Spanish', 'Russian'];
const currencies = ['USD', 'EUR', 'RUB', 'BTC'];

interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  birthdate: string;
  language: string;
  currency: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  country: string;
}

interface Props {
  className?: string;
  profile: Profile;
  onUpdateProfile: (user: Record<string, any>) => void;
}

const Personal = (props: Props) => {
  const { className, profile, onUpdateProfile } = props;
  const {
    firstName,
    lastName,
    language,
    address1,
    address2,
    birthdate: initBirthdate,
    city,
    country,
    state,
    currency,
    phone,
    zip,
  } = profile;
  const { t } = useTranslation();
  const [birthdate, setBirrthdate] = useState(
    initBirthdate ? new Date(initBirthdate.slice(0, 10)) : new Date(),
  );

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: Record<string, any> = { birthdate: birthdate.toISOString(), photoURL: '' };

    formFields.forEach(field => {
      const value = event.currentTarget[field]?.value || '';

      if (!value) return;

      user[field] = value;
    });

    onUpdateProfile(user);
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
            <ProfileInput name="firstName" defaultValue={firstName} />
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.last_name')}</ProfileLabel>
            <ProfileInput name="lastName" defaultValue={lastName} />
          </Col>
        </Row>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.phone_number')}</ProfileLabel>
            <ProfileInput name="phone" defaultValue={phone} />
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
            <ProfileSelect name="language" defaultValue={language}>
              {userLanguages.map(lang => (
                <option key={lang}>{lang}</option>
              ))}
            </ProfileSelect>
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.preferred_currency')}</ProfileLabel>
            <ProfileSelect name="currency" defaultValue={currency}>
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
            <ProfileInput name="address1" defaultValue={address1} />
          </Col>
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.address_line_2')}</ProfileLabel>
            <ProfileInput name="address2" defaultValue={address2} />
          </Col>
        </Row>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.city')}</ProfileLabel>
            <ProfileInput name="city" defaultValue={city} />
          </Col>
          <Col xs={6} sm={3}>
            <ProfileLabel>{t('profile.personal.region')}</ProfileLabel>
            <ProfileInput name="state" defaultValue={state} />
          </Col>
          <Col xs={6} sm={3}>
            <ProfileLabel>{t('profile.personal.postal_code')}</ProfileLabel>
            <ProfileInput name="zip" defaultValue={zip} />
          </Col>
        </Row>
        <Row gap="16px">
          <Col sm={6}>
            <ProfileLabel>{t('profile.personal.country')}</ProfileLabel>
            <ProfileInput name="country" defaultValue={country} />
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
