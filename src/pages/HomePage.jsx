import React from 'react';
import { Navbar } from '../components/NavBar/Navbar';
import { Dashboard } from '../feature/Dashboard/Dashboard';

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <Dashboard />
        </>
    );
};
