import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';

const team = [
    {
        src: '/images/team/lagutina.png',
        name: 'Соня Лагутіна'
    },
    {
        src: '/images/team/lyozin.png',
        name: 'Артем Льозін'
    },
    {
        src: '/images/team/tkachenko.png',
        name: 'Анна Ткаченко'
    },
    {
        src: '/images/team/kolchak.png',
        name: 'Катерина Колчак'
    }
]


const Team = () => {

    const[width,setWidth] = useState(window.innerWidth)

    const [groupTeam, setGroupTeam] = useState([]);

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

        setGroupTeam(groupArrSpec)
    },[width]);

    const renderSpecialist = useCallback(() => {
        const loop = (goup,i) => {
            let key = `key${i}`
             return (
            <div className='team__items' key={key}>
                {goup}
            </div>)
    };
     

        return groupTeam.map(loop);

    }, [groupTeam]);

    const renderingCard = (item) => {
        return (
            <div className='team__items-item' key={item.name}>
                <div className='team__items-img'>
                    <img src={item.src} alt={item.name} />
                </div>
                <p className='team__items-name solid bold'>{item.name}</p>
            </div>
        )
    }

    return (
        <div className='container' id='team'>
            <h3 className='team__title'>Команда</h3>
            <div className='team__carousel'>
                <Carousel
                    //statusFormatter={(current, total) => ` ${current} / ${total}`}
                    {...carouselPropTeam()}>
                    {renderSpecialist()}
                </Carousel>
            </div>
        </div>
    )
}

export default Team;