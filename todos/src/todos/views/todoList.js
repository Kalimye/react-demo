import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem.js';

class TodoList extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.onChange = this.onChange.bind(this);
		this.getOwnState = this.getOwnState.bind(this);

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

	componentDidMount() {
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
		const todos = this.state.todos;
	  return (
		  <div>
			  <h2>TodoList Component</h2>
			  {
					todos.map(todoItem => {
					  return (
							<TodoItem 
							  key={todoItem.id}
							  id={todoItem.id}
							  text={todoItem.text}
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
