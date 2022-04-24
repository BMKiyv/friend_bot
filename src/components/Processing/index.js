import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';
import { useTranslation } from "react-i18next";
import processing from '../jsons/pocessing';


const Processing = () => {
    const { t } = useTranslation();
    const[width,setWidth] = useState(window.innerWidth)

    const [groupProcess, setGroupProcess] = useState([]);

 
    const getWidth = useCallback(
        event => setWidth(window.innerWidth)
    ,[])

    useEffect(() => {
         window.addEventListener('resize', getWidth);
        return ( ()=> window.removeEventListener('resize',getWidth))
    },[getWidth])

    const renderingCard = useCallback((item) => {
        return (
            <div className='process__items-item' key={Math.random()*10}>
                <span className='process__items-img'>
                    {item.class}
                </span>
                <p className='process__items-title solid bold'>{t(`${item.title}`)}</p>
                <p className='process__items-text'>{t(`${item.text}`)}</p>
            </div>
        )
    },[t])


    useEffect(() => {
        const groupArrSpec = [[]];

        let countArrays = 0;

        let countElements = 0;

        if (width < 768) {
            for (let i=0; i< processing.length;i++) {
                if (i< processing.length-1) {
                    groupArrSpec[i].push(renderingCard( processing[i]));
                    groupArrSpec[i].push(renderingCard( processing[i+1]));
                    groupArrSpec[i+1] = [];
                }
                    else{
                        groupArrSpec[i].push(renderingCard( processing[i]));
                        groupArrSpec[i].push(renderingCard( processing[0]));
                        //console.log( processing[i], processing[0],i=== processing.length-1)
                        break
                    }
        }
        }
        if (width > 767) {
        for (const item of processing) {            
                if (countElements < 4) {
                    countElements += 1;
                } else {
                    countArrays += 1;
                    countElements = 1;
                    groupArrSpec[countArrays] = [];
                }
                groupArrSpec[countArrays].push(renderingCard(item));
        }
    }

        setGroupProcess(groupArrSpec)
    },[width,renderingCard]);

    const renderSpecialist = useCallback(() => {
        const loop = (goup,i) => {
            let key = `key${i}`
             return (
            <div className='process__items' key={key}>
                {goup}
            </div>)
    };
     

        return groupProcess.map(loop);

    }, [groupProcess]);


    return (
        <div className='container process' id='howitwork'>
            <h3 className='process__header'>{t('processTitle')}</h3>
            <div className='process__carousel'>
                <Carousel
                    {...carouselPropTeam()}>
                    {renderSpecialist()}
                </Carousel>
            </div>
        </div>
    )
}

export default Processing;