import { useCallback } from 'react';
import getGlobalService from '../services/getSiteMetadata.service';
import { globalMetadataAdapter } from '../adapters/global';

const useGlobalService = () => {
  const getGlobalMetadata = useCallback(async (query: string = '') => {
    const res = await getGlobalService(query);
    return globalMetadataAdapter(res);
  }, []);

  return {
    getGlobalMetadata
  };
};

export default useGlobalService;
