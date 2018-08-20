import {OPEN_SLIDER, CLOSE_SLIDER} from './actionTypes.js';

export default (state = {open: false}, action) => {
  switch(action.type) {
	  case OPEN_SLIDER:
			return {...state, open: true};
		case CLOSE_SLIDER:
			return {...state, open: false};
		default:
			return state;
	}
};
