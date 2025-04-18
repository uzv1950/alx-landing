import { components } from '@/types/api';
import { TGlobalMetadata } from '../types';

export const globalMetadataAdapter = (response: components['schemas']['GlobalResponse']): TGlobalMetadata => {
  return {
    siteName: response.data?.siteName || '',
    siteDescription: response.data?.siteDescription || '',
    siteFaviconUrl: `${process.env.NEXT_PUBLIC_FILE_URL}${response.data?.favicon?.url}`,
    metadata: {
      title: response.data?.defaultSeo?.metaTitle || '',
      description: response.data?.defaultSeo?.metaDescription || ''
    }
  };
};
