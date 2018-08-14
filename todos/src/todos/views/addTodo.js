import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addTodo} from '../actions.js';

import './addTodo.css';

class AddTodo extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {inputValue: ''};
	}

	onInputChange(event) {
	  this.setState({
		  inputValue: event.target.value
		});
	}

	onSubmit(event) {
	  const inputValue = this.state.inputValue;

		if (!inputValue.trim()) return;

		this.props.onAdd(inputValue);
		this.setState({inputValue: ''});
	}

  render() {
		if (this.state.inputValue.trim() === '') {
			return (
				<div className='add-todo'>
				  <i className="circle"></i>
					<input 
						type="text"
						placeholder="添加待办事项"
						autoFocus
						onChange={this.onInputChange}
						value={this.state.inputValue}
					/>
					<i className="submit normal" onClick={this.onSubmit}></i>
				</div>
			);
		}

		return (
			<div className='add-todo'>
			  <i className="circle"></i>
				<input 
					type="text"
					placeholder="输入代办事项"
					autoFocus
					onChange={this.onInputChange}
					value={this.state.inputValue}
				/>
				<i className="submit active" onClick={this.onSubmit}></i>
			</div>
		);
	}
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
	 onAdd: (text) => {
		 dispatch(addTodo(text));
	 }
	};
};

export default connect(null, mapDispatchToProps)(AddTodo);
