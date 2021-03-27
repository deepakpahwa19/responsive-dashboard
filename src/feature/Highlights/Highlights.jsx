import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCard } from '../../components';
import { getHighlightsAction } from './redux/actions/actions/highlightsAction';

export const Highlights = ({ onClickZoom, selectedCard }) => {
    const { dataSet, stats, filter } = useSelector(state => state.highlights);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHighlightsAction());
    }, [dispatch]);

    if (!!dataSet && !!stats && !!filter)
        return (
            <DetailCard
                name='Highlights'
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
