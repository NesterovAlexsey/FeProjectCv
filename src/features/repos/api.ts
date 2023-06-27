import IRepo from './types/IRepo';

// eslint-disable-next-line import/prefer-default-export
export async function getAllRepository(): Promise<IRepo[]> {
    const res = await fetch('https://api.github.com/users/NesterovAlexsey/repos?per_page=100');
    return res.json();
  }
