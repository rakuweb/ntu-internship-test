// import layer
import { VFC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

// type layer
export type PresenterProps = ChakraLinkProps & NextLinkProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch = false,
  locale,
  ...props
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <ChakraLink
        _hover={{ cursor: 'pointer', color: `gray`, textDecoration: 'none' }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
