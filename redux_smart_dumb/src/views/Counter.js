import React, {Component} from 'react';
import PropTypes from 'prop-types';

import store from '../Store.js';
import * as Actions from '../Actions.js';

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

	onChange() {
	  this.setState(this.getOwnState());
	}

	onIncrement() {
		store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement() {
	  store.dispatch(Actions.decrement(this.props.caption));
	}

	shouldComponentUpdate(nextState, nextProps) {
		return this.state.value !== nextProps.value;
	}

	componentDidMount() {
	  store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  store.unsubscribe(this.onChange);
	}

  render() {
		const {value} = this.state;
		const {caption} = this.props;

	  return (
		  <div className="Counter">
			  <button onClick={this.onIncrement}>+</button>
			  <button onClick={this.onDecrement}>-</button>
			  <span>{caption} Count: {value}</span>
			</div>
		);
	}
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;
