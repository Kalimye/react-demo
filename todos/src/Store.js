import {createStore, combineReducers} from 'redux';

import {reducer as todosReducer} from './todos/';
import {reducer as filterReducer} from './filter/';

const reducer = combineReducers({
	todos: todosReducer,
	filter: filterReducer
});

export default createStore(reducer, {});
