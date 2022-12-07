// import layer
import { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Box,
  BoxProps,
} from '@chakra-ui/react';

// type layer
export type PresenterProps = BoxProps & NextLinkProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
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
      <Box
        w={`auto`}
        h={`auto`}
        _hover={{ cursor: 'pointer', color: `gray`, textDecoration: 'none' }}
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  );
};
