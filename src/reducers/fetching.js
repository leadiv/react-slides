import {
    FETCHING_START,
    FETCHING_DONE,
    FETCHING_ERROR
} from '../actions/fetching';

const initialState = {};
const initialSource = {
    isFetching: false,
    isError: false
};

function source(state = initialSource, action) {
    switch (action.type) {
        case FETCHING_START:
            return Object.assign({}, state, {
                url: action.url,
                isFetching: true,
                isError: false
            });

        case FETCHING_DONE:
            return Object.assign({}, state, {
                url: action.url,
                data: action.data,
                isFetching: false,
                isError: false
            });

        case FETCHING_ERROR:
            return Object.assign({}, state, {
                url: action.url,
                data: action.message,
                isFetching: false,
                isError: true
            });

        default:
            return state;
    }

}

function fetching(state = initialState, action) {
    switch (action.type) {
        case FETCHING_START:
        case FETCHING_DONE:
        case FETCHING_ERROR:
            return Object.assign({}, state, {
                [action.url]: source(state[action.url], action)
            });

       default:
            return state;
    }
}

export default fetching;
