export type ThemeMode = 'light' | 'dark';

export interface IGeneralPaginationList {
  totalCount: number;
  totalEdges: number;
  pag: number;
  hasMore: boolean;
}

export interface IGeneralSelect {
  id: string | number;
  name: string;
}

export type TPaginationList<T, U> = {
  totalCount: number;
  totalEdges: number;
  hasMore: boolean;
  filter: Partial<Record<keyof U, any>> & {
    pag?: number;
    num?: number;
  };
  items: T[];
};

export type TSelectItem<T = string> = {
  id: T;
  name: string;
};
