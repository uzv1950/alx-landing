/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpClient from '@/utils/httpClient';
import qs from 'qs';
import { globalMetadataAdapter } from '../adapters/global';
import { TGlobalData } from '../types';

const dumpData = {
  seo: {
    siteTitle: 'Altabix',
    siteDescription:
      'Altabix: Liderando en desarrollo de software y diseño UX/UI en México. Innova con nosotros, ¡ponte en contacto!',
    siteFaviconUrl: 'http://localhost:4000/uploads/favicon_72dab34c65.ico',
    openGraph: {
      title: 'Altabix Redes sociales',
      description:
        'Altabix: Liderando en desarrollo de software y diseño UX/UI en México. Innova con nosotros, ¡ponte en contacto!',
      image: 'http://localhost:4000/uploads/645e5aeb7d368b5884321667_bluepixel_45e993911d.jpeg'
    }
  },
  locales: [
    {
      id: '3',
      name: 'Español',
      locale: 'es'
    },
    {
      id: '4',
      name: 'Ingles',
      locale: 'en'
    }
  ]
};

const getGlobalDataService = async (locale = 'es', config?: Omit<RequestInit, 'body'>): Promise<TGlobalData> => {
  // const query = `locale=${locale}&populate[0]=SEO.favicon&populate[1]=SEO.shareImage&populate[2]=Locales`;
  // const path = qs.parse(query);
  // const { data, error } = await httpClient.GET('/global', {
  //   params: {
  //     query: path
  //   },
  //   ...config
  // });
  // if (error) throw new Error(error.error.message);
  // return globalMetadataAdapter(data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dumpData as TGlobalData);
    }, 300);
  });
};

export default getGlobalDataService;
