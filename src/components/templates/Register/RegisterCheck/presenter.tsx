// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Footer } from 'components/footers/Footer';
import { Header } from 'components/headers/Header';
import { useFormProgressStore } from 'features/formProgress/hooks';
import { RegisterCheck } from '~/components/organisms/RegisterCheck';
import { StepBar } from '~/components/organisms/StepBar';
import { styles } from './styles';

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
