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
export const HAS_SESSION = 'has_session';

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

export const restoreSessionOnEnter = () => {
  if (typeof window === 'undefined') return;

  const redirectUrl = window.location.href;
  const restoreSessionUrl = `${baseLoginUrl}?redirect=${redirectUrl}&prompt=none`;

  window.location.href = restoreSessionUrl;
};

const createAuthFrame = () => {
  const redirectUrl = window.location.origin;
  const restoreSessionUrl = `${baseLoginUrl}?redirect=${redirectUrl}/auth-restore&prompt=none`;
  const authFrame = document.createElement('iframe');
  authFrame.width = '0px';
  authFrame.height = '0px';
  authFrame.src = restoreSessionUrl;

  return authFrame;
};

export const restoreAuthSession = async () => {
  const authRestorePromise = new Promise(resolve => {
    if (isRefreshing) {
      pendingRequests.push(() => resolve(false));
      return;
    }

    isRefreshing = true;
    const authFrame = createAuthFrame();

    document.body.append(authFrame);

    const checkMessage = (event: MessageEvent) => {
      const { data } = event;
      const { error, restorePassed } = data;

      if (!restorePassed) return;

      authFrame.remove();

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
