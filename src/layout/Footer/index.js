import React from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import Btn from '../../components/Button';
import {HashLink} from 'react-router-hash-link';
import I18n from "../../I18n";
import { LANG } from "../../utils/constants";

const Footer = () => {
    return (
        <footer className='container footer'>
            <div className='bot_footer'>
                <img src='/images/logofooter.svg' alt='logo' />
            </div>
            <div className='footer__nav'>
                <div className='footer__nav-links'>
                    <HashLink to='/conditions' className='footer__nav-link'>{I18n.t('footerConditions')}</HashLink>
                    <HashLink to='/conditions' className='footer__nav-link'>{I18n.t('footerPolitics')}</HashLink>
                    <HashLink to='/conditions' className='footer__nav-link'>{I18n.t('footerCoockies')}</HashLink>
                </div>
                <Navigation footer lang={LANG==='uk'? '': LANG}/>
                <div className='footer__btn '>
                    <Btn
                        small
                        theme='main'
                        title={I18n.t('footerBtn')}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer;