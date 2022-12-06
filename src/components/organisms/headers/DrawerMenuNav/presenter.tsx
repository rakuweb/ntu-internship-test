// import layer
import { VFC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';

import { navItems } from '~/constants';
import { InternalLink } from '~/components/molecules/links/InternalLink';
import { ExternalLink } from '~/components/molecules/links/ExternalLink';
import { SansSerifText as Text } from '~/components/atoms/texts/SansSerifText';

// type layer
export type StyleProps = StackProps;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Stack spacing={{ base: `2rem` }} p={4} {...props}>
      {navItems.map((navItem) =>
        navItem.isExternal ? (
          <ExternalLink
            w={`fit-content`}
            href={navItem.link}
            key={navItem.name}
          >
            <Text
              _hover={{ color: `var(--curious-blue)` }}
              w={`fit-content`}
              fontSize={{ lg: `1rem` }}
              color={`white`}
            >
              {navItem.name}
            </Text>
          </ExternalLink>
        ) : (
          <InternalLink
            w={`fit-content`}
            href={navItem.link}
            key={navItem.name}
            {...navItem}
          >
            <Text
              _hover={{ color: `var(--curious-blue)` }}
              w={`fit-content`}
              fontSize={{ lg: `1rem` }}
              color={`white`}
            >
              {navItem.name}
            </Text>
          </InternalLink>
        )
      )}
    </Stack>
  );
};
