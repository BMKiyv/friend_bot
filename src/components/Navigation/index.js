import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';

const Navigation = ({footer,mobileNav,onClose}) => {
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
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>ГОЛОВНА</HashLink>
            <HashLink to ='/#solution' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>НАШЕ РІШЕННЯ</HashLink>
            <HashLink to ='/#aboutbot' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>ПРО ЧАТБОТ</HashLink>
            <HashLink to ='/#howitwork' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>ЯК ПРАЦЮЄ</HashLink>
            <HashLink to ='/#principles' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>НАШІ ПРИНЦИПИ</HashLink>
            <HashLink to ='/#partners' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>ПАРТНЕРИ</HashLink>
            <HashLink to ='/#faq' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>FAQ</HashLink>
            <HashLink to ='/#team' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>КОМАНДА</HashLink>
            <HashLink to ='/#advisers' 
                smooth 
                onClick = {onClose}
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = {mobileNav?'navigation__link-mobile':'navigation__link'}>ЕДВАЙЗЕРИ</HashLink>
        </nav>
    )
}

export default Navigation;