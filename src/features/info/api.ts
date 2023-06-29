import IInfo from './types/IInfo';

export default async function getAllInfo(): Promise<IInfo> {
    const res = await fetch('https://api.github.com/users/NesterovAlexsey');
    return res.json();
}
