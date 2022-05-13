import {
  Action,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import themeSlice from 'redux/theme/index';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;
export type ThunkAppDispath = ThunkDispatch<IRootState, void, Action>;
export const useAppThunkDisapatch = () => useDispatch<ThunkAppDispath>();
