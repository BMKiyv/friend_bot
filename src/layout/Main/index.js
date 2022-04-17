import React,{useState} from 'react';
import{Outlet} from 'react-router-dom';
import Header from '../Header' ;
import Footer from '../Footer';
//import {useOnScroll} from '../../utils/customHooks/useOnScroll';

const Main = ({path}) => {
        // const [mobileNav, setMobileNav] = useState(false);
        // const isShown = useOnScroll();

    // const activateMobileNav = () => {
    //     setMobileNav((prev) => !prev)
    // }
    return(
       <>
            {/* <div className={isShown?"hamburgerApp-menu header__visible":"invisible"}>
                <input id="menuApp__toggle" type="checkbox" onClick={activateMobileNav} />
                <label className="menuApp__btn" htmlFor="menuApp__toggle">
                    <span></span>
                </label>
            </div> */}
            {/* {mobile={mobileNav}} */}
       <Header />
        <Outlet/>
        <Footer path= {path}/>
       </>
    )
}

export default Main;