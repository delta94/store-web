export const isServerSide = typeof window === 'undefined';

export let qu: any;
if (!isServerSide) qu = (window as any).qu;

export const getUrlParameter = (name: string) => {
  if (isServerSide) return null;

  const search = window.location.search;
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

export const humanStorageSize = (bytes: number) => {
  let unitIndex = 0;

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024;
    unitIndex++;
  }

  return `${bytes.toFixed(1)} ${units[unitIndex]}`;
};

export const megabytesToSize = (megabytes: number) => {
  const bytes = megabytes * 1024 * 1024;
  return humanStorageSize(bytes);
};

export const getCookie = (name: string) => {
  if (isServerSide) return;

  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string) => {
  if (isServerSide) return;

  document.cookie = `${name}=${value}`;
};

export const detectBot = (userAgent = '') => {
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
};

export const capitalize = (word: string) => {
  if (!word) return word;

  return word[0].toUpperCase() + word.slice(1);
};

export const uncapitalize = (word: string) => {
  if (!word) return word;

  return word[0].toLowerCase() + word.slice(1);
};
