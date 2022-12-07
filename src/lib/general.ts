// import layer
import { NextSeoProps } from 'next-seo';

import { CANONICAL_URL, CMS_URL, ORIGIN_URL } from 'constants/env';

// function layer
export const parseAuthorization = (jwt: string): string => `Bearer ${jwt}`;

// for seo
export const parseCanonical = (route: string): string =>
  `${CANONICAL_URL}${route}`;

export const parseSeo = (
  title: string,
  description: string,
  route?: string
): NextSeoProps => {
  const res: NextSeoProps = {
    title: title,
    description: removeBreakLine(description),
    openGraph: {
      type: 'website',
      title: title,
      description: removeBreakLine(description),
      images: [
        {
          url: `${ORIGIN_URL}/img/ogp.png`,
          width: 1200,
          height: 630,
          alt: '',
        },
      ],
    },
  };
  if (route) {
    res.canonical = parseCanonical(route);
  }

  return res;
};

export const removeBreakLine = (str: string): string =>
  str?.replace(/\r?\n/g, '');

export const toCMSPath = (path: string): string => `${CMS_URL}${path}`;

export const zeroPadding = (num: number, len = 2): string => {
  return (Array(len).join('0') + String(num)).slice(-len);
};
