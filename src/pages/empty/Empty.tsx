import React from 'react';
import { useScrollToTop, useTitle } from '../../hook';

interface EmptyProps {}

const Empty: React.FC<EmptyProps> = () => {
  useScrollToTop();
  useTitle('Page not found');

  return <div>Empty</div>;
};

export default Empty;
