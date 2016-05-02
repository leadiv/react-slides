import { combineReducers } from 'redux';
import slide from './slide';
import fetching from './fetching';

const rootReducers = combineReducers({
    slide,
    fetching
}); 

export default rootReducers;
