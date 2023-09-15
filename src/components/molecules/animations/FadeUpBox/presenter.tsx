// import layer
import { FC, useEffect } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { MotionBox } from 'atoms/boxes/MotionBox';

// type layer
export type StyleProps = BoxProps;
export type AnimationProps = { fadeLength?: string | number; isX?: boolean };
export type PresenterProps = StyleProps & AnimationProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  fadeLength,
  children,
  isX,
  ...props
}) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const variants = isX
    ? {
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1 },
      },
      hidden: { opacity: 0, x: fadeLength ?? 300 },
    }
    : {
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1 },
      },
      hidden: { opacity: 0, y: fadeLength ?? 200 },
    };

  // effect
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <Box ref={ref} {...props}>
      <MotionBox animate={controls} variants={variants} initial={'hidden'}>
        {children}
      </MotionBox>
    </Box>
  );
};
