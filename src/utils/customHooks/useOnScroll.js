import {useState, useEffect} from 'react';


export const useOnScroll = ()=>{

    const [bgLight, setBgLight] = useState( false );
    //let count = 0;

    const handleScroll = ( e ) => {
        // console.log(window.scrollY);


        if ( window.scrollY > 5) {
            setBgLight( true );
        }else{
            setBgLight( false );
        }

    };

    useEffect( () => {

        window.addEventListener( 'scroll', handleScroll );

        return () => window.removeEventListener( 'scroll', handleScroll );


    });


    return bgLight;

};