
import React from 'react';
import Review from '../Review/Review';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import NewsUpdates from './NewsUpdates/NewsUpdates';
import Offers from './Offers/Offers';
import Partners from './Partners/Partners';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Offers></Offers>

            <NewsUpdates></NewsUpdates>
            <Review></Review>
            <Partners></Partners>
            <Footer></Footer>

        </div>
    );
};

export default Home;