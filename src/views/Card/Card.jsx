import React from 'react';
import styled from 'styled-components';
import { FaExpand, FaMinus } from 'react-icons/fa';
import { SideBar } from './Sidebar';
import { Chart } from './Chart';
import { DropDownView } from '../DropDownView/DropDownView';

export const Card = React.memo(
    ({
        name,
        selectedCard,
        header,
        data,
        stats,
        filter,
        value,
        onChangeHandler,
        handleOnZoomIn,
        handleOnZoomOut,
        expand
    }) => {
        console.log('Inside Card , expand=>', name, expand);
        return (
            <CardStyle expand={expand}>
                <Header>
                    <h3>{name}</h3>
                    <DivStyle>
                        <DropDownView
                            name={name}
                            value={value}
                            options={['Sort by Label', 'Sort by Value']}
                            onChangeHandler={onChangeHandler}
                        ></DropDownView>
                        {expand ? <ZoomOutIcon onClick={handleOnZoomOut} /> : <ZoomInIcon onClick={handleOnZoomIn} />}
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
    }
);

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: #144c88;
    padding: 1em 1.5em;
    border-top: 4px solid #7dd343;
    color: #fff;
    height: 60px;
`;

const DivStyle = styled.div`
    display: flex;
`;

const CardStyle = styled.div`
    /* display: ${({ shouldDisplay }) => (shouldDisplay ? 'flex' : 'none')}; */
    display: flex;
    flex-direction: column;
    height: ${({ expand }) => expand && '100%'};
    width: ${({ expand }) => expand && '100%'};
    min-width: max(300px, 45vw);
    min-height: 400px;
    box-shadow: 3px 3px 5px 0 rgb(0 0 0 / 25%);
    margin: 10px auto;
    position: ${({ expand }) => (expand ? 'absolute' : 'relative')};
    top: ${({ expand }) => (expand ? '0' : '')};
    left: ${({ expand }) => (expand ? '0' : '')};
    right: ${({ expand }) => (expand ? '0' : '')};
    bottom: ${({ expand }) => (expand ? '0' : '')};
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const ZoomInIcon = styled(FaExpand)`
    margin-left: 10px;
    margin-top: 4px;
`;

const ZoomOutIcon = styled(FaMinus)`
    margin-left: 10px;
    margin-top: 4px;
`;
