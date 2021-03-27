import React from 'react';
import { Nav, NavbarContainer, NavLogo } from '../../views/NavBarView/NavbarView';

export const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <h1 to='/'>ABC Engineering of College</h1>
                <a href='src/assets/assignment.postman_collection.json' download style={{ color: '#fff' }}>
                    Download Postman Collection
                </a>
            </NavbarContainer>
        </Nav>
    );
};
