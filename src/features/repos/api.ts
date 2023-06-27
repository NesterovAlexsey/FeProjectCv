import Repo from './types/Repo';

// eslint-disable-next-line import/prefer-default-export
export async function getAllRepository(): Promise<Repo[]> {
    const res = await fetch('https://api.github.com/users/NesterovAlexsey/repos?per_page=100');
    return res.json();
  }
