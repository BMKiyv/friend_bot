import React from 'react';
import './style.scss';
import Navigation from '../Navigation';
import { useOnScroll } from '../../utils/customHooks/useOnScroll';

const Header = () => {
    const bgLight = useOnScroll();
    return (
        <div className={bgLight?'header header-white':'header header-transparent'}>
            <div className='container header__wrap'>
            <div>
                <Navigation/>
            </div>
            <div className='header__lang'>
                <span className='header__lang-item'>RU</span>
                <span className='header__lang-item'>UA</span>
            </div>
        </div>
        </div>
    )
}

export default Header;