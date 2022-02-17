export const getUrl = (url, q) => {
    return [url, q].join('&q=').concat('&days=7');
}