import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';
import { useTranslation } from "react-i18next";
import cardData from '../jsons/solution';

const Solution = () => {

    const { t } = useTranslation();
    const [width, setWidth] = useState(window.innerWidth)

    const [groupCards, setGroupCards] = useState([]);

    const getWidth = useCallback(
        event => setWidth(window.innerWidth)
        , [])


    const renderingCard = useCallback((item) => {
        return (
            <div className='solution__card' key={Math.random() * 10}>
                <div className='solution__card-img'>
                    <img src={item.class} alt={item.description} />
                </div>
                <figcaption className='solution__card-text'>{t(`${item.description}`)}</figcaption>
            </div>
        )
    }, [t])

    useEffect(() => {
        window.addEventListener('resize', getWidth);
        return (() => window.removeEventListener('resize', getWidth))
    }, [getWidth])

    useEffect(() => {
        const groupArrSpec = [[]];

        for (let i = 0; i < cardData.length; i++) {
            if (i < cardData.length - 1) {
                groupArrSpec[i].push(renderingCard(cardData[i]));
                groupArrSpec[i].push(renderingCard(cardData[i + 1]));
                groupArrSpec[i + 1] = [];
            }
            else {
                groupArrSpec[i].push(renderingCard(cardData[i]));
                groupArrSpec[i].push(renderingCard(cardData[0]));
                break
            }
        }
        setGroupCards(groupArrSpec)
    }, [width, renderingCard]);



    const renderCards = useCallback(() => {
        const loop = (goup, i) => {
            let key = `key${i}`
            return (
                <div className='solution__wrap' key={key}>
                    {goup}
                </div>)
        };


        return groupCards.map(loop);

    }, [groupCards]);

    return (
        <div className='container solution' id='solution'>
            <h3 className='solution__header'>{t('solutionTitle')}</h3>
            <div className={width > 767 ? 'solution__wrap' : 'solution__wrap-mobile'}>
                {width > 767 ? cardData.map((item, i) => {
                    return (
                        <div className='solution__card' key={i}>
                            <div className='solution__card-img'>
                                <img src={item.class} alt={item.description} />
                            </div>
                            <figcaption className='solution__card-text'>{t(`${item.description}`)}</figcaption>
                        </div>
                    )
                }) : <Carousel
                    centerMode={false}
                    autoFocus={true}
                    {...carouselPropTeam()}>
                    {renderCards()}
                </Carousel>}
            </div>
        </div>
    )
};

export default Solution;