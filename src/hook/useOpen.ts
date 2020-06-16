import { useState } from 'react';

type useOpenFn = () => [boolean, () => void];

export const useOpen: useOpenFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggleOpen];
};
