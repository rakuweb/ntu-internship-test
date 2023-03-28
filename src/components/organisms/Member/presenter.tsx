// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';
import { Box, Heading, Text } from '@chakra-ui/react';
import MenberLogo from '../../../../public/svg/menberLogo.svg';
import Card from './card';
import Caferoom from './caferoom';

// type layer
export type PresenterProps = Record<string, string>;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
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
