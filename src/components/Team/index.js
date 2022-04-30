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
    const [more, setMore] = useState(false)

    const [groupTeam, setGroupTeam] = useState([]);


    const readTeam = () => {
        setMore((prev) => setMore(!prev))
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
    }, [t])

    useEffect(() => {
        const groupArrSpec = [[]];

        if (width < 768) {
            for (let i = 0; i < team.length; i++) {
                if (i < team.length - 1) {
                    groupArrSpec[i].push(renderingCard(team[i]));
                    groupArrSpec[i].push(renderingCard(team[i + 1]));
                    groupArrSpec[i + 1] = [];
                }
                else {
                    groupArrSpec[i].push(renderingCard(team[i]));
                    groupArrSpec[i].push(renderingCard(team[0]));
                    break
                }
            }
        }

        setGroupTeam(groupArrSpec)
    }, [width, renderingCard]);

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
        <div className='container team'>
            <div className='team___history-wrap' id='story'>
                <h3 className='team___history-title'>{t('teamTitle')}</h3>
                <div className={!more ? 'team___history-hidden' : 'team___history'}>
                    <div className={!more ? 'team___history-block' : 'team___history-block-open'}>
                        <p className='team___history-firstcontent'>{t('teamHistory1')}</p>
                        <p className='team___history-firstcontent'>{t('teamHistory2')}</p>
                        <p className='team___history-firstcontent'>{t('teamHistory3')}</p>
                        <p className='team___history-firstcontent'>{t('teamHistory4')}</p>
                        <p className='team___history-firstcontent'>{t('teamHistory5')}</p>
                        <p className='team___history-firstcontent'>{t('teamHistory6')}</p>
                        <p className='team___history-firstcontent'>{t('teamHistory7')}</p>
                    </div>
                    <div className='team___history-btn'>
                        <Btn
                            theme='more'
                            title=''
                            onPress={readTeam}
                            img={more ? '/images/btnless.svg' : '/images/bull3.svg'}
                        />
                    </div>
                </div>
            </div>
            <div className='team__gallery' id='team'>
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