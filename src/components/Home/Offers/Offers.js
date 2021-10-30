import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offer from './Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className='mt-5'>

            <h1 className='fw-1'>BEST OFFERS </h1>
            <p className='text-danger'>Checkout Our Best Promotion Tour</p>

            <div className='m-5'>
                <Row xs={1} md={2} className="g-4">
                    {
                        offers.map(offer => <Offer
                            key={offer._id}
                            offer={offer}
                        ></Offer>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default Offers;