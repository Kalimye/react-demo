import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  'First': 0,
	'Second': 10,
	'Third': 20
};

// createStore() 函数由 redux 库提供
// 第一个参数 reducer 代表更新状态的 reducer
// 第二个参数 initValues 是状态的初始值
const store = createStore(reducer, initValues);

export default store;
