import React from 'react';
import './style.scss';

const About = () => {
    const items = [
        'Джерело достовірної інформації',
        'Швидкий доступ до спеціалістів',
        'Завжди поруч з тобою',
        'Джерело достовірної інформації'
    ]
    return (
        <div className='container about-wrap'>
            <div className='about'>
                <h3 className='about__header bold'>Ваш друг (чатбот) - це</h3>
                <div className='about__items'>
                    {items.map((item,i)=>{
                        return (
                            <div className='about__items-item' key={i}>
                                <figure className='bg-ok'/>
                                <p className='about__items-text bold'>{item}</p>
                            </div>

                        )
                    })}
                </div>
                <div className='about__background'/>
            </div>
        </div>
    )
}

export default About;