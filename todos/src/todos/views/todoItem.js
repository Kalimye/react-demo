import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions.js';

class TodoItem extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onToggleTodo = this.onToggleTodo.bind(this);
		this.onRemoveTodo = this.onRemoveTodo.bind(this);

		this.state = this.getOwnState();
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

	componentDidMount() {
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
		this.context.store.subscribe(this.onChange);
	}

  render() {
		console.log(this.context.store.getState().todos);
	  return (
		  <div className="todo-item">
			  <span className="check" onClick={() => {this.onToggleTodo(this.props.id)}}>○ </span>
			  <span className="text">{this.props.text}</span>
			  <span className="delete" onClick={() => {this.onRemoveTodo(this.props.id)}}>× </span>
			</div>
		);
	}
}

TodoItem.contextTypes = {
  store: PropTypes.object
};

export default TodoItem;
