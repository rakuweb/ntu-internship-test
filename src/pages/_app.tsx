// import layer
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

import { LiffProvider, generateEnv } from 'contexts/LineAuthContextInternship';
import { GoogleAnalytics } from '~/components/GoogleAnalytics';
import { SEO } from '~/constants';
import { global, guide } from '~/constants/styles';
import theme from '~/lib/theme';
// import usePageView from '~/hooks/usePageView';

// component layer
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { liffId, mock } = generateEnv();
  // usePageView();

  return (
    <>
      <GoogleAnalytics />

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
