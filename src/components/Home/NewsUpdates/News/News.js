import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './News.css'

const News = (props) => {
    const { picture, title } = props.news
    return (
        <div>
            <Col>

                <Card className="bg-dark text-white ">
                    <div className='hov'>

                        <div className='imgbg'>
                            <Card.Img style={{ height: '250px' }} src={picture} alt="Card image" />
                        </div>
                        <Card.ImgOverlay>
                            <div className='textbg'>
                                <Card.Title className='text-white'>{title}</Card.Title>
                                <Link to='/news'>
                                    <button className='btn btn-secondary'>See Story</button>
                                </Link>

                            </div>
                        </Card.ImgOverlay>
                    </div>

                </Card>

            </Col>

        </div>
    );
};

export default News;