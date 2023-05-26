import React from 'react';
import Home from '../components/Home/Home';
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;