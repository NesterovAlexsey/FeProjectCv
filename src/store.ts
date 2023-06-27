import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productsReducer from './features/products/productsSlice';
import repoSlice from './features/repos/repoSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    repos: repoSlice,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
