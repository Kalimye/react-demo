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
		return this.context.store.getState()
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onIncrement() {
		this.context.store.dispatch(increment(this.props.caption));
	}

	onDecrement() {
		this.context.store.dispatch(decrement(this.props.caption));
	}

	shouldComponentUpdate(nextState, nextProps) {
		return this.state.counter[this.props.caption] !== nextProps.counter[this.props.caption];
	}

	// 这里有问题，组件卸载之后不能执行 setState() 操作，想办法解决
	componentDidMount() {
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
		this.context.store.subscribe(this.onChange);
	}

	render() {
		console.log(this.state.counter);
		console.log(this.props);
	  return (
			<div className="counter">
			  <span className="button icon-add" onClick={this.onIncrement}></span>
			  <span className="button icon-reduce" onClick={this.onDecrement}></span>
			  <span>{this.state.counter[this.props.caption]}</span>
			</div>
		);
	}
}

Counter.contextTypes = {
  store: PropTypes.object
};

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;
