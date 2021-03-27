import React from 'react';
import styled from 'styled-components';
import { Nav, NavbarContainer } from '../../views/NavBarView/NavbarView';

export const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <h1 to='/'>ABC Engineering of College</h1>
                <Anchor href='src/assets/assignment.postman_collection.json' download>
                    Download Postman Collection
                </Anchor>
            </NavbarContainer>
        </Nav>
    );
};

const Anchor = styled.a`
    color: '#fff';
    text-decoration: none;
    padding: 0.35rem 0.6rem;
    background-color: aqua;
`;
