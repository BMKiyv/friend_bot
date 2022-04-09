import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>ГОЛОВНА</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>НАШЕ РІШЕННЯ</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>ПРО ЧАТБОТ</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>ЯК ПРАЦЮЄ</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>НАШІ ПРИНЦИПИ</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>ПАРТНЕРИ</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>FAQ</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>КОМАНДА</HashLink>
            <HashLink to ='/#main' smooth  className = 'navigation__link'>ЕДВАЙЗЕРИ</HashLink>
        </nav>
    )
}

export default Navigation;