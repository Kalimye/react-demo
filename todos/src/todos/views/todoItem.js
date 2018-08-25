import React from 'react';
import PropTypes from 'prop-types';

import './todoItem.css';

class TodoItem extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.updateCheckboxState = this.updateCheckboxState.bind(this);
		this.state = {checked: false};
	}

	updateCheckboxState() {
	  if (this.state.checked) this.setState({checked: false});
		else this.setState({checked: true});
	}

  render() {
		if (!this.props.completed) {
			return (
				<div className="todo-item">
					<span className="checkbox no" onClick={this.props.onToggleTodo}></span>
					<span className="text">{this.props.text}</span>
					<span className="remove" onClick={this.props.onRemoveTodo}></span>
				</div>
			);
		}
	  return (
			<div className="todo-item">
				<span className="checkbox yes" onClick={this.props.onToggleTodo}></span>
				<span className="text">{this.props.text}</span>
				<span className="remove" onClick={this.props.onRemoveTodo}></span>
			</div>
		);
	}
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoItem;
