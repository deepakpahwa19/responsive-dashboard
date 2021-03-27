import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { FaArrowRight } from 'react-icons/fa';

export const SideBar = ({ stats = {} }) => {
    return (
        <SideBarStyle>
            <Container>
                <Header>
                    <H3>STATS:</H3>
                </Header>
                {Object.values(stats).map((stat, index) => (
                    <ProgressBar key={stat.label} label={stat.label} width={stat.value}></ProgressBar>
                ))}
            </Container>
            <Nav>
                <Anchor href='/get_highlight' target='_blank'>
                    <span>View API</span>
                    <RightArrowIcon />
                </Anchor>
            </Nav>
        </SideBarStyle>
    );
};

export const SideBarStyle = styled.div`
    width: 35%;
    height: 100%;
    background: #20649b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: #fff;
`;

const Nav = styled.nav`
    color: rgb(68, 68, 68);
    width: 100%;
`;

const Anchor = styled.a`
    display: block;
    line-height: 50px;
    text-decoration: none;
    text-align: center;
    color: #fff;
    background-color: rgb(73, 180, 232);
`;

const RightArrowIcon = styled(FaArrowRight)`
    float: right;
    margin: 17px 10px;
`;

const H3 = styled.h3`
    text-align: center;
`;

const Header = styled.div`
    height: 50px;
    padding: 12px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    /* height: 80%; */
    padding: 5%;
`;
