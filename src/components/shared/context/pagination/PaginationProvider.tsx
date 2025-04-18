import { useReducer, useMemo } from 'react';
import tableCampaignsReducer from './paginationReducer';
import { PaginationContextState, TTableFilterExtended, TTableItemExtended } from './index';
import { PaginationContext } from './PaginationContext';

const INITIAL_STATE: PaginationContextState<any, any> = {
  loading: false,
  totalCount: 0,
  totalEdges: 0,
  filters: {
    pag: 0
  },
  items: []
};

const initializeState = <T, U>(state: Partial<PaginationContextState<T, U>>) => {
  return {
    ...INITIAL_STATE,
    ...state,
    filters: {
      ...INITIAL_STATE.filters,
      ...state.filters
    }
  };
};

type PaginationProviderProps<T, U> = {
  initialState?: Partial<PaginationContextState<T, U>>;
  children: React.ReactNode;
};

const PaginationProvider = <T, U>({ children, initialState = INITIAL_STATE }: PaginationProviderProps<T, U>) => {
  const [state, dispatch] = useReducer(tableCampaignsReducer, INITIAL_STATE, () => initializeState(initialState));

  const onChangeLoading = (loading: boolean) => dispatch({ type: 'UPDATE_LOADING', payload: loading });
  const onChangeRows = (items: TTableItemExtended<T>[]) => dispatch({ type: 'UPDATE_ROWS', payload: items });
  const onChangeData = (data: any) => dispatch({ type: 'UPDATE_DATA', payload: data });
  const onChangeFilters = (
    filters: Partial<PaginationContextState<TTableItemExtended<T>, TTableFilterExtended<U>>['filters']>
  ) => {
    dispatch({ type: 'UPDATE_FILTERS', payload: filters });
  };
  const onAddRow = (row: TTableItemExtended<T>) => dispatch({ type: 'ADD_ROW', payload: row });
  const onUpdateRow = (row: TTableItemExtended<T>) => dispatch({ type: 'UPDATE_ROW', payload: row });
  const onDeleteRow = (id: string) => dispatch({ type: 'DELETE_ROW', payload: id });

  const memorized = useMemo(
    () => ({
      ...state,
      onChangeLoading,
      onChangeRows,
      onChangeData,
      onChangeFilters,
      onAddRow,
      onUpdateRow,
      onDeleteRow
    }),
    [state]
  );

  return <PaginationContext.Provider value={memorized}>{children}</PaginationContext.Provider>;
};

export default PaginationProvider;
