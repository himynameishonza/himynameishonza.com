import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export function setInitialCookies() {
    cookies.set('masterCookie', false, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    cookies.set('theme', 'light', { path: '/', maxAge: 60 * 60 * 24 * 365 });
    cookies.set('markRead', [], { path: '/', maxAge: 60 * 60 * 24 * 365 });
    cookies.set('sharing', [false, false, true, true, true], {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
    });
}

// Master Cookie
export function saveMasterCookie(masterCookie) {
    cookies.set('masterCookie', masterCookie, { path: '/', maxAge: 60 * 60 * 24 * 365 });
}

export function readMasterCookie() {
    return cookies.get('masterCookie');
}

// Theme Cookie
export function saveThemeCookie(theme) {
    cookies.set('theme', theme, { path: '/', maxAge: 60 * 60 * 24 * 365 });
}

export function readThemeCookie() {
    return cookies.get('theme');
}

// Sharing Cookie
export function saveSharingCookie(sharing) {
    cookies.set('sharing', sharing, { path: '/', maxAge: 60 * 60 * 24 * 36 });
}

export function readSharingCookie() {
    return cookies.get('sharing');
}

// Set theme to body
export function setTheme() {
    document.body.classList.remove('theme--light', 'theme--dark');
    readThemeCookie() === undefined
        ? document.body.classList.add('theme--light')
        : document.body.classList.add('theme--' + readThemeCookie());
}

export default cookies;
