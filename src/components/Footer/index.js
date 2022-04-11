import React from 'react';
import './style.scss';
import Navigation from '../Navigation';

const Footer = () => {
    return (
        <footer className='container footer'>
            <div className='bg-bot_footer'/>
            <div className='footer__nav'>
                <Navigation />
            </div>
        </footer>
    )
}

export default Footer;