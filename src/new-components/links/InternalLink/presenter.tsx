// import layer
import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { css, cx } from 'styled-system/css';
import type { SystemStyleObject } from 'styled-system/types';

// type layer
export type StyleProps = SystemStyleObject & NextLinkProps;
export type DataProps = { children: ReactNode; className?: string };
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
  className,
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
        className={cx(
          css(
            {
              transition: `all .3s`,
              _hover: {
                cursor: 'pointer',
                opacity: 0.5,
                textDecoration: 'none',
              },
            },
            props
          ),
          className
        )}
      >
        {children}
      </Box>
    </NextLink>
  );
};
