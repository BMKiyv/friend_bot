import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';
import Btn from '../Button';
import team from '../jsons/team';
import { useTranslation } from "react-i18next";

const Team = () => {

    const { t } = useTranslation();
    const [width, setWidth] = useState(window.innerWidth)
    const [more,setMore] = useState(false)

    const [groupTeam, setGroupTeam] = useState([]);


    const readTeam = ()=>{
        setMore((prev)=>setMore(!prev))
    }

    const getWidth = useCallback(
        event => setWidth(window.innerWidth)
        , [])

    useEffect(() => {
        window.addEventListener('resize', getWidth);
        return (() => window.removeEventListener('resize', getWidth))
    }, [getWidth])

    const renderingCard = useCallback((item) => {
        return (
            <div className='team__items-item' key={item.name}>
                <div className='team__items-img'>
                    <img src={item.src} alt={item.name} />
                </div>
                <p className='team__items-name solid bold'>{t(`${item.name}`)}</p>
            </div>
        )
    },[t])

    useEffect(() => {
        const groupArrSpec = [[]];

        let countArrays = 0;

        for (const item of team) {
            if (width < 768) {
                groupArrSpec[countArrays].push(renderingCard(item));
                if (countArrays < team.length - 1) {
                    countArrays += 1;
                    groupArrSpec[countArrays] = [];
                }
                else {
                    countArrays = 0;
                    break;
                }
            }
        }

        setGroupTeam(groupArrSpec)
    }, [width,renderingCard]);

    const renderSpecialist = useCallback(() => {
        const loop = (goup, i) => {
            let key = `key${i}`
            return (
                <div className='team__items' key={key}>
                    {goup}
                </div>)
        };


        return groupTeam.map(loop);

    }, [groupTeam]);

    return (
        <div className='container team' id='team'>
            <div className='team___history-wrap'>
                <h3 className='team___history-title'>{t('teamTitle')}</h3>
                <div className={!more?'team___history-hidden':'team___history'}>
                    <p className='team___history-firstcontent'>{t('teamHistory1')}</p>
                    <p className='team___history-content'>{t('teamHistory2')}</p>

                    <p className='team___history-content'>{t('teamHistory3')}</p>
                </div>
                <div className='team___history-btn'>
                <Btn
                                    theme='more'
                                    title=''
                                    onPress = {readTeam}
                                    img = {more?'/images/btnless.svg': '/images/bull3.svg'}
                                />
                                </div>
            </div>
            <div className='team__gallery'>
                <h3 className='team__title'>Команда</h3>

                {width > 767 ? 
                <div className='team__carousel'>
                    <div className='team__items'>
                        {team.map((item) => {
                            return (
                                <div className='team__items-item' key={item.name}>
                                    <div className='team__items-img'>
                                        <img src={item.src} alt={item.name} />
                                    </div>
                                    <p className='team__items-name solid bold'>{t(`${item.name}`)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                    :
                    <div className='team__carousel'>
                        <Carousel
                            {...carouselPropTeam()}>
                            {renderSpecialist()}
                        </Carousel>
                    </div>}
            </div>
        </div>
    )
}

export default Team;