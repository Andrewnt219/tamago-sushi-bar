import { useState } from 'react';

type useToggleFn = () => [boolean, () => void];

export const useToggle: useToggleFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggleOpen];
};
