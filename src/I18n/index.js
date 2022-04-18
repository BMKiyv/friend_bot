import I18n from 'i18n-js';

import ru from './locales/ru';
import uk from './locales/uk';
import { LANG } from '../utils/constants';

const locales = LANG;

if (!locales) {
    window.localStorage.setItem('lg', 'uk');
    //lang= 'uk';
}


switch (locales) {
    case 'ru':
        I18n.locale = 'ru';
        I18n.localeCode = 'ru';
        break;
    default:
        I18n.locale = 'uk-UA';
        I18n.localeCode = 'uk';
}

I18n.fallbacks = true;
I18n.translations = {
    ru,
    uk,
};

export default I18n;