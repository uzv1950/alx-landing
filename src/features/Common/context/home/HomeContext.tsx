import type { FC } from 'react';
import { THomeData } from '@/features/Home/types';
import { createContext, ReactNode, useContext, useState } from 'react';

const INITIAL_STATE: THomeData = {
  hero: {
    title: '',
    description: ''
  },
  aboutUs: {
    title: '',
    data: {
      self: {
        title: '',
        description: ''
      },
      mission: {
        title: '',
        description: ''
      },
      vision: {
        title: '',
        description: ''
      }
    }
  },
  values: {
    title: '',
    data: []
  },
  history: {
    title: '',
    data: []
  },
  stackup: {
    title: '',
    data: {
      title: '',
      description: '',
      image: ''
    }
  },
  certifications: {
    title: '',
    data: []
  },
  sponsors: {
    title: '',
    data: []
  }
};

export const HomeContext = createContext(INITIAL_STATE);

type HomeContextProviderProps = {
  children: ReactNode;
  initialState: THomeData;
};

export const HomeContextProvider: FC<HomeContextProviderProps> = ({ children, initialState }) => {
  const [dataGlobal] = useState<THomeData>(initialState);

  return <HomeContext.Provider value={dataGlobal}>{children}</HomeContext.Provider>;
};

export const useHomeContextProvider = () => {
  const context = useContext<THomeData>(HomeContext);

  if (context === undefined) {
    throw new Error('useHomeContextProvider must be used within HomeContextProvider');
  }

  return context;
};
