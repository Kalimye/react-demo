import {
	ADD_TODO, TOGGLE_TODO, REMOVE_TODO, DELETE_TODO
} from './actionTypes.js';

export default (state = [], action) => {
	switch(action.type) {
	  case ADD_TODO:
			return [
				...state,
			  {
					id: action.id,
					text: action.text,
					completed: false,
					deleted: false
				}
			];
		case TOGGLE_TODO:
			return state.map(todoItem => {
				if (todoItem.id === action.id) {
					return {...todoItem, completed: !todoItem.completed};
				}
				return todoItem;
			});
		case REMOVE_TODO:
			return state.filter(todoItem => {
				// @TODO 查看 action 是什么东西
			  return todoItem.id !== action.id;
			});
		case DELETE_TODO:
			return state.map(todoItem => {
			  return {...todoItem, deleted: !todoItem.deleted};
			});
		default:
			return state;
	}
};
