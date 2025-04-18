import { ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import LayoutHome from '@/components/layouts/layoutMain/LayoutHome';
import HomePage from '@/features/Home/page/HomePage';
import { TGlobalMetadata } from '@/features/Home/types';
import getSiteMetadataService from '@/features/Home/services/getSiteMetadata.service';
import { globalMetadataAdapter } from '@/features/Home/adapters/global';

export const getServerSideProps: GetServerSideProps<{
  metadata: TGlobalMetadata;
}> = async ({ locale = 'es' }) => {
  const response = await getSiteMetadataService(
    `pagination[pageSize]=1&locale=${locale}&populate[0]=favicon&populate[1]=defaultSeo`
  );

  const data = globalMetadataAdapter(response);

  return {
    props: {
      metadata: data
    }
  };
};

const IndexPage = () => {
  return <HomePage />;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  const props = page.props as { metadata: TGlobalMetadata };
  return <LayoutHome metadata={props.metadata}>{page}</LayoutHome>;
};

export default IndexPage;
