import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Faq = () => {
    return (
        <div>
            <Header></Header>
            <div className='m-5 p-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the process of canceling a purchased Booking?</Accordion.Header>
                        <Accordion.Body>
                            Cancellation and refund policies differ from hotels to hotels. However, if your booking can be canceled, we will charge you as per the hotel policy, plus a service fee of BDT 1,500 per PAX for international Air Tickets and BDT 500 per PAX for Bangladeshi domestic Air Tickets (During covid BDT 500 for international and BDT 300 for domestic ). We will be following the airlines refund policy. Airline has the right to change any policy at any time, ShareTrip has no control on airline's policy.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can I use my debit card for booking trip from Adventour?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can book tour with any type of local or international cards, debit or credit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can I have a hard-copy receipt sent by post?</Accordion.Header>
                        <Accordion.Body>
                            We do not send hard copy receipts by post. We will send you an E-mail containing all of your booking details and confirmation. But if you want a hard-copy then you can come to our office and we will provide the hard-copy for you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How much will it cost to arrange a wheelchair?</Accordion.Header>
                        <Accordion.Body>
                            Please let us know where you need the wheelchair. The cost of it will vary depending on the airport. After getting the information we will contact the concerned person to know the cost.

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Faq;