import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../features/uiSlice';

export const useLoadingState = (): boolean => {
  return useSelector(isLoadingSelector);
};
