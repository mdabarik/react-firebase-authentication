import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;