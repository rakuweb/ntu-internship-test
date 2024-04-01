// import layer
import { ChakraProvider } from '@chakra-ui/react';
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
          <Component {...pageProps} />
        </LiffProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
