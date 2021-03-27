import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCard } from '../../components/';
import { getCountriesAction } from './redux/actions/actions/countriesAction';

export const Countries = ({ onClickZoom }) => {
    const { dataSet, stats, filter } = useSelector(state => state.countries);
    console.log('data =>', dataSet);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountriesAction());
    }, [dispatch]);

    if (!!dataSet && !!stats && !!filter)
        return (
            <DetailCard
                name='Countries'
                dataSet={dataSet}
                stats={stats}
                filter={filter}
                onClickZoom={onClickZoom}
            ></DetailCard>
        );
    // return <div>Test</div>;
    return <div>Hello</div>;
};
