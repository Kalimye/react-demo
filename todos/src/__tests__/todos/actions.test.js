import * as actions from '../../todos/actions.js';
import * as actionTypes from '../../todos/actionTypes.js';
import store from '../../Store.js';

describe('todo/actions', () => {
  describe('addTodo', () => {
	  const addTodo = actions.addTodo;

		it('添加一个 todo 待办事项', () => {
		  const text = 'first todo';
			const action = addTodo(text);

			expect(action.text).toBe(text);
			expect(action.completed).toBe(false);
			expect(action.type).toBe(actionTypes.ADD_TODO);
		});

		it('添加多个 todo 待办事项时应该有不同的 id', () => {
		  const textFirst = 'first todo';
			const actionFirst = addTodo(textFirst);

			const textSecond = 'second todo';
			const actionSecond = addTodo(textSecond);

			expect(actionFirst.id !== actionSecond.id).toBe(true);
		});
	});

	describe('toggleTodo', () => {
	  const addTodo = actions.addTodo;
		const toggleTodo = actions.toggleTodo;

		it('切换 todo 完成状态', () => {
			const text = 'add todo';
			const addTodoAction = addTodo(text);
			const toggleTodoAction = toggleTodo(addTodoAction.id);

			store.dispatch(addTodoAction);
			store.dispatch(toggleTodoAction);

			const state = store.getState().todos;
			const listen = () => {
			  state = {...state, todos: store.getState().todos};
			};

			store.subscribe(listen);

			state.map(todo => {
				expect(todo.completed === !addTodoAction.completed).toBe(true);
			});
		});
	});
});
