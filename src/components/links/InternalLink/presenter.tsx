// import layer
import { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

// type layer
export type StyleProps = ChakraLinkProps & NextLinkProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

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
      <ChakraLink
        transition={`all .3s`}
        _hover={{
          cursor: 'pointer',
          filter: `opacity(50%)`,
          textDecoration: 'none',
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
