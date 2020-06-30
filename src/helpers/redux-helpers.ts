import { Dispatch, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const asyncDispatchWrapper = async (
  callback: () => void,
  dispatch: Dispatch,
  actionFailure?: ActionCreatorWithPayload<any>
) => {
  try {
    await callback();
  } catch (error) {
    console.log(error);
    actionFailure &&
      dispatch(
        actionFailure(error?.response?.data?.error ?? 'Something went wrong')
      );
  }
};
