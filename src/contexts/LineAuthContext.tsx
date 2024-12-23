import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { liff as __liff } from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';

import { LIFF_ID } from 'constants/env';

export type Liff = typeof __liff;

const LiffContext = createContext<{
  liff?: Liff;
}>({});

export const useLiff = () => useContext(LiffContext);

export const LiffProvider: FC<
  PropsWithChildren<{
    liffId: string;
    mock?: {
      enable: boolean;
      plugin?: LiffMockPlugin;
      // eslint-disable-next-line
      mockDidLoaded?: (parameter?: any) => { [method: string]: any };
    };
  }>
> = ({ children, liffId, mock }) => {
  const didLoadRef = useRef(false);
  const [_liff, setLiffSDK] = useState<Liff | undefined>();
  const [liff, setLiff] = useState<Liff | undefined>();

  // Load LIFF SDK
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (didLoadRef.current === true) return;
    didLoadRef.current = true;
    // eslint-disable-next-line
    import('@line/liff').then((data: any) => setLiffSDK(data?.liff));
  }, []);

  // init Liff
  useEffect(() => {
    if (!_liff) return;
    if (mock?.enable) {
      _liff.use(mock?.plugin ?? new LiffMockPlugin());
    }
    _liff
      .init({
        liffId,
        mock: mock?.enable ?? false,
        // eslint-disable-next-line
      } as any)
      .then(() => {
        if (mock?.mockDidLoaded) {
          // eslint-disable-next-line
          (_liff as any).$mock.set(mock.mockDidLoaded);
        }
        setLiff(_liff);
      });
  }, [_liff, mock, liffId]);

  return (
    <LiffContext.Provider
      value={{
        liff,
      }}
    >
      {children}
    </LiffContext.Provider>
  );
};

export const generateEnv = () => {
  let liffId: string;
  let mock: boolean;
  switch (process.env.NODE_ENV) {
    case 'production':
      liffId = LIFF_ID ?? '';
      mock = false;
      break;
    case 'development':
    case 'test':
      liffId = 'dummyId';
      mock = true;
      break;
  }
  return { liffId, mock };
};
