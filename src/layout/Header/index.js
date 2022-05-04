import React, {useEffect, useState} from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import { useOnScroll } from '../../utils/customHooks/useOnScroll';
import {HashLink} from 'react-router-hash-link';
import i18n from "i18next";

const Header = ({mobile}) => {

    const [mobileNav, setMobileNav] = useState(false);
    const bgLight = useOnScroll();
    const isShown = useOnScroll();
    const num = -110;

    const changeUrl = () => {
        let lang = i18n.language==='ru'? '/': '/ru'
       let location =  window.location
       location.replace(lang)
    }

    useEffect(()=>setMobileNav(mobile),[mobile])

    const activateMobileNav = () => {
        setMobileNav((prev)=>!prev)
    }

    const closeMobileNav = ()=> {
        setMobileNav(false)
        const burger =document.querySelector('#menu__toggle')
        burger.checked = false
    }

        const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = num; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <header className={(bgLight && !mobileNav) ? 'header header-white' : mobileNav?'header header-mob':'header header-transparent'}>
            <div className={mobileNav ? 'header__mobile' : 'header-container'}>
            <div className='header__logo-container'>
            <HashLink to ='/#main'
             onClick={closeMobileNav} smooth 
             scroll={el => scrollWithOffset(el)} 
             className='header__logo'>
                <img src='./images/headlogo.png' alt='logo' />
            </HashLink>
            <span className='header__logo-name'>Друг</span>
            </div>
                    <div>
                        <Navigation
                         mobileNav={mobileNav}
                         onClose = {closeMobileNav}
                         />
                    </div>
                    <div className={mobileNav?'header__lang-mobile':'header__lang'}>
                        <button  
                        className={`header__lang-item${i18n.language==='ru' ?'-active':''}`}  
                        onClick = {changeUrl}
                        href={'/ru'}>RU</button>
                        <button 
                        className={`header__lang-item${i18n.language==='uk' ?'-active':''}`} 
                        onClick = {changeUrl} 
                        href={'/'}>UA</button>
                    </div>
            </div>
            <div className={isShown?"hamburgerApp-menu header__visible":"hamburger-menu header__visible"}>
                <input id={"menu__toggle"} type="checkbox" onClick={activateMobileNav} />
                <label className={isShown?"menuApp__btn":"menu__btn"} htmlFor={"menu__toggle"}>
                    <span></span>
                </label>
            </div>
        </header>
    )
}

export default Header;