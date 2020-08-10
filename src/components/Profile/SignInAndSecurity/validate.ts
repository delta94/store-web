export default (values: any) => {
  const errors: Record<string, string> = {};
  const validateField = (field: string) => {
    const isFieldEmpty = !field;
  
    if (isFieldEmpty) {
      errors[field] = 'required';
      return;
    }
  
    const isFieldETooShort = field.length < 7;
    const isFieldEHazDigits = /\d/.test(field);
    const isFieldEHazUpperLetter = field !== field.toLowerCase();
  
    if (
      isFieldETooShort ||
      !isFieldEHazDigits ||
      !isFieldEHazUpperLetter
    ) {
      errors[field] = 'password_incorrect';
    }
  };

  const { currentPassword, newPassword, newPasswordAgain } = values;

  validateField(currentPassword);
  validateField(newPassword);
  validateField(newPasswordAgain);

  if (newPasswordAgain !== newPassword) {
    errors.newPasswordAgain = 'passwords_dont_match';
  }

  return errors;
};
