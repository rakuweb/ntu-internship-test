// import layer
import { DefaultSeoProps } from 'next-seo';

// export layer
export * from './routes';

// consant layer
// url
export const STRAPI_HOST =
  process.env.NEXT_PUBLIC_STRAPI_HOST ?? `http://localhost:1337`;
export const MEDIA_ROOT_URL =
  process.env.NEXT_PUBLIC_STRAPI_HOST ?? `http://localhost:1337`;
export const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? `http://localhost:1337/graphql`;
export const ORIGIN_URL =
  process.env.NEXT_PUBLIC_ORIGIN_URL ?? `http://localhost:3000`;
export const FRONTEND_KEY = ``;
export const CANONICAL_URL =
  process.env.NEXT_PUBLIC_CANONICAL_URL ?? `http://localhost:3000`;
export const GOOGLE_RECAPTCHA_FRONT =
  process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_FRONT ?? ``;
export const RECAPTCHA_URL = `https://www.google.com/recaptcha/api/siteverify`;

// default seo
export const SEO: DefaultSeoProps = {
  title: '',
  description: '',
  openGraph: {
    type: 'website',
    locale: 'ja',
    url: '',
    site_name: '',
    images: [
      {
        url: `${ORIGIN_URL}/img/ogp.png`,
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
  },
  twitter: { cardType: 'summary_large_image' },
};
