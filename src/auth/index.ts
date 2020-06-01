const API_URL = process.env.API_URL;

const baseLoginUrl = `${API_URL}/v1/auth/login`;
const baseLogoutUrl = `${API_URL}/v1/auth/logout`;

export const login = () => {
  if (typeof window === 'undefined') return;

  const redirectUrl = window.location.href;
  const loginUrl = `${baseLoginUrl}?redirect=${redirectUrl}`;

  window.location.href = loginUrl;
};

export const logout = () => {
  if (typeof window === 'undefined') return;

  const redirectUrl = window.location.href;
  const logoutUrl = `${baseLogoutUrl}?redirect=${redirectUrl}`;

  window.location.href = logoutUrl;
};

export const restoreAuthSession = () => {
  const currentUrl = window.location.href;
  const restoreSessionUrl = `${baseLoginUrl}?redirect=${currentUrl}&prompt=none`;

  window.location.href = restoreSessionUrl;
};
