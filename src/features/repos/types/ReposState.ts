import IRepo from './IRepo';

export default interface ReposState {
    repos: IRepo[],
    userName?:string,
    error?: string,
}
