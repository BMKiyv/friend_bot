import React, {useState} from 'react';
import './style.scss';
import Navigation from '../Navigation';
import { useOnScroll } from '../../utils/customHooks/useOnScroll';

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const bgLight = useOnScroll();

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
            <div className={mobileNav ? 'header__mobile' : 'header__pad'}>
                {console.log(mobileNav)}
                <div className={mobileNav ? 'container header__wrap': 'container header__pad'}>

                    <div>
                        <Navigation
                         mobileNav={mobileNav}
                         onClose = {closeMobileNav}
                         />
                    </div>
                    <div className={mobileNav?'header__lang-mobile':'header__lang'}>
                        <span className='header__lang-item'>RU</span>
                        <span className='header__lang-item'>UA</span>
                    </div>
                </div>
            </div>
            <div className="hamburger-menu header__visible">
                <input id="menu__toggle" type="checkbox" onClick={activateMobileNav} />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
            </div>
        </div>
    )
}

export default Header;