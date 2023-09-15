// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { Box, Flex } from '@chakra-ui/react';

import { Image } from 'atoms/Image';
import { SansSerifText as Text } from '~/components/atoms/texts/SansSerifText';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <Box
      _hover={{ boxShadow: `2xl` }}
      transitionProperty={`box-shadow`}
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      className="x001"
      css={styles}
    >
      <Flex direction={`column`} justify={`space-between`}>
        <Flex>
          <div className="overlap-group1">
            <div className="price yugothic-bold-white-14px">Q</div>
          </div>
          <div className="text-1 yugothic-bold-mandy-18px">{`フッ素とフッ化第一スズはどちらが虫歯予防に効果的ですか？`}</div>
        </Flex>
        <Box my={`0.5rem`} className="x15">
          <Image
            width={686}
            height={2}
            src="/dev/img/file----15-----@1x.png"
            alt={``}
          />
        </Box>
        <Text
          noOfLines={3}
          className="text_label yugothic-medium-midnight-blue-16px"
        >
          {`第一フッ化スズですが、一番虫歯予防にいいといわれていますが、歯に着色することが多く、定期的に歯をPTC...`}
        </Text>
      </Flex>
    </Box>
  );
};

// styles
const styles = css`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: -3.06e-16px 5px 10px #0000001a;
  position: relative;
  padding: 1.5rem 1rem;

  .text_label {
    letter-spacing: 0;
    line-height: 22px;
  }

  .x15 {
    object-fit: cover;
  }

  .text-1 {
    left: 36px;
    letter-spacing: 0;
    line-height: 25px;
  }

  .overlap-group1 {
    align-items: center;
    background-color: var(--mandy);
    border-radius: 12.5px;
    display: flex;
    height: 25px;
    justify-content: center;
    padding: 0.5px 5.3px;
  }

  .price {
    letter-spacing: 0.84px;
    white-space: nowrap;
  }
`;
