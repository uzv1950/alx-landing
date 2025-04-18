import { PaginationContextState, TTableFilterExtended, TTableItemExtended } from './index';

type PaginationActionTypes<T, U> =
  | { type: 'UPDATE_ROWS'; payload: TTableItemExtended<T>[] }
  | { type: 'UPDATE_LOADING'; payload: boolean }
  | { type: 'UPDATE_DATA'; payload: Partial<PaginationContextState<TTableItemExtended<T>, TTableFilterExtended<U>>> }
  | {
      type: 'UPDATE_FILTERS';
      payload: Partial<PaginationContextState<TTableItemExtended<T>, TTableFilterExtended<U>>['filters']>;
    }
  | { type: 'ADD_ROW'; payload: TTableItemExtended<T> }
  | { type: 'UPDATE_ROW'; payload: TTableItemExtended<T> }
  | { type: 'DELETE_ROW'; payload: string };

const tableUsersReducer = <T, U>(
  state: PaginationContextState<T, U>,
  action: PaginationActionTypes<T, U>
): PaginationContextState<T, U> => {
  switch (action.type) {
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'ADD_ROW':
      if (typeof state.filters?.pag !== 'undefined' && state.filters?.pag > 0) return state;
      if (state.items.some(row => row.id === action.payload.id)) return state;
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case 'UPDATE_ROW':
      return {
        ...state,
        items: state.items.map(row => (row.id === action.payload.id ? action.payload : row))
      };
    case 'UPDATE_ROWS':
      return {
        ...state,
        items: action.payload
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        totalCount: action.payload.totalCount ?? state.totalCount,
        totalEdges: action.payload.totalEdges ?? state.totalEdges,
        items: action.payload.items ?? state.items
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case 'DELETE_ROW':
      return {
        ...state,
        items: state.items.filter(row => row.id !== action.payload)
      };
    default:
      return state;
  }
};

export default tableUsersReducer;
