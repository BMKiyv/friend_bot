import React from 'react';
import './style.scss';
import I18n from '../../I18n'

const About = () => {
    const items = [
        `${I18n.t('aboutMessage1')}`,
        `${I18n.t('aboutMessage2')}`,
        `${I18n.t('aboutMessage3')}`,
        `${I18n.t('aboutMessage4')}`
    ]
    return (
        <div className='container about-wrap'>
            <div className='about'>
                <h3 className='about__header'>{I18n.t('aboutTitle')}</h3>
                <div className='about__items'>
                    {items.map((item,i)=>{
                        return (
                            <div className='about__items-item' key={i}>
                                <img src='/images/ok.svg' alt='ok'/>
                                <p className='about__items-text solid bold'>{item}</p>
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