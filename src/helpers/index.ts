export let qu: any;
if (typeof window !== 'undefined') qu = (window as any).qu;

export const isLauncher = process.env.REACT_APP_MODE === 'electron';

export const getUrlParameter = (name: string) => {
  if (typeof window === 'undefined') return null;

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
