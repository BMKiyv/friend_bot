import React from 'react';
import './style.scss';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const items = [
        `${t('aboutMessage1')}`,
        `${t('aboutMessage2')}`,
        `${t('aboutMessage3')}`,
        `${t('aboutMessage4')}`
    ]
    return (
        <div className='container about-wrap'>
            <div className='about'>
                <h3 className='about__header'>{t('aboutTitle')}</h3>
                <div className='about__items'>
                    {items.map((item,i)=>{
                        return (
                            <div className='about__items-item' key={i}>
                                <span>✅</span>
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