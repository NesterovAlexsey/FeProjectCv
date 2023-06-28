import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRepo } from './selectors';
import { useAppDispatch } from '../../store';
import { loadRepos } from './repoSlice';
import IRepo from './types/IRepo';

export default function Repo(): JSX.Element {
    const repos = useSelector(selectRepo);
    const dispatch = useAppDispatch();
    const reposWithFilter = repos.filter((element : IRepo) => element.description !== null);

    useEffect(() => {
        dispatch(loadRepos());
      }, [dispatch]);

    return (
        <>
        <div>
            Info about repository
        </div>
        <ul>
        {reposWithFilter.map((el) => (
          <li key={el.id}>
            {el.name}
            <br />
            {el.language}
            <br />
            {el.html_url}
            <br />
            {el.description}
          </li>
        )
        )}
        </ul>
        </>
    );
}
