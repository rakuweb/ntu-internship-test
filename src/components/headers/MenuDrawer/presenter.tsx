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
      <DrawerContent bg={`var(--midnight-blue)`}>
        <DrawerHeader bg={`var(--midnight-blue)`} opacity={1}>
          <Flex align={`center`}>
            <HeaderMenu isOpen={isOpen} onClick={onClose} />
            <Flex ml={{ base: `1rem` }} align={`center`}>
              <HeaderMenuButton
                w={`fit-content`}
                h={{ base: `2.5rem` }}
                bg={`var(--mandy)`}
                _hover={{
                  bg: `var(--white)`,
                  '.text': { color: `var(--mandy)` },
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
                  <Box color={`white`} className={`text`} ml={{ lg: `0.5rem` }}>
                    ログイン
                  </Box>
                </Flex>
              </HeaderMenuButton>
              <HeaderMenuButton
                w={`fit-content`}
                h={{ base: `2.5rem` }}
                bg={`var(--curious-blue)`}
                ml={{ base: `1rem` }}
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
                  <Box color={`white`} className={`text`} ml={{ lg: `0.5rem` }}>
                    ログイン
                  </Box>
                </Flex>
              </HeaderMenuButton>
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
