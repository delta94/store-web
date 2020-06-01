const API_URL = process.env.API_URL;

const baseLoginUrl = `${API_URL}/v1/auth/login`;
const baseLogoutUrl = `${API_URL}/v1/auth/logout`;

let isRefreshing = false;
let pendingRequests: (() => void)[] = [];

const resolvePendingRequests = () => {
  pendingRequests.map(callback => callback());
  pendingRequests = [];
};

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

export const restoreAuthSession = async () => {
  const authRestorePromise = new Promise(resolve => {
    if (isRefreshing) {
      pendingRequests.push(() => resolve(false));
      return;
    }

    isRefreshing = true;
    const redirectUrl = window.location.host;
    const restoreSessionUrl = `${baseLoginUrl}?redirect=${redirectUrl}/auth-restore&prompt=none`;
    const authFrame = document.createElement('iframe');
    authFrame.width = '100px';
    authFrame.height = '100px';
    authFrame.src = restoreSessionUrl;
    document.body.append(authFrame);

    const checkMessage = (event: MessageEvent) => {
      const { data } = event;
      const { error, restorePassed } = data;

      if (!restorePassed) return;

      resolve(error === LOGIN_REQUIRED);
      resolvePendingRequests();

      isRefreshing = false;

      window.removeEventListener('message', checkMessage);
    };

    window.addEventListener('message', checkMessage);
  });

  const loginRequired = await authRestorePromise;

  if (loginRequired) login();
};
