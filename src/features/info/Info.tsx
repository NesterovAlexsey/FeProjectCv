import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import IInfo from './types/IInfo';
import { RootState, useAppDispatch } from '../../store';
import { loadInfos } from './infoSlice';

export default function Info(): JSX.Element {
const infos = useSelector((state:RootState):IInfo => state.infos.infos);
const dispatch = useAppDispatch();

useEffect(() => {
    dispatch(loadInfos());
}, [dispatch]);

    return (
        <>
        <div>
            Info page
        </div>
        <div>
            <p>Name: {infos.name} </p>
            <img src={infos.avatar_url} alt="MPhoto" />
            <p>Location: {infos.location} </p>
        </div>
        </>
    );
}
