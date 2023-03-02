// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Image } from 'components/Image';

import { styles } from './styles';
import {
  useAdvertisementArticleStore,
  selectAdvertisementArticle,
} from 'features/advertisements';

import 'zenn-content-css';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const target = useAdvertisementArticleStore(selectAdvertisementArticle);

  return (
    <div css={styles}>
      {/* 広告 <Box w={`100%`} bg={`#f5f5f5`}>
        <div className="search__container">
          <Box
            mx={`auto`}
            overflow={`hidden`}
            borderRadius={{ base: `${20 / 3.75}vw`, lg: `${50 / 19.2}vw` }}
            mt={`30px`}
            w={`100%`}
          >
            <Image
              w={`100%`}
              image={{
                width: 1180,
                height: 295,
                src: '/images/offers/kokoutest.png',
                layout: `responsive`,
                alt: '',
              }}
            />
          </Box>
        </div>
      </Box> */}
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <h1 className="jobtitle">{target.title}</h1>

          <Image
            mb={{ base: `${16 / 3.75}vw`, lg: `${32 / 19.2}vw` }}
            image={{
              width: 680,
              height: 400,
              src: `/images/offers/cover.png`,
              alt: ``,
            }}
          />

          <Box
            className={`znc yugothic-medium`}
            color={`#003968`}
            dangerouslySetInnerHTML={{ __html: target.body }}
            as={`article`}
            sx={{
              '& > hr': {
                borderTop: `1px solid #257fbf`,
              },
              '& > h2': {
                marginTop: { base: '16px', lg: '16px' },
                marginBottom: { base: '11px', lg: `16px` },
                width: '100%',
                fontSize: { base: '18px', lg: '20px' },
                color: '#000000',
                fontWeight: 'bold',
                lineHeight: '1.3em',
                borderBottom: `initial`,
              },
              '& > h3': {
                fontSize: { base: '13px', lg: `18px` },
                marginTop: { base: '15px', lg: `0` },
                marginBottom: { lg: `20px` },
                color: '#000000',
              },
              '& > p': {
                fontSize: {
                  base: `14px`,
                  lg: `14px`,
                },
                color: '#000000',
                fontWeight: 400,
                lineHeight: { base: `1.5em`, lg: `1.5em` },
                margin: { base: `15px 0`, lg: 0 },
              },
              '& > p > a': {
                fontSize: { base: `11px`, lg: `16px` },
                fontWeight: 400,
                lineHeight: `1.2em`,
                textDecorationLine: 'underline',
                color: `#003968`,
                mr: `0`,
                ml: `auto`,
                display: `block`,
                width: `fit-content`,
                textAlign: `right`,
                ':hover': {
                  filter: `opacity(50%)`,
                  transition: `all .3s`,
                },
              },
              '& > p > img:not(.emoji)': {
                marginY: { lg: `30px` },
                w: { base: `100%` },
              },
            }}
          />
        </div>
      </section>
    </div>
  );
};
