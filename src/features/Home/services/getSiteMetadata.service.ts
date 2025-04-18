import httpClient from '@/utils/httpClient';
import qs from 'qs';

const getSiteMetadataService = async (query: string = '', config?: Omit<RequestInit, 'body'>) => {
  const path = qs.parse(query);

  const { data, error } = await httpClient.GET('/global', {
    params: {
      query: path
    },
    ...config
  });
  if (error) throw new Error(error.error.message);

  return data;
};

export default getSiteMetadataService;
