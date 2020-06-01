const API_URL = process.env.API_URL;

const baseLoginUrl = `${API_URL}/v1/auth/login`;
const baseLogoutUrl = `${API_URL}/v1/auth/logout`;

export const LOGIN_REQUIRED = 'login_required';

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

export const restoreAuthSession = async (win = window) => {
  const authRestorePromise = new Promise(resolve => {
    const currentUrl = win.location.href;
    const restoreSessionUrl = `${baseLoginUrl}?redirect=${currentUrl}&prompt=none`;
    const authFrame = document.createElement('iframe');
    authFrame.width = '100px';
    authFrame.height = '100px';
    authFrame.src = restoreSessionUrl;
    document.body.append(authFrame);

    const checkMessage = (event: MessageEvent) => {
      const { data } = event;

      resolve(data === LOGIN_REQUIRED);

      window.removeEventListener('message', checkMessage);
    };

    window.addEventListener('message', checkMessage);
  });

  const loginRequired = await authRestorePromise;

  if (loginRequired) login();
};
