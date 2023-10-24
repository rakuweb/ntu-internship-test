// import layer
import { NextSeoProps } from 'next-seo';

import { CANONICAL_URL, CMS_URL, ORIGIN_URL } from 'constants/env';
import { ImageType } from 'lib/utils';

// function layer
export const parseAuthorization = (jwt: string): string => `Bearer ${jwt}`;

// for seo
export const parseCanonical = (route: string): string =>
  `${CANONICAL_URL}${route}`;

export const parseSeo = (
  title: string,
  description: string,
  route?: string,
  ogp?: ImageType
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
          url: ogp?.src ?? `${ORIGIN_URL}/newogp.png`,
          width: ogp?.width ?? 1200,
          height: ogp?.height ?? 630,
          alt: ogp?.alt ?? '',
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
