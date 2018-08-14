import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

function Todos() {
  return (
	  <div>
		  <TodoList />
		  <AddTodo />
		</div>
	);
}

export default Todos;
