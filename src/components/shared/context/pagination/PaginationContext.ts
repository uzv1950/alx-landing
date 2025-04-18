import { createContext, useContext } from 'react';
import { PaginationContextProps } from '.';

export const PaginationContext = createContext({} as any);

export const usePaginationContext = <T, U>(): PaginationContextProps<T, U> => {
  const context = useContext<PaginationContextProps<T, U>>(PaginationContext);
  if (Object.entries(context).length === 0) {
    throw new Error('usePaginationContext must be used within a PaginationContextProvider');
  }
  return context;
};
