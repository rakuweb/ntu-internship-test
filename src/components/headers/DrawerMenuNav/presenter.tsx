// import layer
import { VFC } from 'react';
import { Stack, StackProps, Box } from '@chakra-ui/react';

import { useAccountStore, selectAccount } from 'features/account';

import { SansSerifText as Text } from '~/components/atoms/texts/SansSerifText';
import { ExternalLink } from '~/components/molecules/links/ExternalLink';
import { InternalLink } from '~/components/molecules/links/InternalLink';
import { navItems } from '~/constants';

// type layer
export type StyleProps = StackProps;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  const { username } = useAccountStore(selectAccount);
  console.log(username);
  return (
    <div>
      {username ? (
        <Text
          _hover={{ color: `var(--curious-blue)` }}
          w={`fit-content`}
          p={` 0 0 8px 16px`}
          fontSize={{ lg: `1rem` }}
          color={`#444444`}
          className="menu-text yugothic-bold-white-14px"
        >
          {username}
          <Box as={`span`} fontWeight={`500`}>
            さん ようこそ！
          </Box>
        </Text>
      ) : (
        <Text display={`none`} />
      )}
      <Stack spacing={{ base: `2rem` }} p={4} {...props}>
        {navItems.map((navItem) =>
          navItem.isExternal ? (
            <ExternalLink
              w={`fit-content`}
              href={navItem.link}
              key={navItem.name}
              isExternal
            >
              <Text
                _hover={{ color: `var(--curious-blue)` }}
                w={`fit-content`}
                fontSize={{ lg: `1rem` }}
                color={`#444444`}
                className="menu-text yugothic-bold-white-14px"
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
                color={`#444444`}
                className="menu-text yugothic-bold-white-14px"
              >
                {navItem.name}
              </Text>
            </InternalLink>
          )
        )}
      </Stack>
    </div>
  );
};
