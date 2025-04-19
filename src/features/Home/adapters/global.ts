import { components } from '@/types/api';
import { TGlobalData } from '../types';
import getImage from '@/utils/getImage';

export const globalMetadataAdapter = (response: components['schemas']['GlobalResponse']): TGlobalData => {
  return {
    seo: {
      siteTitle: response.data?.SEO?.metaTitle || '',
      siteDescription: response.data?.SEO?.ogDescription || '',
      siteFaviconUrl: getImage(response.data?.SEO?.favicon?.url || ''),
      openGraph: {
        title: response.data?.SEO?.ogTitle || '',
        description: response.data?.SEO?.ogDescription || '',
        image: getImage(response.data?.SEO?.shareImage?.url || '')
      }
    },
    locales:
      response.data?.Locales?.map(locale => ({
        id: locale.id?.toString() || '',
        name: locale.label || '',
        locale: locale.value || ''
      })) || []
  };
};
