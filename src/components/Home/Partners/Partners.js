import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import p1 from '../../../images/partner/p1.jpg'
import p2 from '../../../images/partner/p2.jpg'
import p3 from '../../../images/partner/p3.jpg'
import p4 from '../../../images/partner/p4.jpg'
import p5 from '../../../images/partner/p5.jpg'
import p6 from '../../../images/partner/p6.jpg'
import p7 from '../../../images/partner/p7.jpg'
import p8 from '../../../images/partner/p8.jpg'
import p9 from '../../../images/partner/p9.jpg'
import p10 from '../../../images/partner/p10.jpg'
import p11 from '../../../images/partner/p11.jpg'

const Partners = () => {
    return (
        <div className='m-5'>
            <h1 className='text-secondary fst-italic'> Our Major Partners</h1>
            <p className='fw-bold  mb-5'>Partners with collaboration</p>
            <Row xs={3} md={6} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p1} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p2} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p3} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p4} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p5} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p6} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p7} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p8} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p9} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p10} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p11} />
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Partners;