import httpClient from '@/utils/httpClient';
import qs from 'qs';
import { globalMetadataAdapter } from '../adapters/global';

const getGlobalDataService = async (locale = 'es', config?: Omit<RequestInit, 'body'>) => {
  const query = `locale=${locale}&populate[0]=SEO.favicon&populate[1]=SEO.shareImage&populate[2]=Locales`;
  const path = qs.parse(query);

  const { data, error } = await httpClient.GET('/global', {
    params: {
      query: path
    },
    ...config
  });
  if (error) throw new Error(error.error.message);

  return globalMetadataAdapter(data);
};

export default getGlobalDataService;
