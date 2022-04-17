import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselPropTeam } from '../../utils/constants';
import Btn from '../Button';

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
    }, [width]);

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
        <div className='container team' id='team'>
            <div className='team___history-wrap'>
                <h3 className='team___history-title'>Наша історія</h3>
                <div className={!more?'team___history-hidden':'team___history'}>
                    <p className='team___history-firstcontent'>Проект ми назвали "Друг". "Друг" - це автоматичний співрозмовник (chatbot), який допомагає контролювати настрій та дізнаватися про себе. Спираючись на терапевтичні рамки, відомі як когнітивно-поведінкова терапія, Друг запитує людей, як вони почуваються і що відбувається в їхньому житті, у форматі коротких щоденних розмов. Друг також говорить про психічне здоров'я та благополуччя та відправляє відео та інші корисні інструменти залежно від настрою та потреб у даний момент.</p>
                    <p className='team___history-content'> Йдеться про інструмент, який дозволить вирішити масові стандартні потреби та зняти з плечей спеціалістів типову роботу, щоб ті могли ефективніше працювати у нестандартних випадках.</p>

                    <p className='team___history-content'>Участь в онлайн-хакатонах для нас новинка. Перший вечір пішов на те, щоб розібрати та перечитати всі гайди, чеклісти, правила чатики у слаці. Увечері ми зателефонували Ірі, обговорили зони відповідальності за проектом і пішли працювати, ніч пройшла продуктивно, сформували прототип нашого майбутнього «Друга», знайшли потенційних партнерів та визначили ключові болі ринку.</p>
                </div>
                <div className='team___history-btn'>
                <Btn
                                    theme='more'
                                    title=''
                                    onPress = {readTeam}
                                    img = {more?'/images/btnless.svg': 'images/bull3.svg'}
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
                                    <p className='team__items-name solid bold'>{item.name}</p>
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