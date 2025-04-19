import { ReactNode } from 'react';
import { styled, Toolbar } from '@mui/material';
import { TGlobalData } from '@/features/Home/types';
import Head from 'next/head';
import { NavbarHorizontal } from '@/components/common/navbar';

interface MainStyleProps {
  isOpenSidebar?: boolean;
  isDrawerTemporary?: boolean;
}

const MainStyle = styled('main', {
  shouldForwardProp: (prop: string) => !['isOpenSidebar', 'isDrawerTemporary'].includes(prop)
})<MainStyleProps>(() => ({
  height: '100%'
}));

const LayoutHome = ({ children, data }: { children: ReactNode; data: TGlobalData }) => {
  return (
    <>
      <Head>
        <link rel="icon" href={data.seo.siteFaviconUrl} />
        <title>{data.seo.siteTitle}</title>
        <meta name="description" content={data.seo.siteDescription} />
        <meta property="og:title" content={data.seo.openGraph.title ? data.seo.openGraph.title : data.seo.siteTitle} />
        <meta
          property="og:description"
          content={data.seo.openGraph.description ? data.seo.openGraph.description : data.seo.siteDescription}
        />
        {data.seo.openGraph.image && <meta property="og:image" content={data.seo.openGraph.image} />}

        {data.locales.map(locale => (
          <link
            key={locale.id}
            rel="alternate"
            hrefLang={locale.locale}
            href={
              locale.locale === 'es'
                ? `${process.env.NEXT_PUBLIC_SITE_URL}`
                : `${process.env.NEXT_PUBLIC_SITE_URL}/${locale.locale}`
            }
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>
      <NavbarHorizontal />
      <MainStyle>
        <Toolbar sx={{ mt: 2 }} />
        {children}
      </MainStyle>
    </>
  );
};

export default LayoutHome;
