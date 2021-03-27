import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCard } from '../../components';
import { getBuyersAction } from './redux/actions/actions/buyersAction';

export const Buyers = ({ onClickZoom, selectedCard }) => {
    const { dataSet, stats, filter } = useSelector(state => state.buyers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuyersAction());
    }, [dispatch]);

    if (!!dataSet && !!stats && !!filter)
        return (
            <DetailCard
                name='Buyers'
                selectedCard={selectedCard}
                dataSet={dataSet}
                stats={stats}
                filter={filter}
                onClickZoom={onClickZoom}
            ></DetailCard>
        );
    // return <div>Test</div>;
    return <div>Hello</div>;
};
