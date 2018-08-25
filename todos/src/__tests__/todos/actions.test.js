import * as actions from '../../todos/actions.js';
import * as actionTypes from '../../todos/actionTypes.js';

describe('todo/actions', () => {
	const {addTodo, toggleTodo, removeTodo} = actions;

  describe('addTodo', () => {
		it('添加一个 todo 待办事项', () => {
		  const text = '一个 todo 待办事项';
			const action = addTodo(text);

			expect(action.text).toBe(text);
			expect(action.completed).toBe(false);
			expect(action.type).toBe(actionTypes.ADD_TODO);
		});

		it('添加的多个 todo 待办事项的 id 应唯一', () => {
		  const textFirst = '第一个 todo 待办事项';
			const textSecond = '第二个 todo 待办事项';

			const firstAction = addTodo(textFirst);
			const secondAction = addTodo(textSecond);

			expect(firstAction.id !== secondAction.id).toBe(true);
		});
	});

	describe('toggleTodo', () => {
	  it('将 todo 待办事项完成状态标记为`已完成`状态', () => {
		  const text = '标记状态为`已完成`';
			const addTodoAction = addTodo(text);
		  const toggleTodoAction = toggleTodo(addTodoAction.id);

			expect(toggleTodoAction).toEqual({
			  type: actionTypes.TOGGLE_TODO,
				id: addTodoAction.id
			});
		});

	  it('将 todo 待办事项完成状态标记为`未完成`状态', () => {
		  const text = '标记状态为`未完成`';
			const addTodoAction = addTodo(text);

			toggleTodo(addTodoAction.id);
		  const toggleTodoAction = toggleTodo(addTodoAction.id);

			expect(toggleTodoAction).toEqual({
			  type: actionTypes.TOGGLE_TODO,
				id: addTodoAction.id
			});
		});
	});

	describe('removeTodo', () => {
	  it('移除一个 todo 待办事项', () => {
		  const text = '移除一个 todo 待办事项';
			const addTodoAction = addTodo(text);
		  const removeTodoAction = removeTodo(addTodoAction.id);

			expect(removeTodoAction).toEqual({
			  type: actionTypes.REMOVE_TODO,
				id: addTodoAction.id
			});
		});
	});
});
