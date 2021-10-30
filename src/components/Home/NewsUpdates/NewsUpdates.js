import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import News from './News/News';

const NewsUpdates = () => {
    const [newses, setNewses] = useState([])
    useEffect(() => {
        fetch('https://fathomless-everglades-23928.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNewses(data))
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='fw-1'>News & Updates </h1>
            <p className='text-secondary fw-bold'>OUR LATEST NEWS & PROMOTIONS</p>
            <div className='p-5 '>
                <Row xs={1} md={3} className="g-4 ">
                    {
                        newses.map(news => <News
                            key={news._id}
                            news={news}
                        ></News>)
                    }

                </Row>
            </div>

        </div>
    );
};

export default NewsUpdates;