import { createContext, useContext } from 'react';

export interface UiContextState {
  loading: boolean;
}

export interface UiContextProps extends UiContextState {
  onUpdateLoading: (loading: boolean) => void;
}

const UiContext = createContext<UiContextProps>({} as UiContextProps);

export const useUiContext = (): UiContextProps => {
  const context = useContext(UiContext);
  if (Object.entries(context).length === 0) {
    throw new Error('useUiContext must be used within a UiContextProvider');
  }
  return context;
};

export default UiContext;
