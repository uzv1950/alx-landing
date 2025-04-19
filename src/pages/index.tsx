import { ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import LayoutHome from '@/components/layouts/layoutMain/LayoutHome';
import HomePage from '@/features/Home/page/HomePage';
import { TGlobalData } from '@/features/Home/types';
import getGlobalDataService from '@/features/Home/services/getGlobalData.service';

export const getServerSideProps: GetServerSideProps<{
  metadata: TGlobalData;
}> = async ({ locale = 'es' }) => {
  const response = await getGlobalDataService(locale);
  console.log('🚀 ~ response:', response);

  return {
    props: {
      metadata: response
    }
  };
};

const IndexPage = () => {
  return <HomePage />;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  const props = page.props as { metadata: TGlobalData };
  return <LayoutHome metadata={props.metadata}>{page}</LayoutHome>;
};

export default IndexPage;
