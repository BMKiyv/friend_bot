import React,{useEffect} from 'react';
import './style.scss';

const Conditions = () => {

          useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      });

    return(
        <>
        <div className='container conditions'>
            <h2 className='conditions__title'>Personal data processing policy</h2>
            <h3 className='conditions__title-second'><span className='conditions__marker'>I.</span> Introduction</h3>
            <p className='conditions__content'><span className='conditions__marker'>I.I</span> The personal data processing policy (hereinafter referred to as the "Policy") has been issued and applied by the GetUNIQ service (hereinafter referred to as the "Operator") in accordance with paragraph 2 of part 1 of Art. 18.1 of the Federal Law of July 27, 2006 N 152-FZ "On Personal Data". This Policy defines the procedure and conditions of the Operator regarding the processing of personal data, establishes provisions aimed at complying with the legislation of the Russian Federation regarding the processing of personal data. All issues related to the processing of personal data not regulated by this Policy are resolved in accordance with the current legislation of the Russian Federation in the field of personal data, the Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data, concluded in Strasbourg on January 28, 1981, as well as with the Amendments to the Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data (CETS No. 108).</p>
            <h3 className='conditions__title-second'><span className='conditions__marker'>II.</span> Basic provisions</h3>
            <h4 className='conditions__list-title'><span className='conditions__marker'>II.I.</span> The purpose of processing personal data is:</h4>
            <ul className='conditions__list'>
                <li className='conditions__list-item'>Providing personal data subjects with the services of the Operator in the GetUNIQ automated service. The list of GetUNIQ service services is available at <a href='https://getuniq.me'>https://getuniq.me.</a></li>
	            <li className='conditions__list-item'>Ensuring the protection of the rights and freedoms of an individual in the processing of his personal data.</li>
            </ul>
            <h4 className='conditions__list-title'><span className='conditions__marker'>II.II.</span> Processing is organized by the Operator on the principles of:</h4>
            <ul className='conditions__list'>
                <li className='conditions__list-item'>Providing personal data subjects with the services of the Operator in the GetUNIQ automated service. The list of GetUNIQ service services is available at https://getuniq.me.</li>
	            <li className='conditions__list-item'>Ensuring the protection of the rights and freedoms of an individual in the processing of his personal data.</li>
            </ul>
        </div>
        </>
    )
}

export default Conditions;