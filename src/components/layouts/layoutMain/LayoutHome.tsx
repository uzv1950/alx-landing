import { ReactNode } from 'react';
import { styled } from '@mui/material';
import { TGlobalData } from '@/features/Home/types';
import Head from 'next/head';

interface MainStyleProps {
  isOpenSidebar?: boolean;
  isDrawerTemporary?: boolean;
}

const MainStyle = styled('main', {
  shouldForwardProp: (prop: string) => !['isOpenSidebar', 'isDrawerTemporary'].includes(prop)
})<MainStyleProps>(() => ({
  height: '100%'
}));

const LayoutHome = ({ children, metadata }: { children: ReactNode; metadata: TGlobalData }) => {
  return (
    <>
      <Head>
        <link rel="icon" href={metadata.seo.siteFaviconUrl} />
        <title>{metadata.seo.siteTitle}</title>
        <meta name="description" content={metadata.seo.siteDescription} />
        <meta
          property="og:title"
          content={metadata.seo.openGraph.title ? metadata.seo.openGraph.title : metadata.seo.siteTitle}
        />
        <meta
          property="og:description"
          content={
            metadata.seo.openGraph.description ? metadata.seo.openGraph.description : metadata.seo.siteDescription
          }
        />
        {metadata.seo.openGraph.image && <meta property="og:image" content={metadata.seo.openGraph.image} />}

        {metadata.locales.map(locale => (
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
      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default LayoutHome;
