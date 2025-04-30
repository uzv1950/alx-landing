import { ReactNode, useEffect, useState } from 'react';
import { TGlobalData } from '@/features/Home/types';
import Head from 'next/head';
import { NavbarHorizontal } from '@/components/common/navbar';
import Footer from '@/features/Common/components/Footer/Footer';
import CopyrightBar from '@/features/Common/components/Footer/CopyrightBar';
import { Box } from '@mui/material';

const LayoutHome = ({ children, data, main = true }: { children: ReactNode; data: TGlobalData; main?: boolean }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <NavbarHorizontal isScroll={isScroll} />
      {main ? <main>{children}</main> : children}
      <Footer />
      <CopyrightBar />
    </>
  );
};

export default LayoutHome;
