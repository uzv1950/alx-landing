export type TSeo = {
  siteTitle: string;
  siteDescription: string;
  siteFaviconUrl: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
  };
};

export type TLocale = {
  id: string;
  name: string;
  locale: string;
};

export type TGlobalData = {
  seo: TSeo;
  locales: TLocale[];
};

export type THero = {
  title: string;
  description: string;
};

export type TAboutUsItem = {
  title: string;
  description: string;
};

export type TAboutUs = {
  self: TAboutUsItem;
  mission: TAboutUsItem;
  vision: TAboutUsItem;
};

export type TValues = {
  id: string;
  title: string;
  description: string;
};

export type THistory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type TStackup = {
  title: string;
  description: string;
  image: string;
};

export type TCertifications = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type TSponsors = {
  id: string;
  title: string;
  image: string;
};

export type TTeam = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type TSection<T> = {
  title: string;
  data: T;
};

export type THomeData = {
  hero: THero;
  aboutUs: TSection<TAboutUs>;
  values: TSection<TValues[]>;
  history: TSection<THistory[]>;
  stackup: TSection<TStackup>;
  certifications: TSection<TCertifications[]>;
  sponsors: TSection<TSponsors[]>;
};
