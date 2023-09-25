import { Checkbox, Flex } from '@chakra-ui/react';
import { InternalLink } from '../links/InternalLink';

const Policy = () => {
  return (
    <Flex
      alignItems={`center`}
      w={`fit-content`}
      mx={`auto`}
      mt={{ base: `${30 / 3.75}vw`, md: `${80 / 19.2}vw` }}
      mb={{ base: `${10 / 3.75}vw`, md: `${20 / 19.2}vw` }}
      fontSize={{
        base: `${12 / 3.75}vw`,
        md: `${13 / 7.68}vw`,
        lg: `${22 / 19.2}vw`,
      }}
      fontWeight={`bold`}
    >
      <Checkbox
        size={{ base: `sm`, lg: `sm`, '2xl': `lg` }}
        mr={{ base: `${10 / 3.75}vw`, md: `${20 / 19.2}vw` }}
        isInvalid
      />
      <InternalLink href={`/`} as={`span`} borderBottom={`2px solid #39414E`}>
        プライバシーポリシー
      </InternalLink>
      に同意する
    </Flex>
  );
};

export default Policy;
