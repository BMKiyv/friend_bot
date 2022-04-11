import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';

const processing = [
    {
        class: 'bg-smile4',
        title: 'Тривожний стан',
        text: 'Автоматизований співрозмовник (чатбот)'
    },
    {
        class: 'bg-mess54',
        title: 'Діалог з “Другом”',
        text: 'Автоматизований співрозмовник (чатбот)'
    },
    {
        class: 'bg-book',
        title: 'Набір вправ',
        text: 'Автоматизований співрозмовник (чатбот)'
    },
    {
        class: 'bg-smile5',
        title: 'Покращення стану',
        text: 'Автоматизований співрозмовник (чатбот)'
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
            if (width < 1023) {
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

            else if (width > 1023) {
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
                <figure className={`${item.class} process__items-img`}/>
                <p className='process__items-title'>{item.title}</p>
                <p className='process__items-text'>{item.text}</p>
            </div>
        )
    }

    return (
        <div className='container'>
            <h3>Як працює</h3>
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