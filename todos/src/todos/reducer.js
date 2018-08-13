import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

export default (state = [], action) => {
  switch(action.type) {
	  case ADD_TODO:
			return [
			  {
				  id: action.id,
					text: action.text,
					completed: false
				},
				...state
			];
		case TOGGLE_TODO:
			return state.map(todoItem => {
			  if (todoItem.id === action.id) {
					console.log({...todoItem, completed: !todoItem.completed});
				  return {...todoItem, completed: !todoItem.completed};
				}
				return todoItem;
			});
		case REMOVE_TODO:
			return state.filter(todoItem => todoItem.id !== action.id);
		default:
			return state;
	}
};
