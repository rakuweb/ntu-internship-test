// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Image } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { mq } from '~/constants/styles';
import { routes } from 'constants/routes';

// type layer
export type DataProps = any;
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { id, labeltext } = props;
  const href = `${routes.offers}/${id}`;
  return (
    <Box m={`0 8px 8px 0`}>
      <InternalLink href={href}>
        <Box
          color={`#21D4FD`}
          bg={`white`}
          border={`1px solid`}
          p={`4px 12px`}
          fontSize={`12px`}
          borderRadius={{ base: `4px`, lg: `5px` }}
          fontWeight={`400`}
          {...props}
        >
          {labeltext}
        </Box>
      </InternalLink>
    </Box>
  );
};

// styles
const styles = css`
   {
  }
`;
