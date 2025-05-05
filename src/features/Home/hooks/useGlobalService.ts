import { useCallback } from 'react';
import getGlobalService from '../services/getGlobalData.service';

const useGlobalService = () => {
  const getGlobalMetadata = useCallback(async (query = '') => {
    const res = await getGlobalService(query);
    return res;
  }, []);

  return {
    getGlobalMetadata
  };
};

export default useGlobalService;
