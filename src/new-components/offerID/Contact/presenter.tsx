// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from 'components/images/Image';
import { InternalLink } from '~/components/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Box
      w={{
        base: `${134 / 3.75}vw`,
        md: `${200 / 7.68}vw`,
        lg: `${355 / 19.2}vw`,
      }}
      fontFamily={`'Noto Sans JP', sans-serif`}
      fontWeight={`800`}
      fontSize={{ base: ``, md: `${20 / 7.68}vw`, lg: `${39 / 19.2}vw` }}
      color={`white`}
      {...props}
    >
      <InternalLink href={`/`}>
        <Image // eslint-disable-line
          w={{
            base: `${134 / 3.75}vw`,
            md: `${200 / 7.68}vw`,
            lg: `${355 / 19.2}vw`,
          }}
          mb={{ base: ``, md: `${30 / 19.2}vw` }}
          image={{
            width: 500,
            height: 120,
            src: `/svg/forjob.svg`,
            alt: `forjob`,
          }}
        />
      </InternalLink>
    </Box>
  );
};
