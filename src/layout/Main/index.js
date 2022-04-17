import React from 'react';
import{Outlet} from 'react-router-dom';
import Header from '../Header' ;
import Footer from '../Footer';

const Main = ({path}) => {
    return(
       <>
       <Header />
        <Outlet/>
        <Footer path= {path}/>
       </>
    )
}

export default Main;