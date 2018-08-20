import {createStore, combineReducers} from 'redux';
import {reducer as sliderReducer} from './header/';

const reducer = combineReducers({
	slider: sliderReducer
});

export default createStore(reducer);
