import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title + ' | Tamago Sushi Bar';
  }, [title]);
};
