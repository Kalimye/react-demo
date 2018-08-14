import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';
import TodoItem from './todoItem.js';

import './todoList.css';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
	return (
		<div className="todo-list">
		{
			todos.map(item => {
				return (
					<TodoItem 
						key={item.id}
						completed={item.completed}
						text={item.text}
						onToggleTodo={() => onToggleTodo(item.id)}
						onRemoveTodo={() => onRemoveTodo(item.id)}
					/>
				);
			})
		}
		</div>
	);
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	onToggleTodo: PropTypes.func.isRequired,
	onRemoveTodo: PropTypes.func.isRequired
};

const selectVisibleTodos = (todos, filter) => {
	switch(filter) {
	  case FilterTypes.All:
			return todos;
		case FilterTypes.COMPLETED:
			return  todos.filter(item => item.completed);
		case FilterTypes.UNCOMPLETED:
			return todos.filter(item => !item.completed);
		default:
			return todos;
	}
};

const mapStateToProps = state => {
  return {
	  todos: selectVisibleTodos(state.todos, state.filter)
	};
};

const mapDispatchToProps = dispatch => {
  return {
	  onToggleTodo: (id) => {
			dispatch(toggleTodo(id));
		},
		onRemoveTodo: (id) => {
			dispatch(removeTodo(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
