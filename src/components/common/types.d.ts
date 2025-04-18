export type IGeneralSelect = {
  id: string | number;
  name: string;
  inputValue?: string;
};

export type TNavItem = {
  id: string;
  title: string;
  path: string;
  icon: JSX.Element;
  subMenus?: TNavItem[];
};

export type TDateRange = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};
