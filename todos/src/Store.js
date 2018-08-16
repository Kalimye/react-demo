import {createStore, combineReducers} from 'redux';

import {reducer as todosReducer} from './todos/';

const reducer = combineReducers({
	todos: todosReducer
});

export default createStore(reducer, {});
