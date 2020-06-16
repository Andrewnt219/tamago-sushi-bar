import React from 'react';
import { useLoadingState } from '../hook';
import { LoadingScreen } from '../components/ui/LoadingScreen/LoadingScreen';

interface useLoadingScreen {}

export const Loading: React.FC<useLoadingScreen> = ({ children }) => {
  const isLoading = useLoadingState();

  return (
    <React.Fragment>
      {isLoading && <LoadingScreen />}
      {children}
    </React.Fragment>
  );
};
