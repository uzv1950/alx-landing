/* eslint-disable max-len */
import httpClient from '@/utils/httpClient';
import qs from 'qs';
import { homePageDataAdapter } from '../adapters/home';

const getHomePageDataService = async (locale = 'es', config?: Omit<RequestInit, 'body'>) => {
  const populate: Record<string, string> = {
    About: 'populate[0]=About&populate[1]=About.CardAltabix&populate[2]=About.CardMission&populate[3]=About.CardVision',
    OurValues: 'populate[4]=OurValues&populate[5]=OurValues.values',
    Certifications: 'populate[6]=Certifications&populate[7]=Certifications.certifications'
  };
  const query = `locale=${locale}&${Object.entries(populate)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
  const path = qs.parse(query);

  const { data, error } = await httpClient.GET('/home-page', {
    params: {
      query: path
    },
    ...config
  });
  if (error) throw new Error(error.error.message);

  return homePageDataAdapter(data);
};

export default getHomePageDataService;
