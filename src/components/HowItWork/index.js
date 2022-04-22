import React from 'react';
import './style.scss';
import Button from '../Button'
import { useTranslation } from "react-i18next";


const HowItWork = () => {
     const { t } = useTranslation();
    const messages = [
        {
            text: `${t('howItWorkMessage1')}`,
            className: '😥'
        },
        {
            text: `${t('howItWorkMessage2')}`,
            className: '😜'
        },
        {
            text: `${t('howItWorkMessage3')}`,
            className: '😐'
        },
        {
            text: `${t('howItWorkMessage4')}`,
            className: '😄'
        },
        {
            text: `${t('howItWorkMessage5')}`,
            className: '😐'
        }
    ]
    return (
        <div className='container howitwork' id='aboutbot'>
            <h2 className='howitwork__title'>{t('howItWorkTitle')}</h2>
            <div className='howitwork__content'>
                <div className='howitwork__content-bigcard'>
                    <div className='howitwork__content-images'>
                       { messages.map((item,i) => {
                          return (
                            <p key={i} className='howitwork__content-image'>{item.text}<span>{item.className}</span></p>
                          )
                          })}
                    </div> 
                    <p className='howitwork__content-text solid bold'>{t('howItWorkBigCard')}</p>
                    <Button 
                        url = 'https://google.com'
                        theme='main'
                        title={t('firstButtonBlue')}
                        img='/images/tgwhite.png'
                    />
                </div>
                <div className='howitwork__content-card'>
                    <span>👩‍⚕️</span>
                    <p className='howitwork__content-smalltext solid'>{t('howItworkSmallCard1')}</p>
                </div>
                <div className='howitwork__content-card'>
                <span>🤞</span>
                    <p className='howitwork__content-smalltext solid'>{t('howItworkSmallCard2')}</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;