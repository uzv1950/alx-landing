export type TPaths = 'start' | 'page404' | 'page500';

export const PATH_PAGE: Record<TPaths, string> = {
  start: '/',
  page404: '/404',
  page500: '/500'
};
