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
