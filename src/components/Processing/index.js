import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';
import I18n from '../../I18n'

const processing = [
    {
        class: '/images/smile4.svg',
        title: `${I18n.t('processText1')}`,
        text: `${I18n.t('processDescription')}`
    },
    {
        class: '/images/message.svg',
        title: `${I18n.t('processText2')}`,
        text: `${I18n.t('processDescription')}`
    },
    {
        class: '/images/book.svg',
        title: `${I18n.t('processText3')}`,
        text: `${I18n.t('processDescription')}`
    },
    {
        class: '/images/smile5.svg',
        title: `${I18n.t('processText4')}`,
        text: `${I18n.t('processDescription')}`
    }
]

const Processing = () => {

    const[width,setWidth] = useState(window.innerWidth)

    const [groupProcess, setGroupProcess] = useState([]);

 
    const getWidth = useCallback(
        event => setWidth(window.innerWidth)
    ,[])

    useEffect(() => {
         window.addEventListener('resize', getWidth);
        return ( ()=> window.removeEventListener('resize',getWidth))
    },[getWidth])


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
    },[width]);

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

    const renderingCard = (item) => {
        return (
            <div className='process__items-item' key={item.title}>
                <div className='process__items-img'>
                    <img  src={item.class} alt={item.title}/>
                </div>
                <p className='process__items-title solid bold'>{item.title}</p>
                <p className='process__items-text'>{item.text}</p>
            </div>
        )
    }

    return (
        <div className='container process' id='howitwork'>
            <h3 className='process__header'>{I18n.t('processTitle')}</h3>
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