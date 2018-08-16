import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions.js';

import './css/addTodo.css';

class AddTodoContainer extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.onChange = this.onChange.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			inputValue: '',
			buttonClass: 'normal'
		};
	}

	onChange() {
	  this.setState(this.context.store.getState());
	}

	onInputChange(event) {
		const inputValue = event.target.value;

		if (!inputValue.trim()) {
			this.setState({
				inputValue: '',
				buttonClass: 'normal'
			});
			return;
		}

		this.setState({
			inputValue: inputValue,
			buttonClass: 'active'
		});
	}

	onSubmit() {
	  const inputValue = this.state.inputValue;

		if (!inputValue.trim()) return;

		this.context.store.dispatch(actions.addTodo(inputValue));
		this.setState({inputValue: '', buttonClass: 'normal'});
	}

	componentDidMount() {
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
		return (
			<div className="add-todo">
			  <i className="icon"></i>
				<input 
					autoFocus
					type="text" 
					placeholder="添加待办事项" 
			    value={this.state.inputValue}
					onChange={this.onInputChange}
				/>
				<i className={'submit ' + this.state.buttonClass} onClick={this.onSubmit}></i>
			</div>
		);
	}
}

AddTodoContainer.contextTypes = {
  store: PropTypes.object
};

export default AddTodoContainer;
