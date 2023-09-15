import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useLiff } from 'contexts/LineAuthContext';
import { routes } from 'constants/routes';

export const useCheckAccount = () => {
  const [existAccount, _setExistAccount] = useState<boolean>(false);
  const { liff } = useLiff();
  const router = useRouter();

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      router.push(routes.register);
    }
  }, [liff]); // eslint-disable-line

  return { existAccount };
};
