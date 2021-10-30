import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faDiscord, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <h1 className='fs-1 text-info'>Adventour</h1>
                    <p className='text-secondary'>51/C/A,Karana,Uganda</p>

                    <h6 className='text-white'>Phone: <FontAwesomeIcon icon={faPhone} className='text-warning' /> +570-5468752</h6>
                    <h6 className='text-white'>Email: <FontAwesomeIcon icon={faMailBulk} className='text-warning' /> adventour@hotmil.com</h6>

                </div>
                <ul className='text-secondary'>
                    <h3 className='text-secondary'>Pages</h3>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/home'><li>Department</li></Link>
                    <Link to='/home'><li>About Us</li></Link>
                    <Link to='/home'><li>Faq</li></Link>
                    <Link to='/home'><li>Contact</li></Link>
                </ul>

                <div>

                </div>
                <div>
                    <h3 className='text-secondary'>Follow Us</h3>
                    <a href="https://www.facebook.com/">  <FontAwesomeIcon icon={faFacebook} className='text-primary fs-4 me-2' /> </a>
                    <a href="https://www.youtube.com/">  <FontAwesomeIcon icon={faYoutube} className='text-danger fs-4 me-2' /> </a>
                    <a href="https://www.discord.com/">  <FontAwesomeIcon icon={faDiscord} className='text-secondary fs-4 me-2' /> </a>
                    <a href="https://www.twitter.com/">  <FontAwesomeIcon icon={faTwitterSquare} className='text-info fs-4 me-2' /> </a>




                </div>
            </div>
            <p className='text-center'> <small className="text-white">&copy;2021 All right reserved by <span className='text-info'>Adventour</span> </small></p>
        </div>
    );
};

export default Footer;