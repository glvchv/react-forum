export const getCookie = (cookieName) => {
    const cookieValue = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}