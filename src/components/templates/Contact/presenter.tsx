// import layer
import { FC } from 'react';

// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Header } from 'components/headers/Header';
import { ContactDetail } from '~/components/ContactDetail';
import { Footer } from '~/components/footers/Footer';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <Header />
      {/*
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY}
      >
      */}
      <ContactDetail />
      {/*
      </GoogleReCaptchaProvider>
        */}
      <Footer />
    </>
  );
};
