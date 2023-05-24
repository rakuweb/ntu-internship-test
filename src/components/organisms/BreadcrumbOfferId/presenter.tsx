// import layer
import { FC } from 'react';
import { css } from '@emotion/react';

import { InternalLink } from '~/components/links/InternalLink';
import { Box } from '@chakra-ui/react';
// type layer
export type PresenterProps = { titles?: string[] };

// presenter
export const Presenter: FC<PresenterProps> = ({ titles }) => {
  return (
    <Box display={{ base: `none`, md: `block` }} css={styles}>
      <section className="breadcrumb">
        <div className="breadcrumb__container">
          <InternalLink
            className="breadcrumb__container__link"
            href="/"
            display={`inline`}
          >
            HOME
          </InternalLink>
          <Box mx={`${10 / 19.2}vw`}>{`>`}</Box>
          <Box>{titles}</Box>
          {/* {titles?.map((title) => (
            <a key={title} className="breadcrumb__container__link">
              {title}
            </a>
          ))} */}
        </div>
      </section>
    </Box>
  );
};
// styles
const styles = css`
  .breadcrumb {
    background-color: #f5f5f5;
    width: 100%;
    justify-content: center;
    padding: ${30 / 19.2}vw 0 ${24 / 19.2}vw ${48 / 19.2}vw;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .breadcrumb__container {
    display: flex;
    font-size: ${18 / 19.2}vw;
    color: #000000;
  }

  .breadcrumb__container__link{
    color:#41A4FD;
    font-weight:bold
  }

  .breadcrumb__container__link:hover {
    opacity: 0.8;
  }
  }
`;
