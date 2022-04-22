import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';
import { useTranslation } from "react-i18next";

const Navigation = ({footer,mobileNav,onClose}) => {
    const { t } = useTranslation();
    let num = -80;
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = num; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <nav className={footer?'navigation':!mobileNav?'navigation navigation__header': 'navigation navigation__header-mobile'}>
            <HashLink to ='/#main' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navMain')}</HashLink>
            <HashLink to ={`/#solution` }
                smooth 
                activeclassname = 'selected' 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navSolution')}</HashLink>
            <HashLink to ={`/#aboutbot`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navAbout')}</HashLink>
            <HashLink to ={`/#howitwork`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navHowItWork')}</HashLink>
            <HashLink to ={`/#principles`}
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navPrinciples')}</HashLink>
            <HashLink to ={`/#partners`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navPartners')}</HashLink>
            <HashLink to ={`/#story`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navStory')}</HashLink>
            <HashLink to ={`/#team`}
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>КОМАНДА</HashLink>
                            <HashLink to ={`/#faq`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>FAQ</HashLink>
            <HashLink to ={`/#advisers`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{t('navEdvisers')}</HashLink>
        </nav>
    )
}

export default Navigation;