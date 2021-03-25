import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../views';

export const DetailCard = ({ name, dataSet, stats, filter }) => {
    const [sortedData, setSortedData] = useState(dataSet.data);
    const handleSortDropDownChange = useCallback(
        event => {
            const { value } = event.target;
            console.log(value);
            let newSortedData = dataSet.data.map(obj => ({ ...obj }));
            if (value === 'Sort by Value') {
                newSortedData = newSortedData.sort((a, b) => a.value - b.value);
            } else {
                newSortedData = newSortedData.sort((a, b) =>
                    a.label.toLowerCase().localeCompare(b.label.toLowerCase())
                );
            }
            setSortedData(newSortedData);
        },
        [dataSet]
    );

    return (
        <Card
            name={name}
            header={dataSet.header}
            data={sortedData}
            onChangeSort={handleSortDropDownChange}
            stats={stats}
            filter={filter}
            onChangeHandler={handleSortDropDownChange}
        ></Card>
    );
};
