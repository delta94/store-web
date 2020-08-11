const validateField = (field: string, value: string, errors: Record<string, string>) => {
  const isFieldEmpty = !value;

  if (isFieldEmpty) {
    errors[field] = 'errors.required';
    return;
  }

  const fieldETooShort = value.length < 7;
  const fieldEHazDigit = /\d/.test(value);
  const fieldEHazUpperLetter = value !== value.toLowerCase();

  if (
    fieldETooShort ||
    !fieldEHazDigit ||
    !fieldEHazUpperLetter
  ) {
    errors[field] = 'errors.password_incorrect';
  }
};

export default (values: any) => {
  const errors: Record<string, string> = {};

  const { currentPassword, newPassword, newPasswordAgain } = values;

  validateField('currentPassword', currentPassword, errors);
  validateField('newPassword', newPassword, errors);
  validateField('newPasswordAgain', newPasswordAgain, errors);

  if (newPasswordAgain !== newPassword) {
    errors.newPasswordAgain = 'errors.passwords_dont_match';
  }

  return errors;
};
