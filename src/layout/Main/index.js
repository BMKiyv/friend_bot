import React,{useState} from 'react';
import{Outlet} from 'react-router-dom';
import Header from '../Header' ;
import Footer from '../Footer'

const Main = ({path}) => {
        const [mobileNav, setMobileNav] = useState(false);

    const activateMobileNav = () => {
        setMobileNav((prev) => !prev)
    }
    return(
       <>
                   <div className="hamburgerApp-menu header__visible">
                <input id="menuApp__toggle" type="checkbox" onClick={activateMobileNav} />
                <label className="menuApp__btn" htmlFor="menuApp__toggle">
                    <span></span>
                </label>
            </div>
       <Header mobile={mobileNav}/>
        <Outlet/>
        <Footer path= {path}/>
       </>
    )
}

export default Main;