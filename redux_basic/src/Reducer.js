// Reducer 只关心如何更新 state，而不用管 state 怎么存

import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;

	switch (action.type) {
	  case ActionTypes.INCREMENT:
			return {...state, [counterCaption]: state[counterCaption] + 1};
		case ActionTypes.DECREMENT:
			return {...state, [counterCaption]: state[counterCaption] - 1};
		default:
			return state;
	}
}
