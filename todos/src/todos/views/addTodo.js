import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addTodo} from '../actions.js';

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

	onSubmit() {
	  const inputValue = this.state.inputValue;

		if (!inputValue.trim()) return;

		this.props.onAdd(inputValue);
		this.setState({inputValue: ''});
	}

  render() {
	  return (
		  <div>
			  <input type="text" onChange={this.onInputChange} value={this.state.inputValue}/>
			  <button onClick={this.onSubmit}>添加</button>
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
