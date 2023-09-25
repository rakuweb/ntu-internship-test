// import layer
import { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Image } from 'atoms/Image';
import { ImageTitle } from '~/components/molecules/titles/ImageTitle';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <Box
      // w={{ lg: `fit-content` }}
      mx={{ lg: `auto` }}
      mt={{ lg: `7.5rem` }}
      pt={{ md: `5rem`, lg: `initial` }}
      // pt={{ base: `5rem`, lg: `initial` }}
      px={{ base: `1rem`, lg: `initial` }}
      bg={{ base: `var(--porcelain)`, lg: `initial` }}
      as={`section`}
    >
      <Box
        mx={{ base: `auto`, lg: `2rem`, '2xl': `auto` }}
        maxW={{
          base: `28rem`,
          lg: `1024px`,
          xl: `1200px`,
        }}
        position={`relative`}
      >
        <Box
          w={{ lg: `fit-content` }}
          mx={{ sm: `auto` }}
          maxW={{
            base: `28rem`,
            lg: `520px`,
            xl: `700px`,
            '2xl': 'initial',
          }}
        >
          <ImageTitle
            img={{
              src: `/dev/img/icon-2@1x.png`,
              // layout: `fill`,
              objectFit: `contain`,
              // width: 86,
              // height: 118,
            }}
          >
            案件先企業例
          </ImageTitle>
        </Box>
      </Box>
      <Box
        mt={`2rem`}
        // px={{ lg: `2rem` }}
        pt={{ lg: `2.5rem` }}
        pb={`2rem`}
        bg={{
          // base: `white`,
          lg: `var(--porcelain)`,
        }}
        w={{ base: `100%` }}
        maxW={{
          base: `28rem`,
          lg: `1024px`,
          xl: `1200px`,
        }}
        mx={`auto`}
        borderRadius={`10px`}
        css={styles}
      >
        <Stack
          padding={{ lg: `0 87px`, base: `20px 32px 10px 32px` }}
          direction={{ base: `row`, lg: `row` }}
          wrap={`wrap`}
          bg={{
            base: `white`,
            lg: `var(--porcelain)`,
          }}
          borderRadius={`10px`}
        >
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>

          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
          <div className="box">
            <Image
              maxW={`100%`}
              maxH={`100%`}
              src="/dev/img/logo.png"
              alt={``}
            />
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

// styles
const styles = css`

.box{

  
  margin:10px 18px 16px 18px;
  width:20%;
  height:40px;
 
  ${mq[1]} {
    width:25%;
    margin:10px 16px;
  }
  

  ${mq[2]} {
    margin:16px 30px;
    width:145px;
    height:86px;
  }
  
  }
} 


 
`;
