import { useState, useEffect } from 'react';

export const useClient = (initial = false) => {
  const [isClient, setIsClient] = useState(initial);

  useEffect(() => {
    if (isClient) return;

    setIsClient(true);
  }, []); // eslint-disable-line

  return { isClient, setIsClient };
};
