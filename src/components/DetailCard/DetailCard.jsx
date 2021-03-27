import React, { useCallback, useState } from 'react';
import { Card } from '../../views';

export const DetailCard = React.memo(({ name, selectedCard, dataSet, stats, filter, onClickZoom }) => {
    const [sortedData, setSortedData] = useState(dataSet.data);
    const [expand, setExpand] = useState(false);
    const handleOnZoomIn = useCallback(() => {
        setExpand(true);
        onClickZoom(name);
    }, [name, onClickZoom]);

    const handleOnZoomOut = useCallback(() => {
        setExpand(false);
        onClickZoom('');
    }, [onClickZoom]);
    // const { expand, setExpand } = useContext();
    const handleSortDropDownChange = useCallback(
        event => {
            const { value } = event.target;
            console.log(value);
            let newSortedData = dataSet.data.map(obj => ({ ...obj }));
            if (value === 'Sort by Value') {
                newSortedData = newSortedData.sort((a, b) => a.value - b.value);
            } else {
                newSortedData = newSortedData.sort((a, b) => {
                    const aLow = a.label.toLowerCase();
                    const bLow = b.label.toLowerCase();
                    return bLow > aLow ? -1 : aLow > bLow ? 1 : 0;
                });
            }
            setSortedData(newSortedData);
        },
        [dataSet]
    );

    if ((selectedCard && selectedCard === name) || !selectedCard) {
        return (
            <Card
                name={name}
                selectedCard={selectedCard}
                header={dataSet.header}
                data={sortedData}
                onChangeSort={handleSortDropDownChange}
                stats={stats}
                filter={filter}
                onChangeHandler={handleSortDropDownChange}
                handleOnZoomIn={handleOnZoomIn}
                handleOnZoomOut={handleOnZoomOut}
                expand={expand}
            ></Card>
        );
    }
    return null;
});
