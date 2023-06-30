import IRepo from './IRepo';

export default interface ReposState {
    repos: IRepo[],
    // function for changing user
    userName?:string,
    error?: string,
}
