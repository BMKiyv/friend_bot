import React from 'react';
import './style.scss';

const Solution = () => {
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
    return (
        <div className='container solution' id='solution'>
            <h3 className='solution__header'>Наше рішення:</h3>
            <div className='solution__wrap'>
                {cardData.map((item, i) => {
                    return (
                        <div className='solution__card' key = {i}>
                            <div className='solution__card-img'>
                                <img src={item.class} alt={item.description}/>
                            </div>
                            <figcaption className='solution__card-text'>{item.description}</figcaption>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Solution;