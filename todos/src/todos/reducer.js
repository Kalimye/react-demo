import {
	ADD_TODO, TOGGLE_TODO, REMOVE_TODO, DELETE_TODO
} from './actionTypes.js';

export default (state = [], action) => {
	console.log(action);
	switch(action.type) {
	  case ADD_TODO:
			return [
			  {
					id: action.id,
					text: action.text,
					completed: false,
					deleted: false
				},
				...state
			];
		case TOGGLE_TODO:
			return state.map(todoItem => {
			  return {...todoItem, completed: !todoItem.completed};
			});
		case REMOVE_TODO:
			return state.filter(todoItem => {
				// @TODO 查看 action 是什么东西
			  return todoItem.id === action.id;
			});
		case DELETE_TODO:
			return state.map(todoItem => {
			  return {...todoItem, deleted: !todoItem.deleted};
			});
		default:
			return state;
	}
};
