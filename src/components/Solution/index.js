import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';

const cardData = [
    {
        class: '/images/heart.svg',
        description: 'Перша психологічна допомога'
    },
    {
        class: '/images/bot.svg',
        description: 'Автоматизований співрозмовник (чатбот)'
    },  {
        class: '/images/brain.svg',
        description: 'Заснований на когнітивно-поведінковій терапії'
    },
    {
        class: '/images/messages.png',
        description: 'Щоденні короткі діалоги'
    },
            {
        class: '/images/telegram.svg',
        description: 'Завжди під рукою (месенджер, додаток)'
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

        //let countElements = 0;

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

            // else if (width > 767) {
            //     if (countElements < 4) {
            //         countElements += 1;
            //     } else {
            //         countArrays += 1;
            //         countElements = 1;
            //         groupArrSpec[countArrays] = [];
            //     }

            //     groupArrSpec[countArrays].push(renderingCard(item));
            // }
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
            <h3 className='solution__header'>Наше рішення:</h3>
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