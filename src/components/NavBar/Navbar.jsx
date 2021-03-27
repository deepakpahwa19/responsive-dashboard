import React from 'react';
import styled from 'styled-components';
import { Nav, NavbarContainer, NavLogo } from '../../views/NavBarView/NavbarView';

export const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <h1 to='/'>ABC Engineering of College</h1>
                <Button>
                    <Anchor href='src/assets/assignment.postman_collection.json' download>
                        Download Postman Collection
                    </Anchor>
                </Button>
            </NavbarContainer>
        </Nav>
    );
};

const Button = styled.button`
    padding: 0.35rem 0.6rem;
    background-color: aqua;
`;

const Anchor = styled.a`
    color: '#fff';
    text-decoration: none;
`;
