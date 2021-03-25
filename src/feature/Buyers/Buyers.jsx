import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCard } from '../../components';
import { getBuyersAction } from './redux/actions/actions/buyersAction';

export const Buyers = () => {
    const { dataSet, stats, filter } = useSelector(state => state.buyers);
    console.log('data =>', dataSet);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuyersAction());
    }, [dispatch]);

    if (!!dataSet && !!stats && !!filter)
        return <DetailCard name='Buyers' dataSet={dataSet} stats={stats} filter={filter}></DetailCard>;
    // return <div>Test</div>;
    return <div>Hello</div>;
};
