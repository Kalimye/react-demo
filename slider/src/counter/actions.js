import {INCREMENT, DECREMENT} from './actionTypes.js';

export const increment = (counterCaption) => ({
  type: INCREMENT,
	counterCaption: counterCaption
});

export const decrement = (counterCaption) => ({
  type: DECREMENT,
	counterCaption: counterCaption
});
