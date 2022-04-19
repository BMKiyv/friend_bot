import React, {useEffect, useState} from 'react';
import './style.scss';
import Navigation from '../../components/Navigation';
import { useOnScroll } from '../../utils/customHooks/useOnScroll';
import { useTranslation } from "react-i18next";
//import { LANG } from "../../utils/constants";

const Header = ({mobile}) => {
    const { i18n } = useTranslation();
    const [mobileNav, setMobileNav] = useState(false);
    const [activeLang,setActiveLang] = useState('uk');
    const bgLight = useOnScroll();
    const isShown = useOnScroll();



    const changeLanguage = (language) => {
        setActiveLang(language)
      return  i18n.changeLanguage(language)

        
      };
    

    //  const onChangeLang = (event) => {
    //     //console.log('TRUE');
    //     const lg = event?.target?.lang;
    //     if (LANG === lg) {
    //         return null;
    //     }
    //     window.localStorage.setItem('lg', lg);
    //     window.location = lg === 'uk' ? '/' : `/${lg}`;

    // };

    // const isActive = (hash, find) => {
    //     return hash === find;
    // };

    useEffect(()=>setMobileNav(mobile),[mobile])

    const activateMobileNav = () => {
        setMobileNav((prev)=>!prev)
    }

    const closeMobileNav = ()=> {
        setMobileNav(false)
        const burger =document.querySelector('#menu__toggle')
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
            </div>
            <div className={isShown?"hamburgerApp-menu header__visible":"hamburger-menu header__visible"}>
                <input id={"menu__toggle"} type="checkbox" onClick={activateMobileNav} />
                <label className={isShown?"menuApp__btn":"menu__btn"} htmlFor={"menu__toggle"}>
                    <span></span>
                </label>
            </div>
        </div>
    )
}

export default Header;