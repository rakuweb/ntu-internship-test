// import layer
import { VFC } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

import { SEO } from '~/constants';

// type layer
export type PresenterProps = NextSeoProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return <NextSeo {...SEO} {...props} />;
};
