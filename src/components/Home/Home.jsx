import React from 'react';
import HomeHeader from './HomeHeader';
import ToyCategory from './ToyCategory';
import NewProducts from './NewProducts/NewProducts';
import Trending from './Trending';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HomeHeader></HomeHeader>
            <ToyCategory></ToyCategory>
            <NewProducts></NewProducts>
            <Trending></Trending>
        </div>
    );
};

export default Home;