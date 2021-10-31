import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../images/section.JPG'

const Review = () => {
    return (
        <div>
            <h1 className='fw-bold fst-italic text-secondary mt-5'>What Customer's Say</h1>
            <p className=' mb-5'>Our valuable customer's says about us.</p>
            <div className='mb-3'>
                <Carousel fade variant="dark">
                    <Carousel.Item>
                        <Carousel.Caption className="overflow-hidden">
                            <h5 className='fw-bold fst-italic text-white'>Adventourteam were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place, in one transaction. I will most definitely be using Travel Online for my holiday bookings again in the future!</h5>
                            <p className='fw-bold'>- Joshua Braidwood</p>
                            <p className='fw-bold'><small>26th Oct 2021</small></p>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 className='fw-bold fst-italic text-white'>Our booking was very easy to do online, I needed to make a few changes that I felt was not handled well at all.
                                Once I spoke to the Team Manager, he was absolutely amazing. Couldn't do enough to sort our issue out. Went way above a 5 star service. More then happy to use snd recommend this company.</h5>
                            <p className='fw-bold'>- Kristan Green</p>
                            <p className='fw-bold'><small>20th Aug 2021</small></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className='fw-bold fst-italic text-white'>I have not used your business or travel on line before so a bit panicky.
                                But booking confirmed, informative emails, and a fantastic bargain stay at the Crown Metropol Perth .
                                Thank you I will definitely use your service again.</h5>
                            <p className='fw-bold'>- June Todeni</p>
                            <p className='fw-bold'><small>12th Oct 2021</small></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;