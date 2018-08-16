import {
	ADD_TODO, TOGGLE_TODO, REMOVE_TODO, DELETE_TODO
} from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
	id: nextTodoId++,
	text: text,
	completed: false,
	deleted: false
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
	id: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
	id: id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
	id: id
});
