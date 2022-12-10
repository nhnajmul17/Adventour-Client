import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Offer from './Offer/Offer';

const Offers = () => {

    const [offers, setOffers] = useState([])
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {

        fetch('https://adventour-server.onrender.com/offers')
            .then(res => res.json())
            .then(data => {
                setOffers(data)
                setIsloading(false)
            })


    }, [])




    return (


        <div id='offers' className='mt-5'>

            <h1 className='fw-1'>BEST OFFERS </h1>
            <p className='text-warning fw-bold'>Checkout Our Best Promotion Tour</p>


            {isloading ? <Spinner animation="border" variant="danger" /> : <div className='m-5'>
                <Row xs={1} md={2} className="g-4">
                    {
                        offers.map(offer => <Offer
                            key={offer._id}
                            offer={offer}
                        ></Offer>)
                    }

                </Row>
            </div>
            }
        </div>
    );
};

export default Offers;