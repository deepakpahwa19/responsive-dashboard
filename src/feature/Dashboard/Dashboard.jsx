import React, { useState } from 'react';
import styled from 'styled-components';
import { Buyers } from '../Buyers/Buyers';
import { Countries } from '../Countries/Countries';
import { Highlights } from '../Highlights/Highlights';
import { Income } from '../Income/Income';

export const Dashboard = () => {
    const [zoomComponentName, setZoomComponentName] = useState('');

    const handleZoom = name => setZoomComponentName(name);

    return (
        <>
            <MainSectionStyle>
                <Highlights onClickZoom={handleZoom} selectedCard={zoomComponentName} />
                <Buyers onClickZoom={handleZoom} selectedCard={zoomComponentName} />
                <Countries onClickZoom={handleZoom} selectedCard={zoomComponentName} />
                <Income onClickZoom={handleZoom} selectedCard={zoomComponentName} />
            </MainSectionStyle>
        </>
    );
};

const MainSectionStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: calc(100vh - 7rem);
    margin-top: 7rem;
    width: 100%;
`;
