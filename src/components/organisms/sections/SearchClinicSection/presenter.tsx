// import layer
import { VFC } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { SearchSectionTitle } from '~/components/molecules/titles/SearchSectionTitle';
import { Image } from 'atoms/Image';
import { AreaTag } from '~/components/molecules/tags/AreaTag';
import { Span } from '~/components/atoms/Span';
import { InternalLink } from 'molecules/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      w={{ base: `100%`, md: `fit-content` }}
      maxW={{ base: `30rem`, md: `initial` }}
      px={{ base: `1rem`, lg: `initial` }}
      as={`section`}
    >
      <Flex justify={{ lg: `center` }}>
        <ImageTitle
          img={{
            src: `/dev/img/icon-search-dentist.png`,
            width: 55,
            height: 59,
          }}
        >
          <Span
            fontSize={{
              base: `var(--font-size-xxl)`,
              md: `var(--font-size-xxxl)`,
            }}
            className="yugothic-bold-navy-blue-32px"
          >
            歯医者
          </Span>
          <Span className="yugothic-bold-navy-blue-24px">を</Span>
          <Span
            fontSize={{
              base: `var(--font-size-xxl)`,
              md: `var(--font-size-xxxl)`,
            }}
            className="yugothic-bold-navy-blue-32px"
          >
            探す
          </Span>
        </ImageTitle>
      </Flex>
      <Flex
        py={{ base: `1rem`, lg: `19.1px` }}
        px={{ base: `1rem`, lg: `1.5rem`, xl: `27px` }}
        boxShadow={`-3.06e-16px 5px 10px #0000001a`}
        bg={`var(--white)`}
        mt={{ base: `1rem`, lg: `0.5rem` }}
        borderTop={`solid 3px #257FBF`}
        align={`center`}
        direction={{ md: `column` }}
        h={{ lg: `30.625rem` }}
      >
        <Flex
          w={{ base: `28rem`, xl: `32rem` }}
          direction={`column`}
          align={`center`}
        >
          <SearchSectionTitle>
            エリアから歯医者さんを探せます！
          </SearchSectionTitle>
          <Box
            w={`100%`}
            position={`relative`}
            mt={{ base: `1rem`, lg: `2rem` }}
          >
            <Box>
              <Image
                src={`/dev/img/file-----142@1x.png`}
                width={1025}
                height={742}
                alt={``}
              />
            </Box>
            <Box
              position={`absolute`}
              top={{ base: `5rem`, lg: `11rem` }}
              left={{ base: `3.5rem`, lg: `8rem` }}
            >
              <InternalLink href={`#`}>
                <AreaTag>四国・中国</AreaTag>
              </InternalLink>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
