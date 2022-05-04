import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';
import { useTranslation } from "react-i18next";
import {useLocation} from 'react-router-dom';

const Navigation = ({footer,mobileNav,onClose}) => {
    let path = useLocation().pathname
    let pathName = path==='/'? path : `${path}/`;
    const { t } = useTranslation();
    let num = -110;
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = num; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return (
        <nav className={footer?'navigation':!mobileNav?'navigation navigation__header': 'navigation navigation__header-mobile'}>
            <HashLink to ={`${pathName}#main` } 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navMain')}</HashLink>
            <HashLink to ={`${pathName}#solution` }
                smooth 
                activeclassname = 'selected' 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navSolution')}</HashLink>
            <HashLink to ={`${pathName}#aboutbot`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navAbout')}</HashLink>
            <HashLink to ={`${pathName}#howitwork`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navHowItWork')}</HashLink>
            <HashLink to ={`${pathName}#principles`}
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navPrinciples')}</HashLink>
            <HashLink to ={`${pathName}#partners`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navPartners')}</HashLink>
            <HashLink to ={`${pathName}#story`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navStory')}</HashLink>
            <HashLink to ={`${pathName}#team`}
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>КОМАНДА</HashLink>
            <HashLink to ={`${pathName}#faq`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>FAQ</HashLink>
            <HashLink to ={`${pathName}#advisers`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navEdvisers')}</HashLink>
        </nav>
    )
}

export default Navigation;