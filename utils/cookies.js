import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export function setInitialCookies() {
    cookies.set('masterCookie', false, {path: '/', maxAge: 60 * 60 * 24 * 365});
    cookies.set('theme', 'light', {path: '/', maxAge: 60 * 60 * 24 * 365});
    cookies.set('allowMarkRead', false, {path: '/', maxAge: 60 * 60 * 24 * 365});
    cookies.set('markRead', [], {path: '/', maxAge: 60 * 60 * 24 * 365});
    cookies.set('sharing', [false, false, true, true, true], {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
    });
}

// Master Cookie
export function saveMasterCookie(masterCookie) {
    cookies.set('masterCookie', masterCookie, {path: '/', maxAge: 60 * 60 * 24 * 365});
}

export function readMasterCookie() {
    return cookies.get('masterCookie');
}

// Theme Cookie
export function saveThemeCookie(theme) {
    cookies.set('theme', theme, {path: '/', maxAge: 60 * 60 * 24 * 365});
}

export function readThemeCookie() {
    return cookies.get('theme');
}

// Mark as Read Cookie
export function saveMarkReadCookie(postSlug) {
    let newMarkReadPostArray = readMarkReadCookie();
    if (newMarkReadPostArray !== undefined) {
        let duplicityChecker = newMarkReadPostArray.includes(postSlug);
        !duplicityChecker ? newMarkReadPostArray.push(postSlug) : null;
        cookies.set('markRead', newMarkReadPostArray);
    } else {
        return;
    }
}

export function readMarkReadCookie() {
    return cookies.get('markRead');
}

export function checkIfRead(slug) {
    let checker = readMarkReadCookie();
    if (checker !== undefined) {
        const checkerResult = checker.includes(slug);
        return checkerResult;
    } else {
        return false;
    }
}

// Sharing Cookie
export function saveSharingCookie(sharing) {
    cookies.set('sharing', sharing, {path: '/', maxAge: 60 * 60 * 24 * 36});
}

export function readSharingCookie() {
    return cookies.get('sharing');
}

// Mark Read Settings Cookie
export function readMarkReadSetting() {
    return cookies.get('allowMarkRead');
}

export function setMarkReadSetting(value) {
    cookies.set('allowMarkRead', value, {path: '/', maxAge: 60 * 60 * 24 * 36});
}

// Set theme to body
export function setTheme() {
    document.body.classList.remove('theme--light', 'theme--dark');
    readThemeCookie() === undefined
        ? document.body.classList.add('theme--light')
        : document.body.classList.add('theme--' + readThemeCookie());
}

export default cookies;
