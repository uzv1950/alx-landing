/* eslint-disable @typescript-eslint/ban-types */
import '@/components/styles/styles.global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { FC, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import { createEmotionCache } from '@/utils/index';
import Router from 'next/router';
import NProgress from 'nprogress';
import { appWithTranslation } from 'next-i18next';

import { ThemeContextProvider } from '@/context/theme/ThemeContextProvider';
import { EmotionCache } from '@emotion/cache';
import { UiProvider } from '@/features/Common/context';

const clientSideEmotionCache = createEmotionCache();

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type WebAppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

const WebApp: FC<WebAppPropsWithLayout> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const getLayout = Component.getLayout || (page => page);

  return (
    <ThemeContextProvider emotionCache={emotionCache}>
      <UiProvider>{getLayout(<Component {...pageProps} />)}</UiProvider>
    </ThemeContextProvider>
  );
};

export default appWithTranslation(WebApp);
