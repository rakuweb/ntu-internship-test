// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'organisms/headers/Header';
import { Footer } from 'organisms/footers/Footer';
import { RegisterCheck } from '~/components/organisms/RegisterCheck';
import { StepBar } from '~/components/organisms/StepBar';
import { styles } from './styles';
import { useFormProgressStore } from 'features/formProgress/hooks';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ isHidden }) => {
  const progress = useFormProgressStore((state) => state.progress);

  return (
    <Box display={isHidden ? 'none' : `initial`}>
      <Header />
      <Box as={`main`} css={styles}>
        <section className="clinics-tab"></section>
        <StepBar current={progress} />
        <RegisterCheck />
      </Box>
      <Footer />
    </Box>
  );
};
