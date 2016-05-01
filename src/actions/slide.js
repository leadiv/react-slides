export const SLIDE_NEXT = 'SLIDE_NEXT';
export const SLIDE_PREVIOUS = 'SLIDE_PREVIOUS';
export const SLIDE_FIRST = 'SLIDE_FIRST';
export const SLIDE_LAST = 'SLIDE_LAST';
export const SLIDE_ADD = 'SLIDE_ADD';

export function addSlide() {
    return {
        type: SLIDE_ADD
    };
}

export function nextSlide() {
    return {
        type: SLIDE_NEXT
    };
}

export function previousSlide() {
    return {
        type: SLIDE_PREVIOUS
    };
}

export function firstSlide() {
    return {
        type: SLIDE_FIRST
    };
}

export function lastSlide() {
    return {
        type: SLIDE_LAST
    };
}
