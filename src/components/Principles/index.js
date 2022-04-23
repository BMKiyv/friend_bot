import React from 'react';
import './style.scss';
import { useTranslation } from "react-i18next";

const Principles = () => {
    const { t } = useTranslation();
    const principles = [
        {
            header: `${t('principlesHeader1')}`,
            text: `${t('principlesText1')}`,
            className: '🤲'
        },
        {
            header: `${t('principlesHeader2')}`,
            text: `${t('principlesText2')}`,
            className: '👩🏻‍⚕️'
        },
        {
            header: `${t('principlesHeader3')}`,
            text: `${t('principlesText3')}`,
            className: '🤞'
        },
        // {
        //     header: `${t('principlesHeader4')}`,
        //     text: `${t('principlesText4')}`,
        //     className: '/images/message.svg'
        // },
        //  {
        //     header: `${t('principlesHeader5')}`,
        //     text: `${t('principlesText5')}`,
        //     className: '/images/smile3.svg'
        // },
        {
            header: `${t('principlesHeader6')}`,
            text: `${t('principlesText6')}`,
            className: '🤭'
        }
    ]
    return (
        <div className='container principles' id='principles'>
            <h3>{t('principlesTitle')}</h3>
            <div className='principles__content'>
                {principles.map((item,i)=>{
                    return (
                        <div className='principles__content-item' key={i}>
                            <span>{item.className}</span>
                            <div className='principles__content-mean'>
                                <p className='principles__content-header solid bold'>{item.header}</p>
                                <p className='principles__content-text'>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Principles;