import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <h2>About Us</h2>
            <p className='p-5'>
                Adventour  is the country’s first and leading online travel aggregator. We had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your tour, find your perfect holiday from our thousands of holiday packages around the globe. <br />

                Our Services includes- <br />

                * We provide the best rates and wide range of choices for your accommodations and travel plans. <br />
                * Our employees have the experience to understand each and every customer's requirements and fulfill it.  <br />
                * Adevntour generates promotion codes/ discounts from time to time which may be availed on the site.  <br />
                * For Domestic tour, Adventour will not charge any additional service fee. <br />
                * Anything about Adventour can found in this site.

            </p>
            <Footer></Footer>

        </div>
    );
};

export default About;