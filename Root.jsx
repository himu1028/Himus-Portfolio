import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './src/Navbar';
import Footer from './src/Footer';

const Root = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
