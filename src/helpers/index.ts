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
