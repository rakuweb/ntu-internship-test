// import layer
import { StackProps } from '@chakra-ui/react';

import { ExternalLink } from 'new-components/links/ExternalLink';
import { InternalLink } from 'new-components/links/InternalLink';
import { SansSerifText as Text } from 'new-components/texts/SansSerifText';

import { css } from 'styled-system/css';
import { stack } from 'styled-system/patterns';
import { navItems } from '~/constants';

// type layer
export type StyleProps = StackProps;
export type PresenterProps = StyleProps;

// presenter
export function Presenter({ ..._props }: PresenterProps) {
  return (
    <div
      className={stack({
        gap: { base: `2rem` },
        p: 4,
      })}
    >
      {navItems.map((navItem) =>
        navItem.isExternal ? (
          <ExternalLink
            className={css({
              w: `fit-content`,
            })}
            href={navItem.link}
            key={navItem.name}
          >
            <Text
              _hover={{ color: `#2194e5 !importat` }}
              w={`fit-content`}
              fontSize={{ lg: `1rem` }}
              // color={`white`}
            >
              {navItem.name}
            </Text>
          </ExternalLink>
        ) : (
          <InternalLink
            className={css({
              w: `fit-content`,
            })}
            href={navItem.link}
            key={navItem.name}
            {...navItem}
          >
            <Text
              _hover={{ color: `#2194e5 !importat` }}
              w={`fit-content`}
              fontSize={{ lg: `1rem` }}
              // color={`white`}
            >
              {navItem.name}
            </Text>
          </InternalLink>
        )
      )}
    </div>
  );
}
