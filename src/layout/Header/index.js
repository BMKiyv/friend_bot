import React, {useEffect, useState} from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import { useOnScroll } from '../../utils/customHooks/useOnScroll';
import { useTranslation } from "react-i18next";
import {HashLink} from 'react-router-hash-link';

const Header = ({mobile}) => {
    const { i18n } = useTranslation();
    const [mobileNav, setMobileNav] = useState(false);
    const [activeLang,setActiveLang] = useState('uk');
    const bgLight = useOnScroll();
    const isShown = useOnScroll();
    const num = -110;



    const changeLanguage = (language) => {
        setActiveLang(language)
      return  i18n.changeLanguage(language)

        
      };

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
                        className={`header__lang-item${activeLang==='ru' ?'-active':''}`}  
                        onClick = { ()=>changeLanguage("ru") }>RU</button>
                        <button 
                        className={`header__lang-item${activeLang==='uk' ?'-active':''}`}  
                        onClick = { ()=>changeLanguage("uk") }>UA</button>
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