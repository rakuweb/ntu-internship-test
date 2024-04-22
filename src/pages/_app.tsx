// src/pages/_app.tsx

// import layer
import { ChakraProvider } from '@chakra-ui/react';
import { Noto_Sans_JP, Josefin_Sans } from '@next/font/google';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { LiffProvider, generateEnv } from 'contexts/LineAuthContextInternship';
import { GoogleAnalytics } from 'new-components/GoogleAnalytics';
import { SEO } from '~/constants';
import theme from '~/lib/theme';
// import usePageView from '~/hooks/usePageView';

import 'src/css/globals.css';
// import 'src/styles/globals.css';
import 'src/css/home/index.css';
import 'src/css/home/offerlist.css';

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: false,
  variable: '--font-noto-sans-jp',
});

export const josefinSans = Josefin_Sans({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-josefin-sans',
});

// component layer
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { liffId, mock } = generateEnv();
  // usePageView();

  return (
    <>
      <GoogleAnalytics />

      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <LiffProvider liffId={liffId} mock={{ enable: mock }}>
          <div
            id={`root`}
            className={`${notoSansJP.variable} ${josefinSans.variable}`}
          >
            <Component {...pageProps} />
          </div>
        </LiffProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
