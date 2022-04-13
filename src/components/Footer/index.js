import React from 'react';
import './style.scss';
import Navigation from '../Navigation';

const Footer = () => {
    return (
        <footer className='container footer'>
            <div className='bot_footer'>
                <img src='/images/logofooter.svg' alt='logo' />
            </div>
            <div className='footer__nav'>
                <Navigation footer/>
            </div>
        </footer>
    )
}

export default Footer;