import React from 'react';
import img1 from '../../../images/poster1.jpg'
import img2 from '../../../images/poster2.jpg'
import img3 from '../../../images/poster3.jpg'
import img4 from '../../../images/poster4.jpg'
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <Carousel fade variant="dark">
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='fw-1 text-white'>City breaks to suit every style</h1>
                        <h3 className='text-white'>Now is the perfect time to plan an easy city break to an old favorite or somewhere new.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className='fw-1 text-white'>Your great story starts here.</h1>
                        <h3 className='text-white'>A little extra context to explain your unique value.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className='fw-1 text-white'>A Call to Action.</h1>
                        <h3 className='text-white'>Travel is the perfect way to try something new.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h1 className='fw-1 text-white'>Pack Your Things Now.</h1>
                        <h3 className='text-white'>Start Your Journey From Here.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;