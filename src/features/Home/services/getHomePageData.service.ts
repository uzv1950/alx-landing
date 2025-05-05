/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import httpClient from '@/utils/httpClient';
import qs from 'qs';
import { homePageDataAdapter } from '../adapters/home';
import { THomeData } from '../types';

const dumpData = {
  hero: {
    title: 'Innovación con experiencia',
    description:
      'En Altabix llevamos más de 20 años desarrollando soluciones para el sector hotelero. Hoy, conectamos esa trayectoria con innovación real y alianzas estratégicas para ayudarte a crecer, operar mejor y mirar al futuro sin complicaciones.'
  },
  aboutUs: {
    title: '¿Quiénes somos?',
    data: {
      self: {
        title: 'Altabix',
        description:
          'Es una compañía mexicana dedicada al desarrollo y comercialización de tecnología para el sector turístico, principalmente el hotelero. \n\nSurge como una necesidad de Norte 19 (antes Hoteles City Express) de contar con herramientas que proporcionen facilidad y eficiencia en la comercialización, la operación y el control financiero.'
      },
      mission: {
        title: 'Misión',
        description:
          'Ofrecemos soluciones tecnológicas innovadoras para la industria turística, diseñadas para optimizar los márgenes comerciales y operativos, mejorar la gestión de inventarios y proporcionar información segura, oportuna y veraz para un control y toma de decisiones efectivos. Nos comprometemos a la excelencia, la integridad y la satisfacción de nuestros clientes, aportando un valor significativo al mercado global.'
      },
      vision: {
        title: 'Visión',
        description:
          'Ser la empresa líder global en soluciones tecnológicas para la industria turística, reconocidos por nuestra capacidad de innovación, integridad y compromiso con nuestros clientes. \nAspiramos a transformar la gestión hotelera con herramientas avanzadas para expandir y controlar eficientemente los negocios del sector turístico.'
      }
    }
  },
  values: {
    title: 'Nuestros valores',
    data: [
      {
        id: '29',
        title: 'Excelencia:',
        description:
          'Compromiso con la calidad en todos los aspectos de los productos y servicios, asegurando una experiencia superior para los clientes.'
      },
      {
        id: '30',
        title: 'Innovación:',
        description:
          'Fomentar una cultura de creatividad y mejora continua, desarrollando soluciones tecnológicas de vanguardia que impulsen el crecimiento y la competitividad.'
      }
    ]
  },
  history: {
    title: 'Nuestra historia',
    data: []
  },
  stackup: {
    title: 'Stackup',
    data: {
      title: 'Stackup',
      description: 'Stackup',
      image: ''
    }
  },
  certifications: {
    title: 'Certificaciones',
    data: []
  },
  sponsors: {
    title: 'Patrocinadores',
    data: []
  }
};

const getHomePageDataService = async (locale = 'es', config?: Omit<RequestInit, 'body'>): Promise<THomeData> => {
  // const populate: Record<string, string> = {
  //   About: 'populate[0]=About&populate[1]=About.CardAltabix&populate[2]=About.CardMission&populate[3]=About.CardVision',
  //   OurValues: 'populate[4]=OurValues&populate[5]=OurValues.values',
  //   Certifications: 'populate[6]=Certifications&populate[7]=Certifications.certifications'
  // };
  // const query = `locale=${locale}&${Object.entries(populate)
  //   .map(([key, value]) => `${key}=${value}`)
  //   .join('&')}`;
  // const path = qs.parse(query);

  // const { data, error } = await httpClient.GET('/home-page', {
  //   params: {
  //     query: path
  //   },
  //   ...config
  // });
  // if (error) throw new Error(error.error.message);

  // return homePageDataAdapter(data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dumpData as THomeData);
    }, 300);
  });
};

export default getHomePageDataService;
