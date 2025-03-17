const StartFunc = () => {
    const myCookieValue = getCookie('KSFactoryToken');

    if ((myCookieValue === "") === false) {
        return true
    };
    return false;
};
const getCookie = (name) => document.cookie.split('; ').reduce((r, v) => v.startsWith(name + '=') ? v.split('=')[1] : r, '');

export { StartFunc };