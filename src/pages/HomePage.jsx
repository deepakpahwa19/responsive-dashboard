import React from 'react';
import styled from 'styled-components';
import { Buyers } from '../feature/Buyers/Buyers';
import { Countries } from '../feature/Countries';
import { Highlights } from '../feature/Highlights';
import { Income } from '../feature/Income';

export const HomePage = () => {
    return (
        <>
            <MainSectionStyle>
                <Highlights />
                {/* <Buyers />
                <Countries />
                <Income /> */}
            </MainSectionStyle>
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
