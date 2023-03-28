// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer';
import { RegisterGradeCheck } from '~/components/organisms/RegisterGradeCheck';
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
        <RegisterGradeCheck />
      </Box>
      <Footer />
    </Box>
  );
};
