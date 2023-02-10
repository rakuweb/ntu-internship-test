// import layer
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo, DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

import { SEO } from '~/constants';
import theme from '~/lib/theme';
import { global, guide } from '~/constants/styles';
import { LiffProvider, generateEnv } from 'contexts/LineAuthContextInternship';
// import { GoogleAnalytics } from 'organisms/GoogleAnalytics';
// import usePageView from '~/hooks/usePageView';

// component layer
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { liffId, mock } = generateEnv();
  // usePageView();

  return (
    <>
      {/*
      <GoogleAnalytics />
    */}
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Global
          styles={css`
            ${global};
            ${guide}
          `}
        />
        <LiffProvider liffId={liffId} mock={{ enable: mock }}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </LiffProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
