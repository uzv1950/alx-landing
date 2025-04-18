import { TFileItem } from '@/features/Upload/models';

export type TSessionUser = {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
  tenantId: string;
  tenant: {
    id: string;
    logo: TFileItem | null;
  } | null;
  avatar: {
    id: string;
    url: string;
  } | null;
  apps: { id: string; name: string; roleId: string }[];
  tenantApps: { id: string; name: string; status: string }[];
};

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

export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
  Blocked = 'blocked',
  PasswordExpired = 'password-expired'
}

export type TSelectItem<T = string> = {
  id: T;
  name: string;
};
