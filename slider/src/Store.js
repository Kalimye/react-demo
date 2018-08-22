import {createStore, combineReducers} from 'redux';
import {reducer as sliderReducer} from './slider/';
import {reducer as counterReducer} from './counter/';

const reducer = combineReducers({
	slider: sliderReducer,
	counter: counterReducer
});

export default createStore(reducer);
