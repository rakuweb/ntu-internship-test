// import layer
import { VFC } from 'react';
import { Flex, Box, Wrap, WrapItem } from '@chakra-ui/react';

import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { SearchSectionTitle } from '~/components/molecules/titles/SearchSectionTitle';
import { SearchSectionButton } from '~/components/molecules/buttons/SearchSectionButton';
import { SearchTag } from '~/components/molecules/tags/SearchTag';
import { InternalLink } from 'molecules/links/InternalLink';
import { routes } from '~/constants';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      w={`fit-content`}
      display={{ base: `none`, lg: `initial` }}
      h={{ xl: `490px` }}
      as={`section`}
    >
      <Flex justify={`center`}>
        <ImageTitle
          img={{
            src: `/dev/img/icon-3@1x.png`,
            width: 122,
            height: 122,
          }}
        >
          <span className="yugothic-bold-navy-blue-32px">歯</span>
          <span className="yugothic-bold-navy-blue-24px">を</span>
          <span className="yugothic-bold-navy-blue-32px">知る</span>
        </ImageTitle>
      </Flex>
      <Flex
        w={`28rem`}
        py={`19.1px`}
        px={`27px`}
        boxShadow={`-3.06e-16px 5px 10px #0000001a`}
        mt={`0.5rem`}
        bg={`var(--white)`}
        borderTop={`solid 3px #257FBF`}
        align={`center`}
        direction={{ md: `column` }}
        h={`490px`}
      >
        <Flex direction={`column`} align={`center`}>
          <SearchSectionTitle>病名や症状から知る</SearchSectionTitle>
          <Box my={`1rem`}>
            <Wrap>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <WrapItem key={i}>
                  <InternalLink href={`#`}>
                    <SearchTag>＃虫歯</SearchTag>
                  </InternalLink>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
          <Flex w={`22.1875rem`} justify="flex-end">
            <InternalLink href={`#`}>
              <SearchSectionButton />
            </InternalLink>
          </Flex>
        </Flex>
        <Box my={`1rem`} h={`0.1rem`} w={`100%`} bg={`#257FBF`} />
        <Flex direction={`column`} align={`center`}>
          <SearchSectionTitle>歯の辞典</SearchSectionTitle>
          <Box my={`1rem`}>
            <Wrap>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <WrapItem key={i}>
                  <InternalLink href={`#`}>
                    <SearchTag>＃虫歯</SearchTag>
                  </InternalLink>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
          <Flex w={`22.1875rem`} justify="flex-end">
            <InternalLink href={`#`}>
              <SearchSectionButton />
            </InternalLink>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
