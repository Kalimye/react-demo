import {INCREMENT, DECREMENT} from './actionTypes.js';

export default (state = {init: 0}, action) => {
  switch(action.type) {
	  case INCREMENT:
			return {...state, init: state.init + 1};
		case DECREMENT:
			return {...state, init: state.init - 1};
		default:
			return state;
	}
};
