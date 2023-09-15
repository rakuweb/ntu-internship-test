// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { routes } from 'constants/routes';

// type layer
export type DataProps = any; // eslint-disable-line
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { id, labeltext } = props;
  const href = `${routes.tag}/${id}`;
  return (
    <Box m={`0 4px 4px 0`}>
      <InternalLink href={href}>
        <Box
          bg={`#21D4FD`}
          color={`white`}
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
