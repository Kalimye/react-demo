// Redux 中的每个 action 构造函数都返回一个 action 对象

import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
  return {
	  type: ActionTypes.INCREMENT,
		counterCaption: counterCaption
	};
};

export const decrement = (counterCaption) => {
  return {
	  type: ActionTypes.DECREMENT,
		counterCaption: counterCaption
	};
};
