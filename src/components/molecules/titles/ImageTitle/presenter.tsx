// import layer
import { VFC, ElementType, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Image, ImageProps } from 'atoms/Image';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = {
  as?: ElementType;
  img: ImageProps;
  children: ReactNode;
};

// presenter
export const Presenter: VFC<PresenterProps> = ({
  as = `h2`,
  img,
  children,
}) => {
  const Tag = as as ElementType;

  return (
    <Box css={styles}>
      <div className="title">
        <Box className={`icon`} position={`relative`} height={`61px`}>
          <Image {...img} h={`61px`} w={`auto`} alt={``} />
        </Box>
        <Tag className="text-1 yugothic-bold-navy-blue-32px">{children}</Tag>
      </div>
    </Box>
  );
};

const styles = css`
  .title {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    width: fit-content;
  }

  .icon {
    object-fit: contain;
    height: 61px;
    width: auto;
  }

  .text-1 {
    letter-spacing: 0;
    margin-left: 0.5rem;
    white-space: nowrap;
    font-size: var(--font-size-xxl);
  }

  ${mq[1]} {
    .title {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
      width: fit-content;
    }

    .icon {
      object-fit: cover;
      width: auto;
      height: 61px;
    }

    .text-1 {
      letter-spacing: 0;
      margin-left: 0.5rem;
      white-space: nowrap;
      font-size: var(--font-size-xxxl);
    }
  }
`;
