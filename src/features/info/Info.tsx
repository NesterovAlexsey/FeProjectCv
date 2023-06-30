import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import IInfo from './types/IInfo';
import { RootState, useAppDispatch } from '../../store';
import { loadInfos } from './infoSlice';
import styles from './Info.module.css';

export default function Info(): JSX.Element {
    const infos = useSelector((state: RootState): IInfo => state.infos.infos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadInfos());
    }, [dispatch]);

    return (
        <div className={styles.bigBox}>
            <div>
                <img className={styles.avatar} src={infos.avatar_url} alt="MPhoto" />
            </div>
            <div className={styles.userInfo}>
                <p className={styles.userName}><h3>{infos.name}</h3></p>
                <p>Location: {infos.location} </p>
            </div>
        </div>
    );
}
