import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRepo } from './selectors';
import { useAppDispatch } from '../../store';
import { loadRepos } from './repoSlice';
import IRepo from './types/IRepo';

export default function Repo(): JSX.Element {
  const repos = useSelector(selectRepo);
  const dispatch = useAppDispatch();
  const reposWithFilter = repos.filter((element: IRepo) => element.description !== null);

  useEffect(() => {
    dispatch(loadRepos());
  }, [dispatch]);

  function getLogo(logo: string): string {
    switch (logo) {
      case 'TypeScript':
        return './icons/Typescript_logo.png';
      case 'JavaScript':
        return './icons/Js_logo.png';
      case 'Java':
        return './icons/Java-Logo.png';
      default:
        return logo;
    }
  }

  return (
    <ul>
      {reposWithFilter.map((el) => (
        <li key={el.id}>
          Project name: {el.name}
          <br />
          Project description: {el.description}
          <br />
          <div>
            <img src={getLogo(el.language)} alt={el.language} />
          </div>
          <Link to={el.html_url} target="_blank">
            Check Code!
          </Link>
          <br />
          -------------------------------------
        </li>
      )
      )}
    </ul>
  );
}
