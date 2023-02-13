// import layer
import { VFC } from 'react';
import {
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Flex,
  Box,
} from '@chakra-ui/react';

import { HeaderMenu } from '../HeaderMenu';
import { Image } from 'atoms/Image';
import { HeaderMenuButton } from 'components/organisms/buttons/HeaderMenuButton';
import { DrawerMenuNav } from '../DrawerMenuNav';
import { InternalLink } from '~/components/links/InternalLink';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Partial<DrawerProps> & {
  isOpen: boolean;
  onClose: () => void;
};

// presenter
export const Presenter: VFC<PresenterProps> = ({
  isOpen,
  onClose,
  ...props
}) => {
  return (
    <Drawer size={`sm`} isOpen={isOpen} onClose={onClose} {...props}>
      <DrawerOverlay />
      <DrawerContent bg={`#f5f5f5`}>
        <DrawerHeader bg={`#f5f5f5`} opacity={1}>
          <Flex align={`center`}>
            <HeaderMenu isOpen={isOpen} onClick={onClose} />
            <Flex ml={{ base: `1rem` }} align={`center`}>
              <InternalLink href={routes.signin}>
                <HeaderMenuButton
                  w={`fit-content`}
                  h={{ base: `2.5rem` }}
                  backgroundImage={`linear-gradient(19deg, #21d4fd 0%, #b721ff 100%)`}
                  _hover={{
                    bg: `var(--white)`,
                    '.text': { color: `var(--mandy)` },
                  }}
                >
                  <Flex align={`center`}>
                    <Box
                      color={`white`}
                      ml={{ lg: `0.5rem` }}
                      fontFamily={`'Zen Kaku Gothic New',
        'Hiragino Sans'`}
                    >
                      ログイン
                    </Box>
                  </Flex>
                </HeaderMenuButton>
              </InternalLink>
              {/*
              <HeaderMenuButton
                w={`fit-content`}
                h={{ base: `2.5rem` }}
                bg={`var(--curious-blue)`}
                ml={{ base: `0.5rem` }}
                _hover={{
                  bg: `var(--white)`,
                  '.text': { color: `var(--curious-blue)` },
                }}
              >
                <Flex align={`center`}>
                  <Box w={`1.5rem`}>
                    <Image
                      width={66}
                      height={80}
                      src="/dev/img/arrow-@2x.png"
                    />
                  </Box>
                  <Box color={`white`} className={`text`} ml={{ lg: `0.4rem` }}>
                    ログアウト
                  </Box>
                </Flex>
              </HeaderMenuButton>
                */}
            </Flex>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <DrawerMenuNav />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
