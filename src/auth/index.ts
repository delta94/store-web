const API_URL = process.env.REACT_APP_API_URL;

const baseLoginUrl = `${API_URL}/v1/auth/login`;
const baseLogoutUrl = `${API_URL}/v1/auth/logout`;

export const login = () => {
  if(typeof window === 'undefined') return;

  const redirectUrl = window.location.href;
  const loginUrl = `${baseLoginUrl}?redirect=${redirectUrl}`;

  window.location.href = loginUrl;
};

export const logout = () => {
  if(typeof window === 'undefined') return;

  const redirectUrl = window.location.href;
  const logoutUrl = `${baseLogoutUrl}?redirect=${redirectUrl}`;

  window.location.href = logoutUrl;
};
