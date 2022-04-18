import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';
import I18n from "../../I18n";

const Navigation = ({footer,mobileNav,onClose,lang}) => {
    let num = -80;
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = num; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    //console.log(lang)
    return (
        <nav className={footer?'navigation':!mobileNav?'navigation navigation__header': 'navigation navigation__header-mobile'}>
            <HashLink to ='/#main' 
                smooth 
                onClick = {onClose}
                //onBlur = {removeClass}
                //onFocus = {activateClass}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navMain')}</HashLink>
            <HashLink to ={`${lang}/#solution` }
                smooth 
                activeclassname = 'selected' 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                //onBlur = {removeClass}
                //onFocus = {activateClass}activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navSolution')}</HashLink>
            <HashLink to ={`${lang}/#aboutbot`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navAbout')}</HashLink>
            <HashLink to ={`${lang}/#howitwork`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navHowItWork')}</HashLink>
            <HashLink to ={`${lang}/#principles`}
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navPrinciples')}</HashLink>
            <HashLink to ={`${lang}/#partners`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navPartners')}</HashLink>
            <HashLink to ={`${lang}/#faq`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>FAQ</HashLink>
            <HashLink to ={`${lang}/#team`}
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>КОМАНДА</HashLink>
            <HashLink to ={`${lang}/#advisers`} 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>{I18n.t('navEdvisers')}</HashLink>
        </nav>
    )
}

export default Navigation;