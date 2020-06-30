import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Grid } from 'store-library';

import { ProfileSelect } from '../Profile/styles';

const { Row, Col } = Grid;

interface Props {
  className?: string;
  value: Date;
  onChange: (newValue: Date) => void;
}

const DateSelect = (props: Props) => {
  const { className, value, onChange } = props;
  const { t } = useTranslation();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const day = value.getDate();
  const month = value.getMonth();
  const year = value.getFullYear();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    const { year: newYear, month: newMonth, day: newDay }: Record<string, any> = {
      year,
      month,
      day,
      [name]: value,
    };

    const newValue = new Date(newYear, newMonth, newDay);
    onChange(newValue < currentDate ? newValue : currentDate);
  };

  return (
    <Wrapper className={className}>
      <Row>
        <Col xs={3}>
          <ProfileSelect
            name="day"
            value={day}
            onChange={handleChange}
          >
            {Array(31).fill(0).map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </ProfileSelect>
        </Col>
        <Col xs={6}>
          <ProfileSelect
            name="month"
            value={month}
            onChange={handleChange}
          >
            {Array(12).fill(0).map((_, i) => (
              <option key={i} value={i}>{t(`profile.months.${i}`)}</option>
            ))}
          </ProfileSelect>
        </Col>
        <Col xs={3}>
          <ProfileSelect
            name="year"
            value={year}
            onChange={handleChange}
          >
            {Array(90).fill(0).map((_, i) => (
              <option key={i}>{currentYear - i}</option>
            ))}
          </ProfileSelect>
        </Col>
      </Row>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DateSelect, areEqual);

const Wrapper = styled.div`
  
`;
