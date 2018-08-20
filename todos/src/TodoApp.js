import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';
// import {view as Example} from './example/reactRouterDom/';

const TodoApp = () => {
  return (
	  <div>
		  <Todos />
		  <Filter />
		</div>
	);
};

export default TodoApp
