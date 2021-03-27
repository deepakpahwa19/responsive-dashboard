import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCard } from '../../components';
import { getIncomeAction } from './redux/actions/actions/incomeAction';

export const Income = ({ onClickZoom }) => {
    const { dataSet, stats, filter } = useSelector(state => state.income);
    console.log('data =>', dataSet);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIncomeAction());
    }, [dispatch]);

    if (!!dataSet && !!stats && !!filter)
        return (
            <DetailCard
                name='Income'
                dataSet={dataSet}
                stats={stats}
                filter={filter}
                onClickZoom={onClickZoom}
            ></DetailCard>
        );
    // return <div>Test</div>;
    return <div>Hello</div>;
};
