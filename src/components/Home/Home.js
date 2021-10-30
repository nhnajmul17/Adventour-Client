
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Offers from './Offers/Offers';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Offers></Offers>
            <Footer></Footer>

        </div>
    );
};

export default Home;