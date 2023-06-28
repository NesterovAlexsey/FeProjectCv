import { RootState } from '../../store';
import IRepo from './types/IRepo';

// eslint-disable-next-line import/prefer-default-export
export const selectRepo = (state:RootState):IRepo[] => state.repos.repos;
