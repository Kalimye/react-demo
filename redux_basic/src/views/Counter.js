import React, {Component} from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../Actions.js';
import store from '../Store.js';
import './Counter.css';

class Counter extends Component {
	constructor(props) {
	  super(props);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return {
		  value: store.getState()[this.props.caption]
		};
	}

	onIncrement() {
		store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement() {
		store.dispatch(Actions.decrement(this.props.caption));
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextState, nextProps) {
		if (nextProps.value < 0) {
			alert('不能小于 0');
			this.onIncrement();
		  return false;
		}
		return this.state.value !== nextProps.value
	}

	componentDidMount() {
	  store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  store.unsubscribe(this.onChange);
	}
	
  render() {
		const value = this.state.value;
		const {caption} = this.props;

	  return (
		  <div className="Counter">
			  <button onClick={this.onIncrement}>+</button>
			  <button onClick={this.onDecrement}>-</button>
			  <span>{caption} count: {value}</span>
			</div>
		);
	}
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;
