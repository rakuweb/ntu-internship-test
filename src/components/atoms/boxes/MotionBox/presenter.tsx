// import layer
import { VFC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

// type layer
export type PresenterProps = BoxProps & HTMLMotionProps<'div'>;

// presenter
export const Presenter: VFC<PresenterProps> = motion(Box);
