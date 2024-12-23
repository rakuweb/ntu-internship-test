// import layer
import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import MenberLogo from '../../../../public/svg/menberLogo.svg';
import Caferoom from './caferoom';
import Card from './card';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <Box css={styles} bgColor={'#F4F4F4'}>
      <Box
        className="box"
        maxWidth={'768px'}
        m={'auto'}
        h={'auto'}
        p={'50px 0 100px'}
        bgColor={'#F4F4F4'}
      >
        <MenberLogo className="logo" />
        <Heading
          as={'h1'}
          fontFamily={"'Noto Sans JP', sans-serif"}
          fontSize={{ base: '15px' }}
          color={'#707070'}
          textAlign={'center'}
          p={{ base: '30px' }}
        >
          NOT THE UNIVERSITY FREE会員
        </Heading>

        <Card />
        <Caferoom />
      </Box>
    </Box>
  );
};

// styles
const styles = css`
  .box {
    font-family: 'Noto Sans JP', sans-serif;
    .logo {
      display: block;
      margin: auto;
    }
  }
`;
