import React from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import Btn from '../../components/Button';
import {HashLink} from 'react-router-hash-link';

const Footer = ({path}) => {
    return (
        <footer className='container footer'>
            <div className='bot_footer'>
                <img src='/images/logofooter.svg' alt='logo' />
            </div>
            <div className='footer__nav'>
                <div className='footer__nav-links'>
                    <HashLink to='/conditions' className='footer__nav-link'>Положення та умови</HashLink>
                    <HashLink to='/conditions' className='footer__nav-link'>Політика конфіденційності</HashLink>
                    <HashLink to='/conditions' className='footer__nav-link'>Налаштування файлів cookie</HashLink>
                </div>
                <Navigation footer/>
                <div className='footer__btn '>
                    <Btn
                        small
                        theme='main'
                        title='Стати волонтером'
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer;