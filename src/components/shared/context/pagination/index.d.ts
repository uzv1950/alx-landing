export type TTableItemExtended<T> = T & {
  id: string;
};

export type TTableFilterExtended<T> = {
  pag?: number;
};

export type PaginationContextState<T, U> = {
  loading: boolean;
  filters: U & TTableFilterExtended<U>;
  totalCount: number;
  totalEdges: number;
  items: TTableItemExtended<T>[];
};

export type PaginationContextProps<T, U> = {
  onChangeLoading: (loading: boolean) => void;
  onChangeRows: (items: TTableItemExtended<T>[]) => void;
  onChangeData: (data: Partial<PaginationContextState<TTableItemExtended<T>, TTableFilterExtended<U>>>) => void;
  onChangeFilters: (filters: Partial<U>) => void;
  onAddRow: (row: TTableItemExtended<T>) => void;
  onUpdateRow: (row: TTableItemExtended<T>) => void;
  onDeleteRow: (id: string) => void;
} & PaginationContextState<T, U>;
