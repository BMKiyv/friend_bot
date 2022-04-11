import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';

const Navigation = () => {
    let num = -80;
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = num; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return (
        <nav className='navigation'>
            <HashLink to ='/#main' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected' 
                className = 'navigation__link'>ГОЛОВНА</HashLink>
            <HashLink to ='/#solution' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = 'navigation__link'>НАШЕ РІШЕННЯ</HashLink>
            <HashLink to ='/#aboutbot' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = 'navigation__link'>ПРО ЧАТБОТ</HashLink>
            <HashLink to ='/#howitwork' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = 'navigation__link'>ЯК ПРАЦЮЄ</HashLink>
            <HashLink to ='/#principles' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = 'navigation__link'>НАШІ ПРИНЦИПИ</HashLink>
            <HashLink to ='/#partners' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = 'navigation__link'>ПАРТНЕРИ</HashLink>
            <HashLink to ='/#faq' 
                smooth 
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = 'navigation__link'>FAQ</HashLink>
            <HashLink to ='/#team' 
                smooth 
                scroll={el => scrollWithOffset(el)} 
                activeclassname = 'selected'  
                className = 'navigation__link'>КОМАНДА</HashLink>
            <HashLink to ='/#advisers' 
                smooth 
                scroll={el => scrollWithOffset(el)}  
                activeclassname = 'selected' 
                className = 'navigation__link'>ЕДВАЙЗЕРИ</HashLink>
        </nav>
    )
}

export default Navigation;