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
            <div className='process__items-item' key={item.title}>
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

        for (const item of processing) {
            if (width < 768) {
                groupArrSpec[countArrays].push(renderingCard(item));
                if (countArrays < processing.length - 1) {
                    countArrays += 1;
                    groupArrSpec[countArrays] = [];
                }
                else {
                    countArrays = 0;
                    break;
                }
            }

            else if (width > 767) {
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
                    statusFormatter={(current, total) => ` ${current} / ${total}`}
                    {...carouselPropTeam()}>
                    {renderSpecialist()}
                </Carousel>
            </div>
        </div>
    )
}

export default Processing;