import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRepo } from './selectors';
import { useAppDispatch } from '../../store';
import { loadRepos } from './repoSlice';
import IRepo from './types/IRepo';
import styles from './Repo.module.css';

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
    <ul className={styles.general}>
      {reposWithFilter.map((el) => (
        <li className={styles.card} key={el.id}>
          <div className={styles.nameAndLogo}>
            <div className={styles.cardHeader}>
              Project name: {el.name}
            </div>
            <div>
              <img className={styles.icon} src={getLogo(el.language)} alt={el.language} />
            </div>
          </div>
          <div>
            <div>
              Description: {el.description}
            </div>
            <div className={styles.button}>
              <div className={styles.buttonSize}>
                <Link className={styles.link} to={el.html_url} target="_blank">
                  Check Code!
                </Link>
              </div>
            </div>
          </div>
        </li>
      )
      )}
    </ul>
  );
}
