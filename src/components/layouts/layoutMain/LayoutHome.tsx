import { ReactNode } from 'react';
import { styled } from '@mui/material';
import { TGlobalMetadata } from '@/features/Home/types';
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

const LayoutHome = ({ children, metadata }: { children: ReactNode; metadata: TGlobalMetadata }) => {
  return (
    <>
      <Head>
        <title>{metadata.siteName}</title>
        <meta name="description" content={metadata.siteDescription} />
        <link rel="icon" href={metadata.siteFaviconUrl} />
      </Head>
      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default LayoutHome;
