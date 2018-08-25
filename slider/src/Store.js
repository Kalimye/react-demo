import {createStore, combineReducers} from 'redux';
import {reducer as sliderReducer} from './slider/';
import {reducer as counterReducer} from './counter/';
import {reducer as countersReducer} from './counters/';
import {reducer as summaryReducer} from './summary/';

const reducer = combineReducers({
	slider: sliderReducer,
	counter: counterReducer,
	counters: countersReducer,
	summary: summaryReducer
});

export default createStore(reducer);
