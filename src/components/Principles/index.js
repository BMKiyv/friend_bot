import React from 'react';
import './style.scss';
import { useTranslation } from "react-i18next";

const Principles = () => {
    const { t } = useTranslation();
    const principles = [
        {
            header: `${t('principlesHeader1')}`,
            text: `${t('principlesText1')}`,
            className: '/images/palms.svg'
        },
        {
            header: `${t('principlesHeader2')}`,
            text: `${t('principlesText2')}`,
            className: '/images/doctor.svg'
        },
        {
            header: `${t('principlesHeader3')}`,
            text: `${t('principlesText3')}`,
            className: '/images/fingers.svg'
        },
        {
            header: `${t('principlesHeader4')}`,
            text: `${t('principlesText4')}`,
            className: '/images/message.svg'
        },
        {
            header: `${t('principlesHeader5')}`,
            text: `${t('principlesText5')}`,
            className: '/images/smile3.svg'
        },
        {
            header: `${t('principlesHeader6')}`,
            text: `${t('principlesText6')}`,
            className: '/images/smile2.svg'
        }
    ]
    return (
        <div className='container principles' id='principles'>
            <h3>{t('principlesTitle')}</h3>
            <div className='principles__content'>
                {principles.map((item,i)=>{
                    return (
                        <div className='principles__content-item' key={i}>
                            <img src={item.className} alt={item.header}/>
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