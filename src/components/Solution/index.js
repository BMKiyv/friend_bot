import React from 'react';
import './style.scss';

const Solution = () => {
    const cardData = [
        {
            class: 'bg-heart',
            description: 'Перша психологічна допомога'
        },
        {
            class: 'bg-bot ',
            description: 'Автоматизований співрозмовник (чатбот)'
        },  {
            class: 'bg-brain',
            description: 'Заснований на когнітивно-поведінковій терапії'
        },
        {
            class: 'bg-dialog',
            description: 'Щоденні короткі діалоги'
        },
                {
            class: 'bg-logotelegram',
            description: 'Завжди під рукою (месенджер, додаток)'
        }
    ]
    return (
        <div className='container solution'>
            <h3 className='solution__header'>Наше рішення:</h3>
            <div className='solution__wrap'>
                {cardData.map((item, i) => {
                    return (
                        <div className='solution__card' key = {i}>
                            <div className='solution__card-img'>
                                <figure className={item.class}/>
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