import { FC, useCallback, useMemo, useReducer } from 'react';
import UiContext, { UiContextState } from './UiContext';
import uiReducer from './UiReducer';

const INITIAL_STATE: UiContextState = {
  loading: true
};

interface UiProviderProps {
  children: React.ReactNode;
}

const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const onUpdateLoading = useCallback(
    (loading: boolean) => dispatch({ type: '[Ui] - update loading', payload: loading }),
    []
  );

  const memorized = useMemo(() => ({ ...state, onUpdateLoading }), [state, onUpdateLoading]);

  return <UiContext.Provider value={memorized}>{children}</UiContext.Provider>;
};
export default UiProvider;
