import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';
import I18n from '../../I18n';

const cardData = [
    {
        class: '/images/heart.svg',
        description: `${I18n.t('solutionText1')}`
    },
    {
        class: '/images/bot.svg',
        description: `${I18n.t('solutionText2')}`
    },  {
        class: '/images/brain.svg',
        description: `${I18n.t('solutionText3')}`
    },
    {
        class: '/images/messages.png',
        description: `${I18n.t('solutionText4')}`
    },
            {
        class: '/images/telegram.svg',
        description: `${I18n.t('solutionText5')}`
    }
]

const Solution = () => {

    
    const[width,setWidth] = useState(window.innerWidth)

    const [groupCards, setGroupCards] = useState([]);

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

        for (const item of cardData) {
            if (width < 768) {
                groupArrSpec[countArrays].push(renderingCard(item));
                if (countArrays < cardData.length - 1) {
                    countArrays += 1;
                    groupArrSpec[countArrays] = [];
                }
                else {
                    countArrays = 0;
                    break;
                }
            }
        }

        setGroupCards(groupArrSpec)
    },[width]);

    
    const renderCards = useCallback(() => {
        const loop = (goup,i) => {
            let key = `key${i}`
             return (
            <div className='solution__wrap' key={key}>
                {goup}
            </div>)
    };
     

        return groupCards.map(loop);

    }, [groupCards]);

    const renderingCard = (item) => {
        return (
            <div className='solution__card' key = {item.class}>
            <div className='solution__card-img'>
                <img src={item.class} alt={item.description}/>
            </div>
            <figcaption className='solution__card-text'>{item.description}</figcaption>
        </div>
        )
    }

    return (
        <div className='container solution' id='solution'>
            <h3 className='solution__header'>{I18n.t('solutionTitle')}</h3>
            <div className={width > 767?'solution__wrap':''}>
                {width > 767?cardData.map((item, i) => {
                    return (
                        <div className='solution__card' key = {i}>
                            <div className='solution__card-img'>
                                <img src={item.class} alt={item.description}/>
                            </div>
                            <figcaption className='solution__card-text'>{item.description}</figcaption>
                        </div>
                    )
                }):<Carousel
                        {...carouselPropTeam()}>
                        {renderCards()}
                    </Carousel>}
            </div>
        </div>
    )
};

export default Solution;