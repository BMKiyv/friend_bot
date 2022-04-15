//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './style.scss';

//Utils
//import { URL_LANG } from '../../utils/constants';

const Btn = ({
    url, theme,img, title, onPress, full, nofollow = false,
}) => {

    const renderBtn = () => {

        if (url) {
            if (url.indexOf("http") !== -1) {
                return (
                    <a
                        className = { `btn btn-${theme} ${full ? "btn-full" : ""}` } href = { url } rel = 'noreferrer' target = '_blank'
                        onClick = { onPress }>
                        {img && <img className = 'btn-img' src = { img } alt = { theme } />}
                        <span className = 'btn_text'>{ title }</span>
                    </a>
                );
            }

            return (
                <Link
                    className = { `btn btn-${theme} ${full ? "btn-full" : ""}` } to = { url } onClick = { onPress }>
                    {img && <img className = 'btn-img' src = { img } alt = { theme } />}
                    <span className = 'btn_text'>{ title }</span>
                </Link>
            );

        }

        return (<div
            className = { `btn btn-${theme} ${full ? "btn-full" : ""}` } onClick = { onPress }>
            <span className = 'btn_text'>{ title }</span>
        </div>);
    };

    return (<>
        { renderBtn() }
    </>
    );
};

Btn.propTypes = {
    url:      PropTypes.string,
    theme:    PropTypes.string.isRequired,
    title:    PropTypes.string.isRequired,
    onPress:  PropTypes.func,
    width:    PropTypes.string,
    nofollow: PropTypes.bool,
    img:      PropTypes.string
};

export default Btn;