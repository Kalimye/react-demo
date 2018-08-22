import React from 'react';
import PropTypes from 'prop-types';
import {increment, decrement} from '../actions.js';

import './style.css';

class Counter extends React.Component {
  constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return {
		  counter: this.context.store.getState().counter
		};
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onIncrement() {
		this.context.store.dispatch(increment(this.state.counter.init));
	}

	onDecrement() {
		this.context.store.dispatch(decrement(this.state.counter.init));
	}

	shouldComponentUpdate(nextState, nextProps) {
		return nextProps.counter.init !== this.state.counter.init;
	}

	// 这里有问题，组件卸载之后不能执行 setState() 操作，想办法解决
	// componentDidMount() {
	// 	this.context.store.subscribe(this.onChange);
	// }

	// componentWillUnmount() {
	//   console.log('will unmount');
	// }

	render() {
		console.log(this.state.counter);
	  return (
			<div className="counter">
			  <span className="button icon-add" onClick={this.onIncrement}></span>
			  <span className="button icon-reduce" onClick={this.onDecrement}></span>
			  <span>{this.state.counter.init}</span>
			</div>
		);
	}
}

Counter.contextTypes = {
  store: PropTypes.object
};

export default Counter;
