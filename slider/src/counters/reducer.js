import {INCREMENT, DECREMENT} from './actionTypes.js';

// 初始化 counterItem 默认值
const initValue = {
  'First': 0,
	'Second': 10,
	'Third': 20
};

export default (state = initValue, action) => {
  const {counterCaption} = action;
	
	switch(action.type) {
	  case INCREMENT:
			return {...state, [counterCaption]: state[counterCaption] + 1};
		case DECREMENT:
			return {...state, [counterCaption]: state[counterCaption] - 1};
		default:
			return state;
	}
};
