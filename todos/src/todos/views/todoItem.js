import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions.js';

import './css/todoItem.css';

class TodoItem extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onToggleTodo = this.onToggleTodo.bind(this);
		this.onRemoveTodo = this.onRemoveTodo.bind(this);
		this.updateCheckboxClass = this.updateCheckboxClass.bind(this);

		this.state = {
			...this.getOwnState(),
			checkboxClass: 'checkbox-no'
		};
	}

	getOwnState() {
	  return {
			todos: this.context.store.getState().todos
		};
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onToggleTodo(id) {
		this.context.store.dispatch(actions.toggleTodo(id));
	}

	onRemoveTodo(id) {
		this.context.store.dispatch(actions.removeTodo(id));
	}

	updateCheckboxClass(event) {
		const classes = event.target.classList;

		if (classes.contains('checkbox-no')) {
		  this.setState({checkboxClass: 'checkbox-yes'});
		}

		if (classes.contains('checkbox-yes')) {
		  this.setState({checkboxClass: 'checkbox-no'});
		}
	}

  render() {
	  return (
		  <div className="todo-item">
			  <span 
			    className={'checkbox ' + this.state.checkboxClass}
			    onClick={(event) => {
						this.props.onToggleTodo()
						this.updateCheckboxClass(event);  // 更新 checkbox 状态
					}}>
			  </span>
			  <span className="text">{this.props.text}</span>
			  <span className="trash" onClick={() => {this.props.onRemoveTodo()}}></span>
			</div>
		);
	}
}

TodoItem.contextTypes = {
  store: PropTypes.object
};

export default TodoItem;
