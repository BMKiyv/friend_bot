//const _dev = false; //false;

const pathname = window.location.pathname;

window.localStorage.setItem('lg', pathname.indexOf('/ru') !== -1 ? 'ru' : 'uk');
export const URL = process.env.BACKEND_URL;
export const URLAPI = `${URL}/api`;
export const LANG = (() => window.localStorage.getItem('lg'))();
export const URL_LANG = LANG === 'uk' ? '' : '/ru';

export const carouselPropTeam = () => ({
    showArrows:           false,
    showStatus:           false,
    showIndicators:       false,
    infiniteLoop:         true,
    showThumbs:           false,
    useKeyboardArrows:    true,
    autoPlay:             true,
    stopOnHover:          true,
    swipeable:            true,
    dynamicHeight:        false,
    emulateTouch:         false,
    //thumbWidth:           number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem:         1,//number('selectedItem', 0, {}, valuesGroupId),
    interval:             13000,
    transitionTime:       350,
    swipeScrollTolerance: 5,
});