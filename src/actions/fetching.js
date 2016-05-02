export const FETCHING_START = 'FETCHING_START';
export const FETCHING_DONE = 'FETCHING_DONE';
export const FETCHING_ERROR = 'FETCHING_ERROR';

export function startFetching(url) {
    return {
        type: FETCHING_START,
        url 
    };
}

export function doneFetching(url, data) {
    return {
        type: FETCHING_DONE,
        url,
        data
    };
}

export function errorFetching(url, message) {
    return {
        type: FETCHING_ERROR,
        url,
        message
    };
}
