import { useEffect } from 'react';

export const useLockScroll = () => {
  useEffect(() => {
    const html = document.querySelector('html')!;
    html.style.overflow = 'hidden';

    return () => {
      html.style.overflow = 'intial';
    };
  }, []);
};
