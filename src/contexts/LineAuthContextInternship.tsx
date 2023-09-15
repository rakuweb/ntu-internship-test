import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
// import { liff as __liff } from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';

import { LIFF_ID_INTERNSHIP } from 'constants/env';

export type Liff = any; // eslint-disable-line

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
      mockDidLoaded?: (parameter?: any) => { [method: string]: any }; // eslint-disable-line
    };
  }>
> = ({ children, liffId, mock }) => {
  const [_liff, setLiffSDK] = useState<Liff | undefined>();
  const [liff, setLiff] = useState<Liff | undefined>();
  const [connected, setConnected] = useState<boolean>(false);

  // Load LIFF SDK
  useEffect(() => {
    // if (typeof window === 'undefined') return;
    // if (didLoadRef.current === true) return;
    // didLoadRef.current = true;
    // eslint-disable-next-line
    import('@line/liff').then((data: any) => {
      setLiffSDK(data?.liff);
      setConnected(true);
    });
  }, []);

  // init Liff
  useEffect(() => {
    if (!connected) return;
    if (!_liff) return;
    if (mock?.enable) {
      _liff.use(mock?.plugin ?? new LiffMockPlugin());
    }
    (
      _liff.init({
        liffId,
        mock: mock?.enable ?? false,
        // eslint-disable-next-line
      } as any) as any
    ).then(() => {
      if (mock?.mockDidLoaded) {
        // eslint-disable-next-line
        (_liff as any).$mock.set(mock.mockDidLoaded);
      }
      setLiff(_liff);
    });
  }, [_liff, mock, liffId, _liff?.init, connected]);

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
      liffId = LIFF_ID_INTERNSHIP ?? '';
      mock = false;
      break;
    case 'development':
      liffId = LIFF_ID_INTERNSHIP ?? '';
      mock = false;
      break;
    case 'test':
      liffId = 'dummyId';
      mock = true;
      break;
  }
  return { liffId, mock };
};
