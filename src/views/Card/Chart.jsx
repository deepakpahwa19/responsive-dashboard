import React from 'react';
import styled from 'styled-components';

export const Chart = ({ header, data, filter }) => {
    return (
        <ChartStyle>
            <Header>
                <div>{(filter || {}).label}</div>
                <CenteredDiv style={{ color: 'green' }}>
                    <div>{(filter || {}).value}%</div>
                </CenteredDiv>
            </Header>
            <HeaderRow>
                <H3 width='60%'>{header[0]}</H3>
                <H3 width='40%'>{header[1]}</H3>
            </HeaderRow>
            <ContentStyle>
                {data.map((dataObj, index) => (
                    <Row key={dataObj.label} index={index}>
                        <CenteredDiv width='60%' color={dataObj.color}>
                            {dataObj.label}
                        </CenteredDiv>
                        <CenteredDiv width='40%' color={dataObj.color}>
                            {dataObj.value}
                        </CenteredDiv>
                    </Row>
                ))}
            </ContentStyle>
        </ChartStyle>
    );
};

const ChartStyle = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.1rem solid grey;
`;

const Header = styled(FlexContainer)`
    height: 50px;
    font-size: 20px;
    font-weight: bold;

    & div:nth-child(1) {
        width: 65%;
        text-align: left;
        padding: 10px;
    }
    & div:nth-child(2) {
        width: 35%;
        height: 100%;
        border-left: 1px solid grey;

        & div {
            padding: 12px;
            margin: auto;
            text-align: center;
        }
    }
`;

const Row = styled(FlexContainer)`
    height: max(20%, 43px);
    min-height: 43px;
    background-color: ${({ index }) => (index % 2 === 0 ? '#fff' : '#f7f8f9')};
`;

const HeaderRow = styled(FlexContainer)`
    min-height: 50px;
`;

const ContentStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: overlay;
`;

const H3 = styled.h3`
    text-align: center;
    width: ${({ width }) => width || '100%'};
`;

const CenteredDiv = styled.div`
    text-align: center;
    width: ${({ width }) => width || '100%'};
    color: ${color => (color ? color : '#FFF')};
`;
