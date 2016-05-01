import {
    SLIDE_NEXT,
    SLIDE_PREVIOUS,
    SLIDE_FIRST,
    SLIDE_LAST,
    SLIDE_ADD
} from '../actions/slide';

const initalState = {
    current: 0,
    total: 0
};

function slide(state = initalState, action) {
    switch (action.type) {
        case SLIDE_ADD:
            return Object.assign({}, state, {
                current: state.current === 0 ? 1 : state.current,
                total: state.total + 1
            });

        case SLIDE_NEXT:
            return Object.assign({}, state, {
                current: state.current === state.total ? state.current : state.current + 1
            });

        case SLIDE_PREVIOUS:
            return Object.assign({}, state, {
                current: state.current > 1 ? state.current - 1 : state.current
            });

        case SLIDE_FIRST:
            return Object.assign({}, state, {
                current: state.current === 0 ? 0 : 1
            });

        case SLIDE_LAST:
            return Object.assign({}, state, {
                current: state.total
            });

        default:
            return state;
    }
}

export default slide;
