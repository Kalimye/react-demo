import {actions} from '../../counter/';
import * as actionTypes from '../../counter/actionTypes.js';

describe('counter/actions', () => {
  describe('increment', () => {
	  const increment = actions.increment;

	  it('测试派发的 action 对象: increment', () => {
		  const caption = 'First';
		  const action = increment(caption);

			expect(action).toEqual({
			  type: actionTypes.INCREMENT,
				counterCaption: caption
			});
		});
	});

  describe('decrement', () => {
	  const decrement = actions.decrement;

	  it('测试派发的 action 对象: decrement', () => {
			const caption = 'First';
			const action = decrement(caption);

			expect(action).toEqual({
				type: actionTypes.DECREMENT,
				counterCaption: caption
			});
		});
	});
});
