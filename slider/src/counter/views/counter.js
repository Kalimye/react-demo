import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Counter extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return this.context.store.getState()
	}

	onIncrement() {
	  console.log('onIncrement');
	}

	onDecrement() {
	  console.log('onDecrement');
	}

  render() {
		console.log(this.state);
	  return (
		  <div className="counter">
			  <i className="button icon-add" onClick={this.onIncrement}></i>
			  <i className="button icon-reduce" onClick={this.onDecrement}></i>
			  <span>0</span>
			</div>
		);
	}
}

Counter.contextTypes = {
  store: PropTypes.object
};

export default Counter;
