import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const useScroll = (): void => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // element.scrollTo({ behavior: 'smooth', top: 0 });
      }
    }
  }, [hash]);
};
