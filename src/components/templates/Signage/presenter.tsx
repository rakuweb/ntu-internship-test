// import layer
import { FC, useEffect, useMemo, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { CMS_URL } from 'constants/env';
import { useSignageStore } from 'features/signage/hooks';
import { selectVideos } from 'features/signage/selectors';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const videos = useSignageStore(selectVideos);
  const [videoUrl, setVideoUrl] = useState<string>(
    `${CMS_URL}${videos[0].url}`
  );
  const [_clock, setClock] = useState(Math.random);
  const lengthVideos = useMemo(() => {
    return videos.length;
  }, [videos]);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setVideoUrl(`${CMS_URL}${videos[hour % lengthVideos].url}`);
  }, [videos]); // eslint-disable-line

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(Math.random());
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Box w={`100vw`} h={`100vh`} as={`main`}>
        <video
          width={1920}
          height={1280}
          preload={'none'}
          controls
          loop
          autoPlay
          muted
          src={videoUrl}
          playsInline
        />
      </Box>
    </>
  );
};
