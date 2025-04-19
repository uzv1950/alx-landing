/* eslint-disable max-len */
import { components } from '@/types/api';
import { THomeData } from '../types';

export const homePageDataAdapter = (response: components['schemas']['HomePageResponse']): THomeData => {
  const { data } = response;

  return {
    hero: {
      title: 'Innovación con experiencia',
      description:
        'En Altabix llevamos más de 20 años desarrollando soluciones para el sector hotelero. Hoy, conectamos esa trayectoria con innovación real y alianzas estratégicas para ayudarte a crecer, operar mejor y mirar al futuro sin complicaciones.'
    },
    aboutUs: {
      title: data?.About?.title || 'Nosotros',
      data: {
        self: {
          title: data?.About?.CardAltabix?.title || '',
          description: data?.About?.CardAltabix?.description || ''
        },
        mission: {
          title: data?.About?.CardMission?.title || '',
          description: data?.About?.CardMission?.description || ''
        },
        vision: {
          title: data?.About?.CardVision?.title || '',
          description: data?.About?.CardVision?.description || ''
        }
      }
    },
    values: {
      title: data?.OurValues?.title || 'Valores',
      data:
        data?.OurValues?.values?.map(value => ({
          id: value?.id?.toString() || '',
          title: value?.title || '',
          description: value?.description || ''
        })) || []
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
};
