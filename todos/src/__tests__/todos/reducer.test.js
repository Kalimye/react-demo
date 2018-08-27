import {actions} from '../../todos/';
import store from '../../Store.js';

let nextTodoId = 0;

describe('todo/reducer', () => {
  // 添加 todo 待办事项
  describe('addTodo', () => {
	  const addTodo = actions.addTodo;

	  it('添加 todo 待办事项并验证 todo 项中包含的字段', () => {
		  const text = 'add todo item';
			const action = store.dispatch(addTodo(text));
			const state = {
			  todos: store.getState().todos
			}

			state.todos.map(todo => {
			  expect(todo).toEqual({
				  id: nextTodoId++,
					text: text,
					completed: false,
					deleted: false
				});
			});
		});
	});

  // 切换 todo 待办事项完成状态
	// 1. 未完成 -> 已完成
	// 2. 已完成 -> 未完成
	describe('toggleTodo', () => {
	  const toggleTodo = actions.toggleTodo;

    // 1. 未完成 -> 已完成
		it('将 todo 待办事项完成状态由`未完成`标记为`已完成`', () => {
		  const state = {
			  todos: store.getState().todos
			};

			state.todos.map((todo, index) => {
			  const todoId = todo.id;
				const action = store.dispatch(toggleTodo(todo.id));
				const updatedState = {
				  todos: store.getState().todos
				};

				updatedState.todos.map(updatedTodo => {
				  expect(updatedTodo.completed).toBe(!state.todos[index].completed);
				});
			});
		});

		// 2. 已完成 -> 未完成
		it('将 todo 待办事项完成状态由`已完成`标记为`未完成`', () => {
			const state = {
			  todos: store.getState().todos
			};

		  state.todos.map((todo, index) => {
				const action = store.dispatch(toggleTodo(todo.id));
				const updatedState = {
				  todos: store.getState().todos
				};

			  updatedState.todos.map(updatedTodo => {
				  expect(updatedTodo.completed).toBe(!state.todos[index].completed);
				});
			});
		});
	});

	// 移除 todo 待办事项
	describe('removeTodo', () => {
	  const removeTodo = actions.removeTodo;

	  it('移除一个 todo 待办事项', () => {
		  const state = {
			  todos: store.getState().todos
			};

			state.todos.map((todo, index) => {
			  const action = store.dispatch(removeTodo(todo.id));
				const updatedState = {
				  todos: store.getState().todos
				};

				updatedState.todos.filter(updatedTodo => {
					expect(updatedTodo.id !== state.todos[index].index).toBe(true);
				});
			});
		});
	});
});
