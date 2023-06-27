import Repo from './Repo';

export default interface ReposState {
    repos: Repo[],
    error?: string,
}
