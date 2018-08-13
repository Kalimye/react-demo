import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';
import TodoItem from './todoItem.js';

class TodoList extends React.Component {
	constructor(props, context) {
	  super(props, context);
		console.log(props);
	}

  render() {
	  return (
		  <div>
			{
			  this.props.todos.map(item => {
					console.log(item);
					return (
						<TodoItem 
						  key={item.id}
						  text={item.text}
						  onToggleTodo={() => this.props.onToggleTodo(item.id)}
						  onRemoveTodo={() => this.props.onRemoveTodo(item.id)}
						/>
					);
				})
			}
			</div>
		);
	}
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
	switch(filter) {
	  case FilterTypes.All:
			return todos;
		case FilterTypes.COMPLETED:
			return  todos.filter(item => item.completed);
		case FilterTypes.UNCOMPLETED:
			return todos.filter(item => !item.uncompleted);
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
