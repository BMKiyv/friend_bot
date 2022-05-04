import React from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import Btn from '../../components/Button';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    let path = useLocation().pathname
    let pathName = (path==='/')? '/' :(path==='ru')?'/ru/': '';
    const { t } = useTranslation();
    return (
        <footer className='container footer'>
            <div className='bot_footer'>
                <img src='/images/logofooter.svg' alt='logo' />
            </div>
            <div className='footer__nav'>
                <div className='footer__nav-links'>
                    <HashLink to={`${pathName}conditions`} className='footer__nav-link'>{t('footerConditions')}</HashLink>
                    <HashLink to={`${pathName}conditions`} className='footer__nav-link'>{t('footerPolitics')}</HashLink>
                    <HashLink to={`${pathName}conditions`} className='footer__nav-link'>{t('footerCoockies')}</HashLink>
                </div>
                <Navigation footer />
                <div className='footer__btn '>
                    <Btn
                        small
                        theme='main'
                        title={t('footerBtn')}
                        url='/contacts'
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer;