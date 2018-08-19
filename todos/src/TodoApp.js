import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';

const TodoApp = () => {
  return (
	  <div>
		  <Todos />
		  <Filter />
		</div>
	);
};

export default TodoApp
