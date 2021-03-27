import React, { useState } from 'react';
import styled from 'styled-components';
import { Buyers } from '../Buyers/Buyers';
import { Countries } from '../Countries/Countries';
import { Highlights } from '../Highlights/Highlights';
import { Income } from '../Income/Income';

export const Dashboard = () => {
    const [zoomComponentName, setZoomComponentName] = useState('');

    const handleZoom = name => setZoomComponentName(name);
    let content;
    switch (zoomComponentName) {
        case 'Highlights':
            content = <Highlights onClickZoom={handleZoom} />;
            break;
        case 'Buyers':
            content = <Buyers onClickZoom={handleZoom} />;
            break;
        case 'Countries':
            content = <Countries onClickZoom={handleZoom} />;
            break;
        case 'Income':
            content = <Income onClickZoom={handleZoom} />;
            break;
        default:
            content = (
                <>
                    <Highlights onClickZoom={handleZoom} />
                    <Buyers onClickZoom={handleZoom} />
                    <Countries onClickZoom={handleZoom} />
                    <Income onClickZoom={handleZoom} />
                </>
            );
            break;
    }
    return (
        <>
            <MainSectionStyle>{content}</MainSectionStyle>
        </>
    );
};

const MainSectionStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: calc(100vh - 60px);
    width: 100%;
`;
