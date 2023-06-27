import { RootState } from '../../../store';
import Repo from './Repo';

// eslint-disable-next-line import/prefer-default-export
export const selectRepo = (state:RootState):Repo[] => state.repos.repos;
