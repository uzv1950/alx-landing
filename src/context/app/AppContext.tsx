import type { FC } from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';

export type ContextProps = {
  status: 'loading' | 'authenticated' | 'unauthenticated' | 'error';
};

const INITIAL_STATE: ContextProps = {
  status: 'unauthenticated'
};

export const AppContext = createContext(INITIAL_STATE);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [dataGlobal] = useState<ContextProps>(INITIAL_STATE);

  return <AppContext.Provider value={{ ...dataGlobal }}>{children}</AppContext.Provider>;
};

export const useAppContextProvider = () => {
  const context = useContext<ContextProps>(AppContext);

  if (context === undefined) {
    throw new Error('useAppContextProvider must be used within AppContextProvider');
  }

  return context;
};
