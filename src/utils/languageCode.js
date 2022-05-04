export const languageCode = () => {
    const pathname = window.location.pathname;
    const isRu = pathname.indexOf('/ru') !== -1 ? 'ru' : 'uk';

    switch (isRu) {
        case 'ru':
            return {
                code: 'ru_RU',
                name: 'ru',
                forUrl:'/ru/'
            }
        default:
            return {
            code: 'uk_UA',
            name: 'uk',
            forUrl:'/'
        }
    }

}