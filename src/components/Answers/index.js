import React from 'react';
import './style.scss';


const Answers = () => {
    const answers = [
     {
            question:'Яка кваліфікація фахівців на цій платформі?',
            answer: 'На цій платформі ви можете знайти найкращих професіоналів з усього світу. Ми ретельно перевіряємо кваліфікацію кожного спеціаліста.'
        },
        {
            question:'Яка кваліфікація фахівців на цій платформі?',
            answer: 'На цій платформі ви можете знайти найкращих професіоналів з усього світу. Ми ретельно перевіряємо кваліфікацію кожного спеціаліста.'
        },
        {
            question:'Яка кваліфікація фахівців на цій платформі?',
            answer: 'На цій платформі ви можете знайти найкращих професіоналів з усього світу. Ми ретельно перевіряємо кваліфікацію кожного спеціаліста.'
        }   
    ]
    return (
        <div className='container answers'>
            <h3 className='answers__header'>Питання та відповідь</h3>
            <div className='answers__details'>
                {answers.map((item,i)=>{
                    return (
                        <details className='answers__item' key={i}>
                            <summary className='answers__question'>{item.question}</summary>
                            <p className='answers__answer'>{item.answer}</p>
                        </details>
                    )
                })}
            </div>
        </div>
    )
}

export default Answers;