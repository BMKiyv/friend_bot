import React from 'react';
import './style.scss';
import { useTranslation } from "react-i18next";


const Answers = () => {
    const { t } = useTranslation();
    const answers = [
     {
            question:`${t('question1')}`,
            answer: `${t('answer1')}`
        },
        {
            question:`${t('question2')}`,
            answer: `${t('answer2')}`
        },
        {
            question:`${t('question3')}`,
            answer: `${t('answer3')}`
        }   
    ]
    return (
        <div className='container answers' id='faq'>
            <h3 className='answers__header'>{t('answersTitle')}</h3>
            <div className='answers__details'>
                {answers.map((item,i)=>{
                    return (
                        <details className='answers__item' key={i}>
                            <summary className='answers__question solid bold'><span>{item.question}</span></summary>
                            <p className='answers__answer'>{item.answer}</p>
                        </details>
                    )
                })}
            </div>
        </div>
    )
}

export default Answers;