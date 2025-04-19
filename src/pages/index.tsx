import { ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import LayoutHome from '@/components/layouts/layoutMain/LayoutHome';
import HomePage from '@/features/Home/page/HomePage';
import { TGlobalData, THomeData } from '@/features/Home/types';
import getGlobalDataService from '@/features/Home/services/getGlobalData.service';
import getHomePageDataService from '@/features/Home/services/getHomePageData.service';
import { HomeContextProvider } from '@/features/Common/context/home/HomeContext';

type TProps = {
  global: TGlobalData;
  home: THomeData;
};

export const getServerSideProps: GetServerSideProps<TProps> = async ({ locale = 'es' }) => {
  const response = await getGlobalDataService(locale);
  const homePageData = await getHomePageDataService(locale);

  return {
    props: {
      global: response,
      home: homePageData
    }
  };
};

const IndexPage = ({ home }: TProps) => {
  console.log('🚀 ~ IndexPage ~ home:', home);
  return (
    <HomeContextProvider initialState={home}>
      <HomePage />
    </HomeContextProvider>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  const props = page.props as TProps;
  return <LayoutHome data={props.global}>{page}</LayoutHome>;
};

export default IndexPage;
