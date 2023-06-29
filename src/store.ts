import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import repoSlice from './features/repos/repoSlice';
import infoSlice from './features/info/infoSlice';

const store = configureStore({
  reducer: {
    repos: repoSlice,
    infos: infoSlice,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
