import {actions} from '../../counter/';
import store from '../../Store.js';

describe('counter/reducer', () => {
  describe('init state', () => {
	  it('测试 state 初始值', () => {
		  const state = {
			  counter: store.getState().counter
			};

		  expect(state.counter).toEqual({
			  'First': 0
			});
		});
	});

  describe('increment', () => {
	  const increment = actions.increment;

	  it('测试 increment 计算后的 state', () => {
		  const caption = 'First';
			const state = {
			  counter: store.getState().counter
			};

			// 派发 action
			const action = increment(caption);
			store.dispatch(action);

		  for(const key in state.counter) {
			  if (state.counter.hasOwnProperty(key)) {
				  const updatedState = {
					  counter: store.getState().counter
					};

					expect(state.counter[key] +1).toBe(updatedState.counter[key]);
				}
			}
		});
	});

  describe('decrement', () => {
	  const decrement = actions.decrement;

	  it('测试 decrement 计算后的 state', () => {
		  const caption = 'First';
			const state = {
			  counter: store.getState().counter
			};

			// 派发 action
			const action = decrement(caption);
			store.dispatch(action);

		  for(const key in state.counter) {
			  if(state.counter.hasOwnProperty(key)) {
				  const updatedState = {
					  counter: store.getState().counter
					};

				  expect(state.counter[key] - 1).toBe(updatedState.counter[key]);
				}
			}
		});
	});
});
