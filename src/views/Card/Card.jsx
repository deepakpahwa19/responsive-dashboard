import React from 'react';
import styled from 'styled-components';
import { FaExpand } from 'react-icons/fa';
import { SideBar } from './Sidebar';
import { Chart } from './Chart';
import { DropDownView } from '../DropDownView/DropDownView';

export const Card = ({ name, header, data, stats, filter, value, onChangeHandler }) => {
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
                    <ExpandIcon></ExpandIcon>
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
    position: relative;
    height: 60px;
`;

const DivStyle = styled.div`
    display: flex;
`;

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 370px;
    width: 45vw;
    min-width: 300px;
    box-shadow: 3px 3px 5px 0 rgb(0 0 0 / 25%);
    margin: 10px auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(370px - 60px);
`;

const ExpandIcon = styled(FaExpand)`
    margin-left: 10px;
    margin-top: 4px;
`;
