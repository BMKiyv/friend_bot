import React, {useEffect, useState} from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import { useOnScroll } from '../../utils/customHooks/useOnScroll';
//import { useLocation} from 'react-router-dom';
//import I18n from "../../I18n";
import { LANG } from "../../utils/constants";

const Header = ({mobile}) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [activeLang] = useState(LANG);
    const bgLight = useOnScroll();
    const isShown = useOnScroll();

     //console.log('activeLang', activeLang, LANG,location);

     const onChangeLang = (event) => {
        //console.log('TRUE');
        const lg = event?.target?.lang;
        if (LANG === lg) {
            return null;
        }
        window.localStorage.setItem('lg', lg);
        window.location = lg === 'uk' ? '/' : `/${lg}`;

    };

    // const isActive = (hash, find) => {
    //     return hash === find;
    // };

    useEffect(()=>setMobileNav(mobile),[mobile])

    const activateMobileNav = () => {
        setMobileNav((prev)=>!prev)
    }

    const closeMobileNav = ()=> {
        setMobileNav(false)
        const burger = document.querySelector('#menu__toggle')
        burger.checked = false
    }

    return (
        <div className={(bgLight && !mobileNav) ? 'header header-white' : mobileNav?'header header-mob':'header header-transparent'}>
            <div className='header__visible header__logo'>
                <img src='/images/headlogo.png' alt='logo' />
            </div>
            <div className={mobileNav ? 'header__mobile' : 'header__wrap'}>
                <div className={mobileNav ? 'container header__wrap': 'container header__pad'}>

                    <div>
                        <Navigation
                         mobileNav={mobileNav}
                         onClose = {closeMobileNav}
                         lang = {activeLang==='uk'? '': activeLang}
                         />
                    </div>
                    <div className={mobileNav?'header__lang-mobile':'header__lang'}>
                        <button  
                        lang = 'ru' 
                        className={`header__lang-item${activeLang === 'ru' ?'-active':''}`}  
                        onClick = { onChangeLang }>RU</button>
                        <button 
                        lang = 'uk' 
                        className={`header__lang-item${!activeLang || activeLang === 'uk' ?'-active':''}`}  
                        onClick = { onChangeLang }>UA</button>
                    </div>
                </div>
            </div>
            <div className={isShown?"hamburgerApp-menu header__visible":"hamburger-menu header__visible"}>
                <input id={isShown?"menuApp__toggle":"menu__toggle"} type="checkbox" onClick={activateMobileNav} />
                <label className={isShown?"menuApp__btn":"menu__btn"} htmlFor={isShown?"menuApp__toggle":"menu__toggle"}>
                    <span></span>
                </label>
            </div>
        </div>
    )
}

export default Header;