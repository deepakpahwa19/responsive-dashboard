import React from 'react';
import styled from 'styled-components';
import { FaExpand } from 'react-icons/fa';
import { SideBar } from './Sidebar';
import { Chart } from './Chart';
import { DropDownView } from '../DropDownView/DropDownView';

export const Card = ({ name, header, data, stats, filter, value, onChangeHandler, handleOnZoom }) => {
    return (
        <CardStyle>
            <Header>
                <h3>{name}</h3>
                <DivStyle>
                    <DropDownView
                        name={name}
                        value={value}
                        options={['Sort by Label', 'Sort by Value']}
                        onChangeHandler={onChangeHandler}
                    ></DropDownView>
                    <ExpandIcon onClick={handleOnZoom}></ExpandIcon>
                </DivStyle>
            </Header>
            <Content>
                <SideBar stats={stats}></SideBar>
                <Chart header={header} data={data} filter={filter}>
                    Chart
                </Chart>
            </Content>
        </CardStyle>
    );
};

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: #144c88;
    padding: 1em 1.5em;
    border-top: 4px solid #7dd343;
    color: #fff;
    height: min(60px, 25%);
`;

const DivStyle = styled.div`
    display: flex;
`;

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 300px;
    box-shadow: 3px 3px 5px 0 rgb(0 0 0 / 25%);
    margin: 10px auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 75%;
`;

const ExpandIcon = styled(FaExpand)`
    margin-left: 10px;
    margin-top: 4px;
`;
