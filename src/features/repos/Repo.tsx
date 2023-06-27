import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRepo } from './types/selectors';
import { useAppDispatch } from '../../store';
import { loadRepos } from './repoSlice';

export default function Repo(): JSX.Element {
    const repos = useSelector(selectRepo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadRepos());
      }, [dispatch]);

    return (
        <>
        <div>
            Info about repository
        </div>
        <ul>
        {repos.map((el) => (
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
