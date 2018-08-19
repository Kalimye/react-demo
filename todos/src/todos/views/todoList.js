import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions.js';
import TodoItem from './todoItem.js';
import {FilterTypes} from '../../constants.js';

import './css/todoList.css';

class TodoList extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.onChange = this.onChange.bind(this);
		this.getOwnState = this.getOwnState.bind(this);
		this.onToggleTodo = this.onToggleTodo.bind(this);
		this.onRemoveTodo = this.onRemoveTodo.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
		const store = this.context.store.getState();

		switch(store.filter) {
		  case FilterTypes.UNCOMPLETED:
				return {
				  todos: store.todos.filter(item => !item.completed)
				};
			case FilterTypes.COMPLETED:
				return {
				  todos: store.todos.filter(item => item.completed)
				};
			case FilterTypes.ALL:
				return {todos: store.todos};
			case FilterTypes.DELETED:
				return {
				  todos: store.todos.filter(item => item.deleted)
				};
			default:
				throw new Error('unsupported filter');
		}
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onToggleTodo(id) {
	  this.context.store.dispatch(actions.toggleTodo(id));
	};

	onRemoveTodo(id) {
	  this.context.store.dispatch(actions.removeTodo(id));
	};

	componentDidMount() {
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
	  return (
		  <div className="todo-list">
			  {
					this.state.todos.map(todoItem => {
					  return (
							<TodoItem 
							  key={todoItem.id}
							  id={todoItem.id}
							  text={todoItem.text}
							  onToggleTodo={() => {this.onToggleTodo(todoItem.id)}}
							  onRemoveTodo={() => {this.onRemoveTodo(todoItem.id)}}
							/>
						);
					})
				}
			</div>
		);
	}
}

TodoList.contextTypes = {
  store: PropTypes.object
};

export default TodoList;
