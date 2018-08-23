import {createStore, combineReducers} from 'redux';
import {reducer as sliderReducer} from './slider/';
import {reducer as counterReducer} from './counter/';
import {reducer as countersReducer} from './counters/';

const reducer = combineReducers({
	slider: sliderReducer,
	counter: counterReducer,
	counters: countersReducer
});

export default createStore(reducer);
