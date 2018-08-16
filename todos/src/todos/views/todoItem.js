import React from 'react';

class TodoItem extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.onToggleTodo = this.onToggleTodo.bind(this);
		this.onRemoveTodo = this.onRemoveTodo.bind(this);
	}

	onToggleTodo(id) {
	  console.log(id);
	}

	onRemoveTodo(id) {
	  console.log(id);
	}

  render() {
	  return (
		  <div className="todo-item">
			  <span className="check" onClick={() => {this.onToggleTodo(this.props.id)}}>○ </span>
			  <span className="text">{this.props.text}</span>
			  <span className="delete" onClick={() => {this.onRemoveTodo(this.props.id)}}>× </span>
			</div>
		);
	}
}

export default TodoItem;
