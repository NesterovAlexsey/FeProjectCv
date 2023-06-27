import IRepo from './IRepo';

export default interface ReposState {
    repos: IRepo[],
    error?: string,
}
